export default {
  name: 'ready',
  once: true,
  run: (client) => {
    console.log(`Logged as ${client.user.tag}`);
    client.user.setPresence({ activity: { name: 'Seeing my developer suffer 💞...' }, status: 'online' })
      .catch(console.error);
  },
};
