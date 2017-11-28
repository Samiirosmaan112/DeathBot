const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'dPing') {
    	message.reply('Pong');
  	}
});

client.on('message', message => {
    if (message.content === 'ding') {
    	message.reply('Bong');
  	}
});

client.on('message', message => {
    if (message.content === 'dHelp') {
    	message.reply('There is no help's yet');

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
