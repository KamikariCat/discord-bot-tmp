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

export type BaseCommand<N, E> = {
    name: N;
    exec: E;
    type:
        | 'slash-command'
        | 'slash-subcommand'
        | 'message-context-command'
        | 'user-context-command';
};

export type SlashCommand = BaseCommand<
    CommandName,
    CommandExecFunction<ChatInputCommandInteraction>
> & {
    type: 'slash-command';
    builder: SlashCommandBuilder | SlashCommandSubcommandBuilder;
};

export type SlashSubcommand = BaseCommand<
    CommandName,
    CommandExecFunction<ChatInputCommandInteraction>
> & {
    type: 'slash-subcommand';
    builderCb: (
        builder: SlashCommandSubcommandBuilder
    ) => SlashCommandSubcommandBuilder;
};

export type MessageContextCommand = BaseCommand<
    ContextCommandName,
    CommandExecFunction<MessageContextMenuCommandInteraction>
> & {
    type: 'message-context-command';
    builder: ContextMenuCommandBuilder;
};

export type UserContextCommand = BaseCommand<
    ContextCommandName,
    CommandExecFunction<UserContextMenuCommandInteraction>
> & {
    type: 'user-context-command';
    builder: ContextMenuCommandBuilder;
};

export type Command = SlashCommand | MessageContextCommand | UserContextCommand;
