module.exports = {
    name: 'nuke',
    run: async ({ client, message, args, MessageEmbed }) => {
        message.channel.send(`Niszczenie serwera...`).then(m => {
            let pingembed = new MessageEmbed()
                .setAuthor(`Tiger Bonzo`)
                .setColor("RED")
                .setDescription(`Nie tym razem! ??`)
        })
    }
}