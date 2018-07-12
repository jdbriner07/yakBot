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

client.login('NDY2NzgxNDY2MDg5NjE5NDg4.DihD_A.piztPAcylHa7Joz9tciMBUnW2gE');
