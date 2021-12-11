/*CMD
  command: /confirm_contact
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Yes", command: "/yes"},
    {title: "No", command: "/no" }
];

if(data.message=="/yes"){
   Bot.sendMessage("Thank you! ")
}else{
  Bot.sendMessage("Change data /change");
}

Bot.sendInlineKeyboard(buttons, "<name>, *all correct?*");

