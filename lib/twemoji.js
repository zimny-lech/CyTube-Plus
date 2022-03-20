/**
 * Load and manage twemojis.
 *
 * https://github.com/twitter/twemoji#api
 */

/**
 * @typedef {Object} Twemoji Representation of a twemoji emoji.
 * @property {string} codes Unicode code of the emoji, i.e. "1F600"
 * @property {string} char The unicode character of the emoji, i.e. "😀"
 * @property {string} name Human-readable name of the emoji, i.e. "grinning face"
 * @property {string} category Specific category of the emoji, i.e. "Smileys & Emotion
 *    (face-smiling)"
 * @property {string} group Broader group of the emoji, i.e. "Smileys & Emotion"
 * @property {string} subgroup Subgroup of the emoji, i.e. "face-smiling"
 */

export async function initTwemoji() {
  await loadTwemojiScript();
  console.log('Loaded twemoji.js');

  const twemojisWithSkinTones = await loadTwemojiEmojis();
  console.log(`Loaded ${twemojisWithSkinTones.length} twemojis`);

  // Skin tone emojis currently aren't processed correctly. Skip them.
  const twemojisBeforeDedup =
      twemojisWithSkinTones.filter((twemoji) => !twemoji.name.includes('skin tone'));
  console.log(`Filtered to ${twemojisBeforeDedup.length} twemojis`);

  const twemojis = (() => {
    const /** @type {!Array<!Twemoji>} */ dedupedTwemojis = [];
    const /** @type {!Array<string>} */ parsedEmojiNames = [];

    for (const emoji of twemojisBeforeDedup) {
      const name = emoji.name.replace(' ', '-');
      if (parsedEmojiNames.includes(name)) {
        continue;
      }
      dedupedTwemojis.push(emoji);
      parsedEmojiNames.push(name);
    }

    return dedupedTwemojis;
  })();
  console.log(`Deduped to ${twemojis.length} twemojis`);


  for (const emoji of twemojis) {
    const name = ':' + emoji.name.replace(' ', '-') + ':';
    const image = getTwemojiUrl(emoji);

    // Add the emote when the browser determines it has time to do so.
    requestIdleCallback(() => addEmote(name, image));
  }

  // Disabled for now - the emotes are added lazily for performance reasons.
  //
  // to get fix previous chat messages that didn't have the emote parsed I will grab them now
  // const messageBuffer = document.getElementById('messagebuffer');
  // for (const messageContainer of Array.from(messageBuffer.children)) {
  //   // this is assuming we don't have any other classes for chat messages, which might change in
  //   // the future but I'll update the code to reflect that as well
  //   for (const message of Array.from(messageContainer.querySelectorAll('span:not([class])'))) {
  //     if (message === null) {
  //       continue;
  //     }

  //     twemoji.parse(message);
  //   }
  // }
}

/**
 * Load the twemoji script.
 *
 * @return {!Promise<void>} Promise indicating the function's completion.
 */
async function loadTwemojiScript() {
  return new Promise((resolve, reject) => {
    $.getScript('https://twemoji.maxcdn.com/v/latest/twemoji.min.js', (successText) => {
       resolve(successText);
     }).fail((jqxhr, textStatus, error) => reject(new Error(`${textStatus}: ${error}`)));
  });
}

/**
 * Load the twemoji emojis.
 *
 * @return {!Promise<!Array<!Twemoji>>} Promise resolving to the twemojis.
 */
async function loadTwemojiEmojis() {
  return new Promise((resolve, reject) => {
    $.getJSON('https://unpkg.com/emoji.json/emoji.json', (response) => {
       resolve(response);
     }).fail((jqxhr, textStatus, error) => reject(new Error(`${textStatus}: ${error}`)));
  });
}

const BAD_EMOTE_PATTERN = /\s/g;

/**
 * Add a new emote.
 *
 * Modified version of window.Callbacks.updateEmote() that assumes, for performance reasons, that
 * the emote being updated doesn't yet exist.
 *
 * @param {string} name The emote's name.
 * @param {string} image The emote's image.
 */
function addEmote(name, image) {
  console.log(`Loading emoji ${name}`);
  const emote = {name: name, image: image, regex: new RegExp(name, 'gi')};

  CHANNEL.emotes.push(emote);

  if (BAD_EMOTE_PATTERN.test(name)) {
    CHANNEL.badEmotes.push(emote);
  } else {
    CHANNEL.emoteMap[name] = emote;
  }

  EMOTELIST.handleChange();
  CSEMOTELIST.handleChange();
}

/**
 * Get a URL for an image for a twemoji.
 *
 * Requires twemoji script to be loaded.
 *
 * @param {!Twemoji} emoji Twemoji to retrieve the URL for.
 * @return {string} URL to an image for the twemoji.
 */
function getTwemojiUrl(emoji) {
  const tempDiv = document.createElement('div');
  tempDiv.textContent = emoji.char;

  const src = twemoji.parse(tempDiv).firstElementChild.src;

  tempDiv.remove();

  return src;
}
