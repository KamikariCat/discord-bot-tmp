import { cancelButton, okayButton } from './helpCommand';
import { ButtonHanlderType } from '../../tools/types';

export const Buttons: Record<string, ButtonHanlderType> = {
    // Help command
    [okayButton.id]: okayButton,
    [cancelButton.id]: cancelButton,
};
