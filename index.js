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

        if (myMessage.indexOf('COUCOU') == 0  ) {
          message.channel.send('Qui que tu sois, coucou à toi aussi !')  
        }

        if (myMessage.indexOf('GRE') != -1 || myMessage.indexOf('GRENOUILLE') != -1  ) {
          if(message.channel.name != "guerre--binomes"){
            message.channel.send('!pokemon Froakie')  
          }
        }

        if (myMessage.indexOf('OCEAN') != -1 ) {
          if(message.channel.name != "guerre--binomes"){
            message.channel.send(':fries: :man_student:')  
          }
        }

        if (myMessage.indexOf('STEF') != -1 ) {
          if(message.channel.name != "guerre--binomes"){
            message.channel.send(':baby:')  
          }
        }

        if (myMessage.indexOf('WESH') >= 0  ) {
          var responseArray = ['Wesh gros : https://www.youtube.com/watch?v=X6MxGJ7qxck',
                              'Utilise encore une seule fois ce terme et je mets en marche le trébuchet dans la cour pour t\'envoyer la dernière edition du Larousse en pleine poire',
                              'Bien ou quoi fraté ?'];

            message.channel.send(responseArray[getRandomInt(2)]); 
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

        if(myMessage == 'lexique'){
          message.channel.send("Voilà les leçons que je connais pour le moment : \
          - bonjour (car il faut être poli)\
          - coucou (piou piou)\
          - bonsoir (car il faut être poli le soir aussi)\
          - ca va ? (le ? est important, sinon je ne peux pas deviner que c'est une question)\
          - wesh (#Ocean)\
          - ping (apporte ta raquette)");

        }
    }  
    
  })

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

bot.login(process.env.BOT_TOKEN)