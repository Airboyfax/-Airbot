const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#1e90ff')
      .setTitle('Airfax')
      .setURL('https://discord.gg/h7BGxKARgU')
      .setAuthor('AirBot', client.user.avatarURL(),)
      .setThumbnail(client.user.avatarURL())
        .addField(".abonelog", " Abone Logunu Ayarlarsınız!")
        .addField(".abonerol", "Abone Rolünü Ayarlarsınız!", )
        .addField(".abone-yetkili-rol", "Abone Rolünü Ayarlarsınız!")
        .addField(".abone", "Abone rolünü Verirsiniz!")
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
  name: 'abone-sistemi'
}