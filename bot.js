const prefix = "1";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Bot - Script By : PrinceCrafter `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers ' Script By : PrinceCrafter Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`DiDo Bc.`, {type:'WATCHING'});
});

client.on("message", message => {
    var prefix = "1";
 if (message.content === "1help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
      
                    BroadCast Commands
BroadCast Help:
              
1bc ⇏ خاصية البرودكاست
1obc ⇏ ارسال برودكسات للونلاين بدون منشن
1nbc ⇏ ارسال برودكسات للوفلاين فقط
`)
   message.channel.sendEmbed(embed)
    
   }
}); 

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "nbc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.login(process.env.TOKEN);
