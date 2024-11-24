import { Log } from '../../../tools/logger';
import { CommandName } from '../../config';
import { Subcommand } from '../../types';

export const microHelper: Subcommand = {
    name: CommandName.helpie,
    builderCb(builder) {
        builder.setName(CommandName.helpie).setDescription('helpie cubcommand');
        builder.addBooleanOption((option) =>
            option.setName('yes').setDescription('yes or no?')
        );
        return builder;
    },
    exec: async function (command) {
        Log('SUB' + command.commandName);
    },
};
