const Discord = require('discord.js')
const db = require('quick.db')
const client = new Discord.Client()

exports.run = async (client, message, args) => {    
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  

 const thomas1 = args.slice(0).join(' ')
      
  const thomas2 = message.guild.channels.find('name', `${thomas1}`)

  if(args[0] == 'kapat') {
    
   const thomas3 =  db.fetch(`sunucuPanel_${message.guild.id}`) 
   const thomas4 = message.guild.channels.find('id' , thomas3)
   thomas4.delete()
    db.delete(`sunucuPanel_${message.guild.id}`)  
    const embed2 = new Discord.RichEmbed()
    .setAuthor('Panel kanalı başarıyla sıfırlandı')
    .setColor('RED')
  message.channel.send(embed2) 
    
  } 
  if(args[0] == 'kapat') return
  
    if (!thomas2 || thomas2.type !== "voice") return message.reply('Sesli kanal ismi yazmalısınız.')
    
    db.set(`sunucuPanel_${message.guild.id}` , thomas2.id)
     
     const embed = new Discord.RichEmbed()
     .setAuthor('Başarılı')
     .addField('Ayarlanan kanal' , '``panel\n'+thomas2.name+'``')
     .setColor('GREEN')
     .setDescription(`Sunucuya bir kullanıcı girdiğinde & çıktığında kanal ismini değiştirerek üye sayısını gösterecek.Çalıştığını görmek için yeni birinin katılmasını ya da çıkmasını bekleyin!`)
      message.channel.send(embed)
}
        
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori:"bot"
};

exports.help = {
  name: 'sunucu-panel-ayarla',
  description: 'Sunucu panelini ayarlar.',
  usage: 'sunucu-panel-ayarla [sesli kanal ismi] / kapat'
};