module.exports = {
  config: {
    name: "togglebot",
    version: "1.1",
    author: "Samir× Mahi--",
    countDown: 45,
    role: 2,
    shortDescription: "Toggle bot on or off",
    longDescription: "Turn the bot on or off",
    category: "owner",
    guide: "{p}{n} [on | off]"
  },
  onStart: async function ({ event, api, args }) {
    if (args[0] === "off") {
      api.sendMessage(
        "╔════ஜ۩۞۩ஜ═══╗\n\n📴 Successfully Turned Off Archives System ✅\n╚════ஜ۩۞۩ஜ═══╝",
        event.threadID,
        () => process.exit(0)
      );
    } else if (args[0] === "on") {
      api.sendMessage(
        "╔════ஜ۩۞۩ஜ═══╗\n\n📳 Successfully Turned On Archives System ✅\n╚════ஜ۩۞۩ஜ═══╝",
        event.threadID
      );
    } else {
      api.sendMessage(
        "Invalid command. Use `{p}{n} [on | off]` to toggle the bot.",
        event.threadID
      );
    }
  }
};
