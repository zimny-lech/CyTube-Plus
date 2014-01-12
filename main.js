/*
The MIT License (MIT)

Copyright (c) 2013-2014 Zimny Lech

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// CyTube Plus - JavaScript and CSS library for CyTube channels enhancements
// Version: 3.0
// Modified: 2014-01-12
// Project URL: https://github.com/zimny-lech/CyTube-Plus
// Wiki URL: https://github.com/zimny-lech/CyTube-Plus/wiki

/*
INSTALLATION

# Simple installation (note: some advanced features are disabled)

1. Go to your channel's "Moderation Menu" and select "Channel Options".
2. In "External Javascript" field enter javascript library URL given below:
   https://dl.dropboxusercontent.com/s/fbdeierbw6u7asc/main.js
3. In "External CSS" field enter CSS library URL given below:
   https://dl.dropboxusercontent.com/s/2rgjlsd0uoe8ooa/main.css
4. Save changes - congratulations, your have just installed basic version of CyTube Plus!

# Advanced installation

Don't be afraid to configure! If something will not work, go to CyTube Plus Wiki for help.
If all fails, copy default "main.js" file, and try to change variables one by one 
- this way you will find what's wrong.

1. Open this file in a text editor or get default file from the link below:
   https://raw.github.com/zimny-lech/CyTube-Plus/master/main.js
2. Scroll down to configuration sections and configure library according to your wishes.
   Note: all options are explained for non-advanced users.
   Note 2: I highly recommend you to change default "CookiePrefix" variable (to prevent from using cookies
           from other CyTube Plus channels).
3. Save customized library to your file hosting (e.g. Dropbox) or to your own server.
   Warning! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
   Warning for Dropbox users! Always use "dl.dropboxusercontent.com" URL instead "www.dropbox.com".
4. Enter your library file location in "Channel Options", and save.

# Additional recommended actions for more advanced users:

1. Copy all files used by CyTube Plus (JS, CSS, images) to your own location 
   (using my default URLs by many users may increase library responding time).
2. Change all necessary URL paths during library customization.
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONFIGURE BELOW BEFORE INSTALLING IF YOU WANT TO CUSTOMIZE THIS LIBRARY

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- STARTING CONFIGURATION - USER INTERFACE (UI) ----- */

/* '1' = option enabled, change to '0' to disable */
/* most options has detailed configuration in the next section */

UI_Favicon = 1; // channel favicon
UI_MiniLogo = 1; // small channel logo in the top navbar
UI_ChannelName = 1; // channel custom brand name
UI_RemoveChatOnly = 0; // removing 'Chat Only' link from the header
UI_HeaderDropMenu = 1; // additional header dropdown menu
UI_CustomHelp = 1; // custom help file
UI_AttentionBar = 1; // imageboard-style attention bar
UI_MOTDAutoLogo = 0; // big channel logo inserted into MOTD
UI_RulesBtn = 1; // button displaying channel rules
UI_ChannelAnnouncement = 1; // additional custom channel announcement
UI_FullTitleBar = 1; // full-width video title bar
UI_ProgressBar = 1; // YouTube/Dailymotion progress bar; REQUIRE: UI_FullTitleBar enabled
UI_TitleBarDescription = 1; // custom title bar description
UI_UserCommands = 1; // additional commands in the chat window
UI_LocalFilters = 1; // default emotes and fonts filters in current chat session, if disabled you must install
                     // filters in channel's 'Multi-Filter Editor' to work (recommended, see FILTERS INSTALLATION)
UI_IndependentFilters = 1; // additional filters visible only in current chat session
UI_UserSpecialSigns = 1; // special signs preceding messages in the chat window for selected users
UI_ChatSuffix = 1; // text added to random chat messages
UI_ChatSound = 1; // custom sound for chat notifications
UI_JoinText = 1; // chat message after user joining
UI_LeaveText = 1; // chat message after user leaving
UI_FontsBtn = 1; // button displaying box with clickable chat fonts
UI_UnicodeChars = 1; // additional buttons in the fonts panel with unicode characters; REQUIRE: UI_FontsBtn enabled
UI_EmotesBtn = 1; // button displaying box with clickable chat emotes
UI_CommandsBtn = 1; // button displaying modal window with chat commands help
UI_HidingImage = 1; // optional covering image after hiding player
UI_PlayerMenu = 1; // player transformations dropdown menu
UI_VoteskipCaption = 1; // custom 'Voteskip' button caption
UI_ExtendedGetURLs = 1; // extended 'Get URLs' function
UI_MinimizeBtn = 1; // layout minimizing button
UI_DisplayModeSel = 1; // selector with player display modes
UI_LayoutThemeSel = 1; // selector with channel themes
UI_ChannelTheme = 1; // additional default theme channel
UI_LayoutDefaultThemes = 1; // default CyTube themes added to themes selector; REQUIRE: UI_LayoutThemeSel enabled
UI_FastCommandsBtns = 1; // buttons with '/clear' and '/afk' functions
UI_YTVolumeBtns = 1; // additional volume buttons for YouTube player
UI_ChannelDatabase = 1; // box with embed additional media database
UI_ChannelGalleries = 1; // box with embed galleries
UI_CustomFooter = 0; // custom channel footer
UI_UserStatistics = 1; // displaying in the footer user visits number and current online time
UI_CustomRightFooter = 0; // channel right-sided footer box
UI_AdditionalScript = 0; // additional script file
UI_DefaultSynchtube = 1; // default Synchtube layout
UI_DefaultPlaylistMenu = 1; // default 'menu' mode of the 'Playlist Controls'
UI_ChannelCache = 1; // caching script emotes, additional media database and default gallery, 
                     // REQUIRE: one of respective options enabled

// below: user cookie prefix
// ATTENTION! use unique, random name using basic letters and numbers to prevent using cookies from other channels

CookiePrefix='g7tr8hgryrtyutr8u97';

// FILTERS INSTALLATION
// set UI_LocalFilters to 0, save, reload channel
// go to Moderation Menu > click Chat Filters > scroll down to Multi-Filter Editor...
// ... click Install Fonts / Install Emotes > click Add/Update

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- DETAILED BASIC CONFIGURATION ----- */

// WARNING! apostrophe sign (') in variables values must be prepend with "\" sign (e.g. "don\'t")

Favicon_URL = 'https://dl.dropboxusercontent.com/s/xgefazzyhs8xncp/icon.png';

// DESCRIPTION: channel favicon URL (best size: 16x16 px)
// REQUIRE: UI_Favicon enabled

MiniLogo_URL = 'https://dl.dropboxusercontent.com/s/xgefazzyhs8xncp/icon.png';

// DESCRIPTION: URL of small channel logo displaying next to the channel name (best size: max. 30px height)
// NOTE: you can use the same URL as above favicon file
// REQUIRE: UI_MiniLogo enabled

ChannelName_Caption = 'MyTube';

// DESCRIPTION: channel name in the top navbar
// REQUIRE: UI_ChannelName enabled

HeaderDropMenu_Title = 'Synch';

// DESCRIPTION: header dropdown menu title
// REQUIRE: UI_HeaderDropMenu enabled

HeaderDropMenu_Items = [
['CyTube Servers', ''],
['Calzoneman CyTube', 'http://cytu.be/'],
['6irc Synchtube', 'http://synchtube.6irc.net/'],
['CyTube Stuff', ''],
['Source code', 'https://github.com/calzoneman/sync'],
['FAQ', 'https://github.com/calzoneman/sync/wiki/Beginner%27s-Guide-and-FAQ'],
['IRC', 'http://webchat.6irc.net/?channels=chat,synchtube'],
['CyTube Plus', 'https://github.com/zimny-lech/CyTube-Plus'],
];

// DESCRIPTION: elements of the header dropdown menu array
// ARRAY SYNTAX: ['link_name', 'URL'],
// REQUIRE: UI_HeaderDropMenu enabled
// NOTE: leave empty '' in the "URL" field to create section title

CustomHelp_URL = 'https://github.com/calzoneman/sync/wiki/Beginner%27s-Guide-and-FAQ';

// DESCRIPTION: custom help file URL
// REQUIRE: UI_CustomHelp enabled

AttentionBar_URL = 'http://www.freedom77.ovh.org/atencja.php';

// DESCRIPTION: imageboard-style attention bar URL
// REQUIRE: UI_AttentionBar enabled

MOTDAutoLogo_Mode = 2;

// DESCRIPTION: MOTD channel logo displaying mode
// OPTIONS: 1 = first logo from array; 2 = random logo from array; 3 = logo random rotation; 7 = 7 weekdays logos
// REQUIRE: UI_MOTDAutoLogo enabled

MOTDAutoLogo_Array = [
'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png',
'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png',
'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg',
'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg',
'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg',
'https://dl.dropboxusercontent.com/s/qud9adhs183dq30/korea.jpg',
'https://dl.dropboxusercontent.com/s/r4ozo8oj8lmerec/mlp.jpg',
];

// DESCRIPTION: MOTD channel logo array
// OPTIONS: 1 = first logo from array; 2 = random logo from array; 3 = logo random rotation; 4 = 7 weekdays logos
// ARRAY SYNTAX: ['logo_URL'],
// REQUIRE: UI_MOTDAutoLogo enabled
// NOTE: 1st element = sunday, 2nd = monday etc.

MOTDAutoLogo_Timeout = 20;

// DESCRIPTION: MOTD channel logo random change interval (in seconds)
// REQUIRE: UI_MOTDAutoLogo enabled

RulesBtn_Caption = 'Read Channel Rules';

// DESCRIPTION: channel rules button caption
// REQUIRE: UI_RulesBtn enabled

RulesBtn_HTML = '<ol><li>You want to write on the chat? Enter a temporary login at the top of the page and click <b>Guest Login</b>.</li><li>You want to register a nick? Click <b>Login/Register</b> and fill the registration form. You don\'t need an email to register.</li><li>Do not spam.</li><li>Add good videos to make this channel as great as possible.</li><li>You want to have this channel\'s script on your own channel? Go to <a href="https://github.com/zimny-lech/CyTube-Plus">https://github.com/zimny-lech/CyTube-Plus</a>.</li></ol>';

// DESCRIPTION: channel rules HTML
// REQUIRE: UI_RulesBtn enabled

ChannelAnnouncement_Title = 'Administration Message';
// DESCRIPTION: custom channel announcement title
// REQUIRE: UI_ChannelAnnouncement enabled

ChannelAnnouncement_HTML = 'This channel has been created with <a href="https://github.com/zimny-lech/CyTube-Plus" target="_blank">CyTube Plus 3.0</a>.';

// DESCRIPTION: custom channel announcement HTML
// REQUIRE: UI_ChannelAnnouncement enabled

TitleBarDescription_Caption = 'Now Playing:';

// DESCRIPTION: title bar description (default: "Currently Playing:")
// REQUIRE: UI_TitleBarDescription enabled

UserSpecialSigns_Array = {
'ZimnyLech':'★', 'calzoneman':'♠', 
}

// DESCRIPTION: user special unicode signs array
// ARRAY SYNTAX: 'username':'sign', 
// REQUIRE: UI_UserSpecialSigns enabled
// NOTE: example signs - ★ ☆ ▲ ▼ ♥ ♪ ♠ ☯ Ⓐ

ChatSuffix_Text = '~desu';

// DESCRIPTION: text added to random chat messages
// REQUIRE: UI_ChatSuffix enabled

ChatSuffix_Percentage = 5;

// DESCRIPTION: percentage of chat messages with added text
// REQUIRE: UI_ChatSuffix enabled

ChatSound_URL = 'https://dl.dropboxusercontent.com/s/0qtsttblgmkewnv/beep.wav';

// DESCRIPTION: chat notifications sound URL
// REQUIRE: UI_ChatSound enabled

JoinText_Message = 'joined';

// DESCRIPTION: chat message after user joining
// REQUIRE: UI_JoinText enabled
// NOTE: every joining message is preceding with user name by default

LeaveText_Message = 'left';

// DESCRIPTION: chat message after user leaving
// REQUIRE: UI_LeaveText enabled
// NOTE: every leaving message is preceding with user name by default

HidingImage_URL = 'https://dl.dropboxusercontent.com/s/xz2o99scw5i7aai/stop.png';

// DESCRIPTION: optional player covering image URL
// REQUIRE: UI_HidingImage enabled
// NOTE: all covering images are centered vertically and horizontally, bigger images will be cropped

VoteskipCaption_Text = 'Sage';

// DESCRIPTION: voteskip button caption (default: "Voteskip")
// REQUIRE: UI_VoteskipCaption enabled

ChannelGalleries_Array = [
['Japan gallery', 'http://imgur.com/a/185S2/embed'],
['Anime pictures', 'http://imgur.com/a/SjwJb/embed'],
['Historical photos', 'http://imgur.com/a/vnwC2/embed'],
];

// DESCRIPTION: galleries names and URLs array (gallery must allow to embed code, e.g. imgur)
// ARRAY SYNTAX: ['gallery_name', 'gallery_URL'],
// REQUIRE: UI_ChannelGalleries enabled

CustomFooter_HTML = '';

// DESCRIPTION: main footer HTML
// REQUIRE: UI_CustomFooter enabled

CustomRightFooter_HTML = '';

// DESCRIPTION: additional right-sided footer box HTML (for graphic counters etc.)
// REQUIRE: UI_CustomRightFooter enabled

AdditionalScript_URL = '';

// DESCRIPTION: additional external JS file URL
// REQUIRE: UI_AdditionalScript enabled

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- ADVANCED CONFIGURATION ----- */

ThemesCSS = [
['semidark', 'https://dl.dropboxusercontent.com/s/3pwsdl4jtn2ust2/semidark.css'],
['pastel-white', 'https://dl.dropboxusercontent.com/s/1knuft5wbvy7dhm/white.css'],
['ice-cirno', 'https://dl.dropboxusercontent.com/s/s15zul92aeo41pk/cirno.css'],
['jungle', 'https://dl.dropboxusercontent.com/s/h8q8qml44zoo2pc/jungle.css'],
['celadon', 'https://dl.dropboxusercontent.com/s/cduxlsx3j76b4hr/celadon.css'],
['sakura', 'https://dl.dropboxusercontent.com/s/qxyuag1idqxhujz/sakura.css'],
['kobato', 'https://dl.dropboxusercontent.com/s/4f1tx62gsdjoj3h/kobato.css'],
['fuchsia', 'https://dl.dropboxusercontent.com/s/shr7krrrn20pnii/fuchsia.css'],
['cool-kim', 'https://dl.dropboxusercontent.com/s/4ulsaj782txokaw/kim.css'],
['soft-pattern', 'https://dl.dropboxusercontent.com/s/lw0hwbzqoe4u2i2/pattern.css'],
['contrast', 'https://dl.dropboxusercontent.com/s/ea9e3v9yphqvjo6/contrast.css'],
['nights', 'https://dl.dropboxusercontent.com/s/pnsnsoooxec1of6/nights.css'],
['cosmos', 'https://dl.dropboxusercontent.com/s/ztj5yia9j2qfqmp/cosmos.css'],
];

