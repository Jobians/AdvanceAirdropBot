/*CMD
  command: check3
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
Bot.runCommand("/set_adress")
User.addToGroup("user")
}
if (user=="left"){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Please Join Our Advertiser  Channel To Receive The Additional Reward Or Skip it",
  show_alert: true // or false - for alert on top
})
}

