const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
    config: {
        name: "alpaca",
        desc: "sends a random picture of an alpaca.",
        group: "image",
        usage: "",
        aliases: [],
        guildOnly: false,
        ownerOnly: false,
        userPerms: [],
        clientPerms: []
    },

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        fetch("https://apis.duncte123.me/alpaca")
            .then(res => res.json())
            .then(data => {
                message.channel.send(new Discord.RichEmbed().setImage(data.data.file).setColor("203145").setAuthor(client.user.username, client.user.displayAvatarURL));
            });
    }
}