module.exports = {
    name: 'STEF',
    exception : ['guerre--binomes'],
    description: null,
    begin : false,
    args : false,
    precheck(message){
        return message.indexOf(this.name) >= 0;
    },
	execute(message, args) {
		message.channel.send(':baby:') 
	},
};