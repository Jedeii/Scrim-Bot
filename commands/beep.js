module.exports = {
    name: 'beep',
    description: 'Beep!',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('Boop.');
    },
};