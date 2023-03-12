// Commands V2


/**
 * Format chat messages before sending and execute commands.
 *
 * @param {string} msg
 * @return {string}
 */

// socket.emit('chatMsg', {msg: '[red]Meh..[/] ResidentSleeper'});
export function getChatCommands(msg) {
  const cmd = msg.startsWith('!');
  switch (`${cmd}penis`) {
    case statCmd():
      break;
  }
}

function statCmd() {
  const {numberOfMessages, totalMessageLength} = getChatStats();
  const averageMessageLength =
      numberOfMessages > 0 ? Math.round(totalMessageLength / numberOfMessages) : 0;
  msg = `you have sent ${numberOfMessages} messages, ` +
      `total length is ${totalMessageLength} characters ` +
      `(${averageMessageLength} per message) `;
  return;
}
