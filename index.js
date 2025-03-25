require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Replace Twitter/X URLs with fxtwitter.com
client.on("messageCreate", async (message) => {
  // Ignore messages from bots to prevent potential loops
  if (message.author.bot) return;

  const twitterRegex =
    /(https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[^\s]+)/g;

  if (twitterRegex.test(message.content)) {
    const fixedContent = message.content.replace(twitterRegex, (url) => {
      return url.replace(/(twitter\.com|x\.com)/, "vxtwitter.com");
    });

    // Format the message with the author's mention
    const content = `${message.author}:\n${fixedContent}`;

    await message.reply(content);

    try {
      await message.delete();
    } catch (error) {
      console.error("Failed to delete message:", error);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
console.log("Running...");
