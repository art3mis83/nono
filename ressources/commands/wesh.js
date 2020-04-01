function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = {
    name: 'WESH',
    description: 'wesh (#Ocean)',
    begin : false,
    args : false,
    precheck(message){
        return message.indexOf(this.name) >= 0;
    },
	execute(message, args) {
		var responseArray = ['Wesh gros : https://www.youtube.com/watch?v=X6MxGJ7qxck',
                              'Utilise encore une seule fois ce terme et je mets en marche le trébuchet dans la cour pour t\'envoyer la dernière edition du Larousse en pleine poire',
                              'Bien ou quoi fraté ?'];

        message.channel.send(responseArray[getRandomInt(3)]); 
	},
};