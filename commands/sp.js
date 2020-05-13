module.exports = {
	name: 'sp', // module name (initiated by prefix+name)
	description: 'This is the module description.', // short description of module purpose
	execute(message, args) {
        // enter code below
        let myid = message.author.id;
        if (myid === '395222980570906625') message.channel.send(myid);
        else message.channel.send("You don't have permission.");
    }
};
