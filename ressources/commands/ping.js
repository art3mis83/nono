module.exports = {
	name: 'PING',
    description: 'ping : apporte ta raquette',
	begin : false,
	args : false,
	precheck(message){
        return message.indexOf(this.name) >= 0;
    },
	execute(message, args) {
		message.channel.send('pong !');
	},
};