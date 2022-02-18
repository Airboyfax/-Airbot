const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#1e90ff')
      .setTitle('Airfax')
      .setURL('https://discord.gg/h7BGxKARgU')
      .setAuthor('AirBot', client.user.avatarURL(),)
        .addField(".küfür-engel", "Küfürlü mesajları siler!", )
        .addField(".link-engel", "Reklam Mesajlarını Siler!", )
        .addField(".otorol", "Otomotik Rol Verir!", )
        .addField(".sayaç", "Sayacı ayarlarsınız!", )
        .addField(".mod-log", "Log Kanalını Ayarlarsınız!", )
        .addField(".giriş-çıkış-ayarla", "Resimli Giriş Çıkışı Kanalını Ayarlarsınız!", )
        .addField(".güvenlik-log", "Güvenlik Kanalını Ayarlarsınız!", )
        .addField(".sa-as", "Sa-as Sistemini Ayarlar!")
        .setTimestamp()
        .setFooter('AirBot', client.user.avatarURL())
  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ayarlamalı'
}