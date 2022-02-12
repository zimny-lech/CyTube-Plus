class Logo {
  /**
   * A logo for the top of the page.
   *
   * @param {string} url URL of the logo image.
   * @param {number} height Height of the logo (??).
   */
  constructor(url, height) {
    this.url = url;
    this.height = height;
  }
}

export const LOGOS = (() => {
  const /** @type {!Map<string, !Logo>} */ logos = new Map();

  logos.set(
      'cytube plus',
      new Logo(
          'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png',
          90,
          ));

  logos.set(
      'anime girl',
      new Logo(
          'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png',
          200,
          ));

  logos.set(
      'cosmos',
      new Logo(
          'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg',
          200,
          ));

  logos.set(
      'disco ball',
      new Logo(
          'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg',
          162,
          ));

  logos.set(
      'japanese landscape',
      new Logo(
          'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg',
          200,
          ));

  logos.set(
      'korean collage',
      new Logo(
          'https://dl.dropboxusercontent.com/s/qud9adhs183dq30/korea.jpg',
          160,
          ));

  logos.set(
      'my little pony',
      new Logo(
          'my little pony',
          'https://dl.dropboxusercontent.com/s/r4ozo8oj8lmerec/mlp.jpg',
          190,
          ));

  return logos;
})();
