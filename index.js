const TelegramBot = require('node-telegram-bot-api');
require("dotenv").load();
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Matches "/echo [whatever]"
bot.onText(/\/info/, (msg, match) => {
    const chatId = msg.chat.id;

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, '¿Acerca de qué quieres que te informe?', {
            reply_markup: {
                keyboard: [['Hablame del programa'], ['dime cotilleos']]
            }
        }
    );
});
bot.onText(/\/Hablame del programa/, (msg, match) => {
    const chatId = msg.chat.id;

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, 'estoy siendo programado y no me pispo mucho');

});

bot.onText(/\/dime cotilleos/, (msg, match) => {
    const chatId = msg.chat.id;

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, 'estoy siendo programado y no me pispo mucho');

});

// Matches "/echo [whatever]"
bot.onText(/\/nueva_propuesta_para_programa/, (msg, match) => {
    const chatId = msg.chat.id;

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, 'ok te escucho');

});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    //bot.sendMessage(chatId, 'Received your message');
});