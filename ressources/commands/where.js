module.exports = {
	name: 'OÙ',
    description: 'mieux vaut ne pas connaître certaine réponse ...',
	begin : false,
	args : false,
	precheck(message){
        return message.indexOf(this.name) >= 0;
    },
	execute(message, args) {
		message.reply('J\'ai bien une réponse ....');
  
	},
};