import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
import { Log } from '../tools/logger';

export const DClient = new Client({
    intents:
        GatewayIntentBits.Guilds |
        GatewayIntentBits.GuildMessages |
        GatewayIntentBits.MessageContent |
        GatewayIntentBits.GuildIntegrations,
});

DClient.login(process.env.TOKEN || '')
    .then(() => Log('Logged in'))
    .catch((err) => {
        Log(String(err));
    });
