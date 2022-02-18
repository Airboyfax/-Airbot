const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setAuthor(`AirBot Yardım Menüsü`, client.user.avatarURL())
.setColor('RANDOM')
.setDescription(`Botumuzun İstatistiklerini görmek için \`${prefix}istatistik\` yazınız`)
.addField(`__Ayarlamalı Komutlar__`, `${client.emojis.cache.get("943508592219267133")}\`${prefix}ayarlamalı\``,true)
.addField(`__Yetkili Komutları__`,`${client.emojis.cache.get("941699980257812520")} \`${prefix}yetkili\` `,true)
.addField(`__Kullanıcı Komutları__`,`${client.emojis.cache.get("943509681580703778")} \`${prefix}kullanıcı\`  `,true)
.addField(`__Sunucukur Komutları__`,`${client.emojis.cache.get("936362791059726428")} \`${prefix}sunucukur\` `,true)
.addField(`__Eğlence Komutları__`,`${client.emojis.cache.get("943506693600460811")} \`${prefix}eğlence\`  `,true)
.addField(`__Güvenlik Komutları__`,`${client.emojis.cache.get("943513228649066536")} \`${prefix}güvenlik\`  `,true)
.addField(`__Abone Komutları__`,`${client.emojis.cache.get("943512578074763294")} \`${prefix}abone-sistemi\` `,true)
.addField(`__Ekonomi Komutları__`,`${client.emojis.cache.get("943511210966544434")} \`${prefix}ekonomi\` `,true)
.addField(`__Müzik Komutları__`,`${client.emojis.cache.get("943513843441733642")} \`${prefix}müzik\` `,true)
.addField(`__Bilgilendirme__`,`...`)
  .setImage(`https://cdn.discordapp.com/attachments/942521892584189962/943244669721149482/gif.gif`)
 message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yardım","help"],
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  };