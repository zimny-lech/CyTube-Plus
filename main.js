/*
The MIT License (MIT)

Copyright (c) 2013 Zimny Lech

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
// Version: 2.5
// Modified: 2013-12-29
// Project URL: https://github.com/zimny-lech/CyTube-Plus
// Wiki URL: https://github.com/zimny-lech/CyTube-Plus/wiki

/*
INSTALLATION

# Simple installation (note: some advanced features are disabled)

1. Go to your channel's "Moderation Menu" and select "Channel Options".
2. In "External Javascript" field enter ready-to-use library URL given below, and save:
   https://raw.github.com/zimny-lech/CyTube-Plus/master/main-ready.js
3. Congratulations, your have just installed basic version of CyTube Plus!

# Advanced installation

Don't be afraid to configure! If something will not work, go to CyTube Plus Wiki for help.
If all fails, copy default "main.js" file, and try to change variables one by one 
- this way you will find what's wrong.

1. Open this file in a text editor or get default file from the link below:
   https://raw.github.com/zimny-lech/CyTube-Plus/master/main.js
2. Scroll down to configuration sections and configure library according to your wishes.
   Note: all options are explained for non-advanced users.
   Note 2: I highly recommend you to change default "CookiePrefix" variable (for not interfere
           with other CyTube Plus channels).
3. Save customized library to your file hosting (e.g. Dropbox), project hosting (e.g. GitHub) or to your own server.
   Warning! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
   Warning for Dropbox users! Always use "dl.dropboxusercontent.com" URL instead "www.dropbox.com".
   Warning for Github users! Always use "raw.github.com" URL instead "github.com".
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
UI_HeaderDropMenu = 1; // additional header dropdown menu
UI_CustomHelp = 1; // custom help file
UI_AttentionBar = 0; // imageboard-style attention bar
UI_MOTDAutoLogo = 0; // big channel logo inserted into MOTD
UI_RulesBtn = 1; // button displaying channel rules
UI_ChannelAnnouncement = 1; // additional custom channel announcement
UI_FullTitleBar = 1; // full-width video title bar
UI_ProgressBar = 1; // YouTube progress bar; REQUIRE: UI_FullTitleBar enabled
UI_TitleBarDescription = 1; // custom title bar description
UI_UserCommands = 1; // additional commands in the chat window
UI_TemporaryFilters = 1; // default emotes and fonts filters in current chat session, if disabled you must install                            // filters in channel's 'Multi-Filter Editor' to work (recommended, see FILTERS INSTALLATION)
UI_IndependentFilters = 1; // additional filters visible only in current chat session
UI_UserSpecialSigns = 1; // special signs prepending messages in the chat window for selected users
UI_ChatSuffix = 1; // text added to random chat messages
UI_FontsBtn = 1; // button displaying box with clickable chat fonts
UI_UnicodeChars = 1; // additional buttons in the fonts panel with unicode characters; REQUIRE: UI_FontsBtn enabled
UI_EmotesBtn = 1; // button displaying box with clickable chat emotes
UI_CommandsBtn = 1; // button displaying modal window with chat commands help
UI_PlayerMenu = 1; // player transformations dropdown menu
UI_VoteskipCaption = 1; // custom 'Voteskip' button caption
UI_ExtendedGetURLs = 1; // extended 'Get URLs' function
UI_MinimizeBtn = 1; // layout minimizing button
UI_DisplayModeSel = 1; // selector with player display modes
UI_LayoutThemeSel = 1; // selector with channel themes
UI_LayoutDefaultThemes = 1; // default CyTube themes added to themes selector; REQUIRE: UI_LayoutThemeSel enabled
UI_FastCommandsBtns = 1; // buttons with '/clear' and '/afk' functions
UI_YTVolumeBtns = 1; // additional volume buttons for YouTube player
UI_ChannelDatabase = 1; // box with embed additional media database
UI_ChannelGalleries = 1; // box with embed galleries
UI_CustomFooter = 1; // custom channel footer
UI_UserStatistics = 1; // displaying in the footer user visits number and current online time
UI_CustomRightFooter = 1; // channel right-sided footer box
UI_AdditionalScript = 0; // additional script file
UI_DefaultSynchtube = 1; // default Synchtube layout
UI_DefaultPlaylistMenu = 1; // default 'menu' mode of the 'Playlist Controls'
UI_ChannelCache = 1; // caching script emotes, additional media database and default gallery, 
                     // REQUIRE: one of respective options enabled

// below: user cookie prefix
// ATTENTION! use unique, random name using basic letters and numbers to prevent using cookies from other channels

CookiePrefix='g7tr8hgryrtyutr8u97';

// FILTERS INSTALLATION
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

AttentionBar_URL = '';

// DESCRIPTION: imageboard-style attention bar URL
// REQUIRE: UI_AttentionBar enabled

MOTDAutoLogo_Mode = 3;

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

ChannelAnnouncement_HTML = 'This channel has been creating with <a href="https://github.com/zimny-lech/CyTube-Plus" target="_blank">CyTube Plus 2.5</a>.';

// DESCRIPTION: custom channel announcement HTML
// REQUIRE: UI_ChannelAnnouncement enabled

TitleBarDescription_Caption = 'Now Playing:';

// DESCRIPTION: title bar description (default: "Currently Playing:")
// REQUIRE: UI_TitleBarDescription enabled

UserSpecialSigns_Array = {
'ZimnyLech':'★', 'calzoneman':'♠', 
}

// DESCRIPTION: user special signs array
// ARRAY SYNTAX: 'username':'sign', 
// REQUIRE: UI_UserSpecialSigns enabled
// NOTE: example signs - ★ ☆ ▲ ▼ ♥ ♪ ♠ ☯ Ⓐ

ChatSuffix_Text = '~desu';

// DESCRIPTION: text added to random chat messages
// REQUIRE: UI_ChatSuffix enabled

ChatSuffix_Percentage = 5;

// DESCRIPTION: percentage of chat messages with added text
// REQUIRE: UI_ChatSuffix enabled

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

AdditionalScriptURL = '';

// DESCRIPTION: additional external JS file URL
// REQUIRE: UI_AdditionalScript enabled

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- ADVANCED CONFIGURATION ----- */

EmotesArray = {
':happy:':['https://dl.dropboxusercontent.com/s/4bz8gdcjyekj2wh/happy.jpg',35,35],
':awesome:':['https://dl.dropboxusercontent.com/s/gz1k8oto90n16v6/awesome.png',35,35],
':sad:':['https://dl.dropboxusercontent.com/s/3jrfsd3hcxj3r5s/sad.png',35,35],
':heart:':['https://dl.dropboxusercontent.com/s/fr9131zgnai0kix/heart.png',35,35],
':karol:':['https://dl.dropboxusercontent.com/s/ekqwktwvus6ptgy/karol.jpg',30,42],
':lalka:':['https://dl.dropboxusercontent.com/s/8j25s36v0np59lh/lalka.jpg',30,42],
':tongue:':['https://dl.dropboxusercontent.com/s/tvyjzr1q2ek4sd3/tongue.png',35,35],
':freddy:':['https://dl.dropboxusercontent.com/s/4a8p5wdq14wvgce/freddy.png',26,55],
':obama:':['https://dl.dropboxusercontent.com/s/5ltj2y0jc6j43o8/obama.jpg',35,42],
':yao:':['https://dl.dropboxusercontent.com/s/l7kb1wjdfinq0d4/yao.jpg',35,42],
':dolan:':['https://dl.dropboxusercontent.com/s/o9h40w9a1wxidl8/dolan.png',30,37],
':foreveralone:':['https://dl.dropboxusercontent.com/s/4v8w6l27g6s03vs/foreveralone.png',30,36],
':lol:':['https://dl.dropboxusercontent.com/s/bccukprxs01er3f/lol.png',28,34],
':3:':['https://dl.dropboxusercontent.com/s/eewtklt6ftvcjoe/3.png',35,35],
':megusta:':['https://dl.dropboxusercontent.com/s/vxdkrrof1bnaa80/megusta.png',30,31],
':datass:':['https://dl.dropboxusercontent.com/s/c22vrxa9lfcncr9/datass.png',30,30],
':yoba:':['https://dl.dropboxusercontent.com/s/464m6opdjfc5cx8/yoba.png',25,25],
':facepalm:':['https://dl.dropboxusercontent.com/s/7m7a7k0n581tqzb/facepalm.jpg',40,30],
':pokerface:':['https://dl.dropboxusercontent.com/s/069cqh9z3hp06kc/pokerface.png',30,33],
':imok:':['https://dl.dropboxusercontent.com/s/vjumtehl3mhzv0u/imok.png',34,35],
':ok:':['https://dl.dropboxusercontent.com/s/r1qrkxjwhbgvg0x/ok.png',21,30],
':troll:':['https://dl.dropboxusercontent.com/s/k1zglg2z5ctmhd1/troll.png',30,25],
':pedo:':['https://dl.dropboxusercontent.com/s/awbujbc0lqoccjv/pedo.png',18,25],
':slowpoke:':['https://dl.dropboxusercontent.com/s/t4b5456jadx0yem/slowpoke.png',35,35],
':israel:':['https://dl.dropboxusercontent.com/s/3ptd8d8ymdgb6uw/israel.jpg',35,35],
':fluttershy:':['https://dl.dropboxusercontent.com/s/jasmla33zu2a0no/fluttershy.jpg',57,40],
':bloom:':['https://dl.dropboxusercontent.com/s/i8ea12vuc4fyr6g/bloom.jpg',31,40],
':aralka:':['https://dl.dropboxusercontent.com/s/4ud8ydbot521se3/aralka.jpg',40,40],
':hakase:':['https://dl.dropboxusercontent.com/s/bik0nqsll3txde1/hakase.jpg',32,42],
':cirno:':['https://dl.dropboxusercontent.com/s/xqfb3bfg2ulmj02/cirno.jpg',31,42],
':tsumiki:':['https://dl.dropboxusercontent.com/s/p5deizps4p47btj/tsumiki.gif',42,42],
':dance:':['https://dl.dropboxusercontent.com/s/bz6l7ug750aqq93/dance.gif',40,40],
':fukkireta:':['https://dl.dropboxusercontent.com/s/jhmw5xspu24v625/fukkireta.gif',50,37],
':konata:':['https://dl.dropboxusercontent.com/s/jr1z96mmqtnpehc/konata.gif',40,40],
':teto:':['https://dl.dropboxusercontent.com/s/l5tdta5lq98bsl6/teto.gif',40,40],
':caramell:':['https://dl.dropboxusercontent.com/s/7ngrsym9uxnkhjm/caramell.gif',40,40],
':gangnam:':['https://dl.dropboxusercontent.com/s/l2exq8ru34ynrep/gangnam.gif',30,40],
':bird:':['https://dl.dropboxusercontent.com/s/21ix5hssgmbr2p8/bird.gif',44,33],
':funk:':['https://dl.dropboxusercontent.com/s/xci6nt68u4swkqc/funk.gif',40,40],
':frog:':['https://dl.dropboxusercontent.com/s/58unfk9r3j8yktg/frog.gif',50,40],
':dog:':['https://dl.dropboxusercontent.com/s/mawc9ug01f434m5/dog.gif',36,42],
':omnom:':['https://dl.dropboxusercontent.com/s/ffo0cmc1nvtszh2/omnom.gif',45,45],
':burt:':['https://dl.dropboxusercontent.com/s/w13hn68wkdm1lyr/burt.gif',45,45],
':bravo:':['https://dl.dropboxusercontent.com/s/avkdekl0c7bnv2a/bravo.gif',60,40],
':deal:':['https://dl.dropboxusercontent.com/s/7at1fke4c3phwse/deal.gif',55,34],
':umad:':['https://dl.dropboxusercontent.com/s/vgl3zcdebmf9ja7/umad.gif',60,40],
}

