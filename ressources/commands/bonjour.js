module.exports = {
	name: 'BONJOUR',
    description: 'bonjour (car il faut être poli)',
	begin : true,
	args : false,
	precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
		message.channel.send('Bonjour ' + message.author.username)  
	},
};