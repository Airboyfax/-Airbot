const Discord = require("discord.js");
const googleTTS = require('google-tts-api'); 
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;
exports.run = (client, message) => {
// ARDADEMR YOUTUBE
      const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
  if (message.content.length > 195) return message.channel.send(`${message.author} yazdığın yazı maximum 200 karakter olmalı.`)
// ARDADEMR YOUTUBE
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)


const url = googleTTS.getAudioUrl(`${args.slice(' ')}`, {
  lang: 'tr',
  slow: false,
  host: 'https://translate.google.com',
});
// ARDADEMR YOUTUBE
// ARDADEMR YOUTUBE
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
})
})


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ardademr'],
    permLevel: 0
};

exports.help = {
    name: 'söyle'
};