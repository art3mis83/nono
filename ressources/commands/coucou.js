module.exports = {
	name: 'COUCOU',
    description: 'coucou (piou piou)',
	begin : true,
	args : false,
	precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
		message.channel.send('Qui que tu sois, coucou à toi aussi !')  
	},
};