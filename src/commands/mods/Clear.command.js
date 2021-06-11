export default {
  name: 'Clear',
  aliases: ['cls', 'faxina'],
  description: 'Clear a certain number of messages from a text channel.',
  permissions: ['MANAGE_MESSAGES'],
  run: async ({ message, args }) => {
    if (args[0]) {
      if (isNaN(args[0]))
        return message.reply('Você precisa informar um numero!');

      if (args[0] >= 1 && args[0] <= 100) {
        message.delete();
        await message.channel.messages
          .fetch({ limit: args[0] })
          .then((messages) => {
            message.channel.bulkDelete(messages, true);
          });
      } else {
        return message.reply(
          'Você precisa informar o numero de mensagens a serem deletadas, entre 1 e 100.'
        );
      }
    } else {
      return message.reply(
        'Você precisa informar o numero de mensagens a serem deletadas!'
      );
    }
  },
};
