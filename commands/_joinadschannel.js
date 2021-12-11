/*CMD
  command: /joinadschannel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Go to Google", command: "join3adschannel"},
    {title: "Call command for Button2", command: "/starht" }
];

Bot.sendInlineKeyboard(buttons, "🔘Please join our [Advertiser channel] @MetaBotsCollections, and Press Done or Skip button. (Optional + 5,000 VMA)");
