const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Bot started!"); 
});

client.on('message', msg => {
  if (msg.content == 'Is JavaScript good?') {
    msg.reply('Yeah!'); //or msg.channel.send('Yeah!')
  }
});

client.login(process.env.BOT_TOKEN);
