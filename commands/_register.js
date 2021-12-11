/*CMD
  command: /register
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Now enter your twitter username with '@'.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("name", data.message, "string"); 
Bot.runCommand('/joinadschannel');
