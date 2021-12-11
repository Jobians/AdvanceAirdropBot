/*CMD
  command: /Keyboard2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "Call command for Button2", command: "/Captcha" }
];

Bot.sendInlineKeyboard(buttons, "Please make a choice. After that, another command `/touch` will be started with parameters");