// DESCRIPTION: chat emotes array
// ARRAY SYNTAX: 'replacing_code':['image_URL',image_width,image_height],
// REQUIRE: INSTALLATION REQUIRED (see above in the Starting Configuration section)
// WARNING! "replacing_code" must be unique one-word name without special characters

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

UnicodeChars_Array = [
'★', '☆', '▲', '▼', '♥', '♪', '♿', '⚒', '♕', '✉', '☏', '♠', '→', 
'☑', '☒', '✡', '☪', '✝', '☭', '☯', 'Ⓐ', '☕', '♨', '¥', '©', '∞', 
];

// DESCRIPTION: unicode characters buttons array
// ARRAY SYNTAX: 'sign', 
// IGNORE: leave empty []
// REQUIRE: UI_FontsBtn and UI_UnicodeChars enabled
// NOTE: use 1 character in every array item for the best effect (although it's not the limitation)

ThemesCSS = [
['pastel-white', 'https://dl.dropboxusercontent.com/s/1knuft5wbvy7dhm/white.css'],
['ice-cirno', 'https://dl.dropboxusercontent.com/s/s15zul92aeo41pk/cirno.css'],
['jungle', 'https://dl.dropboxusercontent.com/s/h8q8qml44zoo2pc/jungle.css'],
['celadon', 'https://dl.dropboxusercontent.com/s/cduxlsx3j76b4hr/celadon.css'],
['sakura', 'https://dl.dropboxusercontent.com/s/qxyuag1idqxhujz/sakura.css'],
['fuchsia', 'https://dl.dropboxusercontent.com/s/shr7krrrn20pnii/fuchsia.css'],
['cool-kim', 'https://dl.dropboxusercontent.com/s/4ulsaj782txokaw/kim.css'],
['contrast', 'https://dl.dropboxusercontent.com/s/ea9e3v9yphqvjo6/contrast.css'],
['nights', 'https://dl.dropboxusercontent.com/s/pnsnsoooxec1of6/nights.css'],
['cosmos', 'https://dl.dropboxusercontent.com/s/ztj5yia9j2qfqmp/cosmos.css'],
];

// DESCRIPTION: themes CSS files array
// ARRAY SYNTAX: ['layout_name', 'layout_URL'],
// REQUIRE: UI_LayoutThemeSel enabled

PatchesCSS = [
'https://dl.dropboxusercontent.com/s/daj815ibfgr142y/ytsync.css',
'https://dl.dropboxusercontent.com/s/jk7qi6u6gofesyc/darkstrap.css',
'https://dl.dropboxusercontent.com/s/utokys7ogvyt90a/altdark.css',
];

// DESCRIPTION: CSS patches array for default CyTube themes
// ARRAY SYNTAX: ['layout_URL'], 3 patches respectively: default, dark, alternative dark
// REQUIRE: UI_LayoutThemeSel and UI_LayoutDefaultThemes enabled
// NOTE: these are important files, without them default themes may seems not fitting

MainCSS = 'https://dl.dropboxusercontent.com/s/qb1g9q0dieg6b1k/main.css';

// DESCRIPTION: default script layout CSS properties file URL
// WARNING! this file is required for correct channel layout, be careful if you change URL or content of the file

TopUserLogo = {
'cytube':['cytube plus', 'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png', 90],
'azuki':['anime girl', 'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png', 200],
'cosmos':['cosmos', 'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg', 200],
'disco':['disco ball', 'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg', 162],
'japan':['japanese landscape', 'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg', 200],
'korea':['korean collage', 'https://dl.dropboxusercontent.com/s/qud9adhs183dq30/korea.jpg', 160],
'mlp':['my little pony', 'https://dl.dropboxusercontent.com/s/r4ozo8oj8lmerec/mlp.jpg', 190],
}

// DESCRIPTION: array of the top layout image files names and URLs, max. 1170 width
// ^ (bigger images will be cropped and centered)
// ARRAY SYNTAX: 'code_name':['image_description', 'image_URL', imgae_height],
// WARNING! "code_name" must be unique one-word name without special characters

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

