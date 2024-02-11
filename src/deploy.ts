import { REST, SlashCommandBuilder } from 'discord.js';
import { Routes } from 'discord-api-types/v9';
import dotenv from "dotenv";
dotenv.config();

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
];

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN!);

rest.put(Routes.applicationGuildCommands(process.env.APP_ID!, process.env.GUILD_ID!), {
    body: commands.map(command => command.toJSON())
})
.then(() => {
    console.log("Registered commands successfully !");
})
.catch(error => {
    console.error(error);
});