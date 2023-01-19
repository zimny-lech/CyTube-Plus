// Commands V2


/**
 * Format chat messages before sending and execute commands.
 *
 * @param {string} msg
 * @return {string}
 * @type {!Map<string, Handler>}
 */

export function getChatCommands(msg) {
  const COMMANDS = new Map();

  // socket.emit('chatMsg', {msg: '[red]Meh..[/] ResidentSleeper'});

  COMMANDS.set('penis', (msg) => {
    if (msg.startsWith('!')) {
      socket.emit('chatMsg', {msg: 'penis'});
    }
  });
  return msg;
}
