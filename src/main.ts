import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv";
dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, (interaction) => {

	if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    switch (commandName)
    {
        case 'ping':
            interaction.reply("pong !");
    }
});

client.login(process.env.BOT_TOKEN);