function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = {
	name: 'GUERRE',
    description: 'À mon signal, déchaine les enfers',
	begin : false,
	args : false,
	precheck(message){
        return message.indexOf(this.name) >= 0;
    },
	execute(message, args) {
		var responseArray = ["C'est pas ma guerre mon colonnel",
                              "- J'ai une armée !\n-Nous, on a Hulk !",
							  "- Vous avez l’expérience de la guerre, Monsieur Rambo ?\n- J’ai vidé quelques chargeurs",
							  "Spartiates ! Quel est votre métier ?!",
							"- Je ne sais pas qui vous êtes. Je ne sais pas ce que vous voulez. Si c’est une rançon que vous espérez, \
dites-vous bien que je n’ai pas d’argent, par contre ce que j’ai, c’est des compétences particulières, que j’ai acquises au cours d’une longue carrière. \
Des compétences qui font de moi un véritable cauchemar pour vous. Si vous relâchez ma fille maintenant, ça s’arrêtera là. Si vous ne la relâchez pas, \
je vous chercherai, je vous trouverai et je vous tuerai.",
							"@Ocean, formation tortue !"];

        message.channel.send(responseArray[getRandomInt(5)]); 
	},
};