const { MessageEmbed } = require('discord.js')

module.exports = async (client, member) => {
    member.guild.channels.cache.get('927208928322945044')
    member.roles.add('927215324875616336')
        .send(new MessageEmbed()
            .setAuthor(`Nowy użytkownik!`)
            .setColor("green")
            .setDescription(`Witaj <@${member.user.id}> \n\nŻyczymy mile spędzonego czasu na naszym serwerze! \n\n> Aktualnie teraz: **${client.users.cache.size}** użytkowników!`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true })))
        .catch(e => console.log(e))
}