import 'dotenv/config';
import { REST, Routes } from 'discord.js';
import { Log } from '../src/tools/logger';
import { CommandsList } from '../src/commands';

if (process.env.TOKEN === undefined || process.env.APP_ID === undefined) {
    throw new Error('MISSING .env DATA!!!');
}

const rest = new REST({ version: '10' });
rest.setToken(process.env.TOKEN || '');

async function run() {
    try {
        const commands = Object.values(CommandsList).map((command) => {
            try {
                const data = command.builder.toJSON();
                Log(data.options);
                return data;
            } catch (error) {
                Log('Cannot make json from command ' + error, true);
            }
        });

        //Log({ commands });

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.APP_ID || '',
                process.env.DEV_SERVER || ''
            ),
            {
                body: commands,
            }
        );

        Log('Done');
    } catch (error) {
        Log('Cannot register application commands ' + error, true);
    }
}

run().catch((error) => Log(error, true));
