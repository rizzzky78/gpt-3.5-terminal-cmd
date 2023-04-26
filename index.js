const saveChat = require("./libs/save");
console.info("connecting...");

saveChat().catch((e) => {
  throw Error(e);
});
