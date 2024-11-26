import { SlashCommandBuilder } from 'discord.js';
import { CommandName } from '../../config';
import { Command } from '../../types';
import { microHelper } from './microHelper';

const builder = new SlashCommandBuilder();
builder.setName(CommandName.help).setDescription('Helo command');
// Use options or subcommand/subcommand group instead not both!
builder.addSubcommand(microHelper.builderCb);

export const help: Command = {
    builder,
    type: 'slash-command',
    name: CommandName.help,
    exec: async function () {},
};
