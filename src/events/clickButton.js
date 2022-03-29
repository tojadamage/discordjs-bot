const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')

module.exports = async (client, button) => {
    await button.reply.defer()
    let buttonClicker = button.clicker.member;
    let guild = button.guild;
    moderationRoleID = '935174407192715324';
    ticketRoleID = '935919944787427399';

    if (button.id === 'OPEN_TICKET_WSPÓŁPRACA') {
        let alreadyOpenedTicket = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
        let współpraca = alreadyOpenedTicket.some(v => buttonClicker.user.username == v)
        console.log(współpraca)
        if (współpraca === true) {
            return await buttonClicker.user.send(new MessageEmbed().setAuthor(`Błąd!`).setColor("RED").setDescription(`Posiadasz już utworzony ticket!`))
        }
        let ticketChannel = await guild.channels.create(`aplikacja-${buttonClicker.user.username}`, {
            type: "text",
            parent: '931256240439435264',
            permissionOverwrites: [
                {
                    id: buttonClicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    id: guild.roles.everyone,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
            ]
        })
        let openedTicket = new MessageEmbed()
            .setAuthor(`Nawiązywanie współpracy`)
            .setColor("#00a000")
            .setThumbnail(buttonClicker.user.displayAvatarURL({ dynamic: true }))
            .setDescription('Opisz jakiego typu współpracę chcesz z nami zawrzeć i poczekaj cierpliwie.')
        let supportButton = new MessageButton()
            .setLabel("Zamknij aplikacje")
            .setStyle("green")
            .setID("TICKET_CLOSE_WSPÓŁPRACA")
        ticketChannel.send(`${buttonClicker.user}`, {
            embed: openedTicket,
            components: new MessageActionRow()
                .addComponent(supportButton)
        })
    }
    if (button.id === `TICKET_CLOSE_WSPÓŁPRACA`) {
        let ticketChannel = button.channel;

        let deletingTicket = new MessageEmbed()
            .setAuthor(`Ticket został zamknięty`)
            .setColor("green")
            .setDescription(`Zaraz zostanie usunięty!`)
        ticketChannel.send(deletingTicket)
        setTimeout(() => { ticketChannel.delete() }, 5000);

    }

    if (button.id === 'OPEN_TICKET_ZAKUPY') {
        let alreadyOpenedTicket = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
        let zakupy = alreadyOpenedTicket.some(v => buttonClicker.user.username == v)
        console.log(zakupy)
        if (zakupy === true) {
            return await buttonClicker.user.send(new MessageEmbed().setAuthor(`Błąd!`).setColor("RED").setDescription(`Posiadasz już utworzony ticket!`))
        }
        let ticketChannel = await guild.channels.create(`zakupy-${buttonClicker.user.username}`, {
            type: "text",
            parent: '931305012393558126',
            permissionOverwrites: [
                {
                    id: buttonClicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    id: guild.roles.everyone,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    id: moderationRoleID,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
            ]
        })
        let openedTicket = new MessageEmbed()
            .setAuthor(`Zakupy`)
            .setColor("#00a000")
            .setThumbnail(buttonClicker.user.displayAvatarURL({ dynamic: true }))
            .setDescription('Napisz co chcesz kupić lub odebrać za zaproszenia i poczekaj cierpliwie na zgłoszenie się administratora lub grafika który odpowie na twoje zgłoszenie 😄')
        let supportButton = new MessageButton()
            .setLabel("Zamknij zakupy")
            .setStyle("green")
            .setID("TICKET_CLOSE_ZAKUPY")
        ticketChannel.send(`${buttonClicker.user}`, {
            embed: openedTicket,
            components: new MessageActionRow()
                .addComponent(supportButton)
        })
    }
    if (button.id === `TICKET_CLOSE_ZAKUPY`) {
        let ticketChannel = button.channel;

        let deletingTicket = new MessageEmbed()
            .setAuthor(`Ticket został zamknięty`)
            .setColor("green")
            .setDescription(`Zaraz zostanie usunięty`)
        ticketChannel.send(deletingTicket)
        setTimeout(() => { ticketChannel.delete() }, 5000);

    }

    if (button.id === 'OPEN_TICKET_POMOC') {
        let alreadyOpenedTicket = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
        let pomoc = alreadyOpenedTicket.some(v => buttonClicker.user.username == v)
        console.log(pomoc)
        if (pomoc === true) {
            return await buttonClicker.user.send(new MessageEmbed().setAuthor(`Błąd!`).setColor("RED").setDescription(`Posiadasz już utworzony ticket!`))
        }
        let ticketChannel = await guild.channels.create(`ticket-${buttonClicker.user.username}`, {
            type: "text",
            parent: '931305090302758932',
            permissionOverwrites: [
                {
                    id: buttonClicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    id: guild.roles.everyone,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    id: ticketRoleID,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
            ]
        })
        let openedTicket = new MessageEmbed()
            .setAuthor(`Centrum Pomocy!`)
            .setColor("#00a000")
            .setThumbnail(buttonClicker.user.displayAvatarURL({ dynamic: true }))
            .setDescription('Opisz problem i poczekaj cierpliwie na zgłoszenie się administratora który udzieli ci odpowiedzi 😊')
        let supportButton = new MessageButton()
            .setLabel("Zamknij ticket")
            .setStyle("green")
            .setID("TICKET_CLOSE_POMOC")
        ticketChannel.send(`${buttonClicker.user}`, {
            embed: openedTicket,
            components: new MessageActionRow()
                .addComponent(supportButton)
        })
    }
    if (button.id === `TICKET_CLOSE_POMOC`) {
        let ticketChannel = button.channel;

        let deletingTicket = new MessageEmbed()
            .setAuthor(`Ticket został zamknięty`)
            .setColor("green")
            .setDescription(`Zaraz zostanie usunięty!`)
        ticketChannel.send(deletingTicket)
        setTimeout(() => { ticketChannel.delete() }, 5000);

    }
}