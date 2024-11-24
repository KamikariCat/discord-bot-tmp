import { ButtonBuilder, ButtonInteraction } from 'discord.js';

export type ButtonExecFunc = (button: ButtonInteraction) => Promise<void>;

export type ButtonHanlderType = {
    id: string;
    component: ButtonBuilder;
    exec: ButtonExecFunc;
};
