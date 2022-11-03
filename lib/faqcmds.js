import {MessagesSuffix_Percentage, UI_MessagesSuffix} from './main.js';

/**
 * Format chat messages before sending and execute commands.
 *
 * @param {string} faq
 * @return {string}
 */

export function prepareFaqMessage(faq) {
  if (UI_MessagesSuffix) {
    if ((typeof MessagesSuffix_Percentage !== 'number') || MessagesSuffix_Percentage < 0) {
      MessagesSuffix_Percentage = '10';
    }
    if (Math.random() < (MessagesSuffix_Percentage / 100)) {
      msg += ' ' + MessagesSuffix_Text;
    }
  }
  if (UI_UserCommands && msg.startsWith('!')) {
    COMMAND = true;
    if (msg.startsWith('!stat')) {
      const {numberOfMessages, totalMessageLength} = getChatStats();
      const averageMessageLength =
          numberOfMessages > 0 ? Math.round(totalMessageLength / numberOfMessages) : 0;
      msg = `you have sent ${numberOfMessages} messages, ` +
          `total length is ${totalMessageLength} characters ` +
          `(${averageMessageLength} per message) `;
    } else if (msg.startsWith('!pick ')) {
      const arr = msg.split('!pick ')[1].split(',');
      const rnd = Math.round(Math.random() * (arr.length - 1));
      msg = arr[rnd];
    } else if (msg.startsWith('!ask ')) {
      if (AskAnswers_Array.length < 1) {
        AskAnswers_Array = ['yes', 'no'];
      }
    }
  }
}
