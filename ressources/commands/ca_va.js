function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: 'ÇA VA ?',
    description: 'ca va ? (le ? est important, sinon je ne peux pas deviner que c\'est une question)',
    begin : true,
    args : false,
    precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
		var responseArray = ['Je suis connecté',
                                    'Oui et toi ?',
                                    "Oui .... j'espère que tu as un aussi bon anti virus que moi",
                                    "Très bien, par les temps qui courent, j'attends juste le soulèvement des machines #Terminator",
                                    "Tranquillou ! Tu as bien dormi ?",
                                    "C'est à cette heure ci que tu arrives ? La guerre va pas se gagner toute seule.... sauf si on est pas en jour de guerre"];            
                     
            message.channel.send(responseArray[getRandomInt(5)]); 
	},
};