// DESCRIPTION: themes CSS files array
// ARRAY SYNTAX: ['layout_name', 'layout_URL'],
// REQUIRE: UI_LayoutThemeSel enabled

ChannelThemeURL = 'https://dl.dropboxusercontent.com/s/8ylmazvfbauy3s0/chinska.css';

// DESCRIPTION: additional default channel theme URL
// REQUIRE: UI_ChannelTheme enabled
// NOTE: this theme will be used if user didn't select one of the other themes

TopUserLogo = [
['cytube plus', 'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png', 90],
['anime girl', 'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png', 200],
['cosmos', 'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg', 200],
['disco ball', 'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg', 162],
['japanese landscape', 'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg', 200],
['korean collage', 'https://dl.dropboxusercontent.com/s/qud9adhs183dq30/korea.jpg', 160],
['my little pony', 'https://dl.dropboxusercontent.com/s/r4ozo8oj8lmerec/mlp.jpg', 190],
];

// DESCRIPTION: array of the top layout image files names and URLs, max. 1170 width
// ^ (bigger images will be cropped and centered)
// ARRAY SYNTAX: ['image_description', 'image_URL', image_height],

Emotes = [
[':happy:', 'https://dl.dropboxusercontent.com/s/4bz8gdcjyekj2wh/happy.jpg', 35, 35],
[':awesome:', 'https://dl.dropboxusercontent.com/s/gz1k8oto90n16v6/awesome.png', 35, 35],
[':sad:', 'https://dl.dropboxusercontent.com/s/3jrfsd3hcxj3r5s/sad.png', 35, 35],
[':heart:', 'https://dl.dropboxusercontent.com/s/fr9131zgnai0kix/heart.png', 35, 35],
[':karol:', 'https://dl.dropboxusercontent.com/s/ekqwktwvus6ptgy/karol.jpg', 30, 42],
[':lalka:', 'https://dl.dropboxusercontent.com/s/8j25s36v0np59lh/lalka.jpg', 30, 42],
[':tongue:', 'https://dl.dropboxusercontent.com/s/tvyjzr1q2ek4sd3/tongue.png', 35, 35],
[':freddy:', 'https://dl.dropboxusercontent.com/s/4a8p5wdq14wvgce/freddy.png', 26, 55],
[':obama:', 'https://dl.dropboxusercontent.com/s/5ltj2y0jc6j43o8/obama.jpg', 35, 42],
[':yao:', 'https://dl.dropboxusercontent.com/s/l7kb1wjdfinq0d4/yao.jpg', 35, 42],
[':dolan:', 'https://dl.dropboxusercontent.com/s/o9h40w9a1wxidl8/dolan.png', 30, 37],
[':foreveralone:', 'https://dl.dropboxusercontent.com/s/4v8w6l27g6s03vs/foreveralone.png', 30, 36],
[':lol:', 'https://dl.dropboxusercontent.com/s/bccukprxs01er3f/lol.png', 28, 34],
[':3:', 'https://dl.dropboxusercontent.com/s/eewtklt6ftvcjoe/3.png', 35, 35],
[':megusta:', 'https://dl.dropboxusercontent.com/s/vxdkrrof1bnaa80/megusta.png', 30, 31],
[':datass:', 'https://dl.dropboxusercontent.com/s/c22vrxa9lfcncr9/datass.png', 30, 30],
[':yoba:', 'https://dl.dropboxusercontent.com/s/464m6opdjfc5cx8/yoba.png', 25, 25],
[':facepalm:', 'https://dl.dropboxusercontent.com/s/7m7a7k0n581tqzb/facepalm.jpg', 40, 30],
[':pokerface:', 'https://dl.dropboxusercontent.com/s/069cqh9z3hp06kc/pokerface.png', 30, 33],
[':imok:', 'https://dl.dropboxusercontent.com/s/vjumtehl3mhzv0u/imok.png', 34, 35],
[':ok:', 'https://dl.dropboxusercontent.com/s/r1qrkxjwhbgvg0x/ok.png', 21, 30],
[':troll:', 'https://dl.dropboxusercontent.com/s/k1zglg2z5ctmhd1/troll.png', 30, 25],
[':pedo:', 'https://dl.dropboxusercontent.com/s/awbujbc0lqoccjv/pedo.png', 18, 25],
[':slowpoke:', 'https://dl.dropboxusercontent.com/s/t4b5456jadx0yem/slowpoke.png', 35, 35],
[':israel:', 'https://dl.dropboxusercontent.com/s/3ptd8d8ymdgb6uw/israel.jpg', 35, 35],
[':fluttershy:', 'https://dl.dropboxusercontent.com/s/jasmla33zu2a0no/fluttershy.jpg', 57, 40],
[':bloom:', 'https://dl.dropboxusercontent.com/s/i8ea12vuc4fyr6g/bloom.jpg', 31, 40],
[':aralka:', 'https://dl.dropboxusercontent.com/s/4ud8ydbot521se3/aralka.jpg', 40, 40],
[':hakase:', 'https://dl.dropboxusercontent.com/s/bik0nqsll3txde1/hakase.jpg', 32, 42],
[':cirno:', 'https://dl.dropboxusercontent.com/s/xqfb3bfg2ulmj02/cirno.jpg', 31, 42],
[':tsumiki:', 'https://dl.dropboxusercontent.com/s/p5deizps4p47btj/tsumiki.gif', 42, 42],
[':dance:', 'https://dl.dropboxusercontent.com/s/bz6l7ug750aqq93/dance.gif', 40, 40],
[':fukkireta:', 'https://dl.dropboxusercontent.com/s/jhmw5xspu24v625/fukkireta.gif', 50, 37],
[':konata:', 'https://dl.dropboxusercontent.com/s/jr1z96mmqtnpehc/konata.gif', 40, 40],
[':teto:', 'https://dl.dropboxusercontent.com/s/l5tdta5lq98bsl6/teto.gif', 40, 40],
[':caramell:', 'https://dl.dropboxusercontent.com/s/7ngrsym9uxnkhjm/caramell.gif', 40, 40],
[':gangnam:', 'https://dl.dropboxusercontent.com/s/l2exq8ru34ynrep/gangnam.gif', 30, 40],
[':bird:', 'https://dl.dropboxusercontent.com/s/21ix5hssgmbr2p8/bird.gif', 44, 33],
[':funk:', 'https://dl.dropboxusercontent.com/s/xci6nt68u4swkqc/funk.gif', 40, 40],
[':frog:', 'https://dl.dropboxusercontent.com/s/58unfk9r3j8yktg/frog.gif', 50, 40],
[':dog:', 'https://dl.dropboxusercontent.com/s/mawc9ug01f434m5/dog.gif', 36, 42],
[':omnom:', 'https://dl.dropboxusercontent.com/s/ffo0cmc1nvtszh2/omnom.gif', 45, 45],
[':burt:', 'https://dl.dropboxusercontent.com/s/w13hn68wkdm1lyr/burt.gif', 45, 45],
[':bravo:', 'https://dl.dropboxusercontent.com/s/avkdekl0c7bnv2a/bravo.gif', 60, 40],
[':deal:', 'https://dl.dropboxusercontent.com/s/7at1fke4c3phwse/deal.gif', 55, 34],
[':umad:', 'https://dl.dropboxusercontent.com/s/vgl3zcdebmf9ja7/umad.gif', 60, 40],
],

// DESCRIPTION: chat emotes array
// ARRAY SYNTAX: ['replacing_code', 'image_URL', image_width, image_height],
// REQUIRE: INSTALLATION REQUIRED (see above in the Starting Configuration section)
// NOTE: in the emotes panel all big images will be resized to fitting resolution

EmotesBasicURL = '';

// DESCRIPTION: repeating server URL path for all imgCodes entries
// IGNORE: leave empty '' (if you want to use full URL paths or images from various servers)
// REQUIRE: INSTALLATION REQUIRED
// ^ To install: from the imgCodes array you must remove all emotesBasicURL entries
// ^ and leave only file names (or catalogs if needed, e.g. Dropbox),
// ^ e.g. delete all "https://dl.dropboxusercontent.com/s/" in the imgCodes if you use default set
// WARNING! USE ONLY if all your images are stored on the same server

CustomImageURL = 'https://dl.dropboxusercontent.com/s/evwscyflzddc92p/custom.png';

// DESCRIPTION: 'custom image' picture in the emotes panel
// REQUIRE: UI_EmotesBtn enabled
// NOTE: use 45px height or less images for the best effect

UnicodeChars_Array = [
'★', '☆', '▲', '▼', '♥', '♪', '♿', '⚒', '♕', '✉', '☏', '♠', '→', 
'☑', '☒', '✡', '☪', '✝', '☭', '☯', 'Ⓐ', '☕', '♨', '¥', '©', '∞', 
];

// DESCRIPTION: unicode characters buttons array
// ARRAY SYNTAX: 'sign', 
// IGNORE: leave empty []
// REQUIRE: UI_FontsBtn and UI_UnicodeChars enabled
// NOTE: use 1 character in every array item for the best effect (although it's not the limitation)

RandomQuotes = [
'I like the Pope dancing', 'No quotes today', 'O rly?', 
'People have the right to be stupid. You abuse that privilege', 'Don\'t play stupid with me', 
'Roses are red violets are blue, God made me pretty, what happened to you?', 
'Please don\'t interrupt me while I\'m ignoring you', 
'Are you always this stupid, or are you making a special effort today?', 
'I like you. You remind me of when I was young and stupid.', 'Go and buy me a beer', 
'The door of this channel is always open for you... so feel free to leave!', 
];

// DESCRIPTION: random quotes array for "!q" command
// ARRAY SYNTAX: 'quote', 
// REQUIRE: UI_UserCommands enabled

AskAnswers = [
'100% for sure', 'definitely yes', 'yes', 'probably', 'not any chance', 'definitely no', 
'a little chance', 'no', '50/50', 'fairy is tired and will not answer', 'I refuse to answer',
];

// DESCRIPTION: random answers array for "!ask" command
// ARRAY SYNTAX: 'answer', 
// REQUIRE: UI_UserCommands enabled

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- INDEPENDENT FILTERS CONFIGURATION ----- */

IndependentFilters=[
{before:/\[mq\]([^\*]+)\[\/mq\]/, after:'<marquee scrollamount="10" behavior="alternate">$1</marquee>'},
// fast scrolling text, example: [mq]text[/mq]
{before:/\[mq0\]([^\*]+)\[\/(mq0|mq)\]/, after:'<marquee scrollamount="5" behavior="alternate">$1</marquee>'},
// slow scrolling text, example: [mq0]text[/mq0]
{
before:/\[imgur\]([^\*]+)\[\/(i|imgur)\]/, 
after:'<a href="http://i.imgur.com/$1" target="_blank"><img src="http://i.imgur.com/$1" width="100"></a>'
},
// imgur picture, example: [imgur]suok1xr.jpg[/imgur]
{
before:/\[drop\]([^\*]+)\[\/(d|drop)\]/, 
after:'<a href="https://dl.dropboxusercontent.com/s/$1" target="_blank"><img src="https://dl.dropboxusercontent.com/s/$1" width="100"></a>'
},
// dropbox picture, example: [drop]7mrz85gl29eiiks/logo.png[/drop]
{
before:/\[minus\/([^\*]+)\]([^\*]+)\[\/(m|minus)\]/, 
after:'<a href="http://$1.minus.com/$2" target="_blank"><img src="http://$1.minus.com/$2" width="100"></a>'
},
// minus.com picture, example: [minus/i5]ig0qs6fvWvgBu.jpg[/minus]
{
before:/\[vi\/([^\*]+)\]([^\*]+)\[\/(v|vi)\]/, 
after:'<a href="https://pl.vichan.net/$1/src/$2" target="_blank"><img src="https://pl.vichan.net/$1/src/$2" width="100"></a>'
},
// vichan imageboard picture, example: [vi/b]1r8ih4t1.vichan.png[/vi]
];

// DESCRIPTION: additional filters array
// SYNTAX: {before:'expression_before',	after:'expression_after'},
// REQUIRE: UI_IndependentFilters enabled
// NOTE: if you use plain words as expression, you must put it between '' signs
// ^ if you use regular expression, you must put it between // signs

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- VIDEO DATABASE CONFIGURATION ----- */

ChannelDatabase=[
['', 'Japanese'],
['http://www.youtube.com/watch?v=Q3y-80HBM6Q', 'An Cafe - Smile Ichiban Ii Onna'],
['http://www.youtube.com/watch?v=nDqaTXqCN-Q', 'Babymetal - Ijime, Dame, Zettai'],
['http://www.youtube.com/watch?v=aNlkiymcT1Q', 'Hinoi Team - Ike Ike'],
['http://www.youtube.com/watch?v=JbQYK0mwLss', 'Morning Musume - Onna Ni Sachi Are'],
['http://www.youtube.com/watch?v=VZKMaFR2mtU', 'Perfume - Fake It'],
['http://www.youtube.com/watch?v=OYEHfWb1b4M', 'Shoko Nakagawa - Yuzurenai Negai'],
['http://www.youtube.com/watch?v=jvhI576M6so', 'Yuu Kikkawa - Bokarisuto?'],
['', 'Korean'],
['http://www.youtube.com/watch?v=M-XXJJFZcXg', '4Minute - Heart To Heart (jap.)'],
['http://www.youtube.com/watch?v=HchHZkkBOoE', 'As One - Catch Me Up'],
['http://www.youtube.com/watch?v=UVeTI4v24M0', 'C-REAL - No No No No No'],
['http://www.youtube.com/watch?v=04FdisNU3vw', 'Girl\'s Day - Oh! My God'],
['http://www.youtube.com/watch?v=ysnUHXksic8', 'NS Yoon-G - Reason To Become A Witch'],
['http://www.youtube.com/watch?v=mZUZdGCyLmw', 'Orange Caramel - Bangkok City'],
['http://www.youtube.com/watch?v=r-MXLmNnarQ', 'TINY-G - Minimanimo'],
['', 'Chinese'],
['http://www.youtube.com/watch?v=Bi0tjyVfHOg', 'Amber Ann - Lian Ai Yingyuan Tuan'],
['http://www.youtube.com/watch?v=dsU0Vu6aJhw', 'By2 - Love You Love You'],
['http://www.youtube.com/watch?v=ovPhJim1EUc', 'Momo - One Hundred Girlfriends '],
['http://www.youtube.com/watch?v=lxa2KqERBZE', 'S.H.E. - Shero'],
['http://www.youtube.com/watch?v=jd2-Nf86jvA', 'Weather Girls - Koi No Tenki Yohou'],
['', 'Anime songs'],
['http://www.youtube.com/watch?v=fJ_DH7jzoxQ', 'Ai No Tenshi (Perfect Blue)'],
['http://www.youtube.com/watch?v=ZNu_NV5PEM8', 'Chu☆ - Miko Miko Naasu - Ai No Teema'],
['http://www.youtube.com/watch?v=isOOb6QMa6k', 'Kayo Sakata - Shoujo Q (Pani Poni Dash! OP)'],
['http://www.youtube.com/watch?v=nLSFxQijz6U', 'Kotoko - Princess Bride'],
['http://www.youtube.com/watch?v=QK-37CnYTpg', 'Princess Party Camelia OP'],
['http://www.youtube.com/watch?v=9LoeTOIoUR0', 'Tsun Neko No Waltz'],
['http://www.youtube.com/watch?v=jehMXrY1q5I', 'Yui Makino - Yume No Tsubasa'],
];

