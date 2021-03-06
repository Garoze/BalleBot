import path from 'path';
import { readdirSync } from 'fs';
import { Collection } from 'discord.js';

const commandFolders = ['everyone', 'padawan', 'mods', 'staff'];

const CommandHandler = () => {
  const returnCollection = new Collection();

  if (commandFolders) {
    commandFolders.forEach((folder) => {
      const folderPath = path.resolve(
        path.dirname(''),
        'src',
        'commands',
        folder
      );

      const commandFiles = readdirSync(folderPath).filter((file) =>
        file.endsWith('.command.js')
      );

      commandFiles.forEach(async (file) => {
        const { default: command } = await import(`./${folder}/${file}`);
        returnCollection.set(command.name.toLowerCase(), command);
      });
    });
  }

  return returnCollection;
};

export default CommandHandler;
