import {
    ButtonInteraction,
    ChatInputCommandInteraction,
    Client,
    MessageContextMenuCommandInteraction,
    ModalSubmitInteraction,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import { slashCommandHandler } from '../handlers/slashCommandHandler';
import { buttonHandler } from '../handlers/buttonHandler';
import { contextCommandHandler } from '../handlers/contextCommandHandler';

export function InteractionModule(client: Client<true>) {
    client.on('interactionCreate', (interaction) => {
        if (interaction instanceof ChatInputCommandInteraction) {
            slashCommandHandler(interaction);
        } else if (interaction instanceof ButtonInteraction) {
            buttonHandler(interaction);
        } else if (
            interaction instanceof MessageContextMenuCommandInteraction ||
            interaction instanceof UserContextMenuCommandInteraction
        ) {
            contextCommandHandler(interaction);
        } else if (interaction instanceof ModalSubmitInteraction) {
            // ...
        }
    });
}
