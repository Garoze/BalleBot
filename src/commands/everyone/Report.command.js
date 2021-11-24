export default {
  name: 'Report',
  description: 'Report a user to the administration.',
  aliases: ['rpt'],
  permissions: ['SEND_MESSAGE'],
  run: ({ message, args }) => {
    console.log(args);
  },
};
