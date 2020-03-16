const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
    console.log("Je suis connecté !")
  })
  
  bot.on('message', message => {
      /*console.log("message recu " + message.content.toUpperCase());
      console.log("message recu " + message.content.toUpperCase().indexOf('BONJOUR'));
      console.log(message.author.username);*/
    if(message.author.username !=="Nono"){
        var myMessage = message.content.toUpperCase();
        if (message.content === 'ping') {
            message.reply('pong !')
        }
      
        if (myMessage.indexOf('BONJOUR') == 0 ) {
            message.channel.send('Bonjour ' + message.author.username)  
        }

        if (myMessage.indexOf('BONSOIR') == 0  ) {
            message.channel.send('Bonsoir ' + message.author.username)  
        }
    
        if (myMessage.indexOf('ÇA VA ?') == 0  ) {
            var responseArray = ['Je suis connecté',
                                    'Oui et toi ?',
                                    "Oui .... j'espère que tu as un aussi bon anti virus que moi",
                                    "Très bien, par les temps qui courent, j'attends juste le soulèvement des machines #Terminator",
                                    "Tranquillou ! Tu as bien dormi ?",
                                    "C'est à cette heure ci que tu arrives ? La guerre va pas se gagner toute seule.... sauf si on est pas en jour de guerre"];            
            
            
            

            var index = getRandomInt(5);
            message.channel.send(responseArray[index]);
        }
    }  
    
  })

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

bot.login('Njg4NzU2NTI5ODY3OTE1MjY0.Xm5DOA.Vkb5W3oNFFU-xcJ2dz69_CSRsbo')