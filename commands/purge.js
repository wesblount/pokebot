module.exports = {
	name: 'purge',
	description: 'Purge selected amount of messages from channel.',
	execute(message, args) {
        const count = args.join(' ');
        
        if (!count) return message.channel.send('You haven\'t specified an amount.');
        if (isNaN(count)) return message.channel.send('You must enter a valid number.');
        if (count > 100) return message.channel.send('You can\'t delete more than 100 messages!');
        if (count < 1) return message.channel.send('How do you expect me to delete nothing?');

        message.channel.messages.fetch({ limit: (parseInt(count)+1) }).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
};