const TelegramBot = require('node-telegram-bot-api');
require("dotenv").load();
const botResponses = require('./botResponses');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
botResponses(bot);