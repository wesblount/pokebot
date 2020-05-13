module.exports = {
	name: 'kick',
	description: 'This is the kicker.',
	execute(message, args) {
        message.guild.members.fetch().then(fetchedMembers => {
            console.log(fetchedMembers);

            const userMatch = fetchedMembers.filter(member => member.user.username === args);
            const user2Match = fetchedMembers.filter(member => member.username === args)
            const nicknameMatch = fetchedMembers.filter(member => member.nickname === `${args}`);
            console.log(
`member.user.username: ${userMatch}
member.username: ${user2Match}
member.nickname: ${nicknameMatch}`);

            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
            // We now have a collection with all online member objects in the totalOnline variable
            // message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
            message.channel.send(`${message.author.username} tried to kick ${args} but missed.`);

            ///console.log(fetchedMembers.some(u => args.includes(u.username)));
            
            if (fetchedMembers.some(u => args.includes(u.username))) {
                const user = fetchedMembers.find(user => user.name === args);
                console.info(user);
            }
        });

        //message.channel.send(`Oof! ${name} kicked ${recip} in the balls!`);
    }
};
