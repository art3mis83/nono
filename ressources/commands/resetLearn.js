const path = require('path');
const fs = require('fs');

const dbFilePath = path.join("ressources","data","db.json");
module.exports = {
	name: '!CLEAR_LEARN',
    description: null,
	begin : true,
	args : false,
	precheck(message){
        return message.indexOf(this.name) == 0;
    },
	execute(message, args) {
        
        const db = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
        db["lecons"] = [];

        fs.writeFile(dbFilePath, JSON.stringify(db), (err) => {
            if (err) return message.channel.send('Une erreur est survenue lors de l\'écriture des données.');            
        });
        
	},
};