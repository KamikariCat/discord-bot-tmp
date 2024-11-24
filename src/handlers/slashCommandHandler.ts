import { ChatInputCommandInteraction } from 'discord.js';
import { CommandName, Commands } from '../ commands';
import { Log } from '../tools/logger';

export function slashCommandHandler(command: ChatInputCommandInteraction) {
    // :TODO: check subcommand get in simple command
    const commandName = command.options.getSubcommand() || command.commandName;

    if (command.commandName in CommandName) {
        const commandInstance = Commands[commandName as CommandName];
        if (!commandInstance) {
            Log([commandName, 'is not found'].join(' '), true);
        } else {
            commandInstance.exec(command);
        }
    }
}
