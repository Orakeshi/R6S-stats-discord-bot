require('dotenv').config();

const Discord = require ('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("hello");
}

const commandHandler = require('./commands');

client.on('message', commandHandler);

