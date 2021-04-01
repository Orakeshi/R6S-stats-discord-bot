//const fetch = require ("node-fetch");
const kills = require("./commands/kills.js");
const deaths = require("./commands/deaths.js");
const overview = require("./commands/overview.js");

const commands = { kills, deaths, overview };

module.exports = async function (msg) {
    if(msg.channel.id == "293833885270409216" || msg.channel.id == "827125983173672961"){
    let tokens = msg.content.split(" ");
    let command = tokens.shift();

    if(command.substring(0) === "*r6") {
        command = tokens[1];
        commands[command](msg, tokens);
    }
        //msg.reply("Very Nice");
    }


    

}; 