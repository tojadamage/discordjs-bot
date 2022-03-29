const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ticket2",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let button = new MessageButton()
            .setStyle('green')
            .setEmoji('💬')
            .setLabel('Potrzebuje pomocy')
            .setID('OPEN_TICKET_POMOC')
        let embed = new MessageEmbed()
            .setAuthor(`Pomoc!`)
            .setColor("#00a000")
            .setDescription(`Potrzebujesz pomocy lub chcesz zgłosić błąd? Stwórz ticket 😄`)
        message.channel.send(' ', {
            button: button,
            embed: embed
        })
    }
}