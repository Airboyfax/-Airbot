const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const Muhammed = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setTitle("AirBot Güvenlik Menüsü")
             .setAuthor(`Kategoriler`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`Komutlar`, `**${prefix}**anti-raid \n **${prefix}**bot-izni \n **${prefix}**capsengel \n **${prefix}**emoji-koruma \n **${prefix}**ever-engel \n **${prefix}**kanal-koruma \n **${prefix}**mod-log   \n **${prefix}**rol-koruma  `) // bunlar boş kalırsa hata verir
             .addField(`Linkler ->`, `[Sunucumuz](https://discord.gg/h7BGxKARgU)`) 
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL())
            
        return message.channel.send(Muhammed);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}

exports.help = {
	name : 'güvenlik',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}