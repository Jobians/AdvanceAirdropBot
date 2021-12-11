/*CMD
  command: /b4register
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Follow On Twitter", url: "https://www.twitter.com/jobians1"},
    {title: "Done", command: "/register" }
];

Bot.sendInlineKeyboard(buttons, "🔘Now, please follow our twitter page and Retweet pinned post.");
