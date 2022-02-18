const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, msg, args) => {
  

  msg.reply(new Discord.MessageEmbed().setDescription("**AirBot Davet**\n**Bot Davet:** [Tıkla](https://discord.com/oauth2/authorize?client_id=922132355039264831&permissions=8&scope=bot)\n\n**Discord Sunucumuz:** [Tıkla](https://discord.gg/h7BGxKARgU)\n\n**Youtube:** [Tıkla](https://www.youtube.com/channel/UC8rUaGDtdoKIZF4NqKzaZ5A) \n\n**Not:** Davet İçin Emojinin Üstüne Tıklayın"));

        }


exports.conf = {
  aliases: []
};

exports.help = {
  name : "davet"
};