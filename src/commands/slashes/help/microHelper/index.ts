import { CommandName } from '../../../config';
import { SlashSubcommand } from '../../../types';
import exec from './exec';

export const microHelper: SlashSubcommand = {
    name: CommandName.helpie,
    type: 'slash-subcommand',
    builderCb(builder) {
        builder.setName(CommandName.helpie).setDescription('helpie cubcommand');
        builder.addBooleanOption((option) =>
            option.setName('yes').setDescription('yes or no?')
        );
        return builder;
    },
    exec,
};
