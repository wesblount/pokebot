module.exports = {
	name: 'invites', // module name (initiated by prefix+name)
	description: 'This is the description.', // short description of module purpose
	execute(message, args) {
        // enter code below
        message.guild.fetchInvites()
        .then(inv => {
            invName = inv.array().join(', ')
            message.channel.send(invName)
        })
        .catch(error => {
            console.error(`This is your error: ${error}`)
        });
    }
};
