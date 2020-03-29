const path = require('path');
const fs = require('fs');

const dbFilePath = path.join("ressources","data","db.json");
module.exports = {
	name: 'LEÇONS',
    description: 'leçons donne la liste des leçons recommandés par les humains du chat',
	begin : true,
	args : false,
	precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
        
        const db = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
        
        if(!db["lecons"] || db["lecons"].length == 0){
            message.channel.send("Rien à apprendre pour le moment :(");
        }else{
            message.channel.send("Voici les leçons que je dois étudier :\n" + db["lecons"].join('\n'));
        }
        
        fs.writeFile(dbFilePath, JSON.stringify(db), (err) => {
            if (err) return message.channel.send('Une erreur est survenue lors de l\'écriture des données.');
        });
        
	},
};