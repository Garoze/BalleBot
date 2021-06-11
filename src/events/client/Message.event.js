export default {
  name: 'message',
  once: false,
  run: (client, message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(process.env.BOT_PREFIX)) {
      const args = message.content
        .slice(process.env.BOT_PREFIX.length)
        .split(/ +/);
      const commandName = args.shift().toLowerCase();

      if (commandName) {
        const command =
          client.Commands.get(commandName) ||
          client.Commands.find(
            (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
          );

        if (command && command.permissions) {
          if (message.member.hasPermission(command.permissions)) {
            command.run({ client, message, args });
          } else {
            message.reply('Você não tem permissão para usar este comando.');
          }
        }
      }
    }
  },
};