// DESCRIPTION: videos database array (additional set of categorized media)
// ARRAY SYNTAX: ['video_URL', 'title'],
// REQUIRE: UI_ChannelDatabase enabled
// NOTE: leave empty '' in the "video_URL" field to create section button

ChannelDatabase_URL='';

// DESCRIPTION: external video database file URL
// REQUIRE: UI_ChannelDatabase enabled, INSTALLATION REQUIRED
// ^ To install: copy file from the link below and configure ChannelDatabase in it:
// ^ https://raw.github.com/zimny-lech/CyTube-Plus/master/external-db.js
// ^ Save a new .js file in selected ChannelDatabase_URL location above.
// WARNING! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
// NOTE: leave empty '' if you don't want to use external file instead of database above

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reload channel after possible library change

var LOADED = (typeof LOADED==="undefined") ? false : true;
LOADED ? location.reload() : '';

/* ----- GLOBAL FUNCTIONS ----- */

// toggle elements

function toggleDiv(a) {
	$(a).css('display')=="none" ? $(a).show() : $(a).hide();
}

// add link to playlist

function addToPlaylist(link,position) {
	parsed=parseMediaLink(link);
	parsed["id"]!=null ? socket.emit("queue", {id: parsed["id"], pos: position, type: parsed["type"]}) : '';
}

// refresh player

function refreshPlayer() {
	PLAYER.type="";
	PLAYER.id="";
	socket.emit("playerReady");
}

// create modal window

function createModal(title,caption) {
	hidePlayer();
	modal=$('<div />').addClass('modal hide fade').appendTo($("body"));
	head=$('<div />').addClass('modal-header').appendTo(modal);
	$('<button />').addClass('close').attr('data-dismiss', 'modal').attr('aria-hidden', 'true')
	  .html('&times;').appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body=$('<div />').addClass('modal-body').appendTo(modal);

	footer=$('<div />').addClass('modal-footer').appendTo(modal);
	submit=$('<button />').addClass('btn btn-primary pull-right').text(caption).appendTo(footer);

	submit.on("click", function() {
		modal.modal("hide");
	});

	modal.on("hidden", function() {
		modal.remove();
		unhidePlayer();
	});
	modal.modal();
}

// set MOTD logo

function changeMOTD() {
	nr=0;
	a=MOTDAutoLogo_Array.length;
	if (a<1) {
		MOTDAutoLogo_Array=['https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png'];
		a=1;
	}
	if (MOTDAutoLogo_Mode=="2" || MOTDAutoLogo_Mode=="3") {
		nr=Math.floor(Math.random()*a);
	} else if (MOTDAutoLogo_Mode=="7") {
		nr=new Date().getDay();
		typeof MOTDAutoLogo_Array[nr]==="undefined" ? nr=0 : '';
	}
	$('<br /><center><img id="motdlogo" src="'+MOTDAutoLogo_Array[nr]+'" /></center>')
	  .prependTo($motd);
	$_motdlogo = $("#motdlogo");
}

// rotate MOTD logo

function rotateLogo() {
	nr=Math.floor(Math.random()*MOTDAutoLogo_Array.length);
	$_motdlogo.attr('src', MOTDAutoLogo_Array[nr]);
}

// add rules panel

function rulesPanel() {
	RulesBtn_Caption=="" ? RulesBtn_Caption='Read Channel Rules' : '';
	$motdwrap.show();
	$_rulesbtnwrap = $('<div id="rulesbtnwrap" />')
	  .appendTo($motd);
	$_rulesbtn = $('<button id="rules-btn" class="btn" />')
	  .text(RulesBtn_Caption+' ▸')
	  .appendTo($_rulesbtnwrap)
	  .on("click", function() {
		toggleDiv($_rulespanel);
	  });
	$_rulespanelouter = $('<div id="rulespanel-outer" />')
	  .appendTo($motd);
	$_rulespanel = $('<div id="rulespanel" style="display:none" />')
	  .html(RulesBtn_HTML)
	  .appendTo($_rulespanelouter);
}

// YouTube/Dailymotion progress bar

function progressBar() {
	a=0;
	if (PLAYER.type=="yt") {
		b=PLAYER.player.getCurrentTime();
		b!=PREVTIME ? a=b/PLAYER.player.getDuration()*100 : '';
		PREVTIME=b;
	} else if (PLAYER.type=="dm") {
		b=PLAYER.player.currentTime;
		b!=PREVTIME ? a=b/PLAYER.player.duration*100 : '';
		PREVTIME=b;
	}
	$_titlerowouter.css('background-size', a+'% 100%');
}

// change title bar description

function changeTitle() {
	$currenttitle.text($currenttitle.text().replace(/Currently Playing:/, TitleBarDescription_Caption));
}

// insert code into chatline

function insertText(a) {
	$chatline.val($chatline.val()+a).focus();
}

// display list of emotes

function showEmotes() {
	for (i in Emotes) {
		link=EmotesBasicURL+''+Emotes[i][1];
		w=Emotes[i][2];
		h=Emotes[i][3];
		if (h>45) {
			w=Math.round(45/h*w);
			h=45;
		}
		$('<img src="'+link+'" class="emote" onclick="insertText(\''+Emotes[i][0]+'\')" />')
		  .css('width', w).css('height', h).attr('title', Emotes[i][0])
		  .appendTo($_emotespanel);
	}
	if (UI_LocalFilters!="1") {
		if (CustomImageURL=="") {
			CustomImageURL='https://dl.dropboxusercontent.com/s/evwscyflzddc92p/custom.png';				}
		$('<img src="'+CustomImageURL+'" class="emote" onclick="enterCustomImg()" title="custom image" />')
		  .appendTo($_emotespanel);
	}
	EMOTES=true;
}

// enter custom image URL

function enterCustomImg() {
	img=prompt('Enter image URL', '');
	img!=null ? insertText('[img]'+img+'[/img]') : '';
}

// easter egg

function inba() {
	$body.css('background-image', 'none');
	BGCHANGE++;
	BGCHANGE%2==0 ? $body.css('background-color', 'gold') : $body.css('background-color', 'blue');
}


// hide and show player with covering image

function coverPlayer() {
	if (UI_HidingImage=="1" && HidingImage_URL!="") {
		$_modewrap.add($_playermenud).hide();
		$videowrap.addClass('relative');
		w=$videowrap.css('width');
		h=$videowrap.css('height').replace('px', '')-31;
		$_coverpl = $('<div id="coverpl" />')
		.css('width', w).css('height', h+'px').css('background-image', 'url("'+HidingImage_URL+'")')
		  .appendTo($videowrap);
	}
	$("#ytapiplayer").addClass('covered');
	$_playermenuh.find("a").text('Show Player');
}

function showPlayer() {
	if (UI_HidingImage=="1" && HidingImage_URL!="") {
		$_modewrap.add($_playermenud).show();
		$_coverpl.remove();
		$videowrap.removeClass('relative');
	}
	$("#ytapiplayer").removeClass('covered');
	$_playermenuh.find("a").text('Hide Player');
}

// toggle media info

function toggleDescr() {
	if (DESCR) {
		$videowrap.find("p").hide();
		$_playermenud.find("a").text('Show Media Info');
		DESCR=false;
	} else {
		$videowrap.find("p").show();
		$_playermenud.find("a").text('Hide Media Info');
		DESCR=true;
	}
}

// show info about current or next media

function showInfo() {
	if (DEFDESCR) {
		addedby=$(".queue_active").attr("title");
		duration=$(".queue_active .qe_time").html();
		$_mediainfo.html(addedby+' ['+duration+']');	
	} else {
		var arr=new Array();
		text='Playing Next:';
		li1=$(".queue_active").next();
		li2=li1.next();
		li3=li2.next();
		li1.length>0 ? arr.push(' • [1]▸ '+li1.children("a").html()) : '';
		li2.length>0 ? arr.push(' • [2]▸ '+li2.children("a").html()) : '';
		li3.length>0 ? arr.push(' • [3]▸ '+li3.children("a").html()) : '';
		text+=arr.join("");
		arr.length<3 ? text+=' • END OF PLAYLIST' : '';
		$_mediainfo.html('<marquee scrollamount="5">'+text+'</marquee>');
	}	
}

// pin-up playlist to player

function pinUp() {
	if (USERCONFIG.player=="left") {
		$videowrap.after($rightpaneouter.detach());
	} else if (USERCONFIG.player=="right") {
		$videowrap.before($rightpaneouter.detach());
	}
	if (USERCONFIG.queue=="left") {
		$leftpaneouter.before($chatwrap.detach());
	} else if (USERCONFIG.queue=="right") {
		$leftpaneouter.after($chatwrap.detach());
	}
	$rightpaneouter.removeClass().addClass('span5');
	if (USERCONFIG.qsize=="wide") {
		$chatwrap.add($chatline).removeClass().addClass('span7');
	} else {
		$chatwrap.add($chatline).removeClass().addClass('span5');
	}
	$_playermenup.find("a").text('UnPin Playlist');
	$_minimizebtn.add($_configwrap).add($_modewrap).hide();
	$_modesel.find("option[value='chMode']").hide();
	PINNED=true;
}

// un-pin playlist from player

function unPin() {
	if (USERCONFIG.queue=="left") {
		$leftpaneouter.before($rightpaneouter.detach());
	} else if (USERCONFIG.queue=="right") {
		$leftpaneouter.after($rightpaneouter.detach());
	}
	if (USERCONFIG.player=="left") {
		$videowrap.after($chatwrap.detach());
	} else if (USERCONFIG.player=="right") {
		$videowrap.before($chatwrap.detach());
	}
	$chatwrap.add($chatline).removeClass().addClass('span5')
	if (USERCONFIG.qsize=="wide") {
		$rightpaneouter.removeClass().addClass('span7');
	} else {
		$rightpaneouter.removeClass().addClass('span5');
	}
	$_playermenup.find("a").text('PinUp Playlist');
	$_minimizebtn.add($_configwrap).add($_modewrap).show();
	$_modesel.find("option[value='chMode']").show();
	PINNED=false;
}

// toggle playlist menu options depends on permissions

function togglePlaylistOptions() {
	hasPermission("playlistjump") ? $_opt2.show() : $_opt2.hide();
	(hasPermission("playlistadd") && UI_ChannelDatabase=="1") ? $_opt3.show() : $_opt3.hide();
	hasPermission("playlistmove") ? $_opt4.add($_opt5).show() : $_opt4.add($_opt5).hide();
	hasPermission("playlistdelete") ? $_opt6.show() : $_opt6.hide();
}

// change voteskip button caption

function changeSkipText() {
	$voteskip.text($voteskip.text().replace(/Voteskip/, VoteskipCaption_Text));
}

// get playlist helper functions

function formatRawList() {
	a=$("#queue .queue_entry").length+1;
	var list=new Array();
	for (i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		list.push(formatURL(item));
	}
	return list.join(",");
}

function formatPlainTextList() {
	a=$("#queue .queue_entry").length+1;
	var list=new Array();
	for (i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		list.push(i+'. '+formatURL(item)+' '+item.title+' ['+item.duration+']');
	}
	return list.join('\n');
}

function formatHTMLList() {
	a=$("#queue .queue_entry").length+1;
	var list=new Array();
	for (i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		title=item.title;
		duration=item.duration;
		link=formatURL(item);
		list.push('<li>'+title+' ['+duration+'] - <a href="'+link+'" target="_blank">'+link+'</a></li>');
	}
	return list.join('\n');
}

// set display mode

function setMode(a) {
	switch (a) {
		case "syMode":
		$main.add($videowrap).add($chatwrap).add($rightpaneouter).show();
		$_playermenup.add($_configwrap).show();
		if (!WEBKIT) {
			$videowrap.find("p").add($qualitywrap).show();
			$videowrap.removeClass().addClass('span7');
		}
		normalPlayer();
		normalChat();
		playerLocation(USERCONFIG.player);
		break;

		case "kMode":
		$main.add($videowrap).show();
		$chatwrap.add($_playermenup).hide();
		bigPlayer();
		break;

		case "chMode":
		$main.add($chatwrap).show();
		$videowidth.removeClass().addClass('span1');
		if (WEBKIT) {
			$videowrap.hide();
		} else {
			$videowrap.find("p").add($qualitywrap).hide();
			$("#ytapiplayer").attr("width", '1').attr("height", '1');
		}
		bigChat();
		break;

		case "rMode":
		$videowidth.removeClass().addClass('span1');
		if (WEBKIT) {
			$main.hide();
		} else {
			$main.add($videowrap).show();
			$videowrap.find("p").add($chatwrap).add($qualitywrap).hide();
			$("#ytapiplayer").attr("width", '1').attr("height", '1');
		}
		$_configwrap.show();
		break;
	}
}

// display mode helper functions

function bigPlayer() {
	$videowrap.add($videowidth).removeClass().addClass('span12');
	VWIDTH=$videowidth.css('width').replace('px', '');
	VHEIGHT=''+parseInt(parseInt(VWIDTH)*9/16);
	$("#ytapiplayer").attr('width', VWIDTH).attr('height', VHEIGHT);
}

function bigChat() {
	$chatwrap.add($chatline).add($videowidth).removeClass().addClass('span12');
	VWIDTH2=$messagebuffer.parent().css('width').replace('px', '');
	$messagebuffer.attr('width', VWIDTH2).css('height', '500px');
	$userlist.css('height', '500px');
}

