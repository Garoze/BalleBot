import { MessageEmbed } from 'discord.js';

const guildID = '634206579327107112';

export default {
  name: 'Ping',
  description: 'Checks the ping.',
  aliases: ['latency'],
  permissions: ['SEND_MESSAGE'],
  run: ({ client, message }) => {
    const embed = new MessageEmbed()
      .setColor(client.guilds.cache.get(guildID).me.displayHexColor)
      .setTitle('Pong! 🏓')
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(
        `**Latency** is \`${
          Date.now() - message.createdTimestamp
        }\` ms. **API Latency** is \`${Math.round(client.ws.ping)}\` ms`
      )
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
      .setFooter(`Command by: ${message.member.user.tag}`);

    message.delete();
    message.channel.send(embed);
  },
};
