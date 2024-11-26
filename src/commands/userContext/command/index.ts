import { ApplicationCommandType, ContextMenuCommandBuilder } from 'discord.js';
import { ContextCommandName } from '../../config';
import { UserContextCommand } from './../../types';
import { Log } from '../../../tools/logger';

export const userCommand: UserContextCommand = {
    name: ContextCommandName.user,
    type: 'user-context-command',
    builder: new ContextMenuCommandBuilder()
        .setName(ContextCommandName.user)
        // @ts-ignore
        .setType(ApplicationCommandType.User),
    exec: async function (command) {
        Log(command.commandName);
    },
};
