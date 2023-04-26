const chatRequest = require("./handler");
const userPrompt = require("../data/prompt");

const fs = require("fs");

const saveChat = async () => {
  await chatRequest(userPrompt).then(
    async ({ status, dataToken, response }) => {
      const stats = { status, dataToken };
      console.info(JSON.stringify(stats, null, 2));

      const userChats = [];
      userChats.push(...userPrompt);
      userChats.push({ role: "assistant", content: response.content });

      fs.writeFileSync("./data/chat.json", JSON.stringify(userChats, null, 2));
      fs.writeFileSync(
        `./data/chat-response-${userChats.length - 1}.txt`,
        response.content
      );
      console.info("chat has been saved!");
    }
  );
};

module.exports = saveChat;
