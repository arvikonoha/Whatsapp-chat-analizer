export const CAPTURE_WHATSAPP_MESSAGE = new RegExp(
  /\d{1,2}\/\d{1,2}\/\d{2}, .*:.* -* .* [\s\S]*?(?=\d{1,2}\/\d{1,2}\/\d{2}, )/g
);
export const CAPTURE_CHAT_CREATION_DATE = new RegExp(
  /^\d{1,2}\/\d{1,2}\/\d{2}/
);
export const CAPTURE_CHAT_CREATION_TIME = new RegExp(
  /^\d{1,2}\/\d{1,2}\/\d{2}, (\d{1,2}:\d{1,2} [APM]{2})/
);
export const CAPTURE_CHAT_AUTHOR = new RegExp(
  /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{1,2} [APM]{2} - (.*?(?=: ))/
);
export const CAPTURE_GRP_CREATOR = new RegExp(
  /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{1,2} [APM]{2} - (.*?(?= created group ))/
);
export const CAPTURE_GRP_MEMBER = new RegExp(
  /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{1,2} [APM]{2} - (.*?(?= joined ))/
);
export const CAPTURE_CHAT_BODY = new RegExp(
  /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{1,2} [APM]{2} - .*?(?=: ): ([\s\S]*)/
);
