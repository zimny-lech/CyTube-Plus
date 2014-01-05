# CyTube Plus
<p align="center"><img src="https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png"/></p>
## About

***

### Q: What is CyTube Plus?

**A:** It's an easy to configure, powerful <b>JavaScript/CSS library</b> for [CyTube](https://github.com/calzoneman/sync) channels administrators, adding new features and enhancements. Latest release works with **2.4.5** or **2.4.6** CyTube version.

Latest release includes links from my personal example set of channel themes, logos and emotes. During library customization you can leave it, remove any element, or expand it by adding your own links.

Technically, this library collects ideas from old Synchtube various rooms plus my own enhancements. You can recognize some elements, if you were an administrator. Those old fragments of code has been rewrited and adapted to CyTube API and layout, and supplemented with the new features.

### Q: Where can I see CyTube Plus in action?

**A:** Go to example http://cytu.be/r/plus channel. All library options in this room are enabled by default.

***

### Q: What this library exactly does?

**A:** See detailed list on the [Features](https://github.com/zimny-lech/CyTube-Plus/wiki/Features) page. Currently script administrators can set up **52 options**.

### Q: Something is not working, what to do?

**A:** See [Troubleshooting](https://github.com/zimny-lech/CyTube-Plus/wiki/Troubleshooting) page. If you will not find the answer, open a new [issue](https://github.com/zimny-lech/CyTube-Plus/issues).

### Q: Where can I read more about it?

**A:** You can find many detailed informations on the [CyTube Plus Wiki](https://github.com/zimny-lech/CyTube-Plus/wiki).

### Q: Is it free?

**A:** Yes. CyTube Plus is licensed under MIT License (see [LICENSE](https://github.com/zimny-lech/CyTube-Plus/blob/master/LICENSE) for the full text).

## Installation

### Simple installation

> Note: some features will be disabled.

1. Go to your channel's "Moderation Menu" and select "Channel Options".
2. In "External Javascript" field enter JavaScript library URL given below:
   `https://dl.dropboxusercontent.com/s/g0td1wn8rfdotsj/main.js`
3. In "External CSS" field enter CSS library URL given below:
   `https://dl.dropboxusercontent.com/s/cpxosyfbdnn8qoc/main.css`
4. Save changes - congratulations, your have just installed basic version of CyTube Plus!

### Customized, advanced installation

> Note: don't be afraid to configure! Go to [Wiki](https://github.com/zimny-lech/CyTube-Plus/wiki) for help. If all fails, copy default `main.js` file, and try to change variables one by one - this way you will find what's wrong.

1. Open content of `main.js` file in a text editor.
2. Scroll down to configuration sections and configure library according to your wishes<sup>1</sup>. All options are explained for non-advanced users.
3. Save customized JS library as well as `main.css` file to your file hosting (e.g. <i>Dropbox</i><sup>2</sup>) or to your own server<sup>3</sup>.
4. Enter your JS and CSS files location in "Channel Options", and save.

<sup>1</sup><i>Note: I highly recommend you to change default `CookiePrefix` variable (to prevent from using cookies from other channels).</i><br/><sup>2</sup><i>Warning! Always use `dl.dropboxusercontent.com` URL instead of `www.dropbox.com`.</i><br/><sup>3</sup><i>Warning! You must be able to **access .js file directly** (browser's URL must contain `.js` extension, not `.php` etc.).</i>

**Additional recommended actions for more advanced users:**

1. Copy all files used by CyTube Plus (JS, CSS, images) to your own location (using my default URLs by many users may increase library responding time).
2. Change all necessary URL paths during library customization.

## Feedback

Go to the [Issues](https://github.com/zimny-lech/CyTube-Plus/issues) page.

Just **create a new issue**. If you have problems with configurating or using CyTube Plus read [Troubleshooting](https://github.com/zimny-lech/CyTube-Plus/wiki/Troubleshooting) first.

Feel free to ask anything about this library. If you have a suggestion, an idea how to speed up/shorten/improve some functions or you would like to see a new feature, don't be afraid to make a request.
