const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ticket",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let button = new MessageButton()
            .setStyle('green')
            .setEmoji('💼')
            .setLabel('Otwórz aplikacje')
            .setID('OPEN_TICKET_WSPÓŁPRACA')
        let embed = new MessageEmbed()
            .setAuthor(`Nawiązywanie Współpracy!`)
            .setColor("#00a000") 
            .setDescription(`Aby stworzyć aplikacje - Kliknij w guzik poniżej`)
        message.channel.send(' ', {
            button: button,
            embed: embed
        })
    }
}