function normalPlayer() {
	$videowrap.add($videowidth).removeClass().addClass('span7');
	VWIDTH=$videowidth.css('width').replace('px', '');
	VHEIGHT=''+parseInt(parseInt(VWIDTH)*9/16);
	$("#ytapiplayer").attr("width", VWIDTH).attr("height", VHEIGHT);
}

function normalChat() {
	c = (PINNED && USERCONFIG.qsize=="wide") ? 'span7' : 'span5';
	$chatwrap.add($chatline).removeClass().addClass(c);
	VWIDTH2=$messagebuffer.parent().css('width').replace('px', '');
	$messagebuffer.attr('width', VWIDTH2).css('height', '347px');
	$userlist.css('height', '347px');
}

// queue size helper function

function normalPlaylist() {
	$rightpaneouter.removeClass().addClass('span7');
	$leftpaneouter.removeClass().addClass('span5');
}

// patch for changing player in certain display modes

function displayModePatch() {
	if (PLAYER.type!=PLAYERTYPE) {
		PLAYERTYPE=PLAYER.type;
		if ($_modesel.val()=="chMode" || $_modesel.val()=="rMode") {
			$videowidth.removeClass().addClass('span1');
			$("#ytapiplayer").attr("width", '1').attr("height", '1');
		}

	}
}

// layout configuration helper functions

function setConfigValues(a,b,c,d,e,f,g,h,i) {
	playerlocation.val(a);
	userlistlocation.val(b);
	queuelocation.val(c);
	queuesize.val(d);
	mainlocation.val(e);
	motdlocation.val(f);
	logoinsert.val(g);
	headermode.val(h);
	plcontrolsmode.val(i);
}

function setLayout(a,b,c,d,e,f,g,h,i) {
	playerLocation(a);
	userlistLocation(b);
	queueLocation(c);
	queueSize(d);
	mainLocation(e);
	motdLocation(f);
	logoInsert(g);
	headerMode(h);
	plControlsMode(i);
}

// layout elements settings

function playerLocation(a) {
	$videowrap.css('margin-bottom', '');
	if (a=="left") {
		$videowrap.after($chatwrap.detach());
		normalPlayer();
		normalChat();
	} else if (a=="right") {
		$videowrap.before($chatwrap.detach());
		normalPlayer();
		normalChat();
	} else if (a=="center") {
		$videowrap.after($chatwrap.detach()).css('margin-bottom', '10px');
		$videowrap.add($videowidth).removeClass().addClass('span8 offset2');
		VWIDTH=$videowidth.css("width").replace('px', '');
		VHEIGHT=''+parseInt(parseInt(VWIDTH)*9/16);
		$("#ytapiplayer").attr('width', VWIDTH).attr('height', VHEIGHT);
		$chatwrap.removeClass().addClass('span8 offset2');
		$chatline.removeClass().addClass('span8');
		VWIDTH2=$messagebuffer.parent().css('width').replace('px', '');
		$messagebuffer.attr('width', VWIDTH2).css('height', '200px');
		$userlist.css('height', '200px');
	}
	WEBKIT ? refreshPlayer() : '';
}

function userlistLocation(a) {
	a=="left" ? $userlist.css('float', 'left') : $userlist.css('float', 'right');
}

function queueLocation(a) {
	$rightpaneouter.css('margin-bottom', '');
	if (a=="right") {
		$rightpaneouter.before($leftpaneouter.detach());
		normalPlaylist();
	} else if (a=="left") {
		$rightpaneouter.after($leftpaneouter.detach());
		normalPlaylist();
	} else if (a=="center") {
		$rightpaneouter.after($leftpaneouter.detach())
		  .removeClass().addClass('span8 offset2').css('margin-bottom', '10px');
		$leftpaneouter.removeClass().addClass('span8 offset2');
	}
}

function queueSize(a) {
	if (USERCONFIG.queue!="center") {
		if (a=="wide") {
			$leftpaneouter.removeClass().addClass('span5');
			$rightpaneouter.removeClass().addClass('span7');
		} else if (a=="narrow") {
			$leftpaneouter.removeClass().addClass('span7');
			$rightpaneouter.removeClass().addClass('span5');
		}
	}
}

function mainLocation(a) {
	a=="top" ? $_modrow.before($playlistrow.detach()) : $_titlerow.before($playlistrow.detach());
}

function motdLocation(a) {
	if (a=="top") {
		$_zerorow.after($_annrow.detach()).after($_drinkrow.detach()).after($toprow.detach());
	} else if (a=="bottom") {
		$_modrow.before($toprow.detach()).before($_drinkrow.detach()).before($_annrow.detach());
	}
}

function logoInsert(a) {
	$("#azukirow").remove();
	if (a!="no") {
		link = (a!="user") ? TopUserLogo[a][1] : USERLOGO;
		ht = (a!="user") ? TopUserLogo[a][2] : USERLOGOHT;
		$_azukirow = $('<div id="azukirow" class="row" />')
		  .insertBefore($_zerorow);
		$_azukirowouter = $('<div id="azukirow-outer" style="background-image:url('+link+')" />')
		  .addClass('span12').css('min-height', ht+'px')
		  .appendTo($_azukirow);
	}
}

function headerMode(a) {
	if (a=="fixed") {
		$navbarfixedtop.css('position', 'fixed');
		$body.css('padding-top', '40px');
	} else if (a=="detach") {
		$navbarfixedtop.css('position', 'inherit');
		$body.css('padding-top', '0px');
	}
}

function plControlsMode(a) {
	if (a=="default") {
		$queueend.before($queuenext.detach());
		$customembedentry.before($customembedbtn.detach());
		$extendedcontrols.append($clearplaylist.detach()).append($shuffleplaylist.detach());
		$queuenext.css('width', '');
		$("#playlistdrop, #playlistmenu, #extendedbtnwrap").remove();
	} else if (a=="menu") {
		plControlsMode("default");

		$_playlistdrop = $('<button id="playlistdrop" class="btn dropdown-toggle" data-toggle="dropdown" />')
		  .text('▾')
		  .insertAfter($queueend)
		$_playlistmenu = $('<ul id="playlistmenu" class="dropdown-menu pull-right" />')
		  .insertAfter($_playlistdrop);

		$_opt1 = $('<li id="opt1" />')
		  .html($queuenext.detach())
		  .appendTo($_playlistmenu);

		$('<li class="divider" />')
		  .appendTo($_playlistmenu);

		$_opt2 = $('<li id="opt2" />')
		  .html('<a tabindex="-1" href="javascript:void(0)">Play Next</a>')
		  .appendTo($_playlistmenu)
		  .on("click", function() {
			socket.emit("playNext");
		  });

		$_opt3 = $('<li id="opt3" />')
		  .html('<a tabindex="-1" href="javascript:void(0)">Add Random Video</a>')
		  .appendTo($_playlistmenu)
		  .on("click", function() {
			a=(new Date()).getTime();
			if ((a-LASTADD)<120000) {
				alert('You can add random video every 2 minutes.');
			} else {
				b="";
				while (b=="") {
					c=Math.round(Math.random()*(ChannelDatabase.length-1));
					b=ChannelDatabase[c][0];
				}
				addToPlaylist(b, "end");
				LASTADD=a;
			}
		  });

		$_opt4 = $('<li id="opt4" />')
		  .html('<a tabindex="-1" href="javascript:void(0)">Move Random Video</a>')
		  .appendTo($_playlistmenu)
		  .on("click", function() {
			a=$("#queue").children().length;
			b=Math.floor(Math.random()*a)+1;
			c=Math.floor(Math.random()*a)+1;
			d=$("#queue .queue_entry:nth-child("+b+")").data("uid");
			e=$("#queue .queue_entry:nth-child("+c+")").data("uid");
			socket.emit("moveMedia", {from: d, after: e, moveby: null});
		  });

		$_opt5 = $('<li id="opt5" />')
		  .html('<a tabindex="-1" href="javascript:void(0)">Move First Video To End</a>')
		  .appendTo($_playlistmenu)
		  .on("click", function() {
			a=$("#queue").children().length;
			b=$("#queue .queue_entry:nth-child(1)").data("uid");
			c=$("#queue .queue_entry:nth-child("+a+")").data("uid");
			socket.emit("moveMedia", {from: b, after: c, moveby: null});
		  });

		$_opt6 = $('<li id="opt6" />')
		  .html('<a tabindex="-1" href="javascript:void(0)">Delete Last Video</a>')
		  .appendTo($_playlistmenu)
		  .on("click", function() {
			a=$("#queue").children().length;
			b=$("#queue .queue_entry:nth-child("+a+")").data("uid");
			socket.emit("delete", b);
		  });

		$('<li class="divider" />')
		  .appendTo($_playlistmenu);

		$_opt7 = $('<li id="opt7" />')
		  .appendTo($_playlistmenu)
		  .html($clearplaylist.detach());

		$_opt8 = $('<li id="opt8" />')
		  .appendTo($_playlistmenu)
		  .html($shuffleplaylist.detach());

		$_opt9 = $('<li id="opt9" />')
		  .appendTo($_playlistmenu)
		  .html($customembedbtn.detach());

		$_extendedbtnwrap = $('<div id="extendedbtnwrap" class="btn-group" />')
		  .appendTo($playlistcontrols);

		$_downloadbtn = $('<button id="download-btn" data-toggle="dropdown" />')
		  .addClass('btn btn-small dropdown-toggle').html('<i class="icon-download"></i> Download')
		  .appendTo($_extendedbtnwrap)
		  .on("click", function() {
			a=PL_CURRENT+1;
			b=$("#queue .queue_entry:nth-child("+a+")").data("media");
			c={
				'yt':'http://youtube.com/watch?v=', 'vi':'http://vimeo.com/',
				'dm':'http://dailymotion.com/video/', 'sc':''
			}
			link = (b.type in c ? c[b.type]+''+b.id : '');
			if (link=="") {
				text='This link is not supported. Try YouTube, Vimeo, Dailymotion or SoundCloud.';
				$_downloadlink.find("a").attr('href', 'javascript:void(0)');
				$_downloadlink.find("a").attr('target', '');
				$_downloadlink.find("a").attr('onClick', 'alert(\''+text+'\')');
			}
			else {
				link2='http://keepvid.com/?url='+link;
				$_downloadlink.find("a").attr('href', link2);
				$_downloadlink.find("a").attr('target', '_blank');
				$_downloadlink.find("a").attr('onClick', '');
			}
		  });
		$_downloadmenu = $('<ul id="downloadmenu" class="dropdown-menu"></ul>')
		  .appendTo($_extendedbtnwrap);
		$_downloadlink = $('<li id="downloadlink" />')
		  .html('<a tabindex="-1" href="javascript:void(0)">Download Current Video</a>')
		  .appendTo($_downloadmenu);

		$_contributorsbtn = $('<button id="contributors-btn" class="btn btn-small">Contributors</button>')
		  .appendTo($_extendedbtnwrap)
		  .on("click", function() {
			createModal("Contributors List", "Close");
			a=$("#queue li").length+1;
			var list=[];
			for (i=1; i<a; i++) {
				item=$("#queue li:nth-child("+i+")").attr('title');
				user=item.split("by: ")[1];
				user in list ? list[user]++ : list[user]=1;
			}
			var list2=[];
			for (key in list) {
				list2.push([key, list[key]]);
			}
			list2.sort(function(a,b) {return a[1]-b[1]});
			list2.reverse();
			var list3=[];
			for (i in list2) {
				list3.push((i+1)+". "+list2[i].join(": "));
			}
			html='<strong>Number of added playlist items:</strong>'
			  + '<br /><br />'+list3.join("<br />");
			body.append(html);
		  });

		$_expandbtn = $('<button id="expand-btn" class="btn btn-small">Expand</button>')
		  .appendTo($_extendedbtnwrap)
		  .on("click", function() {
			if (!FULLPL) {
				$queue.css('max-height', '100000px');
				$_expandbtn.text('Collapse');
				FULLPL=true;
			} else {
				$queue.css('max-height', '450px');
				$_expandbtn.text('Expand');
				FULLPL=false;
				scrollQueue();
			}
		  });

		$queuenext.css('width', '100%');
		FULLPL ? $_expandbtn.text('Collapse') : '';

		socket.on("rank", togglePlaylistOptions);
		togglePlaylistOptions();
	}
}

// toggle "/clear" button depends on rank

function toggleClearBtn() {
	hasPermission("playlistclear") ? $_clearbtn.show() : '$_clearbtn.hide()';
}

// toggle YT volume buttons depends on player type

function toggleVolBtn() {
	if (PLAYER.type=="yt" || PLAYER.type=="dm") {
		$_voldownbtn.show();
		$_volupbtn.show();
	} else {
		$_voldownbtn.hide();
		$_volupbtn.hide();
	}
}

// create channel database

function createDatabase() {
	html='<button id="la1" class="btn btn-small db-break" onclick="toggleCat(1)" style="width:100%">'
	  + ChannelDatabase[0][1]
	  + '</button>'
	  + '<ul id="l1" class="videolist db-cat">';

	for (i=1; i<ChannelDatabase.length; i++) {
		if (ChannelDatabase[i][0]=="") {
			html+='</ul>';
			item_count[layer_nr-1]=count_nr;
			opening[layer_nr-1]=0;
			layer_nr++;
			count_nr=0;
			html+='<button id="la'+layer_nr+'" class="btn btn-small db-break" onclick="toggleCat('+layer_nr+')">'
			  + ChannelDatabase[i][1]
			  + '</button>'
			  + '<ul id="l'+layer_nr+'" class="videolist db-cat">';
		} else {
			item_nr++;
			count_nr++;
			link=ChannelDatabase[i][0];
			html+='<li class="queue_entry">'
			  + '<button class="btn btn-mini qe_btn pull-right" onclick="addVideo(\''+link+'\')">'
			  + 'End'
			  + '</button>';
			parsed=parseMediaLink(link);
			if (parsed["type"]=="yt") {
				a=parsed["id"];
				html+='<button class="btn btn-mini qe_btn pull-right" onclick="prevVideo(\''+a+'\')">'
				  + '<i class="icon-film"></i>'
				  + '</button>';
			}
			html+='<span class="badge db-badge">'
			  + item_nr
			  + '</span><span class="db-title">'
			  + ChannelDatabase[i][1]
			  + '</span><br /><span class="db-link">'
			  + link
			  + '</span>';
		}
	}

	html+='</ul><br /><br /><div id="cleardbwrap">'
	  + '<button id="cleardb-btn" class="btn btn-small">Reload Data (if channel seems working slow)</button>'
	  + '</div>';
	item_count[layer_nr-1]=count_nr;
	opening[layer_nr-1]=0;
	$_dbwrap.html(html);
	for(i=1; i<=item_count.length; i++) {
		$("#la"+i).append(' ['+item_count[i-1]+']');
	}
	CHANDB=true;

	$_dbcat = $(".db-cat");
	$_cleardbbtn = $("#cleardb-btn");

	$_dbcat.hide();
	for (i in opening) {
		opening[i]=0;
	}

	$_cleardbbtn.on("click", function() {
		$_dbwrap.html('').hide();
		$_dbtoggle.html($_dbtoggle.html().replace(/Hide/, "Show"));
		$_dbtoggle.find("i").removeClass("icon-minus").addClass("icon-plus");
		CHANDB=false;

	});
}

