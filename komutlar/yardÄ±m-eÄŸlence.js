const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#1e90ff')
      .setTitle('Airfax')
      .setURL('https://discord.gg/h7BGxKARgU')
      .setAuthor('AirBot', client.user.avatarURL(),)
      .setThumbnail(client.user.avatarURL())
        .addField(".yaz", " İstediğiniz şeyi bota yazdırır!")
        .addField(".kaçcm", ":D? Malafatını Gösterir!", )
        .addField(".adam-asmaca", "Adam Asmaca Oynarsınız!")
        .addField(".gay", "Birisiyle Duello Atarsın!")
        .addField(".trump", "Trump Tweet Atar!")
        .addField(".yazı-tura", "Yazı mı Tura mı?!")
        .addField(".öp", "Birini Öpersin!")
        .addField(".yılbaşı", "Yılbaşı Sayacı!")
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
  name: 'eğlence'
}