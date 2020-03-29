const path = require('path');
const fs = require('fs');

const dbFilePath = path.join("ressources","data","db.json");
module.exports = {
	name: 'APPRENDS',
    description: 'apprends : [une leçon] (pour me demander d\'apprendre à dire bonjour il faut taper : apprends : bonjour)',
	begin : true,
	args : false,
	precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
        
        const db = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
        if (!db["lecons"]){
            db["lecons"] = [];
        } 
        db["lecons"].push(message.content.substring(10, message.length));

        fs.writeFile(dbFilePath, JSON.stringify(db), (err) => {
            if (err) return message.channel.send('Une erreur est survenue lors de l\'écriture des données.');
            message.channel.send("Je vais y réfléchir ... est-ce bien une bonne idée ?");
        });
        
	},
};