const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#1e90ff')
      .setTitle('Airfax')
      .setURL('https://discord.gg/h7BGxKARgU')
      .setAuthor('AirBot', client.user.avatarURL(),)
      .setThumbnail(client.user.avatarURL())
        .addField(".afk", "AFK Olunca Seni Etiketleyen Kişiye Sebebini Yazar!")
        .addField(".kullanıcı-bilgi", "Etiketlediğiniz Kişi ile ilgili Bilgi Alırsınız!", )
        .addField(".say", "Sunucuda Kaç Kişi Olduğunu Öğrenirsin!", )
        .addField(".ping", "Botun Gecikmesini Öğrenirsin!")
        .addField(".toplam-komut", "Kaç Komut Olduğunu Gösterir!")
        .addField(".söyle", "Yazdığın Sözleri Ses Kanalında Söyler!")
        .addField(".yetkilerim", "Sunucudaki Yetkilerini Gösterir!")
        .addField(".avatar", "Avatarını Gösterir!")
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
  name: 'kullanıcı'
}