
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = {
	name: 'NONO',
    description: 'je connais mon nom maintenant !',
    begin : false,
    args : false,
    precheck(message){
        return message.indexOf(this.name) >= 0;
    },
	execute(message, args) {
		var responseArray = ['C\'est bien mon nom',
                    'Chante avec moi ! https://youtu.be/vxlNw-vz7l8?t=86',
                    'Je suis Nono le bot Discord ! Ici c\'est moi le roi'];

        message.channel.send(responseArray[getRandomInt(3)]);
	},
};