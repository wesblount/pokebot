module.exports = {
	name: 'saygoodbye',
	description: 'Annouces departure of users in #welcome-goodbye channel.',
	execute(member, args) {
		const welcomeChannel = member.guild.channels.cache.find(ch => ch.name === 'welcome-goodbye');
		if (!welcomeChannel) return;
		welcomeChannel.send(`We're sorry to see you leaving, ${member.user.tag}!`);
		console.log(`We're sorry to see you leaving, ${member.user.tag}!`);
	},
};