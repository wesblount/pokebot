module.exports = {
	name: 'fakejoin',
	description: 'Welcomes new users.',
	execute(msg, args) {
        const welcomeChannel = msg.guild.channels.cache.find(ch => ch.name === 'welcome-goodbye');
        //const welcomeChannel = msg.channel;
        //const getTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        function intToDay(num) {
            switch (num) {
                case 0: currDay = 'Sunday'; break;
                case 1: currDay = 'Monday'; break;
                case 2: currDay = 'Tuesday'; break;
                case 3: currDay = 'Wednesday'; break;
                case 4: currDay = 'Thursday'; break;
                case 5: currDay = 'Friday'; break;
                case 6: currDay = 'Saturday'; break;
            }
            return currDay;
        }
        function intToMonth(num) {
            switch (num) {
                case 0: currMonth = 'January'; break;
                case 1: currMonth = 'February'; break;
                case 2: currMonth = 'March'; break;
                case 3: currMonth = 'April'; break;
                case 4: currMonth = 'May'; break;
                case 5: currMonth = 'June'; break;
                case 6: currMonth = 'July'; break;
                case 7: currMonth = 'August'; break;
                case 8: currMonth = 'September'; break;
                case 9: currMonth = 'October'; break;
                case 10: currMonth = 'November'; break;
                case 11: currMonth = 'December'; break;
            }
            return currMonth;
        }
        function intToDate(num) {
            console.log('num: '+num);
            if (num > 3 && num < 21) num += 'th';
            else {
                if (num < 10) lastNum = num;
                else lastNum = num.toString().substr(1);

                switch (parseInt(lastNum)) {
                    case 1: num += 'st'; break;
                    case 2: num += 'nd'; break;
                    case 3: num += 'rd'; break;
                    default: num += 'th'; break;
                }
            }
            return num;
        }
        const currTime = new Date();
        const datestamp = `on ${intToDay(currTime.getDay())}, ${intToMonth(currTime.getMonth())} ${intToDate(currTime.getDate())}, ${currTime.getFullYear()}`;
        const timestamp = `at ${currTime.toLocaleTimeString('en-US')}`;
        const message = `<@${msg.author.id}> joined ${msg.guild.name} ${datestamp} ${timestamp}`;
       
		if (!welcomeChannel) return;
		welcomeChannel.send(message);
		console.log(message);
	},
};