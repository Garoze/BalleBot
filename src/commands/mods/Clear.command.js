import { MessageEmbed } from 'discord.js';

const guildID = '634206579327107112';

export default {
  name: 'Clear',
  aliases: ['cls', 'faxina'],
  description: 'Clear a certain number of messages from a text channel.',
  permissions: ['MANAGE_MESSAGES'],
  run: async ({ client, message, args }) => {
    if (!args[0] || isNaN(args[0]))
      return message.reply(
        'You need to inform the message number to be deleted.'
      );

    if (args[0] >= 1 && args[0] <= 100) {
      await message.delete();
      await message.channel.messages
        .fetch({ limit: args[0] })
        .then((msg) => message.channel.bulkDelete(msg, true));

      const embed = new MessageEmbed()
        .setColor(client.guilds.cache.get(guildID).me.displayHexColor)
        .setTitle('🧹 Cleaning up...')
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription(
          `Good now everything is clean.\nA total of **${args[0]}** messages were deleted from this channel.`
        )
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter(`Command by: ${message.member.user.tag}`);

      message.channel
        .send(embed)
        .then((msg) => setTimeout(() => msg.delete(), 5000));
    } else {
      return message.reply('Please inform a number between 1 and 100.');
    }
  },
};
