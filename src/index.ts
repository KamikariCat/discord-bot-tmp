import { DClient } from './init/DClient';
import { InteractionModule } from './modules';

DClient.once('ready', (client) => {
    // Here is callimg all application modules. Comment useless module calls for you.

    // Slash commands, subcommands and context commands
    InteractionModule(client);
});
