const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**404!!! Orada dur bakalım. /Rolleri Yönet/ Yetkisine Sahip Olman Gerek.**")
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if(!rol) {
const salvo2 = new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}otorol @rol #kanal**`)
  .setColor("BLACK")
  .setFooter("Airfax Mod ❤")
return message.channel.send(salvo2)
};
if(!kanal) {
const salvo3 = new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}otorol @rol #kanal**`)
  .setColor("BLACK")
  .setFooter("Airfax Mod ❤")
return message.channel.send(salvo3)
};
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
const salvo = new Discord.MessageEmbed()
.setColor('BLACK')
.setDescription(`Otorol Rol Sistemi Başarılı Bir Şekilde Oluşturuldu`)
.addField("Ayarlanan",`> **Oto Rol:** **<@&${rol.name}>**
> **Oto Rol Kanal:** \`<#${kanal.id}>\`

\`Not:\` Botun Rolünü Bütün Rollerden Üstte Tutun Aksi Takdirde Rol Vermeyecektir`)
.setFooter("Airfax Mod ❤")
message.channel.send(salvo)
};
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oto-rol','otorol'],
  permLevel: 0
};

exports.help = {
  permissions: 'MANAGE_ROLES',
  name: 'otorol',
  description: 'Sunucuya Katılan Kullanıya Rol Verir',
  usage: 'otorol'
}; 