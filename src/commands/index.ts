import { CommandName, ContextCommandName } from './config';
import { messageCommand } from './messageContext/command';
import { help } from './slashes/help';
import { microHelper } from './slashes/help/microHelper';
import { Command, SlashSubcommand } from '../tools/types';
import { userCommand } from './userContext/command';
import { showUserName } from './userContext/showUserName';

export * from './config';

export const CommandsList: Record<string, Command> = {
    [CommandName.help]: help,
    // Context commands
    [ContextCommandName.user]: userCommand,
    [ContextCommandName.message]: messageCommand,
    [ContextCommandName.showUserName]: showUserName,
};
export const SubcommandsList: Record<string, SlashSubcommand> = {
    [CommandName.helpie]: microHelper,
};

export const Commands = {
    ...CommandsList,
    ...SubcommandsList,
};
