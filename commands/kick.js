  module.exports = {
    name: 'kick',
    description: 'Kick a user from the server.',
    guildOnly: true,
    args: true,
    cooldown: 5,
    execute(message, args) {
    const taggedUser = message.mentions.users.first();

    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    },
};