// toggle database sections

function toggleCat(a) {
	b=a-1;
	if (opening[b]==0) {
		$_dbcat.hide();
		for (i in opening) {
			opening[i]=0;
		}
		$("#l"+a).show();
		opening[b]=1;
	} else {
		$("#l"+a).hide();
		opening[b]=0;
	}
}

// add database link to playlist

function addVideo(link) {
	parsed=parseMediaLink(link);
	idx=parsed["id"];
	if (idx!=null) {
		a=(new Date()).getTime();
		if (!hasPermission("playlistadd")) {
			alert('You have no permission to add a link.');
		} else if (ADDEDLINKS[idx]!=undefined && a-ADDEDLINKS[idx]<120000) {
			alert('You have just added this link.');
		} else {
			socket.emit("queue", {id: idx, pos: "end", type: parsed["type"]});
			ADDEDLINKS[idx]=a;
		}
	}
}

// preview YT video in modal window

function prevVideo(a) {
	createModal('Preview Video', 'Close');

	player=$('<iframe />').appendTo(body)
	  .attr('src', 'http://www.youtube.com/embed/'+a+'?enablejsapi=1')
	  .attr('width', '530').attr('height', '323').attr('frameborder', '0');

	mutePlayer();
	modal.on("hidden", function() {
		unmutePlayer();
	});
}

// mute YT player

function mutePlayer() {
	PLAYER.type=="yt" ? PLAYER.player.mute() : '';
}

// unmute YT player

function unmutePlayer() {
	PLAYER.type=="yt" ? PLAYER.player.unMute() : '';
}

// create channel gallery

function createGallery() {
	$_galleryframe = $('<iframe id="galleryFrame" src='+ChannelGalleries_Array[0][1]+' width="100%" />')
	  .attr('frameborder', '0').attr('scrolling', 'no').attr('height', '415px')
	  .appendTo($_gallerywrap);
	$_gallerywrap.append('<br />');
	$_galtitle = $('<span id="galtitle" class="conf-opt">Select Gallery</span>')
	  .appendTo($_gallerywrap);
	$_gallerywrap.append('<br />');
	$_galsel = $('<select id="gal-sel"/>')
	  .appendTo($_gallerywrap)
	  .on("change", function() {
		$_galleryframe.attr('src', $_galsel.val());
	  });

	for (i in ChannelGalleries_Array) {
		$('<option value="'+ChannelGalleries_Array[i][1]+'" />')
		  .html(ChannelGalleries_Array[i][0])
		  .appendTo($_galsel);
	}

	$_gallerywrap.append('<br />');
	text='Reload Galleries (if channel seems working slow)';
	$_cleargallerybtn = $('<button id="cleargallery-btn" class="btn btn-small">'+text+'</button>')
	  .appendTo($_gallerywrap)
	  .on("click", function() {
		$_gallerywrap.html('').hide();
		$_gallerytoggle.html($_gallerytoggle.html().replace(/Hide/, "Show"));
		$_gallerytoggle.find("i").removeClass("icon-minus").addClass("icon-plus");
		GALLERY=false;

	  });
	GALLERY=true;
}

// add filter installing buttons

function toggleInstallBtn() {
	$("#installbtnwrap").remove();
	if (hasPermission("filteredit")) {
		$_installbtnwrap = $('<div id="installbtnwrap" class="btn-group" />')
		  .insertAfter("#multifiltersubmit");
		$_installfontsbtn = $('<button id="installfonts-btn" class="btn">Install Fonts</button>')
		  .appendTo($_installbtnwrap)
		  .on("click", function() {
			var arr=new Array();
			for (i in FontsArray) {
				arr.push(FontsArray[i][3]+" \\["+FontsArray[i][1]+"\\] g "+FontsArray[i][4]);
			}
			$("#multifiltereditor").val(arr.join("\n"));
		  });
		$_installemotesbtn = $('<button id="installemotes-btn" class="btn">Install Emotes</button>')
		  .appendTo($_installbtnwrap)
		  .on("click", function() {
			var arr=new Array();
			for (i in Emotes) {
				a=Emotes[i][0].replace(RegExp(" ","g"),"\\ ");
				link=EmotesBasicURL+''+Emotes[i][1];
				w=Emotes[i][2];
				h=Emotes[i][3];
				alt=Emotes[i][0];
				arr.push(a+' '+a+' '+'g'+' '+'<img\\ src="'+link+'"\\ width="'+w+'"\\ height="'+h+'"\\ alt="'+alt+'"\\ />');
			}
			str='custom\\ image \\[img\\]([^\\*]+)\\[\\/img\\] g '
			  + '<a\\ href="$1"\\ target="_blank"><img\\ src="$1"\\ width="100"\\ alt="custom\\ image"\\ /></a>';
			arr.push(str);
			$("#multifiltereditor").val(arr.join("\n"));
		  });
	}
}

// set timeout for installing buttons because Moderation Menu loading

function tickBtn() {
	setTimeout(function() {toggleInstallBtn()}, 4000);
}

// default layout patch

function defaultLayoutPatch() {
	if (UI_DefaultSynchtube=="1") {
		USERCONFIG.player="left";
		USERCONFIG.userlist="right";
		USERCONFIG.queue="left";
	}
	UI_DefaultPlaylistMenu=="1" ? USERCONFIG.menu="menu" : '';
}

// set user online time

function onlineTime() {
	USERONLINE++;
	hours=Math.floor(USERONLINE/60);
	minutes=USERONLINE-hours*60;
	minutes<10 ? minutes="0"+minutes : '';
	$_onlinetime.html(hours+":"+minutes);
}

// set basic CSS

function setCSS() {
	if ($("#chanexternalcss").length<1) {
		url='https://dl.dropboxusercontent.com/s/qb1g9q0dieg6b1k/main.css';
		$head.append('<link id="chanexternalcss" href="'+url+'" rel="stylesheet" type="text/css">');
	}
	$("#chancss").remove();
	if (CHANCSS!="") {
		$head.append('<style id="chancss" type="text/css">'+CHANCSS+'</style>');
	}
}

// set user CSS

