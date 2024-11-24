import { ActionRowBuilder, ButtonBuilder } from 'discord.js';
import {
    cancelButton,
    okayButton,
} from '../../../components/buttons/helpCommand';

export const actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
    okayButton.component,
    cancelButton.component
);
