const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const bergy = new Discord.MessageEmbed()
.setColor("GREEN")
.setThumbnail(message.guild.iconURL)
.setDescription(`
${client.emojis.cache.get("936901866485346314")} | **Sunucudaki \`Toplam Üye\` Sayısı:** \`${message.guild.memberCount}\`
${client.emojis.cache.get("936901866485346314")} | **Sunucudaki \`Online\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'online').size}\`
${client.emojis.cache.get("936901866485346314")} | **Sunucudaki \`idle\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'idle').size}\`
${client.emojis.cache.get("936901866485346314")} | **Sunucudaki \`Dnd\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'dnd').size}\`
${client.emojis.cache.get("936901866485346314")} | **Sunucudaki \`Offline\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'offline').size}\`
`)//GweepCreative
  .setFooter(`Komutu Kullanan: ${message.author.tag}`, message.author.avatarURL())   
  message.channel.send(bergy);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};