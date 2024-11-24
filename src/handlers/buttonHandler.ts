import { ButtonInteraction } from 'discord.js';
import { Buttons } from '../components/buttons';
import { Log } from '../tools/logger';

export function buttonHandler(buttonInteraction: ButtonInteraction) {
    const buttonHandler = Buttons[buttonInteraction.customId];

    if (!buttonHandler) {
        return Log(
            `${buttonInteraction.customId} is not found in button handlers list`,
            true
        );
    }

    buttonHandler.exec(buttonInteraction).catch((error) => Log(error, true));
}
