const Discord = require("discord.js");
const config = require("./config.json");
let command = config.command
let roleid = config.roleid
const bot = new Discord.Client();


bot.on("ready", () => {
   
console.log("I'm online (:")
})


bot.on("message", async message => {

if(message.content !== command) return;

   function rainbow() {
 let color = Math.floor(Math.random() * 16777214) + 1    
 let role = message.guild.roles.find(`id`, roleid)
role.edit({color: color  })    
    };
  
 setInterval(() => { rainbow(); }, 1000)
  
})

bot.login(config.token)