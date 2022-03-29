module.exports = {
    name: 'help',
    run: async ({ client, message, args, MessageEmbed }) => {
        message.channel.send(`<@${message.author.id}>`).then(m => {
            let pingembed = new MessageEmbed()
                .setAuthor(`Komendy bota`)
                .setColor("GREEN")
                .setDescription("\n``.`` **-** prefix\n > ``.ankieta tresc|wiadomosc`` **-** ankieta\n > ``.embed tytul|wiadomosc`` **-** wysyla wiadomosc embed\n > ``.ping`` **-** sprawdza ping bota")
                .setFooter(`Wykonano przez ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            return m.edit(pingembed)
        })
    }
}