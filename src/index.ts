import { ChatInputCommandInteraction } from 'discord.js';
import { slashCommandHandler } from './handlers/slashCommandHandler';
import { DClient } from './init/DClient';

DClient.once('ready', (client) => {
    client.on('interactionCreate', (interaction) => {
        if (interaction instanceof ChatInputCommandInteraction) {
            slashCommandHandler();
        }
    });
});
