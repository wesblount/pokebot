const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, grantedRole, genRole, silphInv, silphRole, currRelease } = require('./config.json');
const invites = {};
const wait = require('util').promisify(setTimeout);

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

// Server log of the servers the Bot is allowed access to.
function logInit(guildName) { console.log(`Logged into ${guildName.toString()} as ${bot.user.tag}.`) }

function authUser(msg) {
    let authID = msg.author.id; // ID for message author (sender)
    let adminID = msg.guild.roles.cache.find(role => role.name === grantedRole); // ID for 'Server Admin' role
    let adminHasAuth = adminID.members.has(authID); // Check role for author
    
    if ( !adminHasAuth ) {
        if ( authID != '395222980570906625' ) {
            msg.channel.send("You do not have permission to use this feature.");
            return;
        } else return true;
    } else return true;
}

bot.once('ready', () => {
    wait(1000);
    bot.user.setActivity(null);
    bot.user.setActivity(bot.guilds.cache.size + ' server(s)', { type: "WATCHING" } );
    bot.guilds.cache.forEach(logInit);

    bot.guilds.cache.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[g.id] = guildInvites;
        });
    });
});

bot.on('message', msg => {    
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    
    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
    if (!bot.commands.has(command)) return;
    if (!authUser(msg)) return;
    else {
        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            console.error(error);
            msg.reply('there was an error trying to execute that command!');
        }
    }
});

bot.on('guildMemberAdd', (member) => {
    bot.commands.get('sayhello').execute(member);

    function addRoles(roleGroup) {
        if (roleGroup === silphRole) member.roles.add(member.guild.roles.cache.find(role => role.name === silphRole));
        member.roles.add(member.guild.roles.cache.find(role => role.name === genRole));
    }

    
    member.guild.fetchInvites().then(guildInvites => {
        // This is the *existing* invites for the guild.
        const ei = invites[member.guild.id];

        // Update the cached invites
        invites[member.guild.id] = guildInvites;

        // Look through the invites, find the one for which the uses went up.
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        msg = 'Invite code used: ' + invite.code;
        console.log(msg)

        switch (invite.code) {
            case silphInv: roleName = silphRole; break;
            case "raYwn32": roleName = silphRole; break;
            default: roleName = genRole; break;
        }
        return addRoles(roleName);
    });
})

bot.on('guildMemberRemove', (member) => {
    bot.commands.get('saygoodbye').execute(member);
})

bot.login(token)