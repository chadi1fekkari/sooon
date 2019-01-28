const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag} !`);

 

});

 

var prefix = "-";

client.on('message', message => {

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.split(' ').slice(1);

  var argresult = args.join(' ');

  if (message.author.id !== '501428682783457280') return;

if (message.content.startsWith(prefix + 'wt')) {

client.user.setActivity(argresult, {type:'WATCHING'});

    message.channel.sendMessage(`**✅  : ${argresult}**`)

} else 

if (message.content.startsWith(prefix + 'ls')) {

client.user.setActivity(argresult, {type:'LISTENING'});

    message.channel.sendMessage(`**✅  : ${argresult}**`)

} else 

if (message.content.startsWith(prefix + 'st')) {

  client.user.setGame(argresult, "https://www.twitch.tv/amira");

    message.channel.sendMessage(`**✅  : ${argresult}**`)

}

});

client.on('message', message => {

if(message.content.startsWith('c')) {

if(message.author.id !== '501428682783457280') return;

var args = message.content.split(' ').slice(1).join(' ');

message.channel.send(args);

}

});

client.on('message', message => {

if(message.content.startsWith('c')) {

if(message.author.id !== '501428682783457280') return;

var args = message.content.split(' ').slice(1).join(' ');

message.channel.send(args);

}

});

client.login(process.env.BOT_TOKEN);
