const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm selam kardom hoşgeldin <3');
  }
});

client.login('ODUyMTI5MzU4NDE5MzI5MDM1.YMCVTg.TU-YC9mU6W5UmNJctCrw2FNxxEo');