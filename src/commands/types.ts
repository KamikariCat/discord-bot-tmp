import {
    ChatInputCommandInteraction,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandBuilder,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import { CommandName, ContextCommandName } from './config';

export enum CommandType {
    SLASH = 'SLASH',
}

export type CommandInterraction =
    | ChatInputCommandInteraction
    | MessageContextMenuCommandInteraction
    | UserContextMenuCommandInteraction;

export type CommandExecFunction<T extends CommandInterraction> = (
    command: T
) => Promise<void>;

export type Command = {
    name: CommandName;
    exec: CommandExecFunction<CommandInterraction>;
    builder: SlashCommandBuilder | SlashCommandSubcommandBuilder;
};

export type Subcommand = {
    name: CommandName;
    builderCb: (
        builder: SlashCommandSubcommandBuilder
    ) => SlashCommandSubcommandBuilder;
    exec: CommandExecFunction<CommandInterraction>;
};

export type MessageContextCommand = {
    name: ContextCommandName;
    builder: ContextMenuCommandBuilder;
    exec: MessageContextMenuCommandInteraction;
};

export type UserContextCommand = {
    name: ContextCommandName;
    builder: ContextMenuCommandBuilder;
    exec: UserContextMenuCommandInteraction;
};
