module.exports = {
	name: 'ranks', // module name (initiated by prefix+name)
	description: 'Displays list of ranks', // short description of module purpose
	execute(message, args) {

        /* Get Roles and member counts */

        /* RichEmbed method */
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed();
        var listArr = [];
        var roleArr = [];
        
        message.guild.roles.cache.forEach(role => {
            listArr += [role.name + "\n"];
            roleArr += [role.members.size + " members\n"];
        });

        embed.addField('__Rank Name__' , `${listArr}`, true);
        embed.addField('__Member Count__' , `${roleArr}`, true);
        embed.setColor(0x0080FF);
        embed.setFooter('Use the ?rank command to join a rank.');

        message.channel.send(embed);
    }
};