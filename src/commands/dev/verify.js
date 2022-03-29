const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "verify",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let embed = new MessageEmbed()
            .setAuthor(`Weryfikacja!`)
            .setColor('GREEN')
            .setDescription(`Aby się zweryfikować kliknij w guzik poniżej! \n\n> Jeśli jest jakiś problem, skontaktuj się z administracją!`)
            .setThumbnail('https://cdn.discordapp.com/attachments/929425269201207426/935829481787101194/logo_bonsaj1.png')
        let button = new MessageButton()
            .setStyle('green')
            .setEmoji('📝')
            .setLabel('Zweryfikuj się')
            .setID('Member!')
        message.channel.send(' ', {
            embed: embed,
            button: button
        })
    }
}