/*CMD
  command: /ans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userAns = params



if(request.data){

var message_id = request.message.message_id

var chat_id = request.message.chat.id



Api.deleteMessage({

chat_id : chat_id,

message_id : message_id

})



}



if(!params){

return 

}else{

let ans = User.getProperty('userAns')



if(userAns==ans){

Api.answerCallbackQuery({

 callback_query_id: request.id,

 text: "✔️ Verified",

 show_alert: true

})



Bot.sendMessage('👍 Great, You are Verified')

Bot.runCommand("/airdropmenu")

}else{

Api.answerCallbackQuery({

 callback_query_id: request.id, 

 text: "❌ Thats Wrong",

 show_alert: true

})







var button = [[{ title: "🔄 Try Again ", command: "/start" }]]

Bot.sendInlineKeyboard(button,"🆘 You Are Not Verified, You Selected Wrong Emoji Try again")

if (request.data){

Api.deleteMessage({

chat_id:request.message.chatid,

message_id:request.message.message_id})

}

}

}
