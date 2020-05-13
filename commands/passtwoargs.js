module.exports = {
	name: 'passtwoargs', // module name (initiated by prefix+name)
	description: 'This is the description.', // short description of module purpose
	execute(message, args) {
        // enter code below
        if (args == "") {
            message.channel.send('You failed to enter a valid argument.'); 
            return;
        } else if (args.length < 2) {
            message.channel.send('You didn\'t enter enough arguments.');
        } else if (args.length > 2) {
            message.channel.send('You entered too many arguments.');
            return;
        } else {
            message.channel.send(args);
        }
    }
};
