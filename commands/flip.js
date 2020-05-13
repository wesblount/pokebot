module.exports = {
	name: 'flip', // module name (initiated by prefix+name)
	description: 'A simple "coin flip" function.', // short description of module purpose
	execute(message, args) {
        // enter code below
        function battle() {
            var trainer = [args[0],args[1]];
            var result = trainer[Math.floor(Math.random()*trainer.length)];
            return message.channel.send(result+" was victorious in the battle!");
        }
        
        if (args == "") message.channel.send("You failed to enter the competing trainers.");
        else if (args.length < 2) message.channel.send("You only entered one trainer.");
        else if (args.length > 2) message.channel.send("You entered too much information.");
        else {
            message.channel.send("__**Forced Decision Round Results**__");
            setTimeout(battle,1000);
            setTimeout(battle,2500);
            setTimeout(battle,4000);      
        }
    }
};
