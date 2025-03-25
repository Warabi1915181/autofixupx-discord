const discord = require('discord.js');
const client = new discord.Client();

// Replace Twitter/X URLs with fxtwitter.com
client.on('messageCreate', async (message) => {
    // Ignore messages from bots to prevent potential loops
    if (message.author.bot) return;

    // Regular expression to match Twitter/X URLs
    const twitterRegex = /(https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[^\s]+)/g;
    
    // Check if message contains Twitter/X URLs
    if (twitterRegex.test(message.content)) {
        // Replace all Twitter/X URLs with fxtwitter.com
        const fixedContent = message.content.replace(twitterRegex, (url) => {
            return url.replace(/(twitter\.com|x\.com)/, 'fxtwitter.com');
        });

        // Send the fixed message
        await message.reply(fixedContent);
    }
});

// Replace the TOKEN with your actual bot token
client.login(process.env.DISCORD_TOKEN);
