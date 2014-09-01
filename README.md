# CyTube Plus
<p align="center"><img src="https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png"/></p>

**Important**: august 2014, big update finished. Version **4.5** now available! Scroll down to see detailed list of changes.

## About

### Q: What is CyTube Plus?

**A:** It's an easy to configure, powerful <b>JavaScript/CSS library</b> for [CyTube](https://github.com/calzoneman/sync) channels administrators, adding new features and enhancements. Latest release works with **3.0** branch CyTube versions.

### Q: Where can I see CyTube Plus in action?

**A:** Go to example http://cytu.be/r/plus channel. All library options in this room are enabled by default.

### Q: What this library exactly does?

**A:** See detailed list on the [Features](https://github.com/zimny-lech/CyTube-Plus/wiki/Features) page. Currently script administrators can set up **66 options**.

### Q: Something is not working, what to do?

**A:** See [Troubleshooting](https://github.com/zimny-lech/CyTube-Plus/wiki/Troubleshooting) page. If you will not find the answer, open a new [issue](https://github.com/zimny-lech/CyTube-Plus/issues).

### Q: Where can I read more about it?

**A:** You can find many detailed informations on the [CyTube Plus Wiki](https://github.com/zimny-lech/CyTube-Plus/wiki).

### Q: Is it free?

**A:** Yes. CyTube Plus is licensed under MIT License (see [LICENSE](https://github.com/zimny-lech/CyTube-Plus/blob/master/LICENSE) for the full text).

## Installation

### Customized, advanced installation

> Note: don't be afraid to configure! Go to [Wiki](https://github.com/zimny-lech/CyTube-Plus/wiki) for help. If all fails, copy default `main.js` file, and try to change variables one by one - this way you will find what's wrong.

1. Open content of `main.js` file in a text editor.
2. Scroll down to configuration sections and configure library according to your wishes. All options are explained on the [FAQ](https://github.com/zimny-lech/CyTube-Plus/wiki/FAQ) page.
3. Save customized JS library as well as `main.css` file to your file hosting (e.g. <i>Dropbox</i><sup>1</sup>) or to your own server<sup>2</sup>.
4. Enter your JS and CSS files location in "Channel Options", and save.

<sup>1</sup><i>Warning! Always use `dl.dropboxusercontent.com` URL instead of `www.dropbox.com`.</i><br/><sup>2</sup><i>Warning! You must be able to **access .js file directly** (browser's URL must end with `.js` extension, other extensions such `.php` etc. sometimes cause problems).</i>

### Simple installation

> Note: some features will be disabled.

1. Click "Channel Settings" header link and select "Admin Settings".
2. In "External Javascript" field enter JavaScript library URL given below:
   `https://dl.dropboxusercontent.com/s/2uks4pif8mx2qab/main-ready.js`
3. In "External CSS" field enter CSS library URL given below:
   `https://dl.dropboxusercontent.com/s/180y5d6mvlu8kd8/main.css`
4. Save changes - congratulations, your have just installed basic version of CyTube Plus!

## Feedback

Go to the [Issues](https://github.com/zimny-lech/CyTube-Plus/issues) page.

Just **create a new issue**. If you have problems with configurating or using CyTube Plus read [Troubleshooting](https://github.com/zimny-lech/CyTube-Plus/wiki/Troubleshooting) first.

Feel free to ask anything about this library. If you have a suggestion, an idea how to speed up/shorten/improve some functions or you would like to see a new feature, don't be afraid to make a request.

## What has been changed in the newest version?

- Adding possibility to embed images and videos such .webm on the chat, script admin can configure accepted filetypes and/or sources, user can easily toggle between embeddings and text links
- Adding chat text speaking option with external "WebAnywhere" online application, supporting english ("!say" command) and polish ("!mow")
- Adding MOTD tabs application to create homepage-like channel header, using simple HTML
- Adding pagination option in the emotes panel with configurable number of displaying emotes
- Adding switch ("Func" in the chat header) for channel admins with 2 buttons:
  - Auto Clear, automatically clearing chat window during spam attacks or raids, preventing room freezing
  - Anti AFK, preventing from AFK if you leave for a moment (and don't want to be excluded from voteskipping etc.)
- Adding 5-way volume level regulation for both: sound filters and text speaking
- Adding 2 modes in Playlist URLs modal window:
  - Ordered List - list alphabetically ordered by titles
  - Database Format - list specially prepared for script Channel Database
- Adding option to automatic display of squavatars (2-colored square avatars) before every message
- Adding option to change character adding to username on the chat messages (default ":")
- Adding "!memestats" commands to display number of used channel memes by a user
- Deleting necessity of the "StoragePrefix" manual setting, now auto-defined as room name
- Deleting "/reload" command due to possibility to use it by people who deny permission to run script
- Moving few CSS selectors from main CSS to JS for better compatibility with users who has not given permission to run script, due to necessary accepting external JS
- Back to independent channel emotes with configurable size for some script admins who need additional mods-independent permanent emotes
- Adding Google Analytics short code
- Adding option for custom add/refresh/voteskip button captions, and custom welcome message
- Better unicode buttons arrangement - now fit automatically with a side margin
- Creating 2 another layout options after loading for all users (using Local Storage or cookies):
  - Not displaying layout box (switching with "Layout" button)
  - Fluid layout is now stored in user options (default after loading if checked)
- Fixing display modes after media changes and browser resizing
- Fixing not aligned vertically checkboxes in Chrome
- Fixing channel CSS position between stylesheets in the HTML header
- Fixing bad download links after move some items on the playlist
- Fixing unability to show player again if refreshed after hiding
- Fixing wrong sounds panel properties after mode and theme change - now automatically back to userlist
- Fixing permission for displaying "/clear" button
- Fixing reset layout option for channels with disabled "default old Synchtube layout" option
- Fixing tooltips for chat voices button
- Patching "#playlistmanagerwrap" hidden free space if user is unregistered
- Deleting ".userlist_item" cursor from CSS - it is now implemented in default CyTube application
- A few minor code changes not affecting functionality