IndependentFilters_Array=[
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

ChannelDatabase_Array=[
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
// ^ To install: copy file from the link below and configure ChannelDatabase_Array in it:
// ^ https://raw.github.com/zimny-lech/CyTube-Plus/master/external-db.js
// ^ Save a new .js file in selected ChannelDatabase_URL location above.
// WARNING! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
// NOTE: leave empty '' if you don't want to use external file instead of database above

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- BEGIN OF LIBRARY ----- */

var notLoaded = (typeof notLoaded==="undefined" ? true : false);

/* ----- removing previously created elements, wraps and intervals in case of server restart ----- */

$("#chanavatar, #dropmenu, #azukirow, #zerorow, #anntop, #anntop-align, #annclose, #attbarrow-outer").remove();
$("#emptytop, #fontsbtn, #emotesbtn, #chathelpbtn, #pl-tooltip").remove();
$("#pl-pinup, #mediacaret, #minplrow, #mirrorcaret").remove();
$("#layouttoggle-outer, #gallerytoggle-outer, #dbtoggle-outer, #installfonts, #installemotes, #footerrow").remove();

$("#anntop-align").unwrap;
!notLoaded ? $("#announcements").unwrap() : '';

typeof intervalA==="undefined" ? '' : clearInterval(intervalA);
typeof intervalB==="undefined" ? '' : clearInterval(intervalB);
typeof intervalC==="undefined" ? '' : clearInterval(intervalC);
_chatBuffer=null;

/* ----- additional elements #id and attributes ----- */

$(".navbar-inverse .navbar-inner").attr('id', 'header');
$(".navbar-fixed-top .nav").attr('id', 'headermenu');
$("#headermenu li:nth-child(1)").attr('id', 'link-home');
$("#link-home a").attr('target', '_blank');
$("#headermenu li:nth-child(2)").attr('id', 'link-help');
$("#librarytoggle").parent().attr('id', 'librarytoggle-outer');
$("#voteskip").parent().attr('id', 'voteskipwrap');

/* ----- removing and changing CSS unnecessary classes and layout elements ----- */

$("#link-home").removeClass('active');
$("#headermenu li:nth-child(5)").remove();
$("#toprow, #announcements, #main").removeClass('row-fluid').addClass('row');
$("#main-inner, #playlistrow, #playlist-inner").removeClass('row-fluid').addClass('row');
$(".container-fluid").removeClass('container-fluid').addClass('container');
$("#motdwrap").removeClass('well').addClass('span12');
$("#ytapiplayer").addClass('vplayer');
$("#queue_align2").remove();
$(".push").remove();
$("#sitefooter .well").removeClass('well');

/* ----- wrapping announcements content ----- */

$("#announcements").wrap('<div id="annrow" class="row" />');
$("#announcements").removeClass('row').addClass('span12');

/* ----- detaching moderation menu ----- */

if (notLoaded) {
	$("#playlistrow").after('<div id="modrow" class="row"></div>');
	$("#modrow").append($("#channelsettingswrap3").detach());
}

/* ----- changing style-proof "caret" class to text unicode signs ----- */

if (notLoaded) {
	$("#channelsettingswrap .caret").remove();
	$("#csdropdown_title").after(' ▴');
	$("#qualitywrap .caret").remove();
	$("#qualitywrap .btn").append(' ▾');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- GLOBAL FUNCTIONS ----- */

// toggle elements

function toggleDiv(a) {
	$(a).css('display')=="none" ? $(a).show() : $(a).hide();
}

// add link to playlist

function addToPlaylist(link,position) {
	parsed=parseMediaLink(link);
	if (parsed["id"]!=null) {
		socket.emit("queue", {id: parsed["id"], pos: position, type: parsed["type"]});
		$("#mediaurl").val('');
	}
}

// refresh player

function refreshPlayer() {
	PLAYER.type="";
	PLAYER.id="";
	socket.emit("playerReady");
	setTimeout(function() {$("#ytapiplayer").addClass('vplayer')}, 3000);
}

// create modal window

function createModal(title,button) {
	hidePlayer();
	modal=$("<div/>").addClass('modal hide fade').appendTo($("body"));
	head=$("<div/>").addClass('modal-header').appendTo(modal);
	$("<button/>").addClass('close').attr('data-dismiss', 'modal').attr('aria-hidden', 'true')
	  .appendTo(head)[0].innerHTML="&times;";
	$("<h3/>").text(title).appendTo(head);
	body=$("<div/>").addClass('modal-body').appendTo(modal);

	footer=$("<div/>").addClass('modal-footer').appendTo(modal);
	submit=$("<button/>").addClass('btn btn-primary pull-right').text(button).appendTo(footer);

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
	$("#motd").prepend('<br /><center><img src="'+MOTDAutoLogo_Array[nr]+'" id="motdlogo" /></center>');
}

// rotate MOTD logo

function rotateLogo() {
	nr=Math.floor(Math.random()*MOTDAutoLogo_Array.length);
	$("#motdlogo").attr('src', MOTDAutoLogo_Array[nr]);
}

// YouTube progress bar

function progressBar() {
	a=0;
	if (PLAYER.type=="yt") {
		b=PLAYER.player.getCurrentTime();
		b!=prevTime ? a=b/PLAYER.player.getDuration()*100 : '';
		prevTime=b;
	}
	$("#titlerow-outer").css('background-size', a+'% 100%');
}

// change title bar description

function changeTitle() {
	a=$("#currenttitle").text();
	$("#currenttitle").text(a.replace(/Currently Playing:/, TitleBarDescription_Caption));
}

// show info about current or next items

function showInfo() {
	if (isDefaultDescr) {
		addedby=$(".queue_active").attr("title");
		duration=$(".queue_active .qe_time").html();
		$("#emptytop").html(addedby+' ['+duration+']');	
	} else {
		text='Playing Next: ';
		li1=$(".queue_active").next();
		if (li1.length>0) {
			text+='• [1]▸ '+li1.children("a").html();
			li2=li1.next();
			if (li2.length>0) {
				text+=' • [2]▸ '+li2.children("a").html();
				li3=li2.next();
				text+=(li3.length>0 ? ' • [3]▸ '+li3.children("a").html() : ' • END OF PLAYLIST');
			} else {
				text+=' • END OF PLAYLIST';
			}
		} else {
			text+='• END OF PLAYLIST';
		}
		$("#emptytop").html('<marquee scrollamount="5">'+text+'</marquee>');
	}	
}

// insert code into chatline

function insertText(a) {
	$("#chatline").val($("#chatline").val()+a).focus();
}

// display list of emotes

function showEmotes() {
	$.each(EmotesArray, function(a,b) {
		img=$('<img src="'+EmotesBasicURL+''+b[0]+'" onclick="insertText(\''+a+'\')" />')
		  .attr('width', b[1]).attr('height', b[2])
		  .css('cursor', 'pointer');
		$("#emotespanel").append(img).append(' ');
	});
	if (UI_TemporaryFilters!="1") {
		CustomImageURL=="" ? CustomImageURL='https://dl.dropboxusercontent.com/s/evwscyflzddc92p/custom.png' : '';
		img=$('<img src="'+CustomImageURL+'" onclick="enterCustomImg()" />')
		  .attr('width', 60).attr('height', 45)
		  .css('cursor', 'pointer');
		$("#emotespanel").append(img).append(' ');
	}
}

// enter custom image URL

function enterCustomImg() {
	img=prompt('Enter image URL', '');
	img!=null ? insertText('[img]'+img+'[/img]') : '';
}

// add events to player dropdown menu

function bindPlayerMenu() {
	if (PLAYER.type!=PLAYER_TYPE) {
		setTimeout(function() {$("#ytapiplayer").addClass('vplayer')}, 3000);
		PLAYER_TYPE=PLAYER.type;
		selValue=$("#mode-sel").val();
		if (selValue=="chMode" || selValue=="rMode") {
			$("#videowidth").removeClass().addClass('span1');
			$("#ytapiplayer").attr("width", '1').attr("height", '1');
		}

	}
}

// toggle playlist PinUp

function togglePinUp() {
	if (!isPlPin) {
		if (userconfig["player"]=="center" || userconfig["queue"]=="center") {
			alert('You can\'t pin playlist if player or playlist are centered.');
		} else {
			if (userconfig["player"]=="left") {
				$("#videowrap").after($("#rightpane-outer").detach());
			} else if (userconfig["player"]=="right") {
				$("#videowrap").before($("#rightpane-outer").detach());
			}
			if (userconfig["queue"]=="left") {
				$("#leftpane-outer").before($("#chatwrap").detach());
			} else if (userconfig["queue"]=="right") {
				$("#leftpane-outer").after($("#chatwrap").detach());
			}
			$("#rightpane-outer").removeClass().addClass('span5');
			if (userconfig["qsize"]=="wide") {
				$("#chatwrap, #chatline").removeClass().addClass('span7');
			} else {
				$("#chatwrap, #chatline").removeClass().addClass('span5');
			}
			$("#pl-pinup").text('UnPin Playlist');
			$("#minplrow, #userConfig, #modewrap").hide();
			$("#mode-sel option[value='chMode']").hide();
			isPlPin=true;
			scrollQueue();
		}
	} else {
		if (userconfig["queue"]=="left") {
			$("#leftpane-outer").before($("#rightpane-outer").detach());
		} else if (userconfig["queue"]=="right") {
			$("#leftpane-outer").after($("#rightpane-outer").detach());
		}
		if (userconfig["player"]=="left") {
			$("#videowrap").after($("#chatwrap").detach());
		} else if (userconfig["player"]=="right") {
			$("#videowrap").before($("#chatwrap").detach());
		}
		$("#chatwrap, #chatline").removeClass().addClass('span5');
		if (userconfig["qsize"]=="wide") {
			$("#rightpane-outer").removeClass().addClass('span7');
		} else {
			$("#rightpane-outer").removeClass().addClass('span5');
		}
		$("#pl-pinup").text('PinUp Playlist');
		$("#minplrow, #userConfig, #modewrap").show();
		$("#mode-sel option[value='chMode']").show();
		isPlPin=false;
		scrollQueue();
	}
}

// toggle video description

function toggleDescr() {
	if (isDescr) {
		$("#videowrap p").hide();
		$("#vid-descr").text('Show Description');
		isDescr=false;
	} else {
		$("#videowrap p").show();
		$("#vid-descr").text('Hide Description');
		isDescr=true;
	}
}

// change voteskip button caption

function changeSkipText() {
	$("#voteskip").text($("#voteskip").text().replace(/Voteskip/, VoteskipCaption_Text));
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

// display mode helper functions

function bigPlayer() {
	$("#videowrap, #videowidth").removeClass().addClass('span12');
	VWIDTH=$("#videowidth").css('width').replace('px', '');
	VHEIGHT=''+parseInt(parseInt(VWIDTH)*9/16);
	$("#ytapiplayer").attr('width', VWIDTH).attr('height', VHEIGHT);
}

function bigChat() {
	$("#chatwrap, #chatline, #videowidth").removeClass().addClass('span12');
	VWIDTH2=$("#messagebuffer").parent().css('width').replace('px', '');
	$("#messagebuffer").attr('width', VWIDTH2).css('height', '500px');
	$("#userlist").css('height', '500px');
}

function normalPlayer() {
	$("#videowrap, #videowidth").removeClass().addClass('span7');
	VWIDTH=$("#videowidth").css('width').replace('px', '');
	VHEIGHT=''+parseInt(parseInt(VWIDTH)*9/16);
	$("#ytapiplayer").attr("width", VWIDTH).attr("height", VHEIGHT);
}

function normalChat() {
	if (isPlPin && userconfig["qsize"]=="wide") {
		$("#chatwrap").removeClass().addClass('span7');
	} else {
		$("#chatwrap").removeClass().addClass('span5');
	}
	VWIDTH2=$("#messagebuffer").parent().css('width').replace('px', '');
	$("#messagebuffer").attr('width', VWIDTH2).css('height', '347px');
	$("#userlist").css('height', '347px');
	if (isPlPin && userconfig["qsize"]=="wide") {
		$("#chatline").removeClass().addClass('span7');
	} else {
		$("#chatline").removeClass().addClass('span5');
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
	if (a=="left") {
		$("#videowrap").after($("#chatwrap").detach());
	}
	else {
		$("#videowrap").before($("#chatwrap").detach());
	}
	switch (a) {
		case "left":
		normalPlayer();
		normalChat();
		break;

		case "right":
		normalPlayer();
		normalChat();
		break;

		case "center":
		$("#videowrap").after($("#chatwrap").detach());
		$("#videowrap, #videowidth").removeClass().addClass('span8 offset2');
		VWIDTH=$("#videowidth").css("width").replace('px', '');
		VHEIGHT=''+parseInt(parseInt(VWIDTH)*9/16);
		$("#ytapiplayer").attr('width', VWIDTH).attr('height', VHEIGHT);
		$("#chatwrap").removeClass().addClass('span8 offset2');
		$("#chatline").removeClass().addClass('span8');
		VWIDTH2=$("#messagebuffer").parent().css('width').replace('px', '');
		$("#messagebuffer").attr('width', VWIDTH2).css('height', '200px');
		$("#userlist").css('height', '200px');
		break;
	}
	isWebkit ? refreshPlayer() : '';
}

function userlistLocation(a) {
	if (a=="left") {
		$("#userlist").css('float', 'left');
	} else if (a=="right") {
		$("#userlist").css('float', 'right');
	}
}

function queueLocation(a) {
	if (a=="right") {
		$("#rightpane-outer").before($("#leftpane-outer").detach());
		normalPlaylist();
	} else if (a=="left") {
		$("#rightpane-outer").after($("#leftpane-outer").detach());
		normalPlaylist();
	} else if (a=="center") {
		$("#rightpane-outer").after($("#leftpane-outer").detach())
		  .removeClass().addClass('span8 offset2').css('margin-bottom', '10px');
		$("#leftpane-outer").removeClass().addClass('span8 offset2');
	}
}

function queueSize(a) {
	if (userconfig["queue"]!="center") {
		if (a=="wide") {
			$("#leftpane-outer").removeClass().addClass('span5');
			$("#rightpane-outer").removeClass().addClass('span7');
		} else if (a=="narrow") {
			$("#leftpane-outer").removeClass().addClass('span7');
			$("#rightpane-outer").removeClass().addClass('span5');
		}
	}
}

function mainLocation(a) {
	if (a=="top") {
		$("#modrow").before($("#playlistrow").detach());
	} else if (a=="bottom") {
		$("#titlerow").before($("#playlistrow").detach());
	}
}

function motdLocation(a) {
	if (a=="top") {
		$("#zerorow").after($("#annrow").detach()).after($("#toprow").detach());
	} else if (a=="bottom") {
		$("#modrow").before($("#toprow").detach()).before($("#annrow").detach());
	}
}

function logoInsert(a) {
	if (a=="no") {
		$("#azukirow").remove();
	} else {
		if (a!="user") {
			link=TopUserLogo[a][1];
			ht=TopUserLogo[a][2];
		} else {
			link=USER_LOGO;
			ht=USER_LOGO_HT;
		}
		$("#azukirow").remove();
		$("#zerorow").before('<div id="azukirow" class="row" />');
		$("#azukirow").append('<div id="azukirowwrap" style="background-image:url('+link+')" />');
		$("#azukirowwrap").addClass('span12').css('min-height', ht+'px');

	}
}

function headerMode(a) {
	if (a=="fixed") {
		$(".navbar-fixed-top").css('position', 'fixed');
		$("body").css('padding-top', '40px');
	} else if (a=="detach") {
		$(".navbar-fixed-top").css('position', 'inherit');
		$("body").css('padding-top', '0px');
	}
}

var isFullPl=false;
function plControlsMode(a) {
	if (a=="default") {
		$("#queue_end").before($("#queue_next").detach());
		$("#customembed_entry").before($("#customembed_btn").detach());
		$("#extended_controls").append($("#clearplaylist").detach())
		  .append($("#shuffleplaylist").detach());
		$("#mediacaret").remove();
		$("#moreopt").remove();
		$("#queue_next").css('width', '');
	} else if (a=="menu") {
		plControlsMode("default");
		$("#queue_end").after('<button id="mediacaret" class="btn dropdown-toggle" data-toggle="dropdown">');
		$("#mediacaret").after('<ul id="moreopt" class="dropdown-menu" />').text('▾');

		$("#moreopt").append('<li id="opt1" />')
		  .append('<li class="divider" />')
		  .append('<li id="opt2" />')
		  .append('<li id="opt3" />')
		  .append('<li id="opt4" />')
		  .append('<li class="divider" />')
		  .append('<li id="opt5" />')
	  	  .append('<li id="opt6" />')
		  .append('<li id="opt7" />')
		  .append('<li id="opt8" />')
	  	  .append('<li id="opt9" />')
		  .append('<li class="divider" />')
		  .append('<li id="opt10" />')
		  .append('<li id="opt11" />')
		  .append('<li id="opt12" />')
		  .append('<li class="divider" />')
		  .append('<li id="opt13" />');
		$("#opt1").html($("#queue_next").detach());
		$("#opt2").html('<a tabindex="-1" href="javascript:void(0)">Expand Playlist</a>');
		$("#opt3").html('<a tabindex="-1" href="javascript:void(0)">Download Current Video</a>');
		$("#opt4").html('<a tabindex="-1" href="javascript:void(0)">Contributors List</a>');
		$("#opt5").html('<a tabindex="-1" href="javascript:void(0)">Play Next</a>');
		$("#opt6").html('<a tabindex="-1" href="javascript:void(0)">Add Random Video</a>');
		$("#opt7").html('<a tabindex="-1" href="javascript:void(0)">Move Random Video</a>');
		$("#opt8").html('<a tabindex="-1" href="javascript:void(0)">Move First Video To End</a>');
		$("#opt9").html('<a tabindex="-1" href="javascript:void(0)">Delete Last Video</a>');
		$("#opt10").html($("#clearplaylist").detach());
		$("#opt11").html($("#shuffleplaylist").detach());
		$("#opt12").html($("#customembed_btn").detach());
		$("#opt13").html('<a tabindex="-1" href="javascript:void(0)">Reload Menu</a>');

		$("#queue_next").css('width', '100%');
		isFullPl ? $("#opt2 a").text('Collapse Playlist') : '';
		!hasPermission("playlistjump") ? $("#opt5").hide() : '';
		(!hasPermission("playlistadd") || UI_ChannelDatabase!="1") ? $("#opt6").hide() : '';
		!hasPermission("playlistmove") ? $("#opt7, #opt8").hide() : '';
		!hasPermission("playlistdelete") ? $("#opt9").hide() : '';
		plDropMenu();
	}
}

// create channel database

function createDatabase() {
	var addedLinks=new Array();
	html='<button id="la1" class="btn btn-small db-break" onclick="toggleCat(1)" style="width:100%">'
	  + ChannelDatabase_Array[0][1]
	  + '</button>'
	  + '<ul id="l1" class="videolist db-cat">';

	for (i=1; i<ChannelDatabase_Array.length; i++) {
		if (ChannelDatabase_Array[i][0]=="") {
			html+='</ul>';
			item_count[layer_nr-1]=count_nr;
			opening[layer_nr-1]=0;
			layer_nr++;
			count_nr=0;
			html+='<button id="la'+layer_nr+'" class="btn btn-small db-break" onclick="toggleCat('+layer_nr+')" style="width:100%">'
	 		  + ChannelDatabase_Array[i][1]
	  		  + '</button>'
	  		  + '<ul id="l'+layer_nr+'" class="videolist db-cat">';
		} else {
			item_nr++;
			count_nr++;
			link=ChannelDatabase_Array[i][0];
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
			  + '</span><span class="db-title" style="margin-left:4px">'
			  + ChannelDatabase_Array[i][1]
			  + '</span><br /><span class="db-link">'
			  + link
			  + '</span>';
		}
	}

	html+='</ul><br /><br /><div style="text-align:center">'
	  + '<button id="clearDBCache" class="btn btn-small">Reload Data (if channel seems working slow)</button>'
	  + '</div>';
	item_count[layer_nr-1]=count_nr;
	opening[layer_nr-1]=0;
	$_dbwrap.html(html);
	for(i=1;i<=item_count.length;i++) {
		$("#la"+i).append(' ['+item_count[i-1]+']');
	}
	isDB=true;

	$(".db-cat").hide();
	for (i=0; i<opening.length; i++) {
		opening[i]=0;
	}

	$("#clearDBCache").on("click", function() {
		$("#dbwrap").html('').hide();
		$("#dbtoggle").html($("#dbtoggle").html().replace(/Hide/, "Show"));
		$("#dbtoggle i").removeClass("icon-minus").addClass("icon-plus");
		isDB=false;

	});
}

// toggle database sections

function toggleCat(a) {
	b=a-1;
	if (opening[b]==0) {
		$(".db-cat").hide();
		for (i=0; i<opening.length; i++) {
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
		} else if (addedLinks[idx]!=undefined && a-addedLinks[idx]<120000) {
			alert('You have just added this link.');
		} else {
			socket.emit("queue", {id: idx, pos: "end", type: parsed["type"]});
			addedLinks[idx]=a;
		}
	}
}

// preview YT video in modal window

function prevVideo(a) {
	createModal('Preview Video', 'Close');

	player=$('<iframe/>').appendTo(body)
	  .attr('src', 'http://www.youtube.com/embed/'+a+'?enablejsapi=1')
	  .attr('width', '530').attr('height', '323').attr('frameborder', '0');
}

// create channel gallery

function createGallery() {
	$_galleryFrame=$('<iframe id="galleryFrame" src='+ChannelGalleries_Array[0][1]+' width="100%" />')
	  .attr('frameborder', '0').attr('scrolling', 'no').attr('height', '415px')
	  .appendTo($_gallerywrap);
	$_gallerywrap.append('<br /><span id="galtitle" class="conf-opt">Select Gallery</span><br />')
	  .append('<select id="gal-sel" style="width:150px" />');

	for (i=0; i<ChannelGalleries_Array.length ;i++) {
		$("#gal-sel").append('<option value="'+ChannelGalleries_Array[i][1]+'">'+ChannelGalleries_Array[i][0]+'</option>');
	}

	$("#gal-sel").on("change", function() {
		galValue=$("#gal-sel").val();
		$_galleryFrame.attr('src', galValue);
	});

	text='Reload Galleries (if channel seems working slow)';
	$_gallerywrap.append('<br /><button id="clearGalleryCache" class="btn btn-small">'+text+'</button>');
	isLoadedGallery=true;

	$("#clearGalleryCache").on("click", function() {
		$("#gallerywrap").html('').hide();
		$("#gallerytoggle").html($("#gallerytoggle").html().replace(/Hide/, "Show"));
		$("#gallerytoggle i").removeClass("icon-minus").addClass("icon-plus");
		isLoadedGallery=false;

	});
}

// queue size helper function

function normalPlaylist() {
	$("#rightpane-outer").removeClass().addClass('span7');
	$("#leftpane-outer").removeClass().addClass('span5');
}

// global playlist dropdown menu actions

function plDropMenu() {

	// click: expand and collapse playlist

	$("#opt2").on("click", function() {
		if (!isFullPl) {
			$("#queue").css('max-height', '100000px');
			$("#opt2 a").text('Collapse playlist');
			isFullPl=true;
		} else {
			$("#queue").css('max-height', '450px');
			$("#opt2 a").text('Expand playlist');
			isFullPl=false;
			scrollQueue();
		}
	});

	// mouseover: download video link

	$("#opt3").on("mouseover", function() {
		a=PL_CURRENT+1;
		b=$("#queue .queue_entry:nth-child("+a+")").data("media");
		c={
			'yt':'http://youtube.com/watch?v=', 'vi':'http://vimeo.com/',
			'dm':'http://dailymotion.com/video/', 'sc':''
		}
		link=(b.type in c ? c[b.type]+''+b.id : '');
		if (link=="") {
			$("#opt3 a").attr('href', 'javascript:void(0)');
			$("#opt3 a").attr('target', '');
			$("#opt3 a").attr('onClick', 'alert(\'This link is not supported. Try YouTube, Vimeo, Dailymotion or SoundCloud.\')');
		}
		else {
			link2='http://keepvid.com/?url='+link;
			$("#opt3 a").attr('href', link2);
			$("#opt3 a").attr('target', '_blank');
			$("#opt3 a").attr('onClick', '');
		}
	});

	// click: show contributors list

	$("#opt4").on("click", function() {
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
		for (i=0; i<list2.length; i++) {
			list3.push((i+1)+". "+list2[i].join(": "));
		}
		body.append('<strong>Number of added playlist items:</strong><br /><br />'+list3.join("<br />"));
	});

	// click: play next video

	$("#opt5").on("click", function() {
		socket.emit("playNext");
	});

	// click: add random video

	var lastAdd=0;
	$("#opt6").on("click", function() {
		a=(new Date()).getTime();
		if ((a-lastAdd)<120000) {
			alert('You can add random video every 2 minutes.');
		} else {
			b="";
			while (b=="") {
				c=Math.round(Math.random()*(ChannelDatabase_Array.length-1));
				b=ChannelDatabase_Array[c][0];
			}
			addToPlaylist(b, "end");
			lastAdd=a;
		}
	});

	// click: move random video

	$("#opt7").on("click", function() {
		a=$("#queue").children().length;
		b=Math.floor(Math.random()*a)+1;
		c=Math.floor(Math.random()*a)+1;
		d=$("#queue .queue_entry:nth-child("+b+")").data("uid");
		e=$("#queue .queue_entry:nth-child("+c+")").data("uid");
		socket.emit("moveMedia", {from: d, after: e, moveby: null});
	});

	// click: move video from start to end

	$("#opt8").on("click", function() {
		a=$("#queue").children().length;
		b=$("#queue .queue_entry:nth-child(1)").data("uid");
		c=$("#queue .queue_entry:nth-child("+a+")").data("uid");
		socket.emit("moveMedia", {from: b, after: c, moveby: null});
	});

	// click: delete last video

	$("#opt9").on("click", function() {
		a=$("#queue").children().length;
		b=$("#queue .queue_entry:nth-child("+a+")").data("uid");
		socket.emit("delete", b);
	});

	// click: rebuild menu

	$("#opt13").on("click", function() {
		plControlsMode("menu");
	});
}

// default layout patch

function defaultLayoutPatch() {
	if (UI_DefaultSynchtube=="1") {
		userconfig["player"]="left";
		userconfig["userlist"]="right";
		userconfig["queue"]="left";
	}
	UI_DefaultPlaylistMenu=="1" ? userconfig["menu"]="menu" : '';
}

// set user online time

function onlineTime() {
	USER_ONLINE++;
	hours=Math.floor(USER_ONLINE/60);
	minutes=USER_ONLINE-hours*60;
	minutes<10 ? minutes="0"+minutes : '';
	$("#onlinetime").html(hours+":"+minutes);
}

// set basic CSS

function setCSS() {
	MainCSS=="" ? MainCSS='https://dl.dropboxusercontent.com/s/qb1g9q0dieg6b1k/main.css' : '';
	$("#maincss").remove();
	$("head").append('<link href="'+MainCSS+'" rel="stylesheet" id="maincss">');

	$("#chanexternalcss").remove();
	if (CHANNEL_CSS!="") {
		$("head").append('<link href="'+CHANNEL_CSS+'" rel="stylesheet" id="chanexternalcss">');
	}

	$("#chancss").remove();
	if (CHAN_CSS!="") {
		$("head").append('<link href="'+CHAN_CSS+'" rel="stylesheet" id="chancss">');
	}
}

// set user CSS

function setUserCSS() {
	$("#usertheme").remove();
	$("head").append('<link href="'+USER_THEME+'" rel="stylesheet" id="usertheme">');

	$("#themepatch").remove();
	if (USER_THEME=="assets/css/ytsync.css") {
		$("head").append('<link href="'+PatchesCSS[0]+'" rel="stylesheet" id="themepatch">');
	} else if (USER_THEME=="assets/css/darkstrap.css") {
		$("head").append('<link href="'+PatchesCSS[1]+'" rel="stylesheet" id="themepatch">');
	} else if (USER_THEME=="assets/css/altdark.css") {
		$("head").append('<link href="'+PatchesCSS[2]+'" rel="stylesheet" id="themepatch">');
	}

	$("#usercss").remove();
	if (USEROPTS.css!="") {
		$("head").append('<link href="'+USEROPTS.css+'" rel="stylesheet" id="usercss">');
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- SETTING LAYOUT CONFIGURATION ----- */

// detecting Webkit browsers (Chrome, Safari etc.)

var isWebkit="webkitRequestAnimationFrame" in window;

// cookie: getting CSS user themes

_cookie=readCookie(CookiePrefix+"_theme");

var CHANNEL_CSS = ($("#chanexternalcss").length>0 ? $("#chanexternalcss").attr('href') : '');
var CHAN_CSS = ($("#chancss").length>0 ? $("#chancss").attr('href') : '');
var USER_CSS = USEROPTS.css;

if (_cookie!=null) {
	USER_THEME = _cookie;
	(ThemesCSS.length<1 && UI_LayoutDefaultThemes!="1") ? USER_THEME='assets/css/ytsync.css' : '';
	(ThemesCSS.length=="1" && UI_LayoutDefaultThemes!="1") ? USER_THEME=ThemesCSS[0] : '';
} else {
	USER_THEME = 'assets/css/ytsync.css';
	$("#usertheme").length>0 ? USER_THEME=$("#usertheme").attr('href') : '';
	$("#chanexternalcss").length>0 ? USER_THEME=$("#chanexternalcss").attr('href') : '';
}

// cookie: getting CSS user logo

_cookie=readCookie(CookiePrefix+"_logo");
if (_cookie!=null) {
	a=_cookie.split("|");
	USER_LOGO=a[0];
	USER_LOGO_HT=a[1]*1;
	(isNaN(USER_LOGO_HT) || USER_LOGO_HT<1) ? USER_LOGO_HT='200' : '';
}

// cookie: getting number of visits

if (notLoaded) {
	_cookie=readCookie(CookiePrefix+"_visits");
	_cookie==null ? _cookie=1 : '';
	var USER_VISITS=_cookie;
	_cookie++;
	createCookie(CookiePrefix+"_visits", _cookie, 365);
}

// cookie: getting layout configuration

_cookie=readCookie(CookiePrefix+"_config");
if (_cookie==null) {
	userconfig={
	"player":"right", "userlist":"left", "queue":"right", 
	"qsize":"wide", "main":"top", "motd":"top", 
	"image":"no", "header":"detach", "menu":"default"
	}
	defaultLayoutPatch();
} else {
	a=_cookie.split(",");
	userconfig={
	"player":a[0], "userlist":a[1], "queue":a[2], 
	"qsize":a[3], "main":a[4], "motd":a[5], 
	"image":a[6], "header":a[7], "menu":a[8]
	}
}

// setting CSS files in proper order

setCSS();
UI_LayoutThemeSel=="1" ? setUserCSS() : '';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- USER INTERFACE ----- */

// adding fake video player layer if "Hide Video" option is enabled

if (USEROPTS.hidevid) {
	USEROPTS.hidevid=false;
	isHiddenPlayer=true;
	$("#chatwrap, #chatline").removeClass('span12').addClass('span5');
	$("#chatwrap").after('<div id="videowrap" class="span7" />');
	$("#videowrap").append('<p id="currenttitle" />')
	  .append('<div id="ytapiplayer" class="vplayer" />');
	$("#currenttitle").html('Currently Playing: '+$(".queue_active a").html());
	text='According to your User Options, video player is hidden. '
	  + 'Click \"Refresh / Fix Player\" button to show player in this session.';
	makeAlert("No Player", text).appendTo("#ytapiplayer");
	$("#qualitywrap").html('<button id="mediarefresh" class="btn btn-small">Refresh / Fix Player</button>');
	$("#mediarefresh").on("click", function() {
		refreshPlayer();
	});
}

// adding favicon

if (UI_Favicon=="1") {
	$(document).ready(function() {
		$("head").append('<link href="'+Favicon_URL+'" rel="shortcut icon" type="image/x-icon" />');
	});
}

// changing channel name

if (UI_ChannelName=="1") {
	$(".brand").html(ChannelName_Caption);
}

// adding channel small logo

if (UI_MiniLogo=="1" && MiniLogo_URL!="") {
	$(".brand").prepend('<img id="chanavatar" src="'+MiniLogo_URL+'" style="margin-right:10px" />');
}

// adding header dropdown menu

if (UI_HeaderDropMenu=="1") {
	HeaderDropMenu_Title=="" ? HeaderDropMenu_Title='Menu' : '';
	$("#link-home").after('<li id="dropmenu" class="dropdown" />');
	menu=$('<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" />')
	  .html(HeaderDropMenu_Title+' ▾');
	$("#dropmenu").append(menu)
	  .append('<ul id="hmenu" class="dropdown-menu header-dropdown" />');
	HeaderDropMenu_Items.length<1 ? HeaderDropMenu_Items=[['no menu available', '']] : '';
	for (i=0; i<HeaderDropMenu_Items.length; i++) {
		title=HeaderDropMenu_Items[i][0];
		link=HeaderDropMenu_Items[i][1];
		if (link=="") {
			$("#hmenu").append('<li class="nav-header" style="text-shadow:none">'+title+'</li>');
		} else {
			li=$('<li class="header-drop-link" />')
			  .append('<a href="'+link+'" target="_blank">'+title+'</a>')
			  .appendTo("#hmenu");
		}
	}
}

// changing top navbar help file link

if (UI_CustomHelp=="1" && CustomHelp_URL!="") {
	$("#link-help a").attr('href', CustomHelp_URL);
}

// adding important reference row

$("#toprow").before('<div id="zerorow" class="row" />');

// adding MOTD logo

if (UI_MOTDAutoLogo=="1") {
	(MOTDAutoLogo_Mode!="1" && MOTDAutoLogo_Mode!="2" && MOTDAutoLogo_Mode!="3" && MOTDAutoLogo_Mode!="7") ? MOTDAutoLogo_Mode='1' : '';
	$("#motdwrap, #motd").show();
	socket.on("setMotd", changeMOTD);
	changeMOTD();
	if (MOTDAutoLogo_Mode=="3") {
		(typeof MOTDAutoLogo_Timeout!=="number" || MOTDAutoLogo_Timeout<1) ? MOTDAutoLogo_Timeout='20' : '';
		var intervalC=setInterval(function() {rotateLogo()}, MOTDAutoLogo_Timeout*1000);
	}
}

// adding rules button

if (UI_RulesBtn=="1") {
	RulesBtn_Caption=="" ? RulesBtn_Caption='Read Channel Rules' : '';
	$("#annrow").show();
	$_anntop=$('<div id="anntop" />')
	  .prependTo("#announcements")
	  .html('<button id="rulesbtn" class="btn">'+RulesBtn_Caption+' ▸</button>')
	  .append('<div id="rulespanel-outer" />')
	  .append($("#drinkbar").detach())
	  .after('<div id="anntop-align" />')
	$("#announcements").prepend('<button id="annclose" class="close pull-right">×</button>');
	$("#rulespanel-outer").html('<div id="rulespanel" style="display:none">'+RulesBtn_HTML+'</div>');
} else if (UI_ChannelAnnouncement!="1" && $("#announcements .alert").length<1) {
	$("#annrow").hide();
}

// adding attention bar

if (UI_AttentionBar=="1" && AttentionBar_URL!="") {
	$("#annrow").show();
	if (UI_RulesBtn=="1") {
		$("#anntop-align").after('<div id="attbarrow-outer" />');
	} else {
		$("#announcements").prepend('<div id="attbarrow-outer" />')
		  .prepend('<button id="annclose" class="close pull-right">×</button>');
	}
	$("#attbarrow-outer").append('<iframe id="attBar" width="100%" height="22px" />');
	$("#attBar").attr('frameborder', '0').attr('scrolling', 'no').attr('src', AttentionBar_URL);
}

// adding custom channel announcement

if (UI_ChannelAnnouncement=="1" && notLoaded) {
	ChannelAnnouncement_Title=="" ? ChannelAnnouncement_Title='Administration Message' : '';
	ChannelAnnouncement_HTML=="" ? ChannelAnnouncement_HTML='<i>no messages</i>' : '';
	$("#annrow").show();
	makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).appendTo("#announcements");
}

// adding full-width title bar and progress bar

if (UI_FullTitleBar=="1") {
	var isDefaultDescr=true;
	if (notLoaded) {
		$("#main").before('<div id="titlerow" class="row" />');
		$_titlerowouter=$('<div id="titlerow-outer" class="span12" />')
		  .appendTo("#titlerow")
		  .html($("#currenttitle").detach());
	}
	if (UI_ProgressBar=="1") {
		var prevTime=0;
		var intervalA=setInterval(function() {progressBar()}, 2000);
	}
	$("#videowrap").prepend('<p id="emptytop" />');
	socket.on("changeMedia", showInfo);
	showInfo();
}

// changing title bar description

if (UI_TitleBarDescription=="1") {
	socket.on("changeMedia", changeTitle);
	changeTitle();
}

// chat extension: additional user commands, independent chat filters and user special signs

_chatBuffer=addChatMessage;
addChatMessage=function(data) {
	RandomQuotes.length<1 ? RandomQuotes=['error: no quotes available'] : '';
	AskAnswers.length<1 ? AskAnswers=['yes', 'no'] : '';
	((typeof ChatSuffix_Percentage!=="number") || ChatSuffix_Percentage<0) ? ChatSuffix_Percentage='10' : '';

	if (UI_IndependentFilters=="1") {
		for (i=0; i<IndependentFilters_Array.length; i++) {		
			data.msg=data.msg.replace(IndependentFilters_Array[i].before, IndependentFilters_Array[i].after);
		}
	}

	snr=0;
	if (UI_UserSpecialSigns=="1") {
		if (UserSpecialSigns_Array[data.username]!=undefined) {
			snr=UserSpecialSigns_Array[data.username].length+1;
			data.msg=UserSpecialSigns_Array[data.username]+' '+data.msg;
		}
	}

	if (UI_TemporaryFilters=="1") {
		for (emotes in EmotesArray) {
			link=EmotesArray[emotes][0];
			wd=EmotesArray[emotes][1];
			ht=EmotesArray[emotes][2];
			code='<img src="'+EmotesBasicURL+''+link+'" width="'+wd+'" height="'+ht+'" onclick="insertText(\''+emotes+'\')" style="cursor:pointer" />';
			re=new RegExp(emotes, 'g');
			data.msg=data.msg.replace(re, code);
		}
		for (i=0; i<fontsBtn.length; i++) {
			a=fontsBtn[i][4];
			a=a.replace(/\\/g, '');
			b='['+fontsBtn[i][1]+']';
			data.msg=data.msg.replace(b, a);
			data.msg=data.msg.replace(/\[\/\]/, '</span>');
		}
	}
	if (UI_ChatSuffix=="1") {
		Math.random()<(ChatSuffix_Percentage/100) ? data.msg+=' '+ChatSuffix_Text : '';
	}
	_chatBuffer(data);

	if (UI_UserCommands=="1" && data.msg.indexOf("!")===snr) {
		var isCommand=true;
		if (data.msg.indexOf("!pick ")===snr) {
			temp=data.msg.split("!pick ");
			arr=temp[1].split(",");
			a=Math.round(Math.random()*(arr.length-1));
			data.msg=arr[a];
		} else if (data.msg.indexOf("!ask ")===snr) {
			a=Math.round(Math.random()*(AskAnswers.length-1));
			data.msg=AskAnswers[a];
		} else if (data.msg.indexOf("!time")===snr) {
			a=new Date();
			b=a.getHours();
			b<10 ? b='0'+b : false;
			c=a.getMinutes();
			c<10 ? c='0'+c : false;
			data.msg='current time: '+b+':'+c;
			} else if (data.msg.indexOf("!dice")>-1) {
			a=Math.round(Math.random()*5)+1;
			data.msg=a;
		} else if (data.msg.indexOf("!q")===snr) {
			a=Math.round(Math.random()*(RandomQuotes.length-1));
			data.msg=RandomQuotes[a];
		} else if (data.msg.indexOf("!random")===snr) {
			if (UI_ChannelDatabase=="1") {
				a="";
				while (a=="") {
				b=Math.round(Math.random()*(ChannelDatabase_Array.length-1));
					a=ChannelDatabase_Array[b][0];
					c=ChannelDatabase_Array[b][1];
				}
				addToPlaylist(a, "end");
				data.msg='added random video: '+c;
			} else {
				data.msg='error: channel database is not enabled';
			}
		} else if (data.msg.indexOf("!calc ")===snr) {
			temp=data.msg.split("!calc ");
			data.msg=eval(temp[1]);
		} else if (data.msg.indexOf("!skip")===snr) {
			socket.emit("voteskip");
			data.msg='current video has been voteskipped';
		} else if (data.msg.indexOf("!add ")===snr) {
			temp=data.msg.split("!add ");
			parsed=parseMediaLink(temp[1]);
			if (parsed["id"]===null) {
				data.msg='error: wrong video link, video has not been added';
			} else {
				socket.emit("queue", {id: parsed["id"], pos: "end", type: parsed["type"]});
				data.msg='video has been added';
			}
		} else if (data.msg.indexOf("!now")===snr) {
			a=$(".queue_active a").html();
			data.msg='Now playing: '+a;
		} else if (data.msg.indexOf("!CO ZJE TEH?")===snr) {
			data.msg='TEH ZJE HUJ';
		} else {
			isCommand=false;
		}
		if (isCommand) {
			data.msg='<div class="command">'+data.msg+'</div>';
			_chatBuffer(data);
		}
	}
}

// adding chat buttons wrapping

$("#chatwrap").append('<div id="chatbtn-outer" />');
$("#chatbtn-outer").append('<div id="chatbtnwrap" class="btn-group" />');

// adding chat fonts button

if (UI_FontsBtn=="1") {
	$("#chatbtnwrap").append('<button id="fontsbtn" class="btn btn-small"><i class="icon-font"></i></button>');
}

// adding chat emotes button

if (UI_EmotesBtn=="1") {
	var isEmotesLoaded=false;
	$("#chatbtnwrap").append('<button id="emotesbtn" class="btn btn-small"><i class="icon-picture"></i></button>');
}

// adding chat commands help button

if (UI_CommandsBtn=="1") {
	$("#chatbtnwrap").append('<button id="chathelpbtn" class="btn btn-small">Chat Commands</button>');
}

// detaching player control buttons

$("#videowrap").append($("#qualitywrap").detach().removeClass());
$("#mediarefresh").text('Refresh / Fix Player');

// adding player transformations dropdown menu

if (UI_PlayerMenu=="1") {
	var isDescr=true;
	PLAYER_TYPE=PLAYER.type;
	$("#mediarefresh").after('<div id="mirrorcaret-outer" class="btn-group" />');
	$("#mirrorcaret-outer").append('<button id="mirrorcaret" class="btn btn-small dropdown-toggle" data-toggle="dropdown" />');
	$("#mirrorcaret").text('Controls ▾')
	  .after('<ul id="trmenu" class="dropdown-menu" />');
	$("#trmenu").append('<li><a id="plX" href="javascript:void(0)">Mirror X Player</a></li>')
	  .append('<li><a id="plY" href="javascript:void(0)">Mirror Y Player</a></li>')
	  .append('<li><a id="plR" href="javascript:void(0)">Rotate Player</a></li>')
	  .append('<li><a id="plV" href="javascript:void(0)">Vertical Player</a></li>')
	  .append('<li><a id="plH" href="javascript:void(0)">Hide Player</a></li>')
	  .append('<li><a id="vid-descr" href="javascript:void(0)">Hide Description</a></li>')
	  .append('<li><a id="descr-mode" href="javascript:void(0)">Switch Description</a></li>')
	  .append('<li><a id="pl-pinup" href="javascript:void(0)">PinUp Playlist</a></li>');
	socket.on("changeMedia", bindPlayerMenu);
}

// adding fonts panel

$("#main").after('<div id="fontspanel" />');

// adding fonts buttons to fonts panel

// array syntax: ['button_style', 'chat_code', 'button_text', 'filter_name', 'filter_replace'],
fontsBtn=[
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

for (i=0; i<fontsBtn.length; i++) {
	btn=$('<button id="cbtn'+i+'" class="btn" style="'+fontsBtn[i][0]+'" onclick="insertText(\'['+fontsBtn[i][1]+']\')" />')
	  .text(fontsBtn[i][2]);
	$("#fontspanel").append(btn).append(" ");
}

// adding additional unicode characters buttons

if (UI_UnicodeChars=="1" && UnicodeChars_Array.length>0) {
	$("#fontspanel").append('<br /><div style="height:10px" />');
	for (i=0; i<UnicodeChars_Array.length; i++) {
		btn=$('<button class="btn unibtn" style="background:white" onclick="insertText(\''+UnicodeChars_Array[i]+'\')" />')
		  .text(UnicodeChars_Array[i]);
		UnicodeChars_Array[i].length>1 ? btn.css('width', 'auto') : false;
		$("#fontspanel").append(btn).append(" ");
		i%13==12 ? $("#fontspanel").append('<br />') : false;
}
}

// adding emotes panel

$("#main").after('<div id="emotespanel" />');
if (UI_ChannelCache=="1") {
	showEmotes();
	isEmotesLoaded=true;
}

// adding playlist row minimizing button

if (UI_MinimizeBtn=="1") {
	var isMinimized=false;
	$("#pollbtnwrap").prepend('<button id="minplrow" class="btn btn-small pull-right">Minimize</button>');
}

// adding playlist tooltip

$("#playlisttoggle").prepend('<div id="pl-tooltip" class="pull-right" style="width:50%; text-align:right; font-size:8pt">Add link here</div>');

// changing voteskip button caption

if (UI_VoteskipCaption=="1" && VoteskipCaption_Text!="") {
	socket.on("voteskip", changeSkipText);
	changeSkipText();
}

// adding Layout Configuration box

$_layouttoggleouter=$('<div id="layouttoggle-outer" class="well well-small span12 row-fluid" />')
  .insertAfter("#pollwrap");
$_layouttoggle=$('<div id="layouttoggle" class="span12 pointer" />')
  .html('<i class="icon-minus pull-left"></i><p>Hide Layout Configuration</p>')
  .appendTo($_layouttoggleouter);
$_layoutwrap=$('<div id="layoutwrap" class="span12" />')
  .css('margin-left', '0').css('text-align', 'center')
  .insertAfter($_layouttoggle);
generateToggle("#layouttoggle", "#layoutwrap");

// adding selector with player display modes

if (UI_DisplayModeSel=="1") {
	$_modewrap=$('<div id="modewrap" class="span12" />')
	  .css('text-align', 'center')
 	  .appendTo($_layoutwrap);
	$_modetitle=$('<span id="modetitle" class="conf-opt">Display Mode</span><br />')
	  .appendTo($_modewrap);
	$_modesel=$('<select id="mode-sel" style="width:150px" />')
	  .append('<option value="syMode">synchtube mode</option>')
	  .append('<option value="kMode">cinema mode</option>')
	  .append('<option value="chMode">chatroom mode</option>')
	  .append('<option value="rMode">radio mode</option>')
	  .append('<br />')
 	  .appendTo($_modewrap);
}

// adding layout configuration button

$_userconfig=$('<button id="userConfig" class="btn btn-small">Layout Configuration</button>')
  .css('margin-top', '10px').css('margin-bottom', '10px')
  .appendTo($_layoutwrap);

// adding layout themes selector

if (UI_LayoutThemeSel=="1") {
	$_themewrap=$('<div id="themewrap" class="span12" />')
	  .css('text-align', 'center')
 	  .appendTo($_layoutwrap);
	$_themetitle=$('<span id="themetitle" class="conf-opt">Layout Theme</span><br />')
	  .appendTo($_themewrap);
	$_themesel=$('<select id="theme-sel" style="width:150px" />')
 	  .appendTo($_themewrap);
	if ($("#chanexternalcss").length>0) {
		link=$("#chanexternalcss").attr('href');
		$_themesel.append('<option value="'+link+'">## channel default</option>');
	}
	if (UI_LayoutDefaultThemes=="1") {
		$_themesel.append('<option value="assets/css/ytsync.css"># default</option>');
		$_themesel.append('<option value="assets/css/darkstrap.css"># dark</option>');
		$_themesel.append('<option value="assets/css/altdark.css"># alternate dark</option>');
	}
	for (i=0; i<ThemesCSS.length; i++) {
		$_themesel.append('<option value="'+ThemesCSS[i][1]+'">'+ThemesCSS[i][0]+'</option>');
	}
	if (ThemesCSS.length<1 && UI_LayoutDefaultThemes!="1") {
		$_themesel.append('<option value="assets/css/ytsync.css"># default</option>');
		USER_THEME="assets/css/ytsync.css";
	}
	$_themesel.val(USER_THEME);
}

// adding commands and volume buttons

if (UI_FastCommandsBtns=="1" || UI_YTVolumeBtns=="1") {
	$_btnswrap=$('<div id="btnswrap" class="span12 btn-group" />')
	  .css('text-align', 'center')
 	  .appendTo($_layoutwrap);
	if (UI_FastCommandsBtns=="1") {
		$_btnswrap.append('<button id="clearbtn" class="btn btn-small">/clear</button>')
		  .append('<button id="afkbtn" class="btn btn-small">/afk</button>');
	}
	if (UI_YTVolumeBtns=="1") {
		$_btnswrap.append('<button id="vDown" class="btn btn-small">vol -</button>')
		  .append('<button id="vUp" class="btn btn-small">vol +</button>')
	}
}

// adding Channel Database box

if (UI_ChannelDatabase=="1" && ChannelDatabase_URL=="") {
	$_dbtoggleouter=$('<div id="dbtoggle-outer" class="well well-small span12 row-fluid" />')
	  .appendTo("#leftpane-inner");
	$_dbtoggle=$('<div id="dbtoggle" class="span12 pointer" />')
	  .html('<i class="icon-plus pull-left"></i><p>Show Channel Database</p>')
	  .appendTo($_dbtoggleouter);
	$_dbwrap=$('<div id="dbwrap" class="span12" />')
	  .css('display', 'none').css('margin-left', '0')
	  .insertAfter($_dbtoggle);

	var isDB=false;
	var item_nr=0;
	var layer_nr=1;
	var opening=new Array();
	var item_count=new Array(0);
	var count_nr=0;

	if (ChannelDatabase_Array.length<1 || ChannelDatabase_Array[0][0]!="") {
		ChannelDatabase_Array.unshift(['', '<i>non-classified</i>']);
	}
	UI_ChannelCache=="1" ? createDatabase() : '';

} else if (UI_ChannelDatabase=="1" && ChannelDatabase_URL!="") {
	$.getScript(ChannelDatabase_URL);
}

// adding Channel Galleries box

if (UI_ChannelGalleries=="1") {
	$_gallerytoggleouter=$('<div id="gallerytoggle-outer" class="well well-small span12 row-fluid" />')
	  .appendTo("#leftpane-inner");
	$_gallerytoggle=$('<div id="gallerytoggle" class="span12 pointer" />')
	  .html('<i class="icon-plus pull-left"></i><p>Show Channel Galleries</p>')
	  .appendTo($_gallerytoggleouter)
	$_gallerywrap=$('<div id="gallerywrap" class="span12" />')
	  .css('display', 'none').css('margin-left', '0').css('text-align', 'center')
	  .insertAfter($_gallerytoggle);
	var isLoadedGallery=false;
	ChannelGalleries_Array.length<1 ? ChannelGalleries_Array=[['Japan gallery', 'http://imgur.com/a/185S2/embed']] : '';
	UI_ChannelCache=="1" ? createGallery() : '';
}

// adding fonts and emotes install filters buttons

if (UI_TemporaryFilters!="1") {
	$("#multifiltersubmit").after('<button id="installfonts" class="btn">Install Fonts</button>')
	  .after('<button id="installemotes" class="btn">Install Emotes</button>');
}

// re-arranging footer

$("#modrow").after('<div id="footerrow" class="row" style="margin-top:5px"/>');
$("#footerrow").append('<div id="footerwrap" class="span12" style="font-size:9pt"/>');
notLoaded ? defFooter=$("#footer p").html() : '';
$("#footer").remove();

if (UI_CustomRightFooter=="1") {
	$("#footerwrap").append('<span style="float:right; margin-left:15px">'+CustomRightFooter_HTML+'</span>');
}
$("#footerwrap").append(defFooter+'<br />')
  .append('CyTube Plus Copyright &copy; 2013 Zimny Lech · ')
  .append('Free source on <a href="http://github.com/zimny-lech/CyTube-Plus" target="_blank">GitHub</a> · ')
  .append('<a href="http://github.com/zimny-lech/CyTube-Plus/wiki" target="_blank">Help</a>');
if (UI_UserStatistics=="1") {
	notLoaded ? USER_ONLINE = 0 : '';
	$("#footerwrap").append('<br />My visits: <span class="badge footer-badge">'+USER_VISITS+'</span> / ')
	  .append('Current online time: <span id="onlinetime" class="badge footer-badge">0:00</span>');
	var intervalB=setInterval(function() {onlineTime()}, 60000);
}
if (UI_CustomFooter=="1") {
	$("#footerwrap").append('<br /><br />'+CustomFooter_HTML);
}

$("#sitefooter p").html()=="" ? $("#sitefooter").remove() : $("#mainpage").after($("#sitefooter").detach());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- USER INTERFACE EVENTS ----- */

// click: set some necessary things in the "Options" modal window 

$("#optlink").on("click", function() {
	USEROPTS.layout="default";
	$(".modal").on("hidden", function() {
		isHiddenPlayer ? USEROPTS.hidevid=true : '';
		setUserCSS();
	});
});

// click: toggle channel rules

$("#rulesbtn").on("click", function() {
	toggleDiv("#rulespanel");
});

// click: close all announcements

$("#annclose").on("click", function() {
	$("#annrow").hide();
});

// click: toggle fonts panel

$("#fontsbtn").on("click", function() {
	toggleDiv("#fontspanel");
});

// click: toggle emotes panel

$("#emotesbtn").on("click", function() {
	toggleDiv("#emotespanel");
	if (UI_ChannelCache!="1" && isEmotesLoaded==false) {
		showEmotes();
		isEmotesLoaded=true;
	}
});

// click: chat commands help

$("#chathelpbtn").on("click", function() {
	createModal('Chat Commands', 'Close');

	if (UI_UserCommands=="1") {
		scrCmd={
		'pick':'choosing a random option from a list separated by commas (e.g. <i>!pick japan,korea,china</i>)',
		'ask':'asking a question with yes/no type answer (e.g. <i>!ask Will this channel be popular?</i>)',
		'q':'displaying random quote (<i>!q</i>)',
		'dice':'rolling dice (<i>!dice</i>)',
		'time':'displaying current time (<i>!time</i>)',
		'now':'displaying current playing title (<i>!now</i>)',
		'calc':'calculating a math operation (all JavaScript Math methods and constants allowed, e.g. <i>!calc Math.PI*10</i>)',
		'skip':'vote down current video to skip (<i>!skip</i>)',
		'random':'adding random video if Channel Database is enabled (<i>!random</i>)',
		'add':'adding a link to the end of playlist (e.g. <i>!add http://www.youtube.com/watch?v=YLNH_Fqj4DE</i>)'
		}
		body.append('<strong>New chat commands are ON</strong><br /><br />')
		  .append('<ul id="cmdlist" />').append('<br />');
		for (cmd in scrCmd) {
			$("#cmdlist").append('<li><code>!'+cmd+'</code> - '+scrCmd[cmd]+'</li>');
		}
	}
	defCmd={
	'me':'showing an action-style message (username does something, e.g. <i>/me is dancing</i>)',
	'sp':'hiding a message in a hover-to-show spoiler box (e.g. <i>/sp This message is hidden</i>)',
	'afk':'toggling your AFK (away from keyboard) status (<i>/afk</i>)',
	}
	body.append('<strong>Default CyTube commands</strong><br /><br />')
	  .append('<ul id="cmdlist2" />');
	for (cmd in defCmd) {
		$("#cmdlist2").append('<li><code>/'+cmd+'</code> - '+defCmd[cmd]+'</li>');
	}
});

// clicks: refresh player improvement

$("#mediarefresh").on("click", function() {
	refreshPlayer();
});

// clicks: player transformations

$("#plX").on("click", function() {
	if ($(".vplayer").hasClass('mX')) $(".vplayer").removeClass('mX');
	else $(".vplayer").addClass('mX');
});

$("#plY").on("click", function() {
	if ($(".vplayer").hasClass('mY')) $(".vplayer").removeClass('mY');
	else $(".vplayer").addClass('mY');
});

$("#plR").on("click", function() {
	if ($(".vplayer").hasClass('rotate')) $(".vplayer").removeClass('rotate');
	else $(".vplayer").addClass('rotate');
});

$("#plV").on("click", function() {
	if ($(".vplayer").hasClass('vertical')) {
		$(".vplayer").removeClass('vertical');
		$("#plV").text('Vertical Player');
	} else {
		$(".vplayer").addClass('vertical');
		$("#plV").text('Horizontal Player');
	}
});

$("#plH").on("click", function() {
	if ($(".vplayer").css('visibility')=="hidden") {
		$("#videowrap .vplayer").css('visibility', 'visible').css('opacity', '100');
		$("#plH").text('Hide Player');
	} else {
		$("#videowrap .vplayer").css('visibility', 'hidden').css('opacity', '0');
		$("#plH").text('Show Player');
	}
});

// click: toggle video description

$("#vid-descr").on("click", function() {
	toggleDescr();
});

// click: switch video description mode

$("#descr-mode").on("click", function() {
	isDefaultDescr ? isDefaultDescr=false : isDefaultDescr=true;
	showInfo();
});

// click: pin-up playlist to player

var isPlPin=false;
$("#pl-pinup").on("click", function() {
	togglePinUp();
});

// minimize playlist row

isPlPin=false;
$("#minplrow").on("click", function() {
	if (!isMinimized) {
		if (!isPlPin) {
			$("#leftpane-inner .well, #extended_controls, #queue, #plmeta").hide();
			$("#voteskipwrap").hide();
		} else {
			$("#messagebuffer, #userlist, #chatline, #fontsbtn, #emotesbtn").hide();
		}
		$("#minplrow").text('Maximize');
		$("#azukirow, #toprow, #annrow, #pl-pinup").hide();
		isMinimized=true;
	} else {
		if (!isPlPin) {
			$("#leftpane-inner .well, #extended_controls, #queue, #plmeta").show();
			$("#voteskipwrap").show();
		} else {
			$("#messagebuffer, #userlist, #chatline, #fontsbtn, #emotesbtn").show();
		}
		$("#minplrow").text('Minimize');
		$("#azukirow, #toprow, #annrow, #pl-pinup").show();
		isMinimized=false;
	}
});

// select: display mode

$("#mode-sel").on("change", function() {
	selValue=$("#mode-sel").val();
	$("#userConfig").hide();
	if (selValue=="syMode") {
		$("#main, #videowrap, #chatwrap, #rightpane-outer, #pl-pinup, #userConfig").show();
		if (!isWebkit) {
			$("#videowrap p, #qualitywrap").show();
			$("#videowrap").removeClass().addClass('span7');
		}
		normalPlayer();
		normalChat();
		playerLocation(userconfig["player"]);
	} else if (selValue=="kMode") {
		$("#main, #videowrap").show();
		$("#chatwrap, #pl-pinup").hide();
		bigPlayer();
	} else if (selValue=="chMode") {
		$("#main, #chatwrap").show();
		$("#videowidth").removeClass().addClass('span1');
		if (isWebkit) {
			$("#videowrap").hide();
		} else {
			$("#videowrap p, #qualitywrap").hide();
			$("#ytapiplayer").attr("width", '1').attr("height", '1');
		}
		bigChat();
	} else if (selValue=="rMode") {
		$("#videowidth").removeClass().addClass('span1');
		if (isWebkit) {
			$("#main").hide();
		} else {
			$("#main, #videowrap").show();
			$("#chatwrap, #videowrap p, #qualitywrap").hide();
			$("#ytapiplayer").attr("width", '1').attr("height", '1');
		}
		$("#userConfig").show();
	}
	scrollQueue();
	scrollChat();
});

// click: layout configuration modal window

$("#userConfig").on("click", function() {
	createModal('Layout Configuration', 'Save');

	form=$("<form/>").addClass('form-horizontal').appendTo(body);

	function addOption(lbl, thing) {
		g=$("<div/>").addClass('control-group').appendTo(form);
		$("<label/>").addClass('control-label').text(lbl).appendTo(g);
		c=$("<div/>").addClass('controls').appendTo(g);
		thing.appendTo(c);
	}

	playerlocation=$("<select/>");
	$("<option/>").attr('value', 'left').text('left').appendTo(playerlocation);
	$("<option/>").attr('value', 'right').text('right').appendTo(playerlocation);
	$("<option/>").attr('value', 'center').text('center').appendTo(playerlocation);
	playerlocation.val(userconfig["player"]);
	addOption('Player location', playerlocation);

	userlistlocation=$("<select/>");
	$("<option/>").attr('value', 'left').text('left').appendTo(userlistlocation);
	$("<option/>").attr('value', 'right').text('right').appendTo(userlistlocation);
	userlistlocation.val(userconfig["userlist"]);
	addOption('Userlist location', userlistlocation);

	queuelocation=$("<select/>");
	$("<option/>").attr('value', 'left').text('left').appendTo(queuelocation);
	$("<option/>").attr('value', 'right').text('right').appendTo(queuelocation);
	$("<option/>").attr('value', 'center').text('center').appendTo(queuelocation);
	queuelocation.val(userconfig["queue"]);
	addOption('Queue location', queuelocation);

	queuesize=$("<select/>");
	$("<option/>").attr('value', 'wide').text('wide').appendTo(queuesize);
	$("<option/>").attr('value', 'narrow').text('narrow').appendTo(queuesize);
	queuesize.val(userconfig["qsize"]);
	addOption('Queue column size', queuesize);

	mainlocation=$("<select/>");
	$("<option/>").attr('value', 'top').text('above playlist').appendTo(mainlocation);
	$("<option/>").attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
	mainlocation.val(userconfig["main"]);
	addOption('Player & chat', mainlocation);

	motdlocation=$("<select/>");
	$("<option/>").attr('value', 'top').text('top').appendTo(motdlocation);
	$("<option/>").attr('value', 'bottom').text('bottom').appendTo(motdlocation);
	motdlocation.val(userconfig["motd"]);
	addOption('MOTD & announcements', motdlocation);

	logoinsert=$("<select/>");
	$("<option/>").attr('value', 'no').text('no image').appendTo(logoinsert);
	$("<option/>").attr('value', 'user').text('user image').appendTo(logoinsert);
	for (name in TopUserLogo) {
		$("<option/>").attr('value', name).text(TopUserLogo[name][0]).appendTo(logoinsert);
	}
	logoinsert.val(userconfig["image"]);
	addOption('Top logo', logoinsert);

	userlogo=$("<input/>").attr('type', 'text').attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht=$("<input/>").attr('type', 'text').attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if (userconfig["image"]!="user") {
		userlogo.parent().parent().hide();
		userlogoht.parent().parent().hide();
	} else {
		userlogo.val(USER_LOGO);
		userlogoht.val(USER_LOGO_HT);
	}

	headermode=$("<select/>");
	$("<option/>").attr('value', 'fixed').text('fixed').appendTo(headermode);
	$("<option/>").attr('value', 'detach').text('detach').appendTo(headermode);
	headermode.val(userconfig["header"]);
	addOption('Header menu', headermode);

	plcontrolsmode=$("<select/>");
	$("<option/>").attr('value', 'default').text('default').appendTo(plcontrolsmode);
	$("<option/>").attr('value', 'menu').text('menu').appendTo(plcontrolsmode);
	plcontrolsmode.val(userconfig["menu"]);
	addOption('Playlist controls', plcontrolsmode);

	reset=$("<button/>").addClass('btn pull-left').text('Default').appendTo(footer);
	column=$("<button/>").addClass('btn pull-left').text('Vertical').appendTo(footer);

	logoinsert.on("change", function() {
		if (logoinsert.val()=="user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
			userlogo.val(USER_LOGO);
			userlogoht.val(USER_LOGO_HT);
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	submit.on("click", function() {
		userconfig["player"]=playerlocation.val();
		userconfig["userlist"]=userlistlocation.val();
		userconfig["queue"]=queuelocation.val();
		userconfig["qsize"]=queuesize.val();
		userconfig["main"]=mainlocation.val();
		userconfig["motd"]=motdlocation.val();
		userconfig["image"]=logoinsert.val();
		userconfig["header"]=headermode.val();
		userconfig["menu"]=plcontrolsmode.val();
		if (logoinsert.val()=="user") {
			if (userlogo.val()=="") {
				logoinsert.val("no");
				userconfig["image"]='no';
			} else if (userlogoht.val()=="") {
				USER_LOGO_HT='200';
			} else {
				USER_LOGO_HT=userlogoht.val()*1;
				(isNaN(USER_LOGO_HT) || USER_LOGO_HT<1) ? USER_LOGO_HT='200' : '';
			}
			USER_LOGO=userlogo.val();
			eraseCookie(CookiePrefix+"_logo");
			createCookie(CookiePrefix+"_logo", userlogo.val()+"|"+userlogoht.val(), 365)
		}
		setLayout(
		  playerlocation.val(), userlistlocation.val(), queuelocation.val(), 
		  queuesize.val(), mainlocation.val(), motdlocation.val(), 
		  logoinsert.val(),headermode.val(),plcontrolsmode.val()
		);
		eraseCookie(CookiePrefix+"_config");
		a=userconfig["player"]+","+userconfig["userlist"]+","+userconfig["queue"]+","+userconfig["qsize"]
		  +","+userconfig["main"]+","+userconfig["motd"]+","+userconfig["image"]+","+userconfig["header"]
		  +","+userconfig["menu"];
		createCookie(CookiePrefix+"_config", a, 365);
	});

	reset.on("click", function() {
		userconfig={
		"player":"right", "userlist":"left", "queue":"right", 
		"qsize":"wide", "main":"top", "motd":"top", 
		"image":"no", "header":"detach", "menu":"default"
		}
		defaultLayoutPatch();
		setConfigValues(userconfig["player"],userconfig["userlist"],userconfig["queue"],"wide","top","top","no","detach",userconfig["menu"]);
		modal.modal("hide");
		setLayout(userconfig["player"],userconfig["userlist"],userconfig["queue"],"wide","top","top","no","detach",userconfig["menu"]);
		eraseCookie(CookiePrefix+"_config");
		a=userconfig["player"]+","+userconfig["userlist"]+","+userconfig["queue"]+",wide,top,top,no,detach,"+userconfig["menu"];
		createCookie(CookiePrefix+"_config", a, 365);
	});

	column.on("click", function() {
		userconfig={
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

// select: change layout theme

$("#theme-sel").on("change", function() {
	setCSS();
	selValue=$("#theme-sel").val();
	USER_THEME=selValue;
	setUserCSS();
	eraseCookie(CookiePrefix+"_theme");
	createCookie(CookiePrefix+"_theme", selValue, 365);
});

// click: /clear command

$("#clearbtn").on("click", function() {
	if (hasPermission("playlistclear")) {
		if (confirm('Are you sure to clear the chat window?')) {
			socket.emit("chatMsg", {msg: '/clear'});
		}
	}
	else {
		alert('You have no permission to clear the chat window.');
	}
});

// click: /afk command

$("#afkbtn").on("click", function() {
	socket.emit("chatMsg", {msg: '/afk'});
});

// clicks: YouTube volume regulation

$("#vDown").on("click", function() {
	if (PLAYER.type=="yt") {
		a=PLAYER.player.getVolume();
		PLAYER.player.setVolume(a-1);
	} else {
		alert('You can change only YouTube volume level due to limited player functionality.');
	}
});

$("#vUp").on("click", function() {
	if (PLAYER.type=="yt") {
		a=PLAYER.player.getVolume();
		PLAYER.player.setVolume(a+1);
	} else {
		alert('You can change only YouTube volume level due to limited player functionality.');
	}
});

// click: toggle channel database

$("#dbtoggle").on("click", function() {
	if ($("#dbwrap").css("display")=="none") {
		$("#dbwrap").show();
		!isDB ? createDatabase() : '';
		$("#dbtoggle").html($("#dbtoggle").html().replace(/Show/, "Hide"));
		$("#dbtoggle i").removeClass("icon-plus").addClass("icon-minus");
	} else {
		$("#dbwrap").hide();
		$("#dbtoggle").html($("#dbtoggle").html().replace(/Hide/, "Show"));
		$("#dbtoggle i").removeClass("icon-minus").addClass("icon-plus");
	}
});

// click: toggle channel galleries

$("#gallerytoggle").on("click", function() {
	if ($("#gallerywrap").css("display")=="none") {
		$("#gallerywrap").show();
		!isLoadedGallery ? createGallery() : '';
		$("#gallerytoggle").html($("#gallerytoggle").html().replace(/Show/, "Hide"));
		$("#gallerytoggle i").removeClass("icon-plus").addClass("icon-minus");
	} else {
		$("#gallerywrap").hide();
		$("#gallerytoggle").html($("#gallerytoggle").html().replace(/Hide/, "Show"));
		$("#gallerytoggle i").removeClass("icon-minus").addClass("icon-plus");
	}
});

// extending 'Get URLs' function

if (UI_ExtendedGetURLs=="1") {
	$("#getplaylist").unbind()
	  .text('Copy or Export Playlist')
	  .on("click", function() {
		createModal('Playlist URLs', 'Close');

		data=$("<textarea/>").attr('rows', '8').css('width', '97%').val(formatRawList()).appendTo(body);
		rlist=$("<button/>").addClass('btn pull-left').text('Raw List').appendTo(footer);
		tlist=$("<button/>").addClass('btn pull-left').text('Plain Text').appendTo(footer);
		hlist=$("<button/>").addClass('btn pull-left').text('HTML Code').appendTo(footer);

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

// clicks: install filters

$("#installfonts").on("click", function() {
	var arr=new Array();
	for (i=0; i<fontsBtn.length; i++) {
		arr.push(fontsBtn[i][3]+" \\["+fontsBtn[i][1]+"\\] g "+fontsBtn[i][4]);
	}
	$("#multifiltereditor").val(arr.join("\n"));
});

$("#installemotes").on("click", function() {
	var arr=new Array();
	$.each(EmotesArray, function(a,b) {
		a=a.replace(RegExp(" ","g"),"\\ ");
		arr.push(a+' '+a+' '+'g'+' '+'<img\\ src="'+EmotesBasicURL+''+b[0]+'"\\ width="'+b[1]+'"\\ height="'+b[2]+'"\\ alt="'+a+'"\\ />');
	});
	arr.push('custom\\ image \\[img\\]([^\\*]+)\\[\\/img\\] g <a\\ href="$1"\\ target="_blank"><img\\ src="$1"\\ width="100"\\ alt="custom\\ image"\\ /></a>');
	$("#multifiltereditor").val(arr.join("\n"));
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setting layout after loading channel

playerLocation(userconfig["player"]);
userlistLocation(userconfig["userlist"]);
queueLocation(userconfig["queue"]);
queueSize(userconfig["qsize"]);
mainLocation(userconfig["main"]);
motdLocation(userconfig["motd"]);
logoInsert(userconfig["image"]);
headerMode(userconfig["header"]);
plControlsMode(userconfig["menu"]);

// scrolling playlist and chat after loading

scrollQueue();
scrollChat();

notLoaded=false;

// adding additional script file

if (UI_AdditionalScript=="1" && AdditionalScript_URL!="") {
	$.getScript(AdditionalScript_URL);
}

/* ----- END OF LIBRARY ----- */
