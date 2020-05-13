module.exports = {
	name: 'emojis',
	description: 'Slot machine automated fun.',
	execute(message, args) {
        for (emos of message.guild.emojis.cache) {
            message.channel.send(emos);
        }
    },
};