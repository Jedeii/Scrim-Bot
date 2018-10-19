module.exports = {
    name: 'server',
    description: 'Server!',
    cooldown: 5,
    execute(message, args) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    },
};