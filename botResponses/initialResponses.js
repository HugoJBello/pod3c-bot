const ChatDao = require('../ChatDAO');
module.exports = (bot) => {
    const chatDao = new ChatDao();
   // Matches "/echo [whatever]"
    bot.onText(/\/info/, (msg, match) => {
        const chatId = msg.chat.id;

        // send back the matched "whatever" to the chat
        bot.sendMessage(chatId, '¿Acerca de qué quieres que te informe?', {
                reply_markup: {
                    keyboard: [['Hablame del programa'], ['dime cotilleos']]
                }
            });
        chatDao.recordUserChat(chatId, "");
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
}