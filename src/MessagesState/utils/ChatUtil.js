import {
  CAPTURE_GRP_MEMBER,
  CAPTURE_GRP_CREATOR,
  CAPTURE_CHAT_BODY,
  CAPTURE_CHAT_CREATION_DATE,
  CAPTURE_CHAT_CREATION_TIME,
  CAPTURE_CHAT_AUTHOR,
  CAPTURE_WHATSAPP_MESSAGE,
} from "../../utils/regex";

function extractChatDetails(message) {
  let details = {};
  details.createdAtDate = message.match(CAPTURE_CHAT_CREATION_DATE)[0];

  details.createdAtTime = message.match(CAPTURE_CHAT_CREATION_TIME)[1];
  let authorQuery = message.match(CAPTURE_CHAT_AUTHOR);
  if (authorQuery) {
    details.type = "message";
    details.author = authorQuery[authorQuery.length - 1];
    let bodyQuery = message.match(CAPTURE_CHAT_BODY);
    details.body = bodyQuery[bodyQuery.length - 1];
  } else {
    details.type = "status";
    if (message.includes(" created group ")) {
      let createdQuery = message.match(CAPTURE_GRP_CREATOR);
      details.groupCreator = createdQuery[createdQuery.length - 1];
    } else {
      let joinedQuery = message.match(CAPTURE_GRP_MEMBER);
      if (joinedQuery) {
        details.member = joinedQuery[joinedQuery.length - 1];
      }
    }
  }
  return details;
}

function extractMembers(result, current) {
  if (current.groupCreator || current.member)
    result.push(current.groupCreator || current.member);
  return result;
}

async function extractMessages(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new window.FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.addEventListener("load", (event) => {
      let messages = event.target.result.match(CAPTURE_WHATSAPP_MESSAGE);
      resolve(messages);
    });
    fileReader.addEventListener("error", (error) => {
      console.log(error);
      reject(error);
    });
  });
}

export async function analyzeChatFile(file) {
  let messages = await extractMessages(file);
  messages = messages.map((message) => extractChatDetails(message));
  let members = messages.reduce(extractMembers, []);
  return { messages, members };
}
