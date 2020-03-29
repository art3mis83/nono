module.exports = {
	name: 'SALUT',
    description: 'salut (:wave:)',
	begin : true,
	args : false,
	precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
		message.channel.send('Salutation noble aventurier qui ose fouler le domaine de Nono');  
	},
};