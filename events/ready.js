const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    
    "Airfax - YOUTUBE",
    "Prefix = '.' .yardım"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);

      client.user.setActivity(`Airfax`, { type: "WATCHING" });
  client.user.setStatus("idle");
  console.log("Aktif!")
  
  //dnd, idle, online, offline
    //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
  
}