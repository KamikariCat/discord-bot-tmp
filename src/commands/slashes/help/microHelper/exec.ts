import { EmbedBuilder } from 'discord.js';
import { CommandExecFunction, CommandInterraction } from '../../../types';
import { actionRow } from './components';

const exec: CommandExecFunction<CommandInterraction> = async (command) => {
    await command.reply({
        content: ';l;l',
        embeds: [new EmbedBuilder().setDescription('hahaha')],
        components: [actionRow],
    });
};

export default exec;
