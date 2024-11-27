import { ApplicationCommandType, ContextMenuCommandBuilder } from 'discord.js';
import { ContextCommandName } from '../../config';
import { UserContextCommand } from '../../../tools/types';
import { Log } from '../../../tools/logger';

export const showUserName: UserContextCommand = {
    name: ContextCommandName.showUserName,
    type: 'user-context-command',
    builder: new ContextMenuCommandBuilder()
        .setName(ContextCommandName.showUserName)
        // @ts-ignore
        .setType(ApplicationCommandType.User),
    exec: async function (command) {
        Log(command.targetMember?.user.username);
    },
};
