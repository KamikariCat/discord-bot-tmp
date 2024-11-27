import { ApplicationCommandType, ContextMenuCommandBuilder } from 'discord.js';
import { ContextCommandName } from '../../config';
import { MessageContextCommand } from '../../../tools/types';
import { Log } from '../../../tools/logger';

export const messageCommand: MessageContextCommand = {
    name: ContextCommandName.message,
    type: 'message-context-command',
    builder: new ContextMenuCommandBuilder()
        .setName(ContextCommandName.message)
        // @ts-ignore
        .setType(ApplicationCommandType.Message),
    exec: async function (command) {
        Log(command.commandName);
    },
};
