import { ApplicationCommandType, ContextMenuCommandBuilder } from 'discord.js';
import { ContextCommandName } from '../../config';
import { MessageContextCommand } from '../../types';

export const messageCommand: MessageContextCommand = {
    name: ContextCommandName.message,
    builder: new ContextMenuCommandBuilder()
        .setName('message-context')
        // @ts-ignore
        .setType(ApplicationCommandType.Message),
};
