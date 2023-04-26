const chatRequest = require("./handler");
const userPrompt = require("../data/prompt");
const fs = require("fs").promises;

const saveChat = async () => {
  const { status, dataToken, response } = await chatRequest(userPrompt);
  
  console.info(JSON.stringify({ status, dataToken }, null, 2));
  
  const userChats = [...userPrompt, { role: "assistant", content: response.content }];
  
  await fs.writeFile("./data/chat.json", JSON.stringify(userChats, null, 2));
  await fs.writeFile(`./data/chat-response-${userChats.length - 1}.txt`, response.content);
  
  console.info("chat has been saved!");
};

module.exports = saveChat;
