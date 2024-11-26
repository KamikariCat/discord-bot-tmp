import { CommandName, ContextCommandName } from './config';
import { messageCommand } from './messageContext/command';
import { help } from './slashes/help';
import { microHelper } from './slashes/help/microHelper';
import { Command, SlashSubcommand } from './types';
import { userCommand } from './userContext/command';

export * from './config';

export const CommandsList: Record<string, Command> = {
    [CommandName.help]: help,
    // Context commands
    [ContextCommandName.user]: userCommand,
    [ContextCommandName.message]: messageCommand,
};
export const SubcommandsList: Record<string, SlashSubcommand> = {
    [CommandName.helpie]: microHelper,
};

export const Commands = {
    ...CommandsList,
    ...SubcommandsList,
};
