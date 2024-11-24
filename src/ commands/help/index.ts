import { SlashCommandBuilder } from 'discord.js';
import { CommandName } from '../config';
import { Command } from '../types';
import { Log } from '../../tools/logger';
import { microHelper } from './microHelper';

const builder = new SlashCommandBuilder();
builder.setName(CommandName.help).setDescription('Helo command');
// Use options or subcommand/subcommand group instead not both!
builder.addSubcommandGroup((group) =>
    group
        .setName('help-roup')
        .setDescription('desc')
        .addSubcommand(microHelper.builderCb)
);
// builder.addSubcommand();

export const help: Command = {
    builder,
    name: CommandName.help,
    exec: async function (command) {
        Log('HELP' + command.commandName);
    },
};
