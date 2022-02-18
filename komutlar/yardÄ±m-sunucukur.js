const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#00001')
.setTitle('AirBot Sunucu Kur komutları')
.setDescription(`

\`.normal-sunucukur\` 
**Normal Sunucu Kurar**

\`.nitro-sunucukur\` 
**Nitro Sunucusu Kurar**

\`\`\`AirBot Her Zaman Yanınızdadır...\`\`\``)
.setTimestamp()
.setFooter('AirBot', client.user.avatarURL())
.setThumbnail(client.user.avatarURL()))


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-tema'],
  permLevel: 0
}

exports.help = {
  name: 'sunucukur'
};