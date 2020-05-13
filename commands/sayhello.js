module.exports = {
	name: 'sayhello',
	description: 'Welcomes new users.',
	execute(member, args) {
		const welcomeChannel = member.guild.channels.cache.find(ch => ch.name === 'welcome-goodbye');
		if (!welcomeChannel) return;

		const msg = `Welcome to ${member.guild.name}, <@${member.user.id}>!`;
		welcomeChannel.send(msg);
		console.log(msg);
	},
};