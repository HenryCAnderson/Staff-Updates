const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json');

module.exports = {
    name: 'promote',
    aliases: [ "p" ],
    execute(message, args) {
        if (!args[0]) {
            const error = new Discord.MessageEmbed()
                .setDescription('You need to type in the user\'s TAG! (Example: `-promote @imbob123 (RANK) (REASON)`)')
                .setColor(color)
                .setFooter(footer)
            message.channel.send(error);
        }
        
            const embed = new Discord.MessageEmbed()
                .setDescription(`:mega: **Staff Update - Promotion**`)
                .setColor(color)
                .addField('**User:**', args[0])
                .addField('**Rank:**', args[1])
                .addField('**Reason:**', args[2])

            message.channel.send(embed);
            }       
        };