const { Configuration, OpenAIApi } = require("openai");
const APIKEY = require("../config/settings");

const configuration = new Configuration({
  apiKey: APIKEY.openai,
});
const OpenAi = new OpenAIApi(configuration);

module.exports = OpenAi;
