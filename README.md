# Fix up X (Twitter) Embeds in Discord

This is a discord bot that automatically

## Setting up

Follow the official guides below to set up the bot in the developer portal.

- [Set up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

In the bot application, go to Bot and enable `Message Content Intent`.
This enables the bot to read user messages sent in the server and fixup any X/Twitter links when applicable.

Clone this repository. Go to the root directory of the cloned repository and run `npm i` to install the dependencies.

Then go to the [Discord Developer Portal](https://discord.com/developers/applications), go to your bot application and copy the token.
See the [official documentation here](https://discordjs.guide/creating-your-bot/main-file.html#using-config-json) for details.
Create a file called `.env` and replaces `{YOUR_TOKEN}` with your copied token.

```
DISCORD_TOKEN={YOUR_TOKEN}
```

## Usage

After successfully setting up, run `node index.js` to run the bot locally.
