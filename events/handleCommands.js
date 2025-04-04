const showInfo = require('../utils/logs/showInfo');
const commands = {
  addFriend: require('../commands/addfriend'),
  backpack: require('../commands/backpack'),
  changeGamemode: require('../commands/changegamemode'),
  clearFriends: require('../commands/clearfriends'),
  crowns: require('../commands/crowns'),
  emote: require('../commands/emote'),
  friendList: require('../commands/friendlist'),
  help: require('../commands/help'),
  inviteFriend: require('../commands/invitefriend'),
  kick: require('../commands/kick'),
  level: require('../commands/level'),
  logout: require('../commands/logout'),
  outfit: require('../commands/outfit'),
  pickaxe: require('../commands/pickaxe'),
  promote: require('../commands/promote'),
  removeFriend: require('../commands/removefriend'),
  setStatus: require('../commands/setstatus'),
  showCrowns: require('../commands/showcrowns'),
  showCrown: require('../commands/showcrowns'),
  stopEmote: require('../commands/stopemote'),
  stopTimer: require('../commands/stoptimer'),
};

const handleCommands = async (message, botClient) => {
  const usedClient = botClient.user.self.displayName;
  showInfo(`${message.author.displayName}: ${message.content}`, 'party');

  const commandMatch = message.content.match(/^bot@(\w+)/);
  if (commandMatch) {
    const command = commandMatch[1];

    if (commands[command]) {
      try {
        await commands[command](message, botClient);
      } catch (error) {
        console.error(`Erreur lors de l'exécution de la commande ${command}:`, error);
      }
    } else {
      console.log(`Command : ${command}`);
    }
  }
};

module.exports = handleCommands;
