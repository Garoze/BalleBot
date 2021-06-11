export default {
  name: 'Ping',
  description: '',
  aliases: ['pg'],
  permissions: [],
  run: ({ message }) => {
    message.reply('Pong!');
  },
};
