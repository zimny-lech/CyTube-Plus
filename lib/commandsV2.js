// Commands V2


/**
 * Format chat messages before sending and execute commands.
 *
 * @param {string} msg
 * @return {string}
 */

const COMMANDS = new Map();

// socket.emit('chatMsg', {msg: '[red]Meh..[/] ResidentSleeper'});

COMMANDS.set('!penis', () => {
  socket.emit('chatMsg', {msg: 'penis'});
});
