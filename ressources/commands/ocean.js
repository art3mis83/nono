module.exports = {
    name: 'OCEAN',
    aliases : ['OCÉAN'],
    exception : ['guerre--binomes'],
    description: null,
    begin : false,
    args : false,
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
		message.channel.send(':fries: :man_student:') 
	},
};