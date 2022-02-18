const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#1e90ff')
      .setTitle('Airfax')
      .setURL('https://discord.gg/h7BGxKARgU')
      .setAuthor('AirBot', client.user.avatarURL(),)
      .setThumbnail(client.user.avatarURL())
        .addField(".mute", "Belirlediğiniz Üyeyi Mesajlardan Susturur!")
        .addField(".rol", "Rol Verip Alır!", )
        .addField(".sil", "Mesajları siler!", )
        .addField(".sohbet-aç", "Sohbeti Açar!")
        .addField(".sohbet-kapat", "Sohbeti Kapatır!")
        .addField(".ban", "Kişiyi Sunucudan Banlar!")
        .addField(".bansay", "Sunucuda Kaç Üye Banlı Olduğunu Gösterir")
        .addField(".unban", "Kişinin Banını Kaldırır!")
        .addField(".kick", "Kişiyi Sunucudan Atar!")
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
  name: 'yetkili'
}