function setUserCSS() {
	$("#usertheme").remove();
	$('<link href="'+USERTHEME+'" rel="stylesheet" id="usertheme" type="text/css">')
	  .appendTo($head);
	$("#themepatch").remove();
	if (USERTHEME=="assets/css/ytsync.css") {
		html='#videowrap {background:transparent} '
		  + '.qe_title, .db-title {color:#0088CC} '
		  + '.qe_title:hover {color:#005580}';
		$('<style id="themepatch" type="text/css" />')
		  .html(html)
		  .appendTo($head);
	} else if (USERTHEME=="assets/css/darkstrap.css") {
		html='.alert a {color:#eeeeee} '
		  + 'select {background-color:black} '
		  + '#motdwrap {background-color:#333333} '
		  + '#currenttitle {background:transparent} '
		  + '#titlerow-outer {background-image:linear-gradient(to right, #666666, #666666)} '
		  + '#rulespanel, .currenttitle, #mediainfo, #footer-outer {color:#C6C6C6} '
		  + '.queue_entry {color:#C6C6C6} '
		  + '.badge {text-shadow:none; box-shadow:none} '
		  + '#annclose-btn {color:black}';
		$('<style id="themepatch" type="text/css" />')
		  .html(html)
		  .appendTo($head);
	} else if (USERTHEME=="assets/css/altdark.css") {
		html='#motdwrap {background-color:#333333; color:white} '
		  + '#titlerow-outer {background-image:linear-gradient(to right, #666666, #666666)} '
		  + '#rulespanel, .currenttitle, #mediainfo, #footer-outer {color:white} '
		  + '.queue_entry {color:#F5F5F5} '
		  + '#sitefooter {color:#CCCCCC} '
		  + '#annclose-btn {color:black}'
		  + '#cbtn0 {background:gold !important} '
		  + '#cbtn1 {background:orange !important} '
		  + '#cbtn2 {background:red !important} '
		  + '#cbtn3 {background:green !important} '
		  + '#cbtn4 {background:blue !important} '
		  + '#cbtn5 {background:brown !important} '
		  + '#cbtn6 {background:silver !important} '
		  + '#cbtn7 {background:white !important; color:silver !important}';
		$('<style id="themepatch" type="text/css" />')
		  .html(html)
		  .appendTo($head);
	}
	$("#usercss").remove();
	if (USEROPTS.css!="") {
		$head.append('<link href="'+USEROPTS.css+'" rel="stylesheet" id="usercss" type="text/css">');
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- SETTING LAYOUT CONFIGURATION ----- */

var USERCONFIG = {
"player":"right", "userlist":"left", "queue":"right",
"qsize":"wide", "main":"top", "motd":"top",
"image":"no", "header":"detach", "menu":"default"
}

var CHANCSS = ($("#chancss").length>0) ? $("#chancss").html() : '';
var USERTHEME = 'assets/css/ytsync.css';
var EMOTES = false;
var CHANDB = false;
var GALLERY = false;
var DESCR = true;
var DEFDESCR = true;
var PLAYERTYPE = PLAYER.type;
var HIDDENPL = false;
var PINNED = false;
var FULLPL = false;
var MINIMIZED = false;
var USERONLINE = 0;
var ADDEDLINKS = new Array();
var LASTADD = 0;
var PREVTIME = 0;
var BGCHANGE = 0;
var IMBA = new Audio("https://dl.dropboxusercontent.com/s/xdnpynq643ziq9o/inba.ogg");
var WEBKIT = "webkitRequestAnimationFrame" in window;

CHATSOUND.volume=0.6;

// additional elements #id and attributes

$(".navbar-inverse .navbar-inner").attr('id', 'header');
$(".navbar-fixed-top .nav").attr('id', 'headermenu');
$("#headermenu li:nth-child(1)").attr('id', 'link-home');
$("#link-home a").attr('target', '_blank');
$("#headermenu li:nth-child(2)").attr('id', 'link-help');
$("#librarytoggle").parent().attr('id', 'librarytoggle-outer');
$("#customembed_entry").parent().attr('id', 'customembedwrap');
$("#voteskip").parent().attr('id', 'voteskipwrap');

// removing and changing CSS unnecessary classes and layout elements

$("#link-home").removeClass('active');
$("#toprow, #announcements, #main").removeClass('row-fluid').addClass('row');
$("#main-inner, #playlistrow, #playlist-inner").removeClass('row-fluid').addClass('row');
$(".container-fluid").removeClass('container-fluid').addClass('container');
$("#motdwrap").removeClass('well').addClass('span12');
$("#announcements").removeClass('row').addClass('span12');
$("#sitefooter .well").removeClass('well');

// cookie: getting CSS user themes

_cookie=readCookie(CookiePrefix+"_theme");
if (_cookie!=null) {
	USERTHEME=_cookie;
	if (UI_LayoutThemeSel=="0" && UI_ChannelTheme=="1" && ChannelThemeURL!="") {
		USERTHEME=ChannelThemeURL;
	}
} else {
	(UI_ChannelTheme=="1" && ChannelThemeURL!="") ? USERTHEME=ChannelThemeURL: '';
}

// cookie: getting CSS user logo

_cookie=readCookie(CookiePrefix+"_logo");
if (_cookie!=null) {
	a=_cookie.split("|");
	var USERLOGO=a[0];
	var USERLOGOHT=a[1]*1;
	(isNaN(USERLOGOHT) || USERLOGOHT<1) ? USERLOGOHT='200' : '';
}

// cookie: getting number of visits

_cookie=readCookie(CookiePrefix+"_visits");
_cookie==null ? _cookie=1 : '';
var USERVISITS=_cookie;
_cookie++;
createCookie(CookiePrefix+"_visits", _cookie, 365);

// cookie: getting layout configuration

_cookie=readCookie(CookiePrefix+"_config");
if (_cookie==null) {
	USERCONFIG={
	"player":"right", "userlist":"left", "queue":"right", 
	"qsize":"wide", "main":"top", "motd":"top", 
	"image":"no", "header":"detach", "menu":"default"
	}
	defaultLayoutPatch();
} else {
	a=_cookie.split(",");
	USERCONFIG={
	"player":a[0], "userlist":a[1], "queue":a[2], 
	"qsize":a[3], "main":a[4], "motd":a[5], 
	"image":a[6], "header":a[7], "menu":a[8]
	}
}

// caching more than once used existing selectors

$head = $("head"); $body = $("body"); $main = $("#main");
$navbarfixedtop = $(".navbar-fixed-top"); $brand = $(".brand"); $chatonly = $("#chatonly");
$toprow = $("#toprow"); $motdwrap = $("#motdwrap"); $motd = $("#motd");
$announcements = $("#announcements"); $chatwrap = $("#chatwrap"); $messagebuffer = $("#messagebuffer");
$userlist = $("#userlist"); $chatline = $("#chatline"); $currenttitle = $("#currenttitle");
$videowrap = $("#videowrap"); $qualitywrap = $("#qualitywrap"); $mediarefresh = $("#mediarefresh");
$playlistrow = $("#playlistrow"); $leftpaneouter = $("#leftpane-outer"); $leftpaneinner = $("#leftpane-inner");
$rightpaneouter = $("#rightpane-outer"); $playlistcontrols = $("#playlist_controls"); $queuenext = $("#queue_next");
$queueend = $("#queue_end"); $customembedbtn = $("#customembed_btn"); $customembedentry = $("#customembed_entry");
$extendedcontrols = $("#extended_controls"); $clearplaylist = $("#clearplaylist"); $voteskip = $("#voteskip");
$voteskipwrap = $("#voteskipwrap"); $shuffleplaylist = $("#shuffleplaylist"); $queue = $("#queue");
$plmeta = $("#plmeta"); $sitefooter = $("#sitefooter"); $videowidth = $("#videowidth");

// setting CSS files in proper order

setCSS();
setUserCSS();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- USER INTERFACE ----- */

// changing style-proof "caret" class to text unicode signs

$("#channelsettingswrap .caret, #qualitywrap .caret").remove();
$("#csdropdown_title").after(' ▴');
$qualitywrap.find("btn").append(' ▾');

// adding fake video player layer if "Hide Video" option is enabled

if (USEROPTS.hidevid) {
	USEROPTS.hidevid=false;
	HIDDENPL=true;
	$chatwrap.add($chatline).removeClass('span12').addClass('span5');
	$videowrap = $('<div id="videowrap" class="span7" />')
	  .insertAfter($chatwrap);
	$currenttitle = $('<p id="currenttitle" />')
	  .html('Currently Playing: '+$(".queue_active a").html())
	  .appendTo($videowrap);
	$ytapiplayer = $('<div id="ytapiplayer" />')
	  .appendTo($videowrap);

	text='According to your User Options, video player is hidden. '
	  + 'Click \"Refresh / Fix Player\" button to show player in this session.<br />';
	makeAlert("No Player", text).appendTo($ytapiplayer);

	$_staybtn = $('<button id="staybtn" class="btn">Stay In "Chat Only" Mode</button>')
	  .appendTo("#ytapiplayer .alert")
	  .on("click", function() {
        	$qualitywrap.html("");
        	$videowrap.remove();
		$chatwrap.add($chatline).removeClass().addClass("span12");
	});

	$mediarefresh = $('<button id="mediarefresh" class="btn btn-small">Refresh / Fix Player</button>')
	  .appendTo("#qualitywrap")
	  .on("click", function() {
		refreshPlayer();
	  });
}

// adding favicon

if (UI_Favicon=="1") {
	$(document).ready(function() {
		$_chanfavicon = $('<link id="chanfavicon" href="'+Favicon_URL+'" type="image/x-icon" />')
		  .attr('rel', 'shortcut icon')
		  .appendTo($head);
	});
}

// changing channel name

if (UI_ChannelName=="1") {
	$brand.html(ChannelName_Caption);
}

// adding channel small logo

if (UI_MiniLogo=="1" && MiniLogo_URL!="") {
	$_chanavatar = $('<img id="chanavatar" src="'+MiniLogo_URL+'" />')
	  .prependTo($brand);
}

// optional removing of "Chat Only" link

if (UI_RemoveChatOnly=="1") {
	$("#chatonly").parent().remove();
} else {
	$chatonly.on("click", function() {
		$("#azukirow, #drinkrow, #titlerow").remove();
	});
}

// adding header dropdown menu

if (UI_HeaderDropMenu=="1") {
	HeaderDropMenu_Title=="" ? HeaderDropMenu_Title='Menu' : '';
	$_headerdrop = $('<li id="dropmenu" class="dropdown" />')
	  .insertAfter("#link-home");
	$('<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" />')
	  .html(HeaderDropMenu_Title+' ▾')
	  .appendTo($_headerdrop);
	$_headermenu = $('<ul id="hmenu" class="dropdown-menu header-dropdown" />')
	  .appendTo($_headerdrop);

	HeaderDropMenu_Items.length<1 ? HeaderDropMenu_Items=[['no menu available', '']] : '';
	for (i in HeaderDropMenu_Items) {
		title=HeaderDropMenu_Items[i][0];
		link=HeaderDropMenu_Items[i][1];
		if (link=="") {
			$_headermenu.append('<li class="nav-header">'+title+'</li>');
		} else {
			$('<li class="header-drop-link" />')
			  .append('<a href="'+link+'" target="_blank">'+title+'</a>')
			  .appendTo($_headermenu);
		}
	}
}

// changing top navbar help file link

if (UI_CustomHelp=="1" && CustomHelp_URL!="") {
	$("#link-help a").attr('href', CustomHelp_URL);
}

// adding important layout reference row

$_zerorow = $('<div id="zerorow" class="row" />').insertBefore($toprow);

// adding MOTD logo

if (UI_MOTDAutoLogo=="1") {
	if (MOTDAutoLogo_Mode!="1" && MOTDAutoLogo_Mode!="2" && MOTDAutoLogo_Mode!="3" && MOTDAutoLogo_Mode!="7") {
		MOTDAutoLogo_Mode='1';
	}
	$motdwrap.add($motd).show();
	if (MOTDAutoLogo_Mode=="3") {
		(typeof MOTDAutoLogo_Timeout!=="number" || MOTDAutoLogo_Timeout<1) ? MOTDAutoLogo_Timeout='20' : '';
		setInterval(function() {rotateLogo()}, MOTDAutoLogo_Timeout*1000);
	}

	socket.on("setMotd", changeMOTD);
	changeMOTD();
}

// adding rules button and panel

if (UI_RulesBtn=="1") {
	socket.on("setMotd", rulesPanel);
	rulesPanel();
}

// fixing MOTD minimizing and editing buttons

$_motdbtnwrap = $('<div id="motdbtnwrap" />')
  .append($("#togglemotd").detach()).append($("#editmotd").detach())
  .appendTo($motdwrap);

// detaching drinkbar

$_drinkrow = $('<div id="drinkrow" class="row" />')
	.insertAfter($toprow);
$_drinkbarwrap = $('<div id="drinkbarwrap" class="span12" />')
	.append($("#drinkbar").detach())
	.appendTo($_drinkrow);

// wrapping announcements content

$announcements.wrap('<div id="annrow" class="row" />');
$_annrow = $("#annrow");

// adding attention bar

if (UI_AttentionBar=="1" && AttentionBar_URL!="") {
	$_annrow.show();
	$_attbarwrap = $('<div id="attbarrow-outer" />')
	  .prependTo($announcements);
	$_attbar = $('<iframe id="attbar" width="100%" />')
	  .attr('frameborder', '0').attr('scrolling', 'no').attr('src', AttentionBar_URL)
	  .appendTo($_attbarwrap);
}

// adding custom channel announcement

if (UI_ChannelAnnouncement=="1") {
	$_annrow.show();
	ChannelAnnouncement_Title=="" ? ChannelAnnouncement_Title='Administration Message' : '';
	ChannelAnnouncement_HTML=="" ? ChannelAnnouncement_HTML='<i>no messages</i>' : '';
	makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).appendTo($announcements);
}

// hiding or adding closing button to announcement

if ((UI_AttentionBar=="1" || AttentionBar_URL!="") && $("#announcements .alert").length<1) {
	$_annrow.hide();
} else {
	if (UI_AttentionBar=="1" && AttentionBar_URL!="") {
		$_annclosebtn = $('<button id="annclose-btn" class="close pull-right">×</button>')
		  .prependTo($announcements);
	} else {
		$_annclosebtn = $('<button id="annclose2-btn" class="btn btn-small pull-right">×</button>')
		  .appendTo($announcements);
	}
	$_annclosebtn.on("click", function() {
		$_annrow.hide();
	});
}

// adding full-width title bar and progress bar

if (UI_FullTitleBar=="1") {
	$_titlerow = $('<div id="titlerow" class="row" />')
	  .insertBefore($main);
	$_titlerowouter = $('<div id="titlerow-outer" class="span12" />')
	  .html($currenttitle.detach())
	  .appendTo($_titlerow);
	$_mediainfo = $('<p id="mediainfo" />')
	  .prependTo($videowrap);

	UI_ProgressBar=="1" ? setInterval(function() {progressBar()}, 2000) : '';

	socket.on("changeMedia", showInfo);
	showInfo();
}

// changing title bar description

if (UI_TitleBarDescription=="1") {
	socket.on("changeMedia", changeTitle);
	changeTitle();
}

// optional chat joining message

if (UI_JoinText=="1") {
	JoinText_Message=="" ? JoinText_Message="joined" : '';
	socket.emit("chatMsg", {msg: '/me '+JoinText_Message});
}

// optional chatleaving message

if (UI_LeaveText=="1") {
	LeaveText_Message=="" ? LeaveText_Message="left" : '';
	$(window).unload(function() {
		socket.emit("chatMsg", {msg: '/me '+LeaveText_Message});
	});
}

// chat extension: additional user commands, independent chat filters and user special signs

_chatBuffer=addChatMessage;
addChatMessage=function(data) {
	RandomQuotes.length<1 ? RandomQuotes=['error: no quotes available'] : '';
	AskAnswers.length<1 ? AskAnswers=['yes', 'no'] : '';
	((typeof ChatSuffix_Percentage!=="number") || ChatSuffix_Percentage<0) ? ChatSuffix_Percentage='10' : '';

	if (UI_IndependentFilters=="1") {
		for (i in IndependentFilters) {		
			data.msg=data.msg.replace(IndependentFilters[i].before, IndependentFilters[i].after);
		}
	}

	chnr=0;
	if (UI_UserSpecialSigns=="1") {
		if (UserSpecialSigns_Array[data.username]!=undefined) {
			chnr=UserSpecialSigns_Array[data.username].length+1;
			data.msg=UserSpecialSigns_Array[data.username]+' '+data.msg;
		}
	}

	if (UI_LocalFilters=="1") {
		for (i in Emotes) {
			link=Emotes[i][1];
			w=Emotes[i][2];
			h=Emotes[i][3];
			code='<img src="'+EmotesBasicURL+''+link+'" class="emote" style="width:'+w+'; height:'+h+'" onclick="insertText(\''+Emotes[i][0]+'\')" />';
			re=new RegExp(Emotes[i][0], 'g');
			data.msg=data.msg.replace(re, code);
		}
		for (i in FontsArray) {
			a=FontsArray[i][4];
			a=a.replace(/\\/g, '');
			b='['+FontsArray[i][1]+']';
			data.msg=data.msg.replace(b, a);
			data.msg=data.msg.replace(/\[\/\]/, '</span>');
		}
	}
	if (UI_ChatSuffix=="1") {
		Math.random()<(ChatSuffix_Percentage/100) ? data.msg+=' '+ChatSuffix_Text : '';
	}
	_chatBuffer(data);

	if (UI_UserCommands=="1" && data.msg.indexOf("!")==chnr) {
		var isCommand=true;
		if (data.msg.indexOf("!pick ")==chnr) {
			arr=data.msg.split("!pick ")[1].split(",");
			a=Math.round(Math.random()*(arr.length-1));
			data.msg=arr[a];
		} else if (data.msg.indexOf("!ask ")==chnr) {
			a=Math.round(Math.random()*(AskAnswers.length-1));
			data.msg=AskAnswers[a];
		} else if (data.msg.indexOf("!time")==chnr) {
			a=new Date().getHours();
			a<10 ? a='0'+a : false;
			b=new Date().getMinutes();
			b<10 ? b='0'+b : false;
			data.msg='current time: '+a+':'+b;
		} else if (data.msg.indexOf("!dice")>-1) {
			a=Math.round(Math.random()*5)+1;
			data.msg=a;
		} else if (data.msg.indexOf("!roll")>-1) {
			a=Math.round(Math.random()*999);
			a<100 ? a="0"+a : '';
			a<10 ? a="0"+a : '';
			data.msg=a;
		} else if (data.msg.indexOf("!q")==chnr) {
			a=Math.round(Math.random()*(RandomQuotes.length-1));
			data.msg=RandomQuotes[a];
		} else if (data.msg.indexOf("!random")==chnr) {
			if (UI_ChannelDatabase=="1") {
				a="";
				while (a=="") {
				b=Math.round(Math.random()*(ChannelDatabase.length-1));
					a=ChannelDatabase[b][0];
					c=ChannelDatabase[b][1];
				}
				addToPlaylist(a, "end");
				data.msg='added random video: '+c;
			} else {
				data.msg='error: channel database is not enabled';
			}
		} else if (data.msg.indexOf("!calc ")==chnr) {
			temp=data.msg.split("!calc ");
			data.msg=eval(temp[1]);
		} else if (data.msg.indexOf("!skip")==chnr) {
			socket.emit("voteskip");
			data.msg='current video has been voteskipped';
		} else if (data.msg.indexOf("!add ")==chnr) {
			parsed=parseMediaLink(data.msg.split("!add ")[1]);
			if (parsed["id"]===null) {
				data.msg='error: wrong video link, video has not been added';
			} else {
				socket.emit("queue", {id: parsed["id"], pos: "end", type: parsed["type"]});
				data.msg='video has been added';
			}
		} else if (data.msg.indexOf("!now")==chnr) {
			data.msg='Now playing: '+$(".queue_active a").html();
		} else if (data.msg.indexOf("!CO ZJE TEH?")==chnr) {
			data.msg='TEH ZJE HUJ';
		} else if (data.msg.indexOf("!inba")==chnr) {
			IMBA.volume=0.6;
			IMBA.play();
			mutePlayer();
			var intervalA=setInterval(function() {inba()}, 200);
			setTimeout(function() {
				unmutePlayer();
				BGCHANGE=0;
				clearInterval(intervalA);
				$("body").css('background-image', '').css('background-color', '');
				setUserCSS();
			}, 12000);
			data.msg='JP2GMD';
		} else {
			isCommand=false;
		}
		if (isCommand) {
			data.msg='<span style="font-style:italic" class="nick-highlight">➥ '+data.msg+'</span>';
			_chatBuffer(data);
		}
	}
}

// customizing chat notifications sound

if (UI_ChatSound=="1") {
	CHATSOUND = new Audio(ChatSound_URL);
	CHATSOUND.volume=0.6;
}

// adding chat buttons wrapping

$_chatbtnouter = $('<div id="chatbtn-outer" />')
  .appendTo($chatwrap);
$_chatbtnwrap = $('<div id="chatbtnwrap" class="btn-group" />')
  .appendTo($_chatbtnouter);

// adding chat fonts button

if (UI_FontsBtn=="1") {
	$_fontsbtn = $('<button id="fonts-btn" class="btn btn-small"><i class="icon-font"></i></button>')
	  .appendTo($_chatbtnwrap)
	  .on("click", function() {
		toggleDiv($_fontspanel)
	  });
}

// adding chat emotes button

if (UI_EmotesBtn=="1") {
	$_emotesbtn = $('<button id="emotes-btn" class="btn btn-small"><i class="icon-picture"></i></button>')
	  .appendTo($_chatbtnwrap)
	  .on("click", function() {
		toggleDiv($_emotespanel);
		(UI_ChannelCache!="1" && !EMOTES) ? showEmotes() : '';
	  });
}

// adding chat commands help button

if (UI_CommandsBtn=="1") {
	$_chathelpbtn = $('<button id="chathelp-btn" class="btn btn-small">Chat Commands</button>')
	  .appendTo($_chatbtnwrap)
	  .on("click", function() {
		createModal('Chat Commands', 'Close');

		if (UI_LocalFilters=="1" || UI_FontsBtn=="1") {
			body.append('<strong>Fonts commands are ON</strong><br /><br />');
			html='<li><code>[gold]</code>, <code>[orange]</code>, <code>[red]</code>, '
			  + '<code>[green]</code>, <code>[blue]</code>, <code>[brown]</code>, '
			  + '<code>[silver]</code>, <code>[white]</code> - begin of coloured text</li>'
			  + '<li><code>[b]</code>, <code>[i]</code>, <code>[u]</code> - begin of bold, italic or '
			  + 'underlined text</li><li><code>[sp]</code> - begin of inline spoiler</li>'
			  + '<li><code>[/]</code> - end of any colour, style or spoiler</li>';
			$('<ul />').html(html).appendTo(body);
		}
		if (UI_UserCommands=="1") {
			scrcmd={
			'pick':'choosing a random option from a list separated by commas (e.g. <i>!pick japan,korea,china</i>)',
			'ask':'asking a question with yes/no type answer (e.g. <i>!ask Will this channel be popular?</i>)',
			'q':'displaying random quote (<i>!q</i>)',
			'dice':'rolling dice (<i>!dice</i>)',
			'roll':'rolling 3-digit number (<i>!roll</i>)',
			'time':'displaying current time (<i>!time</i>)',
			'now':'displaying current playing title (<i>!now</i>)',
			'calc':'calculating a math operation (all JavaScript Math methods and constants allowed, e.g. <i>!calc Math.PI*10</i>)',
			'skip':'vote down current video to skip (<i>!skip</i>)',
			'random':'adding random video if Channel Database is enabled (<i>!random</i>)',
			'add':'adding a link to the end of playlist (e.g. <i>!add http://www.youtube.com/watch?v=YLNH_Fqj4DE</i>)'
			}
			body.append('<br /><strong>New chat commands are ON</strong><br /><br />');
			cmdlist=$('<ul />').appendTo(body);
			for (cmd in scrcmd) {
				cmdlist.append('<li><code>!'+cmd+'</code> - '+scrcmd[cmd]+'</li>');
			}
		}
		defcmd={
		'me':'showing an action-style message (username does something, e.g. <i>/me is dancing</i>)',
		'sp':'hiding a message in a hover-to-show spoiler box (e.g. <i>/sp This message is hidden</i>)',
		'afk':'toggling your AFK (away from keyboard) status (<i>/afk</i>)',
		}
		body.append('<br /><strong>Default CyTube commands</strong><br /><br />');
		cmdlist2=$('<ul />').appendTo(body);
		for (cmd in defcmd) {
			cmdlist2.append('<li><code>/'+cmd+'</code> - '+defcmd[cmd]+'</li>');
		}
	  });
}

// detaching player control buttons

$videowrap.append($qualitywrap.detach().removeClass('span12'));
$mediarefresh.text('Refresh / Fix Player');
$("#queue_align2").remove();

// adding player transformations dropdown menu

if (UI_PlayerMenu=="1") {
	$mediarefresh.wrap('<div class="btn-group" />');
	$_playerdrop = $('<button id="playerdrop" class="btn btn-small dropdown-toggle" data-toggle="dropdown" />')
	  .text('Controls ▾')
	  .insertAfter($mediarefresh);
	$_playermenu = $('<ul id="playermenu" class="dropdown-menu pull-right" />')
	  .insertAfter($_playerdrop);

	$_playermenux = $('<li><a id="playermenu-x" href="javascript:void(0)">Mirror X Player</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		if ($("#ytapiplayer").hasClass('mX')) $("#ytapiplayer").removeClass('mX');
		else $("#ytapiplayer").addClass('mX');
	  });
	$_playermenuy = $('<li><a id="playermenu-y" href="javascript:void(0)">Mirror Y Player</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		if ($("#ytapiplayer").hasClass('mY')) $("#ytapiplayer").removeClass('mY');
		else $("#ytapiplayer").addClass('mY');
	  });
	$_playermenur = $('<li><a id="playermenu-r" href="javascript:void(0)">Rotate Player</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		if ($("#ytapiplayer").hasClass('rotate')) $("#ytapiplayer").removeClass('rotate');
		else $("#ytapiplayer").addClass('rotate');
	  });
	$_playermenuv = $('<li><a id="playermenu-v" href="javascript:void(0)">Vertical Player</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		if ($("#ytapiplayer").hasClass('vertical')) {
			$("#ytapiplayer").removeClass('vertical');
			$_playermenuv.find("a").text('Vertical Player');
		} else {
			$("#ytapiplayer").addClass('vertical');
			$_playermenuv.find("a").text('Horizontal Player');
		}
	  });
	$_playermenuh = $('<li><a id="playermenu-h" href="javascript:void(0)">Hide Player</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		$("#ytapiplayer").hasClass('covered') ? showPlayer() : coverPlayer();
	  });
	$_playermenud = $('<li><a id="playermenu-d" href="javascript:void(0)">Hide Media Info</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		toggleDescr();
	  });
	$_playermenum = $('<li><a id="playermenu-m" href="javascript:void(0)">Switch Description</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		DEFDESCR ? DEFDESCR=false : DEFDESCR=true;
		showInfo();
	  });
	$_playermenup = $('<li><a id="playermenu-p" href="javascript:void(0)">PinUp Playlist</a></li>')
	  .appendTo($_playermenu)
	  .on("click", function() {
		if (!PINNED) {
			if (USERCONFIG.player=="center" || USERCONFIG.queue=="center") {
				alert('You can\'t pin playlist if player or playlist are centered.');
			} else {
				pinUp();
			}
		} else {
			unPin();
		}
		scrollQueue();
		scrollChat();
	  });
}

