const OpenAi = require ("./openai")

/**
 *
 * @param { [ { role: "user", content: userPrompt }, { role: "assistant", content: openAIResponse } ] } dataChat
 */
const chatRequest = async (dataChat) => {
  const Response = await OpenAi.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: dataChat,
  });
  return {
    status: Response.status,
    dataToken: Response.data.usage,
    response: Response.data.choices[0].message,
  };
};

module.exports = chatRequest
