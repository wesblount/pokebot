module.exports = {
	name: 'roles', // module name (initiated by prefix+name)
	description: 'Adds a new rank', // short description of module purpose
	execute(message, args) {
        // Create a new role with data and a reason
/*
        message.guild.roles.create({
            data: {
                name: args.toString(),
                color: 'BLUE',
            },
            reason: 'Create assignable rank to be tagged.',
        })
         .then(console.log)
         .catch(console.error);
*/
    }
};
