const R6API = require('r6api.js');
require('dotenv').config();
const r6api = new R6API(process.env.R6APIEMAIL, process.env.R6APIPASSWORD);

module.exports = async function (msg, args){
    const username = args[0],
      platform = 'uplay';


    const id = await r6api.getId(platform, username).then(el => el[0].id);
    const stats = await r6api.getStats(platform, id).then(el => el[0]);
    
    msg.channel.send(`${username} has killed ${stats.pvp.general.kills} players.`)
    
    //console.log(`${username} has killed ${stats.pvp.general.kills} players.`);
};