import { ButtonBuilder, ButtonStyle } from 'discord.js';
import { CommandName } from '../../../commands/config';
import { ButtonHanlderType } from '../types';
import { Log } from '../../../tools/logger';

export const buttonNames = {
    okay: `${CommandName.helpie}_okay`,
    cancel: `${CommandName.helpie}_cancel`,
};

export const okayButton: ButtonHanlderType = {
    id: buttonNames.okay,
    component: new ButtonBuilder()
        .setCustomId(buttonNames.okay)
        .setLabel('Okay')
        .setStyle(ButtonStyle.Primary),
    exec: async function (button) {
        try {
            await Promise.all([
                button.reply({ content: 'okay' }),
                button.message.delete(),
            ]);
        } catch (error) {
            Log(['Cannot click success on the hemlpie command', error], true);
        }
    },
};

export const cancelButton: ButtonHanlderType = {
    id: buttonNames.cancel,
    component: new ButtonBuilder()
        .setCustomId(buttonNames.cancel)
        .setLabel('Cancel')
        .setStyle(ButtonStyle.Danger),
    exec: async function (button) {
        try {
            await button.message.delete();
        } catch (error) {
            Log(['Cannot click cancel on the hemlpie command', error], true);
        }
    },
};
