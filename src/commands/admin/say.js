const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "embed",
    desc: "Wysyła podany tekst w formie embeda!",
    perm: ["dev"],
    usage: "<tekst>",
    run: async ({ client, message, args }) => {
        const str = args.join(" ")
        const res = str.split("|")
        if (!res[0]) return message.channel.send("```.embed Tytul|wiadomosc```")
        if (!res[1]) return message.channel.send("```.embed Tytul|wiadomosc```")
        let user = message.author;
        let avatar = user.displayAvatarURL({ size: 1024 });
        const embed = {
            color: '#00a000',
            title: ``,
            url: '',
            author: {
                name: res[0],
                icon_url: '',
                url: '',
            },
            description: res[1],
            thumbnail: {
                url: "https://cdn.discordapp.com/attachments/929425269201207426/935829481787101194/logo_bonsaj1.png",
            },
            image: {
                url: '',
            },
            footer: {
                text: ``,
                icon_url: avatar,
            },
        };
        message.channel.send({ embed: embed })
        message.delete();
    }
}