let Discord = require('discord.js');
const { prefix } = require('../config.json');

exports.run = async (client, message, args) => {
        if (message.guild) {
            message.channel.send('Check your DMs!');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/keirahela/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setURL('https://github.com/keirahela/discord-giveaway-bot')
            .setColor('7289da')
            .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/keirahela/discord-giveaway-bot)`)
            .addField(`đ ${prefix}start [channel] [duration] [winners] [prize]`, 'The channel has to be visible to the giveaway bot.\nDuration is stated in a number and a time variable.\nWinners is stated in a positive number.\nPrize can be anything except blank.')
            .addField('đĽ Example:', `â¨ď¸ ${prefix}start #general 10m 1 $9.99 Nitro\nâĄď¸ Creates a \`10 minute\` long giveaway with \`1\` winner and\n\`$9.99 Nitro\` as a prize in \`#general\`.`)
            .addField(`â ${prefix}end [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
            .addField('đĽ Example:', `â¨ď¸ ${prefix}end 892678258946659587\nâĄď¸ Ends the giveaway with the message-ID \`892678258946659587\`.`)
            .addField(`đ ${prefix}reroll [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
            .addField('đĽ Example:', `â¨ď¸ ${prefix}reroll 892678258946659587\nâĄď¸ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`)
            .setFooter('Made with đ and discord.js by ghaku & keirahela', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/keirahela/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setURL('https://github.com/keirahela/discord-giveaway-bot')
            .setColor('7289da')
            .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/keirahela/discord-giveaway-bot)`)
            .addField(`đ ${prefix}start [channel] [duration] [winners] [prize]`, 'The channel has to be visible to the giveaway bot.\nDuration is stated in a number and a time variable.\nWinners is stated in a positive number.\nPrize can be anything except blank.')
            .addField('đĽ Example:', `â¨ď¸ ${prefix}start #general 10m 1 $9.99 Nitro\nâĄď¸ Creates a \`10 minute\` long giveaway with \`1\` winner and\n\`$9.99 Nitro\` as a prize in \`#general\`.`)
            .addField(`â ${prefix}end [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
            .addField('đĽ Example:', `â¨ď¸ ${prefix}end 892678258946659587\nâĄď¸ Ends the giveaway with the message-ID \`892678258946659587\`.`)
            .addField(`đ ${prefix}reroll [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
            .addField('đĽ Example:', `â¨ď¸ ${prefix}reroll 892678258946659587\nâĄď¸ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`)
            .setFooter('Made with đ and discord.js by ghaku & keirahela', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
