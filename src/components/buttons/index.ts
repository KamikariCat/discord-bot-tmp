import { cancelButton, okayButton } from './helpCommand';
import { ButtonHanlderType } from './types';

export const Buttons: Record<string, ButtonHanlderType> = {
    // Help command
    [okayButton.id]: okayButton,
    [cancelButton.id]: cancelButton,
};
