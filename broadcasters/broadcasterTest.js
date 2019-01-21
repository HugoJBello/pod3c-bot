const ChatDao = require('../ChatDAO');

module.exports = (bot) => {
        const resp = "hi from broadcaster";
        const chatDao = new ChatDao();
         chatDao.getAllChatIds().then((chatsId)=>{
                 if(chatsId){
                         setInterval(async () => {
                                 for (const chatId of chatsId){
                                         if(chatId) bot.sendMessage(chatId, resp);
                                 }
                         }, 1);
                 }

        });
}