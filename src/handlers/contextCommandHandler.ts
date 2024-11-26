import { CommandName, Commands } from './../commands/index';
import {
    MessageContextMenuCommandInteraction,
    UserContextMenuCommandInteraction,
} from 'discord.js';

export function contextCommandHandler(
    command:
        | UserContextMenuCommandInteraction
        | MessageContextMenuCommandInteraction
) {
    const commandInstance = Commands[command.commandName as CommandName];

    if (!commandInstance) {
        return;
    }

    // FIX TS TYPE COMPLECTIONS TO SIMPLIFY
    if (
        commandInstance.type === 'message-context-command' &&
        command instanceof MessageContextMenuCommandInteraction
    ) {
        commandInstance.exec(command);
    } else if (
        commandInstance.type === 'user-context-command' &&
        command instanceof UserContextMenuCommandInteraction
    ) {
        commandInstance.exec(command);
    }
}
