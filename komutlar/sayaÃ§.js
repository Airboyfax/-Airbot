 const discord = require ('discord.js');
const db = require ('quick.db');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("**404!!! Orada dur bakalım. 'Sunucuyu Yönet' Yetkisine Sahip Olman Gerek.**")
  let kanal = message.mentions.channels.first()
  const hedef = args[1]
  
  if(!kanal) return message.channel.send('Lütfen Bir Kanal Etiketleyin! **ÖRNEK**= `.sayaç #kanal Hedef`')
  if(!hedef) return message.channel.send('Lütfen Bir Hedef Giriniz! **ÖRNEK** `.sayaç #kanal Hedef`')
  if(isNaN(hedef)) return message.channel.send('Lütfen Bir Hedef Giriniz! **ÖRNEK** `.sayaç #kanal Hedef`')
  if(message.guild.memberCount > hedef) return message.channel.send('Hedefiniz Sunucu Sayısından Küçük Olamaz')
  
  db.set(`skanal_${message.guild.id}`, kanal.id)
  db.set(`hedef_${message.guild.id}`, hedef)
  
  message.channel.send(`Kanal ${kanal} Olarak Ayarlandı Kişi İse ${hedef} Olarak Ayarlandı`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
 exports.help = {
   name: 'sayaç',
   permission: 'MANAGE_GUILD',
   desscription: '',
   usage: 'sayaç'
 };