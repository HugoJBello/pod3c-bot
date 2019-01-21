const User = require("./models/User");
module.exports = class ChatDAO {
    constructor() {
    }

    recordUserChat(chatId, userName){
        const data = {_id: chatId, chatId:chatId, userName:userName};
        User.update({chatId: "" + chatId}, data, {upsert: true}, (err) => {console.log(err);});
    }
    getAllChatIds(){
        return new Promise ((resolve,reject) => {
            User.find({}).exec( (err, data) => {
                if (err) reject(err);
                const filtered = data.map(result => result.chatId);
                resolve(filtered);
            });
        })
    }


}