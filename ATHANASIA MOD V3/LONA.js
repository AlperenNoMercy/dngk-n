const { Client } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const client = new Client({ disableMentions: "everyone", ignoreDirect: true, ignoreRoles: true });
const cfg = require("./config.json");

client.commands = new Map();
client.aliases = new Map();
client.cezalilar = new Set();
client.cmuteliler = new Set();
client.locked = new Set();
global.client = client;
client.login (process.config.qwe)

require("./beko/functions.js")(client, cfg);
require("./beko/load.js")(fs, client);
require("./beko/commandHandler.js")(fs, client);
require("./beko/login.js")(client, cfg);

// GİRİŞ 
client.on("guildMemberAdd", member => { 
    const moment = require('moment');
    const kanal = ayarlar.giriskanal;
    let user = client.users.get(member.id);
    require("moment-duration-format");
    const tarih = new Date().getTime() - user.createdAt.getTime();  
    const embed = new Discord.RichEmbed()
    let rol = ayarlar.kayıtsızROL
    member.addRole(rol)
  
    var kontrol;
    if (tarih < 1296000000) kontrol = '**Bu Kullanıcı Şüpheli** :x:'
    if (tarih > 1296000000) kontrol = '**Bu Kullanıcı Güvenli** :white_check_mark:'
    moment.locale("tr");
    let kanal1 = client.channels.get(kanal);
    let giris = new Discord.RichEmbed()
    
    .setTitle(`ATHANASIA'ya Hoşgeldin !`)
    .setColor(`#899dff`)
    .setDescription(`
    \nㄓ ・**__Sunucumuza Hoşgeldin! ${member}__ **
  
    ㄓ ・**Seninle Birlikte ${member.guild.memberCount} Kişiyiz.**
  
    ㄓ ・\`(${ayarlar.tag}) \`** Tagımızı alarak ailemize katılabilirsin.**
  
    ㄓ ・**Yetkililer seninle ilgilenicektir.**
  
    ㄓ ・**Hesabın Oluşturulma Tarihi:** \` ${moment(member.user.createdAt).format("YYYY DD MMMM dddd")} \`
   
    ㄓ ・${kontrol} 
  
    ㄓ ・**Ses teyit odasında kaydınızı yaptırabilirsiniz.** 
  
    `)
    .setImage('https://cdn.discordapp.com/attachments/596064429301563412/789560915825000469/giphy.gif')
    kanal1.send(giris)
    kanal1.send('<@&790515411354386452>').then(x => x.delete({timeout: 5000}))
  
    });
    // GİRİŞ SON

    // kayıtsız rolü

client.on(`guildMemberAdd`, async member => {
    let unregister = ayarlar.unregister;
  if(member.bot) return;
  member.addRole(unregister)
  })
  
  /// kayıtsız rolü son
  