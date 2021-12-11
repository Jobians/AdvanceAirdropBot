/*CMD
  command: /confirm_contacth
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
<name>, *all correct?*

👍 *YES* -  /yes

❌ *NO* - /no 
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(data.message=="/yes"){
   Bot.sendMessage("Thank you! ")
}else{
  Bot.sendMessage("Change data /change");
}
