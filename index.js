const saveChat = require("./libs/save");
console.info("connecting...");

saveChat()
  .then(() => {
    console.info("Chats has been saved!")
  })
  .catch((e) => 
  throw Error(e)       
  })
