const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const app = express();

app.get('/', (req, res) => {
    res.send('this is a bot go somewhere else');
})

setInterval(() => {
    http.get('http://yakbot.herokuapp.com');
}, 300000);

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is listening on port ${process.env.PORT || 3000}`);
})

client.on('ready', () => {
  console.log("Bot started!"); 
});

client.on('message', msg => {
  const [yak, command, parameter] = msg.content.split(' ');
  if (yak === 'yak') {
    switch (command) {
        case 'search':
            switch (parameter) {
                case 'google':
                    const [bleh, searchParameters] = msg.content.split('"');
                    msg.reply(`https://google.com/search?q=${searchParameters.replace(' ', '+')}`);
                    break;
                
                case 'youtube':
                    const [bleh, searchParameters] = msg.content.split('"');
                    msg.reply(`https://google.com/results?search_query=${searchParameters.replace(' ', '+')}`);

                default:
                    msg.reply('please provide the search enigine you wish to use. available google and youtube');
                    break;
            }
            break;
    
        default:
            msg.reply('your command was unknown, please message "yak help" for a list of all available commands');
            break;
    }
  }
});

client.login(process.env.BOT_TOKEN);
