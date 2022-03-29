const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ticket1",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let button = new MessageButton()
            .setStyle('green')
            .setEmoji('📘')
            .setLabel('Chcę Kupić')
            .setID('OPEN_TICKET_ZAKUPY')
        let embed = new MessageEmbed()
            .setAuthor(`Zakup`)
            .setColor("#00a000")
            .setDescription(`Chcesz zakupić coś z naszej oferty lub odebrać usługę za zaproszenia?\nKliknij guzik poniżej aby stworzyć ticket 😄`)
        message.channel.send(' ', {
            button: button,
            embed: embed
        })
    }
}