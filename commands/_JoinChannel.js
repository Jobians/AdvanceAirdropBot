/*CMD
  command: /JoinChannel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Join Channel", url: "https://t.me/MetaAirdrops"},
    {title: "Done", command: "join2" }
];

Bot.sendInlineKeyboard(buttons, "🔘Please Join Our [Channel](https://t.VLC_Global) To View Information About This Project.");
