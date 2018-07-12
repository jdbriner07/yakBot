const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client();

const app = express();

app.get('/', (req, res) => {
    res.send('this is a bot go somewhere else');
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is listening on port ${process.env.PORT || 3000}`);
})

client.on('ready', () => {
  console.log("Bot started!"); 
});

client.on('message', msg => {
  if (msg.content == 'Is JavaScript good?') {
    msg.reply('Yeah!'); //or msg.channel.send('Yeah!')
  }
});

client.login(process.env.BOT_TOKEN);