// adding emotes panel

if (UI_EmotesBtn=="1") {
	$_emotespanel = $('<div id="emotespanel" />')
	  .insertAfter($main);
	UI_ChannelCache=="1" ? showEmotes() : '';
}

// creating fonts buttons array

// array syntax: ['button_style', 'chat_code', 'button_text', 'filter_name', 'filter_replace'],
FontsArray = [
['background:gold', 'gold', '■', 'gold\\ colour', '<span\\ style="color:gold">'],
['background:orange', 'orange', '■', 'orange\\ colour', '<span\\ style="color:orange">'],
['background:red', 'red', '■', 'red\\ colour', '<span\\ style="color:red">'],
['background:green', 'green', '■', 'green\\ colour', '<span\\ style="color:green">'],
['background:blue', 'blue', '■', 'blue\\ colour', '<span\\ style="color:blue">'],
['background:brown', 'brown', '■', 'brown\\ colour', '<span\\ style="color:brown">'],
['background:silver', 'silver', '■', 'silver\\ colour', '<span\\ style="color:silver">'],
['background:white; color:silver', 'white', '■', 'white\\ colour', '<span\\ style="color:white;\\ background-color:silver">'],
['background:white; font-weight:bold', 'b', 'B', 'bold\\ text', '<span\\ style="font-weight:bold">'],
['background:white; font-style:italic', 'i', 'I', 'italic\\ text', '<span\\ style="font-style:italic">'],
['background:white; text-decoration:underline', 'u', 'U', 'underlined\\ text', '<span\\ style="text-decoration:underline">'],
['background:black; color:white', 'sp', 'sp', 'short\\ spoiler', '<span\\ class="spoiler">'],
['background:white', '\/', '\[\/\]', 'closing\\ font\\ style', '<\/span>'],
];

// adding fonts panel

if (UI_FontsBtn=="1") {
	$_fontspanel = $('<div id="fontspanel" />')
	  .insertBefore($playlistrow);
	$_fontsbtnwrap = $('<div id="fontsbtnwrap" />')
	  .appendTo($_fontspanel);
	for (i in FontsArray) {
		$('<button id="cbtn'+i+'" style="'+FontsArray[i][0]+'" onclick="insertText(\'['+FontsArray[i][1]+']\')" />')
	  	  .addClass('btn').text(FontsArray[i][2])
	 	  .appendTo($_fontsbtnwrap);
	}
	if (UI_UnicodeChars=="1" && UnicodeChars_Array.length>0) {
		$_unibtnwrap = $('<div id="unibtnwrap" />')
		  .appendTo($_fontspanel);
		for (i in UnicodeChars_Array) {
			btn=$('<button class="btn" onclick="insertText(\''+UnicodeChars_Array[i]+'\')" />')
			  .text(UnicodeChars_Array[i]);
			UnicodeChars_Array[i].length>1 ? btn.css('width', 'auto') : false;
			$_unibtnwrap.append(btn);
			i%13==12 ? $_unibtnwrap.append('<br />') : false;
		}
	}
}

// adding playlist row minimizing button

if (UI_MinimizeBtn=="1") {
	$_minimizebtn = $('<button id="minimize-btn" class="btn btn-small pull-right">Minimize</button>')
	 .prependTo("#pollbtnwrap")
	  .on("click", function() {
		if (!MINIMIZED) {
			if (!PINNED) {
				$leftpaneinner.find(".well").add($extendedcontrols).add($queue).add($plmeta).hide();
				$voteskipwrap.hide();
			} else {
				$messagebuffer.add($userlist).add($chatline);
			}
			$_minimizebtn.text('Maximize');
			$toprow.add($_footrow).add("#azukirow, #annrow, #playermenu-p").hide();
			MINIMIZED=true;
		} else {
			if (!PINNED) {
				$leftpaneinner.find(".well").add($extendedcontrols).add($queue).add($plmeta).show();
				$voteskipwrap.show();
			} else {
				$messagebuffer.add($userlist).add($chatline);
			}
			$_minimizebtn.text('Minimize');
			$toprow.add($_footrow).add("#azukirow, #annrow, #playermenu-p").show();
			MINIMIZED=false;
		}
	  });
}

// adding Layout Configuration box

$_layouttoggleouter = $('<div id="layouttoggle-outer" class="well well-small span12 row-fluid" />')
  .insertAfter("#pollwrap");
$_layouttoggle = $('<div id="layouttoggle" class="span12 pointer" />')
  .html('<i class="icon-minus pull-left"></i><p>Hide Layout Configuration</p>')
  .appendTo($_layouttoggleouter)
  .on("click", function() {
	if ($_layoutwrap.css("display")=="none") {
		$_layoutwrap.show();
		$_layouttoggle.html($_layouttoggle.html().replace(/Show/, "Hide"));
		$_layouttoggle.find("i").removeClass("icon-plus").addClass("icon-minus");
	} else {
		$_layoutwrap.hide();
		$_layouttoggle.html($_layouttoggle.html().replace(/Hide/, "Show"));
		$_layouttoggle.find("i").removeClass("icon-minus").addClass("icon-plus");
	}
  });
$_layoutwrap = $('<div id="layoutwrap" class="span12" />')
  .insertAfter($_layouttoggle);

// adding selector with player display modes

if (UI_DisplayModeSel=="1") {
	$_modewrap = $('<div id="modewrap" class="span12" />')
	  .appendTo($_layoutwrap);
	$_modetitle = $('<span id="modetitle" class="conf-opt">Display Mode</span><br />')
	  .appendTo($_modewrap);
	$_modesel = $('<select id="mode-sel" />')
	  .append('<option value="syMode">synchtube mode</option>')
	  .append('<option value="kMode">cinema mode</option>')
	  .append('<option value="chMode">chatroom mode</option>')
	  .append('<option value="rMode">radio mode</option>')
	  .appendTo($_modewrap)
	  .on("change", function() {
		$_configwrap.hide();
		PLAYER.type=="jw" ? refreshPlayer() : '';
		setMode($_modesel.val());
		scrollQueue();
		scrollChat();
	  });

	socket.on("changeMedia", displayModePatch);
}

// adding layout configuration button

$_configwrap = $('<div id="userconfigwrap" class="span12" />')
  .appendTo($_layoutwrap);
$_configbtn = $('<button id="config-btn" class="btn btn-small">Layout Configuration</button>')
  .appendTo($_configwrap);

// adding layout themes selector

if (UI_LayoutThemeSel=="1") {
	$_themewrap = $('<div id="themewrap" class="span12" />')
	  .appendTo($_layoutwrap);
	$_themetitle = $('<span id="themetitle" class="conf-opt">Layout Theme</span><br />')
	  .appendTo($_themewrap);
	$_themesel = $('<select id="theme-sel" />')
	  .appendTo($_themewrap)
	  .on("change", function() {
		selValue=$_themesel.val();
		USERTHEME=selValue;
		setUserCSS();
		eraseCookie(CookiePrefix+"_theme");
		createCookie(CookiePrefix+"_theme", selValue, 365);
	  });

	if (UI_LayoutDefaultThemes=="1") {
		ThemesCSS.unshift(['# alternate dark', 'assets/css/altdark.css']);
		ThemesCSS.unshift(['# dark', 'assets/css/darkstrap.css']);
		ThemesCSS.unshift(['# default', 'assets/css/ytsync.css']);
	}

	if (UI_ChannelTheme=="1" && ChannelThemeURL!="") {
		ThemesCSS.unshift(['## channel theme', ChannelThemeURL]);
	} else if (UI_LayoutDefaultThemes!="1" && ThemesCSS.length<1) {
		ThemesCSS.unshift(['# default', 'assets/css/ytsync.css']);
	}

	ThemesCSS.unshift(['## my old theme', USERTHEME]);
	for (i in ThemesCSS) {
		link=ThemesCSS[i][1];
		link==USERTHEME ? $_themesel.find("option[value='"+USERTHEME+"']").remove() : '';
		$_themesel.append('<option value="'+link+'">'+ThemesCSS[i][0]+'</option>');
	}
	$_themesel.val(USERTHEME);
}

// adding commands and volume buttons

if (UI_FastCommandsBtns=="1" || UI_YTVolumeBtns=="1") {
	$_btnswrap = $('<div id="funcbtnwrap" class="span12 btn-group" />')
	  .appendTo($_layoutwrap);
	if (UI_FastCommandsBtns=="1") {
		$_clearbtn = $('<button id="clear-btn" class="btn btn-small">/clear</button>')
		  .appendTo($_btnswrap)
		  .on("click", function() {
			if (confirm('Are you sure to clear the chat window?')) {
				socket.emit("chatMsg", {msg: '/clear'});
			}
		  });
		$_afkbtn = $('<button id="afk-btn" class="btn btn-small">/afk</button>')
		  .appendTo($_btnswrap)
		  .on("click", function() {
			socket.emit("chatMsg", {msg: '/afk'});
		  });
		!hasPermission("playlistclear") ? $_clearbtn.hide() : '';
		socket.on("rank", toggleClearBtn);
		toggleClearBtn();
	}
	if (UI_YTVolumeBtns=="1") {
		$_voldownbtn = $('<button id="voldown-btn" class="btn btn-small">vol -</button>')
		  .appendTo($_btnswrap)
		  .on("click", function() {
			a=PLAYER.player.getVolume();
			PLAYER.player.setVolume(a-1);
		  });
		$_volupbtn = $('<button id="volup-btn" class="btn btn-small">vol +</button>')
		  .appendTo($_btnswrap)
		  .on("click", function() {
			a=PLAYER.player.getVolume();
			PLAYER.player.setVolume(a+1);
		  });
		socket.on("changeMedia", toggleVolBtn);
		toggleVolBtn();
	}
}

