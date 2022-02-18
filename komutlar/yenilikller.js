const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#1e90ff')
      .setTitle('Airfax')
      .setURL('https://discord.gg/h7BGxKARgU')
      .setAuthor('AirBot', client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())
        .addField(".abone-yardım", " Abone Yardım Menüsü(Abone sistemini ayarlıya bilirisiniz...)!")
        .addField(".geçiciodakur", "Özel Oda Sistemini Kurar!", )
        .addField(".geçiciodasil", "Özel Oda Sistemini Siler!")
        .addField(".yardım", "Yeni Yardım Menüsü Yenilendi!")
        .addField(".giriş-çıkış-ayarla", "Resimli Giriş Çıkışı Ayarlar!")
        .addField(".giriş-çıkış-sıfırla", "Resimli Giriş Çıkışı Sıfırlar")
        .addField(".sunucukur", "Sunucu Kurmak İçin Yardım Menüsünü Gösterir!")
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
  name: 'yenilikler'
}