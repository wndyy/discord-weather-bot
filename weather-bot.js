// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], partials: [Partials.Channel] });

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

// Log In our bot
client.login(process.env.DISCORD_TOKEN);

client.on('messageCreate', msg => {
    // You can view the msg object here with console.log(msg)
    console.log(msg)
     if (msg.content === 'Hello') {
       msg.reply(`Hello ${msg.author.username}`);
     }
     if (msg.content === 'What time is it?') {
      msg.reply(`It's time to watch tv!`);
    }
    });
    