// adding Channel Database box

if (UI_ChannelDatabase=="1" && ChannelDatabase_URL=="") {
	$_dbtoggleouter = $('<div id="dbtoggle-outer" class="well well-small span12 row-fluid" />')
	  .appendTo($leftpaneinner);
	$_dbtoggle = $('<div id="dbtoggle" class="span12 pointer" />')
	  .html('<i class="icon-plus pull-left"></i><p>Show Channel Database</p>')
	  .appendTo($_dbtoggleouter)
	  .on("click", function() {
		if ($_dbwrap.css("display")=="none") {
			$_dbwrap.show();
			!CHANDB ? createDatabase() : '';
			$_dbtoggle.html($_dbtoggle.html().replace(/Show/, "Hide"));
			$_dbtoggle.find("i").removeClass("icon-plus").addClass("icon-minus");
		} else {
			$_dbwrap.hide();
			$_dbtoggle.html($_dbtoggle.html().replace(/Hide/, "Show"));
			$_dbtoggle.find("i").removeClass("icon-minus").addClass("icon-plus");
		}
	  });
	$_dbwrap = $('<div id="dbwrap" class="span12" style="display:none" />')
	  .insertAfter($_dbtoggle);

	var item_nr=0;
	var layer_nr=1;
	var opening=new Array();
	var item_count=new Array(0);
	var count_nr=0;

	if (ChannelDatabase.length<1 || ChannelDatabase[0][0]!="") {
		ChannelDatabase.unshift(['', '<i>non-classified</i>']);
	}
	UI_ChannelCache=="1" ? createDatabase() : '';

} else if (UI_ChannelDatabase=="1" && ChannelDatabase_URL!="") {
	$.getScript(ChannelDatabase_URL);
}

// adding Channel Galleries box

if (UI_ChannelGalleries=="1") {
	$_gallerytoggleouter = $('<div id="gallerytoggle-outer" class="well well-small span12 row-fluid" />')
	  .appendTo($leftpaneinner);
	$_gallerytoggle = $('<div id="gallerytoggle" class="span12 pointer" />')
	  .html('<i class="icon-plus pull-left"></i><p>Show Channel Galleries</p>')
	  .appendTo($_gallerytoggleouter)
	  .on("click", function() {
		if ($_gallerywrap.css("display")=="none") {
			$_gallerywrap.show();
			!GALLERY ? createGallery() : '';
			$_gallerytoggle.html($_gallerytoggle.html().replace(/Show/, "Hide"));
			$_gallerytoggle.find("i").removeClass("icon-plus").addClass("icon-minus");
		} else {
			$_gallerywrap.hide();
			$_gallerytoggle.html($_gallerytoggle.html().replace(/Hide/, "Show"));
			$_gallerytoggle.find("i").removeClass("icon-minus").addClass("icon-plus");
		}
	  });
	$_gallerywrap = $('<div id="gallerywrap" class="span12" style="display:none" />')
	  .insertAfter($_gallerytoggle);
	ChannelGalleries_Array.length<1 ? ChannelGalleries_Array=[['Japan gallery', 'http://imgur.com/a/185S2/embed']] : '';
	UI_ChannelCache=="1" ? createGallery() : '';
}

// adding playlist tooltip

$_addtip = $('<div id="addtip" class="pull-right">Add media link here</div>')
  .prependTo("#playlisttoggle");

// visual fixing customembed entry

$("#customembedwrap br").remove();

// changing voteskip button caption

if (UI_VoteskipCaption=="1" && VoteskipCaption_Text!="") {
	socket.on("voteskip", changeSkipText);
	changeSkipText();
}

// extending 'Get URLs' function

if (UI_ExtendedGetURLs=="1") {
	$("#getplaylist").unbind()
	  .text('Copy or Export Playlist')
	  .on("click", function() {
		createModal('Playlist URLs', 'Close');

		data=$('<textarea rows="8" style="width:97%" />').val(formatRawList()).appendTo(body);
		rlist=$('<button />').addClass('btn pull-left').text('Raw List').appendTo(footer);
		tlist=$('<button />').addClass('btn pull-left').text('Plain Text').appendTo(footer);
		hlist=$('<button />').addClass('btn pull-left').text('HTML Code').appendTo(footer);

		rlist.on("click", function() {
			data.val(formatRawList());
		});

		tlist.on("click", function() {
			data.val(formatPlainTextList());
		});

		hlist.on("click", function() {
			data.val('<ol>\n'+formatHTMLList()+'\n</ol>');
		});
	});
}

// adding fonts and emotes install filters buttons

if (UI_LocalFilters!="1") {
	socket.on("rank", tickBtn);
	toggleInstallBtn();
}

// detaching moderation menu

$_modrow = $('<div id="modrow" class="row" />')
 .append($("#channelsettingswrap3").detach())
 .insertAfter("#playlistrow");

// rearranging footer

$_footrow = $('<div id="footrow" class="row" />')
  .insertAfter($_modrow);
$_footerouter = $('<div id="footer-outer" class="span12" />')
  .append($("#footer p").html()+'<br />')
  .append('CyTube Plus Copyright &copy; 2013-2014 Zimny Lech · ')
  .append('Free source on <a href="http://github.com/zimny-lech/CyTube-Plus" target="_blank">GitHub</a> · ')
  .append('<a href="http://github.com/zimny-lech/CyTube-Plus/wiki" target="_blank">Help</a>')
  .appendTo($_footrow);

if (UI_CustomRightFooter=="1") {
	$('<span id="rightfooter">'+CustomRightFooter_HTML+'</span>')
	  .prependTo($_footerouter);
}
if (UI_UserStatistics=="1") {
	$('<br />My visits: <span class="badge footer-badge">'+USERVISITS+'</span><span> / </span>')
	  .appendTo($_footerouter);
	$('<span>Current online time: </span><span id="onlinetime" class="badge footer-badge">0:00</span>')
	  .appendTo($_footerouter);
	$_onlinetime = $("#onlinetime");
	setInterval(function() {onlineTime()}, 60000);
}
if (UI_CustomFooter=="1") {
	$('<br /><br /><span>'+CustomFooter_HTML+'</span>')
	  .appendTo($_footerouter);
}

$(".push, #footer").remove();
$sitefooter.find("p").html()=="" ? $sitefooter.remove() : $("#mainpage").after($sitefooter.detach());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- PERMANENT USER INTERFACE EVENTS ----- */

// click: do not overwrite user themes and layout after closing "Options" modal window

$("#optlink").on("click", function() {
	USEROPTS.layout="default";
	$(".modal").on("hidden", function() {
		HIDDENPL ? USEROPTS.hidevid=true : '';
		setUserCSS();
	});
});

// click: layout configuration modal window

$_configbtn.on("click", function() {
	createModal('Layout Configuration', 'Save');

	form=$('<form />').addClass('form-horizontal').appendTo(body);

	function addOption(lbl, thing) {
		g=$('<div />').addClass('control-group').appendTo(form);
		$('<label />').addClass('control-label').text(lbl).appendTo(g);
		c=$('<div />').addClass('controls').appendTo(g);
		thing.appendTo(c);
	}

	playerlocation=$('<select />');
	$('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
	$('<option />').attr('value', 'center').text('center').appendTo(playerlocation);
	playerlocation.val(USERCONFIG.player);
	addOption('Player location', playerlocation);

	userlistlocation=$('<select />');
	$('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
	userlistlocation.val(USERCONFIG.userlist);
	addOption('Userlist location', userlistlocation);

	queuelocation=$('<select />');
	$('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
	$('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
	$('<option />').attr('value', 'center').text('center').appendTo(queuelocation);
	queuelocation.val(USERCONFIG.queue);
	addOption('Queue location', queuelocation);

	queuesize=$('<select />');
	$('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
	$('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
	queuesize.val(USERCONFIG.qsize);
	addOption('Queue column size', queuesize);

	mainlocation=$('<select />');
	$('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
	$('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
	mainlocation.val(USERCONFIG.main);
	addOption('Player & chat', mainlocation);

	motdlocation=$('<select />');
	$('<option />').attr('value', 'top').text('top').appendTo(motdlocation);
	$('<option />').attr('value', 'bottom').text('bottom').appendTo(motdlocation);
	motdlocation.val(USERCONFIG.motd);
	addOption('MOTD & announcements', motdlocation);

	logoinsert=$('<select />');
	$('<option />').attr('value', 'no').text('no image').appendTo(logoinsert);
	$('<option />').attr('value', 'user').text('user image').appendTo(logoinsert);
	for (i in TopUserLogo) {
		$("<option />").attr('value', i).text(TopUserLogo[i][0]).appendTo(logoinsert);
	}
	logoinsert.val(USERCONFIG.image);
	addOption('Top logo', logoinsert);

	userlogo=$('<input />').attr('type', 'text').attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht=$('<input />').attr('type', 'text').attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if (USERCONFIG.image!="user") {
		userlogo.parent().parent().hide();
		userlogoht.parent().parent().hide();
	} else {
		userlogo.val(USERLOGO);
		userlogoht.val(USERLOGOHT);
	}

	headermode=$('<select />');
	$('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
	$('<option />').attr('value', 'detach').text('detached').appendTo(headermode);
	headermode.val(USERCONFIG.header);
	addOption('Header menu', headermode);

	plcontrolsmode=$('<select />');
	$('<option />').attr('value', 'default').text('default').appendTo(plcontrolsmode);
	$('<option />').attr('value', 'menu').text('menu').appendTo(plcontrolsmode);
	plcontrolsmode.val(USERCONFIG.menu);
	addOption('Playlist controls', plcontrolsmode);

	reset=$('<button />').addClass('btn pull-left').text('Default').appendTo(footer);
	column=$('<button />').addClass('btn pull-left').text('Vertical').appendTo(footer);

	logoinsert.on("change", function() {
		if (logoinsert.val()=="user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
			userlogo.val(USERLOGO);
			userlogoht.val(USERLOGOHT);
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	submit.on("click", function() {
		USERCONFIG.player=playerlocation.val();
		USERCONFIG.userlist=userlistlocation.val();
		USERCONFIG.queue=queuelocation.val();
		USERCONFIG.qsize=queuesize.val();
		USERCONFIG.main=mainlocation.val();
		USERCONFIG.motd=motdlocation.val();
		USERCONFIG.image=logoinsert.val();
		USERCONFIG.header=headermode.val();
		USERCONFIG.menu=plcontrolsmode.val();
		if (logoinsert.val()=="user") {
			if (userlogo.val()=="") {
				logoinsert.val("no");
				USERCONFIG.image='no';
			} else if (userlogoht.val()=="") {
				USERLOGOHT='200';
			} else {
				USERLOGOHT=userlogoht.val()*1;
				(isNaN(USERLOGOHT) || USERLOGOHT<1) ? USERLOGOHT='200' : '';
			}
			USERLOGO=userlogo.val();
			eraseCookie(CookiePrefix+"_logo");
			createCookie(CookiePrefix+"_logo", userlogo.val()+"|"+userlogoht.val(), 365)
		}
		setLayout(
		  playerlocation.val(), userlistlocation.val(), queuelocation.val(), 
		  queuesize.val(), mainlocation.val(), motdlocation.val(), 
		  logoinsert.val(),headermode.val(),plcontrolsmode.val()
		);
		eraseCookie(CookiePrefix+"_config");
		a=USERCONFIG.player+","+USERCONFIG.userlist+","+USERCONFIG.queue+","+USERCONFIG.qsize
		  +","+USERCONFIG.main+","+USERCONFIG.motd+","+USERCONFIG.image+","+USERCONFIG.header
		  +","+USERCONFIG.menu;
		createCookie(CookiePrefix+"_config", a, 365);
	});

	reset.on("click", function() {
		USERCONFIG={
		"player":"right", "userlist":"left", "queue":"right", 
		"qsize":"wide", "main":"top", "motd":"top", 
		"image":"no", "header":"detach", "menu":"default"
		}
		defaultLayoutPatch();
		setConfigValues(USERCONFIG.player, USERCONFIG.userlist, USERCONFIG.queue, "wide", "top", "top", "no", "detach", USERCONFIG.menu);
		modal.modal("hide");
		setLayout(USERCONFIG.player, USERCONFIG.userlist, USERCONFIG.queue, "wide", "top", "top", "no", "detach", USERCONFIG.menu);
		eraseCookie(CookiePrefix+"_config");
		a=USERCONFIG.player+","+USERCONFIG.userlist+","+USERCONFIG.queue+",wide,top,top,no,detach,"+USERCONFIG.menu;
		createCookie(CookiePrefix+"_config", a, 365);
	});

	column.on("click", function() {
		USERCONFIG={
		"player":"center", "userlist":"left", "queue":"center", 
		"qsize":"wide", "main":"top", "motd":"bottom", 
		"image":"no", "header":"detach", "menu":"menu"
		}
		setConfigValues("center","left","center","wide","top","bottom","no","detach","menu");
		modal.modal("hide");
		setLayout("center","left","center","wide","top","bottom","no","detach","menu");
		eraseCookie(CookiePrefix+"_config");
		a="center,left,center,wide,top,bottom,no,detach,menu";
		createCookie(CookiePrefix+"_config", a, 365);
	});

	modal.on("hidden", function() {
		scrollChat();
		scrollQueue();
	});
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setting layout after loading channel

playerLocation(USERCONFIG.player);
userlistLocation(USERCONFIG.userlist);
queueLocation(USERCONFIG.queue);
queueSize(USERCONFIG.qsize);
mainLocation(USERCONFIG.main);
motdLocation(USERCONFIG.motd);
logoInsert(USERCONFIG.image);
headerMode(USERCONFIG.header);
plControlsMode(USERCONFIG.menu);

// scrolling playlist and chat after loading

scrollQueue();
scrollChat();

// fixing window resizing in cinema and radio mode and centered player

$(window).resize(function() {
	($_modesel.val()=="chMode" || $_modesel.val()=="rMode") ? setMode($_modesel.val()) : '';
	USERCONFIG.player=="center" ? playerLocation("center") : '';
});

// adding additional script file

if (UI_AdditionalScript=="1" && AdditionalScript_URL!="") {
	$.getScript(AdditionalScript_URL);
}

LOADED=true;

/* ----- END OF LIBRARY ----- */
