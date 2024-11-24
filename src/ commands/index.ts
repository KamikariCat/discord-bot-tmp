import { CommandName } from './config';
import { help } from './help';
import { microHelper } from './help/microHelper';
import { Command, Subcommand } from './types';

export * from './config';

export const CommandsList: Record<string, Command> = {
    [CommandName.help]: help,
};
export const SubcommandsList: Record<string, Subcommand> = {
    [CommandName.helpie]: microHelper,
};

export const Commands = {
    ...CommandsList,
    ...SubcommandsList,
};
