module.exports = {
	name: 'help', // module name (initiated by prefix+name)
	description: 'This is the help menu.', // short description of module purpose
	execute(msg, args) {
        // enter code below
        if (args == '') msg.reply("Welcome to the help menu!");
        else {
            const fs = require('fs');
            const Discord = require('discord.js');
            
            msg.helpCollection = new Discord.Collection();
            const helpFiles = fs.readdirSync('./commands/help').filter(file => file.endsWith('.js'));

            for (const file of helpFiles) {
                const help = require(`./help/${file}`);
                msg.helpCollection.set(help.name, help);
            }

            if (!msg.helpCollection.has(args.toString())) {
                console.log('Here is your error.');
                return;
            }
            
            try {
                msg.channel.send(msg.helpCollection.get(args.toString()).description);
            } catch (error) {
                console.error(error);
                msg.channel.send('there was an error trying to execute that command!');
            }
        }
    }
};
