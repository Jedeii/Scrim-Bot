module.exports = {
    name: 'snipe',
    description: 'Start a Snipe Lobby',
    cooldown: 5,
    execute(message, args) {
       message.channel.send(`Count down will start in 15 Seconds`);
        setTimeout(function(){
            setTimeout(function(){ 
                message.channel.send(`1`);
                setTimeout(function(){
                    message.channel.send(`2`);
                    setTimeout(function(){ 
                        message.channel.send(`3`);
                        setTimeout(function(){
                            message.channel.send(`GOOO!!!!`);

                            const filter = m => m.content.length == 3;
                            message.channel.send("Waiting for server IDs... Please enter the last 3 digits of your server identifier. When in-game, you find this in the top left corner of your screen. ");
                            const collector = message.channel.createMessageCollector(filter, { time: 15000 });
                            collector.on('collect', m => {console.log(`Collected ${m.content}`);});

                            collector.on('end', collected => {
                            console.log(`Collected ${collected.size} items`);


                            
                            });
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 1000);
    },
};