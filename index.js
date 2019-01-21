const TelegramBot = require('node-telegram-bot-api');
require("dotenv").load();

const mongoose = require('mongoose');
mongoUrl = process.env['MONGODB_URL']
mongoose.connect(mongoUrl, { promiseLibrary: require('bluebird') })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));


// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API_TOKEN;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const botResponses = require('./botResponses');
botResponses(bot);

const botBroadcasters = require('./broadcasters');
botBroadcasters(bot);