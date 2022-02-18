const Discord = require("discord.js");

const ms = require("ms");

exports.run = async(bot, message, args) => {
    if(!message.member.permissions.has('MANAGE_ROLES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)

    message.channel.send(`Bu Komutu Kullanma Yetkiniz Yok`);

    return;

  }

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!tomute) return message.channel.send(" Hatalı kullanım tespit edildi! \n\nDoğru Kullanım: `.mute @kullanıcı <süre: 1m - 1h>`");

    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(" Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!");

    let muterole = message.guild.roles.cache.find(r => r.name === "Susturulmuş");

    if (!muterole) {

        try {

            muterole = await message.guild.roles.create({

                name: "Susturulmuş",

                color: "#818386",

                permissions: []

            })

            message.guild.channels.cache.forEach(async(channel, id) => {

                await channel.createOverwrite(muterole, { 

                    SEND_MESSAGES: false,

                    ADD_REACTIONS: false

                });

            });

        } catch (e) {

            console.log(e.stack);

        }

    }

    //end of create role

    let mutetime = args[1];

    if (!mutetime) return message.channel.send(" Hatalı kullanım tespit edildi! \n\nDoğru Kullanım: `m.mute @kullanıcı <süre: 1m - 1h>`");

    await (tomute.roles.add(muterole.id));

    message.channel.send(`<@${tomute.id}> adlı kullanıcı başarıyla susturuldu! \`[ ${ms(ms(mutetime))} ]\``);

    setTimeout(function() {

        tomute.roles.remove(muterole.id);

        message.channel.send(` <@${tomute.id}> Kişinin susturulma süresi dolduğu için konuşma engeli kaldırıldı!`);

    }, ms(mutetime));

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['mute'],

    permLevel: 0,
    
    kategori: "Moderasyon"

};

exports.help = {

    name: 'mute',

    description: 'mute',

    usage: 'mute [Kullanıcı] [Süre]'

};