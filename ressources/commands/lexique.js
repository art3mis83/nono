module.exports = {
	name: 'LEXIQUE',
	description: null,
    aliases: ['COMMAND','COMMANDS','HELP'],
    precheck(message){
        
        var precheck = message.indexOf(this.name) >= 0;
        if(!precheck){
            for(var index in this.aliases){               
                if(message.indexOf(this.aliases[index]) >= 0){
                    precheck = true;
                    break;
                }
            }
        }
        return precheck;
    },
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

        data.push('Voici la liste de toutes les leçons que je connais :\n\t-');
        data.push(commands.map(command => command.description).filter(Boolean).join('\n\t-'));
			
        return message.channel.send(data.join(''));
		
	},
};