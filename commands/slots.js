module.exports = {
	name: 'slots',
	description: 'Slot machine automated fun.',
	execute(message, args) {
        const slots = ['<:bulbasaur:703075416793022494>','<:squirtle:703075874676801566>','<:charmander:703075471104933918>'];
        const result1 = Math.floor((Math.random() * slots.length));
        const result2 = Math.floor((Math.random() * slots.length));
        const result3 = Math.floor((Math.random() * slots.length));
        const name = message.author.username;
        var creds = 10;

        if (args.find(easterEgg => easterEgg === 'Tyranitar')) {
            if (args.length > 2) {
                message.reply('You entered too much information.');
                return;
            } else {
                args.forEach (args => {
                    let nums = parseInt(args, 10);
                    if (nums === parseInt(nums, 10)) {
                        creds = nums;
                    }
                });
            }

            message.channel.send(
` **[   :slot_machine:    |   SLOTS   ]**
-----------------------
  ${slots[Math.floor((Math.random() * slots.length))]}   |   ${slots[Math.floor((Math.random() * slots.length))]} \xA0 | \xA0 ${slots[Math.floor((Math.random() * slots.length))]}

  ${slots[result1]}   |   ${slots[result2]}   |   ${slots[result3]}    **<<**

  ${slots[Math.floor((Math.random() * slots.length))]}   |   ${slots[Math.floor((Math.random() * slots.length))]} \xA0 | \xA0 ${slots[Math.floor((Math.random() * slots.length))]}
----------------------
: : : : :   **WON**   : : : : :

**${name}** used **${creds}** credit(s) and won **${(creds*2)}** credits.`);
        } else {
            if (args.length > 1) {
                message.reply('Please enter a valid number.');
                return;
            } else {
                creds = (args.length == 0) ? creds : args;

                if (slots[result1] === slots[result2] && slots[result1] === slots[result3]) {

                    message.channel.send(
` **[   :slot_machine:    |   SLOTS   ]**
-----------------------
  ${slots[Math.floor((Math.random() * slots.length))]}   |   ${slots[Math.floor((Math.random() * slots.length))]} \xA0 | \xA0 ${slots[Math.floor((Math.random() * slots.length))]}

  ${slots[result1]}   |   ${slots[result2]}   |   ${slots[result3]}    **<<**

  ${slots[Math.floor((Math.random() * slots.length))]}   |   ${slots[Math.floor((Math.random() * slots.length))]} \xA0 | \xA0 ${slots[Math.floor((Math.random() * slots.length))]}
----------------------
: : : : :   **WON**   : : : : :

**${name}** used **${creds}** credit(s) and won **${(creds*2)}** credits.`);
                } else {
                    message.channel.send(
` **[   :slot_machine:    |   SLOTS   ]**
-----------------------
  ${slots[Math.floor((Math.random() * slots.length))]}   |   ${slots[Math.floor((Math.random() * slots.length))]} \xA0 | \xA0 ${slots[Math.floor((Math.random() * slots.length))]}

  ${slots[result1]}   |   ${slots[result2]}   |   ${slots[result3]}    **<<**

  ${slots[Math.floor((Math.random() * slots.length))]}   |   ${slots[Math.floor((Math.random() * slots.length))]} \xA0 | \xA0 ${slots[Math.floor((Math.random() * slots.length))]}
----------------------
: : : : :    **LOST**   : : : : :

**${name}** used **${creds}** credit(s) and lost everything.`);
                }
            }
        }
    },
};