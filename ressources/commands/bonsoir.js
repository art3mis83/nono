module.exports = {
	name: 'BONSOIR',
    description: 'bonsoir (car il faut être poli le soir aussi)',
	begin : true,
	args : false,
	precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
		message.channel.send('Bonsoir ' + message.author.username);  
	},
};