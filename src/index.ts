import {
    ButtonInteraction,
    ChatInputCommandInteraction,
    MessageContextMenuCommandInteraction,
    ModalSubmitInteraction,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import { slashCommandHandler } from './handlers/slashCommandHandler';
import { DClient } from './init/DClient';
import { buttonHandler } from './handlers/buttonHandler';

DClient.once('ready', (client) => {
    client.on('interactionCreate', (interaction) => {
        if (interaction instanceof ChatInputCommandInteraction) {
            slashCommandHandler(interaction);
        } else if (interaction instanceof ButtonInteraction) {
            buttonHandler(interaction);
        } else if (
            interaction instanceof MessageContextMenuCommandInteraction
        ) {
            // ...
        } else if (interaction instanceof UserContextMenuCommandInteraction) {
            // ...
        } else if (interaction instanceof ModalSubmitInteraction) {
            // ...
        }
    });
});
