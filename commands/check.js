/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/JoinChannel")
User.addToGroup("user")
}

if (user=="left"){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ You Must Join Our Group @MetaAirdrops",
  show_alert: true // or false - for alert on top
})
}
