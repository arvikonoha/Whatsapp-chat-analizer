import React, { useReducer } from "react";
import { messageReducer } from "./messageReducer";
import MessageContext from "./MessagesContext";
import { analyzeChatFile } from "./utils/ChatUtil";
import Fuse from "fuse.js";
import {
  CHANGE_FILE,
  CHANGE_QUERY,
  CHANGE_QUERY_GROUP,
  DELETE_FILE,
} from "./messageActionTypes";
import moment from "moment";

let initialState = {
  messages: [],
  results: [],
  file: null,
  query: {
    group: "All",
    has: "",
  },
  members: [],
};

function MessagesState(props) {
  let [state, dispatch] = useReducer(messageReducer, initialState);

  function findResults(messages, text) {
    let fuse = new Fuse(messages, {
      keys: ["body"],
    });
    if (text) return fuse.search(text).map((message) => message.item);
    else return messages.filter((message) => message.type === "message");
  }

  function groupResolver(messages, group) {
    return messages.filter((message) => {
      switch (group) {
        case "Today":
          return moment(message.createdAtDate, "MM-DD-YY").isSame(moment());
        case "This week":
          return (
            moment().diff(moment(message.createdAtDate, "MM-DD-YY"), "days") < 7
          );
        case "This month":
          return (
            moment(message.createdAtDate, "MM-DD-YY").month() ===
            moment().month()
          );
        default:
          return message;
      }
    });
  }

  function fileUpload(file) {
    analyzeChatFile(file)
      .then(({ messages, members }) =>
        dispatch({
          type: CHANGE_FILE,
          payload: {
            messages,
            members,
            results: groupResolver(
              findResults(messages, state.query.has),
              state.query.group
            ),
            file,
          },
        })
      )
      .catch((error) => console.log(error));
  }

  function textQuery(text) {
    dispatch({
      type: CHANGE_QUERY,
      payload: {
        results: groupResolver(
          findResults(state.messages, text),
          state.query.group
        ),
        query: { ...state.query, has: text },
      },
    });
  }

  function changeGroup(group) {
    dispatch({
      type: CHANGE_QUERY_GROUP,
      payload: {
        results: groupResolver(
          findResults(state.messages, state.query.has),
          group
        ),
        query: { ...state.query, group },
      },
    });
  }

  function deleteFile() {
    dispatch({ type: DELETE_FILE });
  }

  return (
    <MessageContext.Provider
      value={{
        ...state,
        dispatch,
        fileUpload,
        textQuery,
        changeGroup,
        deleteFile,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessagesState;
