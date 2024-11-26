import { ChatInputCommandInteraction } from 'discord.js';
import { CommandName, Commands } from '../commands';
import { Log } from '../tools/logger';

export function slashCommandHandler(command: ChatInputCommandInteraction) {
    let commandName: string;
    try {
        commandName = command.options.getSubcommand() || command.commandName;
        //eslint-disable-next-line
    } catch (error) {
        commandName = command.commandName;
        Log([command.commandName, 'No subcommand'], true);
    }

    if (command.commandName in CommandName) {
        const commandInstance = Commands[commandName as CommandName];

        if (!commandInstance) {
            return Log([commandName, 'is not found'].join(' '), true);
        }

        if (
            commandInstance.type === 'slash-subcommand' ||
            commandInstance.type === 'slash-command'
        ) {
            commandInstance.exec(command);
        }
    }
}
