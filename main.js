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
// Version: 2.0
// Modified: 2013-08-31
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
2. Scroll down to CONFIGURATION sections and configure library according to your wishes.
   Note: all options are explained for non-advanced users.
   Note 2: I highly recommend you to change default "cookiePrefix" variable (for not interfere
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

/* ----- BASIC CONFIGURATION ----- */

// CONFIGURE BEFORE INSTALLING IF YOU WANT TO CUSTOMIZE THIS LIBRARY
// WARNING! apostrophe sign (') in variables values must be prepend with "\" sign (e.g. "\'")

favIcon='https://dl.dropboxusercontent.com/s/xgefazzyhs8xncp/icon.png';

// DESCRIPTION: channel favicon URL (best size: 16x16 px)
// IGNORE: leave empty ''

channelAvatar='https://dl.dropboxusercontent.com/s/xgefazzyhs8xncp/icon.png';

// DESCRIPTION: URL of small channel logo displaying next to the channel name (best size: max. 30px height)
// NOTE: you can use the same URL as above favIcon file
// IGNORE: leave empty ''

channelName='MyTube';

// DESCRIPTION: channel name in the header
// IGNORE: leave empty '' (will display default server name)

headerDropMenu=1;

// DESCRIPTION: additional header dropdown menu
// VALUES: 0 = disable, 1 = enable

headerDropMenuTitle='Synch';

// DESCRIPTION: header dropdown menu title
// IGNORE: leave empty '' (will display default name)
// REQUIRE: headerDropMenu enabled

headerDropMenuItems=[
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
// REQUIRE: headerDropMenu enabled
// NOTE: leave empty '' URL field to create section title

helpLinkURL='https://github.com/calzoneman/sync/wiki/Beginner%27s-Guide-and-FAQ';

// DESCRIPTION: custom help file URL
// IGNORE: leave empty '' (will display default link)

adminMessageHTML='This channel has been creating with <a href="https://github.com/zimny-lech/CyTube-Plus" target="_blank">CyTube Plus 2.0</a>.';

// DESCRIPTION: additional channel message set by script admin
// IGNORE: leave empty ''

adminMessageTitle='';

// DESCRIPTION: title of the additional channel message
// IGNORE: leave empty '' (will display default title)
// REQUIRE: adminMessageHTML not empty

rulesButton=1;

// DESCRIPTION: additional button displaying channel rules
// VALUES: 0 = disable, 1 = enable

rulesHTML='<ol><li>You want to write on the chat? Enter a temporary login at the top of the page and click <b>Guest Login</b>.</li><li>You want to register a nick? Click <b>Login/Register</b> and fill the registration form. You don\'t need an email to register.</li><li>Do not spam.</li><li>Add good videos to make this channel as great as possible.</li><li>You want to have this channel\'s script on your own channel? Go to <a href="https://github.com/zimny-lech/CyTube-Plus">https://github.com/zimny-lech/CyTube-Plus</a>.</li></ol>';

// DESCRIPTION: channel rules HTML
// REQUIRE: rulesButton enabled

fullVideoTitle=1;

// DESCRIPTION: full-width video title row
// VALUES: 0 = disable (will display title in the default location), 1 = enable

progressBar=1;

// DESCRIPTION: YouTube video progress bar in the background of the full-width video title
// VALUES: 0 = disable, 1 = enable
// REQUIRE: fullVideoTitle enabled

videoDescription='Now Playing:';

// DESCRIPTION: video title description (default: "Currently Playing:")
// IGNORE: leave empty '' (will display default description)

fontsPanel=1;

// DESCRIPTION: button displaying box with clickable buttons to enter various codes for chat colours and fonts
// VALUES: 0 = disable, 1 = enable
// REQUIRE: INSTALLATION REQUIRED
// ^ To install: go to Moderation Menu > click Chat Filters > scroll down to Multi-Filter Editor...
// ^ ... click Install Fonts > click Add/Update

emotesPanel=1;

// DESCRIPTION: button displaying box with clickable images to enter various codes for chat pictures
// VALUES: 0 = disable, 1 = enable
// REQUIRE: INSTALLATION REQUIRED
// ^ To install: go to Moderation Menu > click Chat Filters > scroll down to Multi-Filter Editor...
// ^ ... click Install Emotes > click Add/Update

channelDatabase=1;

// DESCRIPTION: owner-defined video database (see VIDEO DATABASE CONFIGURATION below)
// VALUES: 0 = disable, 1 = enable

galleryTab=1;

// DESCRIPTION: additional box with embed galleries
// VALUES: 0 = disable, 1 = enable

galleryTabURL=[
['Japan gallery', 'http://imgur.com/a/185S2/embed'],
['Anime pictures', 'http://imgur.com/a/SjwJb/embed'],
['Historical photos', 'http://imgur.com/a/vnwC2/embed'],
];

// DESCRIPTION: galleries names and URLs array (gallery must allow to embed code, e.g. imgur)
// ARRAY SYNTAX: ['gallery_name', 'gallery_URL'],
// REQUIRE: galleryTab enabled

volumeButtons=1;

// DESCRIPTION: additional volume buttons for YouTube player
// VALUES: 0 = disable, 1 = enable

rightFooterHTML='';

// DESCRIPTION: additional right-sided footer box HTML (for graphic counters etc.)
// IGNORE: leave empty ''

footerHTML='';

// DESCRIPTION: main footer HTML
// IGNORE: leave empty '' (will display only default footer)

additionalScriptURL='';

// DESCRIPTION: additional external JS file URL
// IGNORE: leave empty ''

userCommands=1;

// DESCRIPTION: special commands in the chat window
// VALUES: 0 = disable, 1 = enable
// LIST OF COMMANDS:
// ^ !pick - choosing a random option from a list separated by commas (e.g. "!choose japan,korea,china")
// ^ !ask - asking a question with yes/no type answer (e.g. "!ask Will be this channel popular?")
// ^ !dice - rolling dice (e.g. "!dice")
// ^ !q - displaying random quote from the array defined below (e.g. "!q")
// ^ !time - displaying current time (e.g. "!time")
// ^ !random - adding random video if channelDatabase is enabled (e.g. "!random")
// ^ !calc - calculating a math operation (all JavaScript math methods allowed)

randomQuotes=[
'I like the Pope dancing', 'No quotes today', 'O rly?', 
'People have the right to be stupid. You abuse that privilege', 'Don\'t play stupid with me', 
'Roses are red violets are blue, God made me pretty, what happened to you?', 
'Please don\'t interupt me while im ignoring you', 
'Are you always this stupid, or are you making a special effort today?', 
'I like you. You remind me of when I was young and stupid.', 'Go and buy me a beer', 
'The door of this channel is always open for you... so feel free to leave!', 
];

// DESCRIPTION: random quotes array for "!q" command
// ARRAY SYNTAX: 'quote', 
// REQUIRE: userCommands enabled

userSpecialSign=1;

// DESCRIPTION: special signs prepending messages in the chat window for selected users
// VALUES: 0 = disable, 1 = enable

userSigns={
'ZimnyLech':'★', 'calzoneman':'♠', 
}

// DESCRIPTION: user special signs array
// ARRAY SYNTAX: 'username':'sign', 
// REQUIRE: userSpecialSign enabled
// NOTE: example signs - ★ ☆ ▲ ▼ ♥ ♪ ♠ ☯ Ⓐ

cookiePrefix='az75h4jk432jk';

// DESCRIPTION: cookies name prefix
// ATTENTION! use unique, random name to prevent using cookies from other channels

channelCache=1;

// DESCRIPTION: caching all script emotes and default gallery
// VALUES: 0 = disable, 1 = enable
// REQUIRE: emotesPanel or galleryTab enabled
// NOTE: if enabled, all emotes and gallery are temporary loading during script work
// ^ if not - elements loading respectively after showing gallery box or sending a chat emote

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- ADVANCED CONFIGURATION ----- */

imgCodes={
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
// REQUIRE: emotesPanel enabled

emotesBasicURL='';

// DESCRIPTION: repeating server URL path for all imgCodes entries
// IGNORE: leave empty '' (if you want to use full URL paths or various servers)
// REQUIRE: INSTALLATION REQUIRED
// ^ To install: from the imgCodes array you must remove all emotesBasicURL entries
// ^ and leave only file names (or catalogs if needed, e.g. Dropbox),
// ^ e.g. delete all "https://dl.dropboxusercontent.com/s/" in the imgCodes if you use default set
// WARNING! USE ONLY if all your images are stored on the same server

uniChars=[
'★', '☆', '▲', '▼', '♥', '♪', '♿', '⚒', '♕', '✉', '☏', '♠', '→', 
'☑', '☒', '✡', '☪', '✝', '☭', '☯', 'Ⓐ', '☕', '♨', '¥', '©', '∞', 
];

// DESCRIPTION: chat unicode signs buttons array
// ARRAY SYNTAX: 'sign', 
// IGNORE: leave empty []
// REQUIRE: fontsPanel enabled
// NOTE: use 1 character in every array item for the best effect (although it's not the limitation)

themeCSS=[
['# default', 'assets/css/ytsync.css'],
['# dark', 'assets/css/darkstrap.css'],
['# semidark', 'assets/css/semidark.css'],
['pastel-white', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/white.css'],
['ice-cirno', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/cirno.css'],
['jungle', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/jungle.css'],
['celadon', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/celadon.css'],
['sakura', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/sakura.css'],
['fuchsia', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/fuchsia.css'],
['cool-kim', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/kim.css'],
['contrast', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/contrast.css'],
['nights', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/nights.css'],
['cosmos', 'https://raw.github.com/zimny-lech/CyTube-Plus/master/cosmos.css'],
],

// DESCRIPTION: CSS themes array
// ARRAY SYNTAX: ['layout_name', 'layout_URL'],

defaultLayoutURL='assets/css/ytsync.css';

// DESCRIPTION: default channel CSS theme file URL
// NOTE: if you select URL out of themeCSS array, user will not be able to select this theme again after change
// ^ default theme is visible until user will not change layout configuration, or if cookies are disabled

mainCSS='https://raw.github.com/zimny-lech/CyTube-Plus/master/main.css';

// DESCRIPTION: default script layout CSS properties file URL
// WARNING! this file is required for correct channel layout, wrong URL may cause unexpected effects

topUserLogo={
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

defaultLogo='cytube';

// DESCRIPTION: default logo name from topUserLogo array, displaying if user didn't set any logo or no logo
// IGNORE: leave empty ''
// NOTE: logo is displayed until user will not change layout configuration, or if cookies are disabled

independentFilters=1;

// DESCRIPTION: additional filters visible only in current chat session (see INDEPENDENT FILTERS CONFIGURATION below)
// WARNING! filters duplicated with default filters on the channel may not work

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: every function required 0/1 value MUST be 1 to enable it
// ^ actually doesn't have to be 0 to disable, it can be anything but 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- INDEPENDENT FILTERS CONFIGURATION ----- */

independentCodes=[
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
// NOTE: if you use plain words as expression, you must put it between '' signs
// ^ if you use regular expression, you must put it between // signs

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- VIDEO DATABASE CONFIGURATION ----- */

videos=[
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

// DESCRIPTION: videos database array (additional set of categorized videos/songs)
// ARRAY SYNTAX: ['video_URL', 'title'],
// REQUIRE: channelDatabase enabled
// NOTE: leave empty '' video_URL field to create section button

channelDatabaseURL='';

// DESCRIPTION: external video database file URL
// REQUIRE: channelDatabase enabled, INSTALLATION REQUIRED
// ^ To install: copy file from the link below and configure videos array in it:
// ^ https://raw.github.com/zimny-lech/CyTube-Plus/master/external-db.js
// ^ Save a new .js file in selected channelDatabaseURL location.
// WARNING! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
// NOTE: leave empty '' if you don't want to use external file instead of database above

/* ----- END OF CONFIGURATION ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- BEGIN OF LIBRARY ----- */

/* ----- removing previously created elements, wraps and intervals in case of server restart ----- */

$("#chanavatar, #dropmenu, #azukirow, #attbarrow, #anntop, #anntop-align, #annclose").remove();
$("#emptytop, #fontsbtn, #emotesbtn, #pl-pinup, #mediacaret, #minplrow, #mirrorcaret").remove();
$("#layouttoggle-outer, #gallerytoggle-outer, #dbtoggle-outer, #installfonts, #installemotes, #footerrow").remove();

$("#anntop-align").unwrap;
if(!(typeof success==="undefined")) {
	$("#announcements").unwrap();
}

clearInterval(intervalA);
clearInterval(intervalB);

/* ----- additional elements #id and attributes ----- */

$(".navbar-inverse .navbar-inner").attr('id', 'header');
$(".navbar-fixed-top .nav").attr('id', 'headermenu');
$("#headermenu li:nth-child(1)").attr('id', 'link-home');
$("#link-home a").attr('target', '_blank');
$("#headermenu li:nth-child(2)").attr('id', 'link-help');
$("#librarytoggle").parent().attr('id', 'librarytoggle-outer');

/* ----- removing and changing CSS unnecessary classes and layout elements ----- */

$("#link-home").removeClass('active');
$("#headermenu li:nth-child(5)").remove();
$("#toprow, #announcements, #main, #main-inner, #playlistrow, #playlist-inner").removeClass('row-fluid')
  .addClass('row');
$(".container-fluid").removeClass('container-fluid').addClass('container');
$("#motd").removeClass('well');
$("#videowrap #ytapiplayer").addClass('vplayer');
$("#queue_align2").remove();
$("#customembed_entry").parent().css('min-height', '0px');
$(".push").remove();
$("#channelsettingswrap3").css('margin-left', '');
$("#sitefooter .well").removeClass('well');

/* ----- wrapping announcements content ----- */

$("#announcements").wrap('<div id="annrow" class="row"/>');
$("#announcements").removeClass('row').addClass('span12').css('margin-bottom', '0px');

/* ----- detaching moderation menu ----- */

if(typeof success==="undefined") {
	$("#playlistrow").after('<div id="modrow" class="row"></div>');
	$("#modrow").append($("#channelsettingswrap3").detach());
}

/* ----- changing style-proof "caret" class to text unicode signs ----- */

if(typeof success==="undefined") {
	$("#channelsettingswrap a .caret").remove();
	$("#csdropdown_title").after(' ▴');
	$("#qualitywrap a .caret").remove();
	$("#qualitywrap a.btn").append(' ▾');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- global functions ----- */

// function: add link to playlist

function addToPlaylist(a,b) {
	parsed=parseMediaLink(a);
	if(parsed["id"]!=null) {
		socket.emit("queue", {id: parsed["id"], pos: b, type: parsed["type"]});
		$("#mediaurl").val('');
	}
}

// function: YouTube progress bar

var prevTime=0;
function pBar() {
	if(PLAYER.type=="yt") {
		a=PLAYER.player.getCurrentTime();
		if(a!=prevTime) {
			b=a/PLAYER.player.getDuration()*100;
			$("#titlerow-outer").css('background-size',b+'% 100%');
		} else {
			$("#titlerow-outer").css('background-size','0% 0%');
		}
		prevTime=a;
	} else {
		$("#titlerow-outer").css('background-size','0% 0%');
	}
}

// function: check if any of optional chat button is enable

function checkButtons() {
	if(emotesPanel=="1" || fontsPanel=="1") {
		return true;
	} else {
		return false;
	}
}

// function: refresh player

function refreshPlayer() {
	PLAYER.type="";
	PLAYER.id="";
	socket.emit("playerReady");
}

// function: create modal window

function createModal(a,b) {
	hidePlayer();
	modal=$("<div/>").addClass('modal hide fade').appendTo($("body"));
	head=$("<div/>").addClass('modal-header').appendTo(modal);
	$("<button/>").addClass('close').attr('data-dismiss', 'modal').attr('aria-hidden', 'true')
	  .appendTo(head)[0].innerHTML="&times;";
	$("<h3/>").text(a).appendTo(head);
	body=$("<div/>").addClass('modal-body').appendTo(modal);

	footer=$("<div/>").addClass('modal-footer').appendTo(modal);
	submit=$("<button/>").addClass('btn btn-primary pull-right').text(b).appendTo(footer);

	submit.click(function() {
		modal.modal("hide");
	});

	modal.on("hidden", function() {
		modal.remove();
		unhidePlayer();
	});
	modal.modal();
}

// function: set basic CSS

function setCSS() {
	$("#maincss").remove();
	$("head").append('<link href="'+mainCSS+'" rel="stylesheet" id="maincss">');
	$("#chanexternalcss").remove();
	if(CHANNEL_CSS!="") {
		$("head").append('<link href="'+CHANNEL_CSS+'" rel="stylesheet" id="chanexternalcss">');
	}
	$("#chancss").remove();
	if(CHAN_CSS!="") {
		$("head").append('<link href="'+CHAN_CSS+'" rel="stylesheet" id="chancss">');
	}
}

// function: set user CSS

function setUserCSS() {
	$("#usertheme").remove();
	$("head").append('<link href="'+USER_THEME+'" rel="stylesheet" id="usertheme">');
	$("#themepatch").remove();
	if(USER_THEME=="assets/css/darkstrap.css") {
		$("head").append('<link href="https://dl.dropboxusercontent.com/s/jk7qi6u6gofesyc/darkstrap.css" rel="stylesheet" id="themepatch">');
	} else if(USER_THEME=="assets/css/semidark.css") {
		$("head").append('<link href="https://dl.dropboxusercontent.com/s/6128onscsc8oi4z/semidark.css" rel="stylesheet" id="themepatch">');
	} else if(USER_THEME=="assets/css/ytsync.css") {
		$("head").append('<link href="https://dl.dropboxusercontent.com/s/daj815ibfgr142y/ytsync.css" rel="stylesheet" id="themepatch">');
	}
	$("#usercss").remove();
	if(USEROPTS.css!="") {
		$("head").append('<link href="'+USEROPTS.css+'" rel="stylesheet" id="usercss">');
	}
}

// function: toggle elements

function toggleDiv(a) {
	if($(a).css('display')=="none") {
		$(a).show();
	} else {
		$(a).hide();
	}
}

// detecting Webkit browsers (Chrome, Safari etc.)

var isWebkit="webkitRequestAnimationFrame" in window;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// cookie: getting CSS user theme

pie=readCookie(cookiePrefix+"_theme");
if(pie==null) {
	if(defaultLayoutURL=="") defaultLayoutURL='assets/css/ytsync.css';
	pie=defaultLayoutURL;
}
var USER_THEME=pie;
var USER_CSS=USEROPTS.css;

// checking if other channel CSS is set and setting some variables

var CHANNEL_CSS="";
if($("#chanexternalcss").length>0) {
	CHANNEL_CSS=$("#chanexternalcss").attr('href');
}

var CHAN_CSS="";
if($("#chancss").length>0) {
	CHAN_CSS=$("#chancss").attr('href');
}

// setting CSS files in proper order

if(mainCSS=="") mainCSS='https://dl.dropboxusercontent.com/s/c5nkaqcli74tgdl/main.css';
setCSS();
setUserCSS();

// cookie: getting CSS user logo

pie=readCookie(cookiePrefix+"_logo");
if(pie!=null) {
	a=pie.split("|");
	USER_LOGO=a[0];
	USER_LOGO_HT=a[1];
}

// adding fake video player layer if "Hide Video" option is enabled

if(USEROPTS.hidevid) {
	USEROPTS.hidevid=false;
	$("#chatwrap").removeClass('span12').addClass('span5');
	$("#chatwrap").before('<div id="videowrap" class="span7"/>');
	$("#videowrap").append('<p id="currenttitle"><i>Wait for a next song to see a title</i></p>');
	$("#videowrap").append('<div id="ytapiplayer" class="vplayer"></div>');
	text='According to your User Options, video player is hidden. '
	  + 'Click \"Refresh Media\" button to show player in this session.';
	makeAlert("No player", text).appendTo("#ytapiplayer");
	$("#qualitywrap").html('<button id="mediarefresh2" class="btn btn-small">Refresh Media</button>');
	$("#mediarefresh2").click(function() {
		refreshPlayer();
	});
}

// configuration: adding favicon

if(favIcon!="") {
	$(document).ready(function() {
		$("head").append('<link href="'+favIcon+'" rel="shortcut icon" type="image/x-icon"/>');
	});
}

// configuration: setting channel name

if(channelName!="") {
	$(".brand").html(channelName);
}

// configuration: adding channel avatar

if(channelAvatar!="") {
	$(".brand").prepend('<img id="chanavatar" src="'+channelAvatar+'" style="margin-right:10px"/>');
}

// configuration: adding header dropdown menu

if(headerDropMenu=="1") {
	if(headerDropMenuTitle=="") headerDropMenuTitle="Menu";
	$("#link-home").after('<li id="dropmenu" class="dropdown"/>');
	menu=$('<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)"/>');
	menu.html(headerDropMenuTitle+' ▾');
	$("#dropmenu").append(menu);
	$("#dropmenu").append('<ul id="hmenu" class="dropdown-menu header-dropdown"/>');
	for (i=0; i<headerDropMenuItems.length; i++) {
		title=headerDropMenuItems[i][0];
		link=headerDropMenuItems[i][1];
		if(link=="") {
			$("#hmenu").append('<li class="nav-header" style="text-shadow:none">'+title+'</li>');
		} else {
			li=$('<li class="header-drop-link"/>');
			li.append('<a href="'+link+'" target="_blank">'+title+'</a>');
			$("#hmenu").append(li);
		}
	}
}

// configuration: changing header help link
if(helpLinkURL!="") {
	$("#link-help a").attr('href', helpLinkURL);
}

// click: set some necessary things in the "Options" modal window 

$("#optlink").click(function() {
	USEROPTS.layout="default";
	$(".modal").on("hidden", function() {
		setUserCSS();
	});
});

// adding empty attention bar row
// WARNING! This is key element in layout configuration, do not remove!

$("#toprow").before('<div id="attbarrow" style="height:0px; margin:0px"/>');

// configuration: adding channel rules button and box, detaching drinkbar

if(rulesButton=="1") {
	$("#annrow").show();
	$("#announcements").prepend('<div id="anntop" style="width:100%; text-align:center"/>');
	$("#announcements").prepend('<button id="annclose" class="close pull-right">×</button>');
	$("#anntop").append('<button id="rulesbtn" class="btn">Read Channel Rules ▸</button>');
	$("#anntop").append('<div id="rulespanel-outer" style="width:100%; padding:0"/>');
	$("#rulespanel-outer").html('<div id="rulespanel">'+rulesHTML+'</div>');
	$("#rulespanel").css('max-width', '700px').css('margin', '0 auto').css('display', 'none').css('padding', '4px')
	  .css('border', 'solid 2px #eeeeee').css('border-radius', '8px').css('-moz-border-radius', '8px')
	  .css('-webkit-border-radius', '8px').css('margin-top', '0px').css('text-align', 'left');
	$("#anntop").append($("#drinkbar").detach());
	$("#anntop").after('<div id="anntop-align" style="width:100%; height:5px"/>');
} else if(adminMessageHTML=="" && $("#announcements .alert").length<1) {
	$("#annrow").hide();
}

// click: toggle channel rules

$("#rulesbtn").click(function() {
	toggleDiv("#rulespanel");
});

// click: close all announcements

$("#annclose").click(function() {
	$("#annrow").hide();
});

// adding additional channel message

if(adminMessageHTML!="" && typeof success==="undefined") {
	$("#annrow").show();
	if(adminMessageTitle=="") adminMessageTitle="Channel Message";
	makeAlert(adminMessageTitle, adminMessageHTML).appendTo("#announcements");
}

// configuration: adding full-width title bar and progress bar

if(fullVideoTitle=="1") {
	if(typeof success==="undefined") {
		$("#main").before('<div id="titlerow" class="row"/>');
	}
	$("#videowrap").prepend('<p id="emptytop" style="margin:0px; padding-left:2px">&nbsp;</p>');
	if(channelName!="") {
		$("#emptytop").html(channelName);
	} else {
		$("#emptytop").html($(".brand").html());
	}
	$("#titlerow").append('<div id="titlerow-outer" class="span12"/>');
	$("#titlerow-outer").html($("#currenttitle").detach());
	if(progressBar=="1") {
		var intervalA=setInterval(function() {pBar()},2000);
	}
}
$("#titlerow-outer:nth-child(2)").remove();

// function: change video title description
 
function changeTitle() {
        $("#currenttitle").text($("#currenttitle").text().replace(/Currently Playing:/, videoDescription));
}

socket.on("changeMedia", changeTitle);
changeTitle();

// optional shortening chatline input

if(checkButtons()) {
	$("#chatline").removeClass().addClass('span4');
}

// configuration: adding fonts panel button

if(fontsPanel=="1") {
	$("#chatline").after('<button id="fontsbtn" class="btn pull-right"><i class="icon-font"></i></button>');
	$("#fontsbtn").css('display', 'inline-block').css('width', '28px').css('height', '28px')
	  .css('padding', '4px 6px').css('margin-bottom', '10px').css('line-height', '16px');
}

// click: toggle fonts panel

$("#fontsbtn").click(function() {
	toggleDiv("#fontspanel");
	$("#chatline").focus();
});

// configuration: adding emotes panel button

if(emotesPanel=="1") {
	$("#chatline").after('<button id="emotesbtn" class="btn pull-right"><i class="icon-picture"></i></button>');
	$("#emotesbtn").css('display', 'inline-block').css('width', '28px').css('height', '28px')
	  .css('padding', '4px 6px').css('margin-bottom', '10px').css('line-height', '16px');
}

// click: toggle emotes panel

var isEmotesLoaded=false;
$("#emotesbtn").click(function() {
	toggleDiv("#emotespanel");
	if(channelCache!="1" && isEmotesLoaded==false) {
		showEmotes();
		isEmotesLoaded=true;
	}
	$("#chatline").focus();
});

// function: show images in emotes panel

function showEmotes() {
	$.each(imgCodes, function(a,b) {
		img=$('<img src="'+emotesBasicURL+''+b[0]+'" onclick="insertText(\''+a+'\')"/>');
		img.attr('width', b[1]).attr('height', b[2]);
		img.css('cursor', 'pointer');
		$("#emotespanel").append(img);
		$("#emotespanel").append(" ");
	});
	img=$('<img src="https://dl.dropboxusercontent.com/s/evwscyflzddc92p/custom.png" onclick="enterCustomImg()"/>');
	img.attr('width', 60).attr('height', 45);
	img.css('cursor', 'pointer');
	$("#emotespanel").append(img);
	$("#emotespanel").append(" ");
}

// function: enter custom image URL

function enterCustomImg() {
	img=prompt('Enter image URL (without "http://"!)', '');
	if(img!=null) {
		insertText('[img]'+img+'[/img]');
	}
}

// function: insert code after clicking an image

function insertText(a) {
	$("#chatline").val($("#chatline").val()+a);
	$("#chatline").focus();
}

// adding emotes panel

$("#main").after('<div id="emotespanel"/>');
$("#emotespanel").css('max-width', '700px').css('margin', '0 auto').css('display', 'none')
  .css('text-align', 'center').css('margin-top', '1px').css('padding', '4px')
  .css('border-radius', '8px').css('-moz-border-radius', '8px').css('-webkit-border-radius', '8px');

// configuration: caching emotes

if(channelCache=="1") {
	showEmotes();
}

// adding fonts panel

$("#main").after('<div id="fontspanel"/>');
$("#fontspanel").css('max-width', '700px').css('margin', '0 auto').css('display', 'none')
  .css('text-align', 'center').css('margin-top', '1px').css('padding', '4px')
  .css('border-radius', '8px').css('-moz-border-radius', '8px').css('-webkit-border-radius', '8px');

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
]

for(i=0; i<fontsBtn.length; i++) {
	btn=$('<button class="btn" style="'+fontsBtn[i][0]+'" onclick="insertText(\'['+fontsBtn[i][1]+']\')"/>');
	btn.text(fontsBtn[i][2]);
	$("#fontspanel").append(btn);
	$("#fontspanel").append(" ");
}
$("#fontspanel").append('<br/><div style="height:10px"/>');

// adding unicode buttons to fonts panel

for(i=0; i<uniChars.length; i++) {
	btn=$('<button class="btn unibtn" style="background:white" onclick="insertText(\''+uniChars[i]+'\')"/>');
	if(uniChars[i].length>1) {
		btn.css('width', 'auto');
	}
	btn.text(uniChars[i]);
	$("#fontspanel").append(btn);
	$("#fontspanel").append(" ");
	if(i%13==12) {
		$("#fontspanel").append('<br/>');
	}
}

// adding playlist row minimizing button

$("#pollbtnwrap").prepend('<button id="minplrow" class="btn btn-small pull-right">Minimize</button>');

// click: minimize playlist row

var isMinimized=false;
$("#minplrow").click(function() {
	if(!isMinimized) {
		if(!isPlPin) {
			$("#leftpane-inner .well, #extended_controls, #queue, #plmeta").hide();
			$("#voteskip").parent().hide();
		} else {
			$("#messagebuffer, #userlist, #chatline, #fontsbtn, #emotesbtn").hide();
		}
		$("#minplrow").text('Maximize');
		$("#pl-pinup").hide();
		isMinimized=true;
	} else {
		if(!isPlPin) {
			$("#leftpane-inner .well, #extended_controls, #queue, #plmeta").show();
			$("#voteskip").parent().show();
		} else {
			$("#messagebuffer, #userlist, #chatline, #fontsbtn, #emotesbtn").show();
		}
		$("#minplrow").text('Minimize');
		$("#pl-pinup").show();
		isMinimized=false;
	}
});

// adding player transformations menu

$("#minplrow").after('<div id="mirrorcaret" class="btn-group pull-right"/>');
menu=$('<a class="btn btn-small dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)"/>');
menu.text('▾');
$("#mirrorcaret").append(menu);
$("#mirrorcaret").append('<ul id="trmenu" class="dropdown-menu"/>');
$("#trmenu").append('<li><a id="mX" href="javascript:void(0)">Mirror X Player</a></li>');
$("#trmenu").append('<li><a id="mY" href="javascript:void(0)">Mirror Y Player</a></li>');
$("#trmenu").append('<li><a id="rotate" href="javascript:void(0)">Rotate Player</a></li>');
if(!isWebkit) {
	$("#trmenu").append('<li><a id="vertical" href="javascript:void(0)">Vertical Player</a></li>');
}
$("#trmenu").append('<li><a id="hide" href="javascript:void(0)">Hide Player</a></li>');

// clicks: player transformations

$("#mX").click(function() {
	if($(".vplayer").hasClass('mX')) $(".vplayer").removeClass('mX');
	else $(".vplayer").addClass('mX');
});

$("#mY").click(function() {
	if($(".vplayer").hasClass('mY')) $(".vplayer").removeClass('mY');
	else $(".vplayer").addClass('mY');
});

$("#rotate").click(function() {
	if($(".vplayer").hasClass('rotate')) $(".vplayer").removeClass('rotate');
	else $(".vplayer").addClass('rotate');
});

$("#vertical").click(function() {
	if($(".vplayer").hasClass('vertical')) $(".vplayer").removeClass('vertical');
	else $(".vplayer").addClass('vertical');
});

$("#hide").click(function() {
	if($("#videowrap").css('visibility')=="hidden") {
		$("#videowrap").css('visibility', 'visible');
		$("#videowrap").css('opacity', '100');
		$("#hide").text('Hide Player');
	} else {
		$("#videowrap").css('visibility', 'hidden');
		$("#videowrap").css('opacity', '0');
		$("#hide").text('Show Player');
	}
});

// adding Layout Configuration box

$("#pollwrap").after('<div id="layouttoggle-outer" class="well well-small span12 row-fluid"/>');
$("#layouttoggle-outer").append('<div id="layouttoggle" class="span12 pointer"/>');
$("#layouttoggle").html('<i class="icon-minus pull-left"></i><p>Hide Layout Configuration</p>');

$("#layouttoggle").after('<div id="layoutwrap" class="span12"/>');
$("#layoutwrap").css('display', 'none').css('margin-left', '0').css('text-align', 'center');
generateToggle("#layouttoggle", "#layoutwrap");

// adding display mode selector

$("#layoutwrap").append('<span id="modetitle" class="conf-opt">Display Mode</span><br/>');
$("#layoutwrap").append('<select id="mode-sel" style="width:150px"/>');
$("#mode-sel").append('<option value="syMode">synchtube mode</option>');
$("#mode-sel").append('<option value="kMode">cinema mode</option>');
$("#mode-sel").append('<option value="chMode">chatroom mode</option>');
$("#mode-sel").append('<option value="rMode">radio mode</option>');

// select: display mode

var isHiddenMode=false;
$("#mode-sel").change(function() {
	selValue=$("#mode-sel").val();
	$("#userConfig").hide();
	if(selValue=="syMode") {
		$("#main, #videowrap, #chatwrap, #rightpane-outer, #pl-pinup").show();
		normalPlayer();
		normalChat();
		if(!isPlPin) {
			$("#userConfig").show();
		}
		playerLocation(userconfig["player"]);
		if(isHiddenMode && !isWebkit) {
			refreshPlayer();
		}
		isHiddenMode=false;
	} else if(selValue=="kMode") {
		$("#main, #videowrap").show();
		$("#pl-pinup").hide();
		if(!isPlPin) {
			$("#chatwrap").hide();
		} else {
			$("#rightpane-outer").hide();
		}
		bigPlayer();
		if(isHiddenMode && !isWebkit) {
			refreshPlayer();
		}
		isHiddenMode=false;
	} else if(selValue=="chMode") {
		$("#main, #chatwrap").show();
		$("#videowrap, #pl-pinup").hide();
		bigChat();
		isHiddenMode=true;
	} else if(selValue=="rMode") {
		$("#pl-pinup").show();
		$("#main").hide();
		if(!isPlPin) {
			$("#userConfig").show();
		}
		isHiddenMode=true;
	}
	scrollQueue();
	scrollChat();
});

// functions: display mode helper functions

function bigPlayer() {
	$("#videowrap").removeClass().addClass('span12');
	VWIDTH=$("#ytapiplayer").parent().css('width').replace('px', '');
    	VHEIGHT="658";
	$("#ytapiplayer").attr('width', VWIDTH).attr('height', '658');
}

function bigChat() {
	$("#chatwrap").removeClass().addClass('span12');
	VWIDTH2=$("#messagebuffer").parent().css('width').replace('px', '');
	$("#messagebuffer").attr('width', VWIDTH2);
	$("#userlist").css('height', '500px');
	$("#messagebuffer").css('height', '500px');
	if(checkButtons()) {
		$("#chatline").removeClass().addClass('span11');
	} else {
		$("#chatline").removeClass().addClass('span12');
	}
}

function normalPlayer() {
	$("#videowrap").removeClass().addClass('span7');
	VWIDTH=$("#ytapiplayer").parent().css('width').replace('px', '');
    	VHEIGHT="377";
	$("#ytapiplayer").attr('width', VWIDTH).attr('height', '377');
}

function normalChat() {
	if(isPlPin && userconfig["qsize"]=="wide") {
		$("#chatwrap").removeClass().addClass('span7');
	} else {
		$("#chatwrap").removeClass().addClass('span5');
	}
	VWIDTH2=$("#messagebuffer").parent().css('width').replace('px', '');
	$("#messagebuffer").attr('width', VWIDTH2);
	$("#userlist").css('height', '347px');
	$("#messagebuffer").css('height', '347px');
	if(isPlPin && userconfig["qsize"]=="wide") {
		if(checkButtons()) {
			$("#chatline").removeClass().addClass('span6');
		} else {
			$("#chatline").removeClass().addClass('span7');
		}
	} else {
		if(checkButtons()) {
			$("#chatline").removeClass().addClass('span4');
		}
		else {
			$("#chatline").removeClass().addClass('span5');
		}
	}
}

// adding layout configuration button

$("#layoutwrap").append('<br/><button id="userConfig" class="btn btn-small">Layout Configuration</button>');
$("#userConfig").css('margin-top', '10px').css('margin-bottom', '10px');

// configuration: adding themes selector

if(themeCSS.length>0) {
	$("#layoutwrap").append('<br/><span id="themetitle" class="conf-opt">Theme</span><br/>');
	$("#layoutwrap").append('<select id="theme-sel" style="width:150px"/>');
	for(i=0; i<themeCSS.length; i++) {
		$("#theme-sel").append('<option value="'+themeCSS[i][1]+'">'+themeCSS[i][0]+'</option>');
	}
	$("#theme-sel").val(USER_THEME);
	$("#layoutwrap").append('<br/>');
}

// configuration: adding commands and YouTube volume buttons

layer=$('<div class="btn-group" style="width:100%; text-align:center; margin-top:15px; margin-bottom:10px"/>');
layer.append('<button id="clearbtn" class="btn btn-small">/clear</button>');
layer.append('<button id="afkbtn" class="btn btn-small">/afk</button>');
if(volumeButtons=="1") {
	layer.append('<button id="vDown" class="btn btn-small">vol -</button>');
	layer.append('<button id="vUp" class="btn btn-small">vol +</button>');
}
$("#layoutwrap").append(layer);

// click: /clear command

$("#clearbtn").click(function() {
	if(hasPermission("playlistclear")) {
		if(confirm('Are you sure to clear the chat window?')) {
			socket.emit("chatMsg", {msg: '/clear'});
		}
	}
	else {
		alert('You have no permission to clear the chat window.');
	}
});

// click: /afk command

$("#afkbtn").click(function() {
	socket.emit("chatMsg", {msg: '/afk'});
});

// clicks: YouTube volume regulation

$("#vDown").click(function() {
	if(PLAYER.type=="yt") {
		a=PLAYER.player.getVolume();
		PLAYER.player.setVolume(a-1);
	} else {
		alert('You can change only YouTube volume level due to limited player functionality.');
	}
});

$("#vUp").click(function() {
	if(PLAYER.type=="yt") {
		a=PLAYER.player.getVolume();
		PLAYER.player.setVolume(a+1);
	} else {
		alert('You can change only YouTube volume level due to limited player functionality.');
	}
});

// default showing Layout Configuration box

$("#layoutwrap").show();

// cookie: getting layout configuration

pie=readCookie(cookiePrefix+"_config");
if(pie==null) {
	if(defaultLogo=="" || topUserLogo[defaultLogo]=="undefined") defaultLogo="no";
	userconfig={
	"player":"left", "userlist":"right", "queue":"left", 
	"qsize":"wide", "main":"top", "motd":"top", 
	"image":defaultLogo, "header":"detach", "menu":"menu"
	}
} else {
	a=pie.split(",");
	userconfig={
	"player":a[0], "userlist":a[1], "queue":a[2], 
	"qsize":a[3], "main":a[4], "motd":a[5], 
	"image":a[6], "header":a[7], "menu":a[8]
	}
}

// click: layout configuration modal window

$("#userConfig").click(function() {
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
	for(name in topUserLogo) {
		$("<option/>").attr('value', name).text(topUserLogo[name][0]).appendTo(logoinsert);
	}
	logoinsert.val(userconfig["image"]);
	addOption('Top logo', logoinsert);

	userlogo=$("<input/>").attr('type', 'text').attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht=$("<input/>").attr('type', 'text').attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if(userconfig["image"]!="user") {
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

	logoinsert.change(function() {
		if(logoinsert.val()=="user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	submit.click(function() {
		userconfig["player"]=playerlocation.val();
		userconfig["userlist"]=userlistlocation.val();
		userconfig["queue"]=queuelocation.val();
		userconfig["qsize"]=queuesize.val();
		userconfig["main"]=mainlocation.val();
		userconfig["motd"]=motdlocation.val();
		userconfig["image"]=logoinsert.val();
		userconfig["header"]=headermode.val();
		userconfig["menu"]=plcontrolsmode.val();
		if(logoinsert.val()=="user") {
			USER_LOGO=userlogo.val();
			USER_LOGO_HT=userlogoht.val();
			eraseCookie(cookiePrefix+"_logo");
			createCookie(cookiePrefix+"_logo", userlogo.val()+"|"+userlogoht.val(), 365)
		}
		setLayout(
		  playerlocation.val(), userlistlocation.val(), queuelocation.val(), 
		  queuesize.val(), mainlocation.val(), motdlocation.val(), 
		  logoinsert.val(),headermode.val(),plcontrolsmode.val()
		);
		eraseCookie(cookiePrefix+"_config");
		a=userconfig["player"]+","+userconfig["userlist"]+","+userconfig["queue"]+","+userconfig["qsize"]
		  +","+userconfig["main"]+","+userconfig["motd"]+","+userconfig["image"]+","+userconfig["header"]
		  +","+userconfig["menu"];
		createCookie(cookiePrefix+"_config", a, 365);
	});

	reset.click(function() {
		userconfig={
		"player":"left", "userlist":"right", "queue":"left", 
		"qsize":"wide", "main":"top", "motd":"top", 
		"image":"no", "header":"detach", "menu":"menu"
		}
		setConfigValues("left","right","left","wide","top","top","no","detach","menu");
		modal.modal("hide");
		setLayout("left","right","left","wide","top","top","no","detach","menu");
		eraseCookie(cookiePrefix+"_config");
		a="left,right,left,wide,top,top,no,detach,menu";
		createCookie(cookiePrefix+"_config", a, 365);
	});

	column.click(function() {
		userconfig={
		"player":"center", "userlist":"left", "queue":"center", 
		"qsize":"wide", "main":"top", "motd":"bottom", 
		"image":"no", "header":"detach", "menu":"menu"
		}
		setConfigValues("center","left","center","wide","top","bottom","no","detach","menu");
		modal.modal("hide");
		setLayout("center","left","center","wide","top","bottom","no","detach","menu");
		eraseCookie(cookiePrefix+"_config");
		a="center,left,center,wide,top,bottom,no,detach,menu";
		createCookie(cookiePrefix+"_config", a, 365);
	});

	modal.on("hidden", function() {
		scrollChat();
		scrollQueue();
	});
});

// functions: layout configuration helper functions

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

// functions: layout setting

function playerLocation(a) {
	if(a=="left") {
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
		$("#videowrap").removeClass().addClass('span8');
		$("#videowrap").addClass('offset2');
		VWIDTH=$("#ytapiplayer").parent().css("width").replace('px', '');
    		VHEIGHT="430";
		$("#ytapiplayer").attr('width', VWIDTH).attr('height', '430');
		if(checkButtons()) {
			$("#chatline").removeClass().addClass('span7');
		} else {
			$("#chatline").removeClass().addClass('span8');
		}
		$("#chatwrap").removeClass().addClass('span8');
		$("#chatwrap").addClass('offset2');
		VWIDTH2=$("#messagebuffer").parent().css('width').replace('px', '');
		$("#messagebuffer").attr('width', VWIDTH2);
		$("#messagebuffer").css('height', '200px');
		$("#userlist").css('height', '200px');
		break;
	}
}

function userlistLocation(a) {
	if(a=="left") {
		$("#userlist").css('float', 'left');
	} else if(a=="right") {
		$("#userlist").css('float', 'right');
	}
}

function queueLocation(a) {
	if(a=="right") {
		$("#rightpane-outer").before($("#leftpane-outer").detach());
		normalPlaylist();
	} else if(a=="left") {
		$("#rightpane-outer").after($("#leftpane-outer").detach());
		normalPlaylist();
	} else if(a=="center") {
		$("#rightpane-outer").after($("#leftpane-outer").detach());
		$("#leftpane-outer").removeClass().addClass('span8');
		$("#leftpane-outer").addClass('offset2');
		$("#rightpane-outer").removeClass().addClass('span8');
		$("#rightpane-outer").addClass('offset2');
		$("#rightpane-outer").css('margin-bottom', '10px');
	}
}

function queueSize(a) {
	if(userconfig["queue"]!="center") {
		if(a=="wide") {
			$("#leftpane-outer").removeClass().addClass('span5');
			$("#rightpane-outer").removeClass().addClass('span7');
		} else if(a=="narrow") {
			$("#leftpane-outer").removeClass().addClass('span7');
			$("#rightpane-outer").removeClass().addClass('span5');
		}
	}
}

function mainLocation(a) {
	if(a=="top") {
		$("#modrow").before($("#playlistrow").detach());
	} else if(a=="bottom") {
		$("#titlerow").before($("#playlistrow").detach());
	}
}

function motdLocation(a) {
	if(a=="top") {
		$("#attbarrow").after($("#annrow").detach());
		$("#attbarrow").after($("#toprow").detach());
	} else if(a=="bottom") {
		$("#modrow").before($("#toprow").detach());
		$("#modrow").before($("#annrow").detach());
	}
}

function logoInsert(a) {
	if(a=="no") {
		$("#azukirow").remove();
	} else {
		if(a!="user") {
			link=topUserLogo[a][1];
			ht=topUserLogo[a][2];
		} else {
			link=USER_LOGO;
			ht=USER_LOGO_HT;
		}
		$("#azukirow").remove();
		$("#attbarrow").before('<div id="azukirow" class="row"/>');
		$("#azukirow").append('<div id="azukirowwrap" style="background:transparent; background-image:url('+link+')"/>');
		$("#azukirowwrap").addClass('span12');
		$("#azukirowwrap").css('background-repeat', 'no-repeat').css('background-position', 'center center')
		  .css('min-height', ht+'px').css('margin-top', '0px');
	}
}

function headerMode(a) {
	if(a=="fixed") {
		$(".navbar-fixed-top").css('position', 'fixed');
		$("body").css('padding-top', '40px');
	} else if(a=="detach") {
		$(".navbar-fixed-top").css('position', 'inherit');
		$("body").css('padding-top', '0px');
	}
}

var isFullPl=false;
function plControlsMode(a) {
	if(a=="default") {
		$("#queue_end").before($("#queue_next").detach());
		$("#customembed_entry").before($("#customembed_btn").detach());
		$("#extended_controls").append($("#clearplaylist").detach());
		$("#extended_controls").append($("#shuffleplaylist").detach());
		$("#mediacaret").remove();
		$("#moreopt").remove();
		$("#queue_next").css('width', '');
	} else if(a=="menu") {
		plControlsMode("default");
		$("#queue_end").after('<button id="mediacaret" class="btn dropdown-toggle" data-toggle="dropdown">');
		$("#mediacaret").text('▾');
		$("#mediacaret").after('<ul id="moreopt" class="dropdown-menu"/>');
		$("#moreopt").css('padding-left', '5px').css('padding-right', '5px');

		$("#moreopt").append('<li id="opt1"/>');
		$("#opt1").html($("#queue_next").detach());
		$("#queue_next").css('width', '100%');
		$("#queue_next").html('At Next');
		$("#moreopt").append('<li class="divider"/>');

		$("#moreopt").append('<li id="opt2"/>');
		$("#opt2").html('<a tabindex="-1" href="javascript:void(0)">Expand Playlist</a>');
		if(isFullPl) {
			$("#opt2 a").html('Collapse Playlist');
		}
		$("#moreopt").append('<li id="opt3"/>');
		$("#opt3").html('<a tabindex="-1" href="javascript:void(0)" target="">Download Current Video</a>');
		$("#moreopt").append('<li id="opt4"/>');
		$("#opt4").html('<a tabindex="-1" href="javascript:void(0)" target="">Contributors List</a>');
		$("#moreopt").append('<li class="divider"/>');

		$("#moreopt").append('<li id="opt5"/>');
		$("#opt5").html('<a tabindex="-1" href="javascript:void(0)">Play Next</a>');
		if(channelDatabase=="1") {
			$("#moreopt").append('<li id="opt6"/>');
			$("#opt6").html('<a tabindex="-1" href="javascript:void(0)">Add Random Video</a>');
		}
		$("#moreopt").append('<li id="opt7"/>');
		$("#opt7").html('<a tabindex="-1" href="javascript:void(0)">Move Random Video</a>');
		$("#moreopt").append('<li id="opt8"/>');
		$("#opt8").html('<a tabindex="-1" href="javascript:void(0)">Move First Video To End</a>');
		$("#moreopt").append('<li id="opt9"/>');
		$("#opt9").html('<a tabindex="-1" href="javascript:void(0)">Delete Last Video</a>');
		$("#moreopt").append('<li class="divider"/>');

		$("#moreopt").append('<li id="opt10"/>');
		$("#opt10").html($("#clearplaylist").detach());
		$("#moreopt").append('<li id="opt11"/>');
		$("#opt11").html($("#shuffleplaylist").detach());
		$("#moreopt").append('<li id="opt12"/>');
		$("#opt12").html($("#customembed_btn").detach());
		$("#moreopt").append('<li class="divider"/>');

		$("#moreopt").append('<li id="opt13"/>');
		$("#opt13").html('<a tabindex="-1" href="javascript:void(0)">Reload Menu</a>');

		if(!hasPermission("playlistjump")) {
			$("#opt5").hide();
		}
		if(!hasPermission("playlistadd")) {
			$("#opt6").hide();
		}
		if(!hasPermission("playlistmove")) {
			$("#opt7, #opt8").hide();
		}
		if(!hasPermission("playlistdelete")) {
			$("#opt9").hide();
		}
		plDropMenu();
	}
}

// function: queue size helper function

function normalPlaylist() {
	$("#rightpane-outer").removeClass().addClass('span7');
	$("#leftpane-outer").removeClass().addClass('span5');
}

// function: global playlist dropdown menu actions

function plDropMenu() {

	// click: expand and collapse playlist

	$("#opt2").click(function() {
		if(!isFullPl) {
			$("#queue").css('max-height', '100000px');
			$("#opt2 a").html('Collapse playlist');
			isFullPl=true;
		} else {
			$("#queue").css('max-height', '450px');
			$("#opt2 a").html('Expand playlist');
			isFullPl=false;
			scrollQueue();
		}
	});

	// mouseover: download video link

	$("#opt3").mouseover(function() {
		a=PL_CURRENT+1;
		b=$("#queue .queue_entry:nth-child("+a+")").data("media");
		if(b.type=="yt") {
			link='http://youtube.com/watch?v='+b.id;
		} else if(b.type=="vi") {
			link='http://vimeo.com/'+b.id;
		} else if(b.type=="dm") {
			link='http://dailymotion.com/video/'+b.id;
		} else if(b.type=="sc") {
			link=b.id;
		} else {
			link='';
		}
		if(link=="") {
			$("#opt3 a").attr('href', 'javascript:void(0)');
			$("#opt3 a").attr('target', '');
			alert('This link is not supported. Try YouTube, Vimeo, Dailymotion or SoundCloud.');
		}
		else {
			link2='http://keepvid.com/?url='+link;
			$("#opt3 a").attr('href', link2);
			$("#opt3 a").attr('target', '_blank');
		}
	});

	// click: show contributors list

	$("#opt4").click(function() {
		createModal("Contributors List", "Close");
		a=$("#queue li").length+1;
		var list=[];
		for(i=1; i<a; i++) {
			item=$("#queue li:nth-child("+i+")").attr('title');
			user=item.split("by: ")[1];
			if(user in list) {
				list[user]++;
			} else {
				list[user]=1;
			}
		}
		var list2=[];
		for(key in list) {
      			list2.push([key, list[key]]);
		}
		list2.sort(function(a,b) {return a[1]-b[1]});
		list2.reverse();
		var list3=[];
		for(i=0; i<list2.length; i++) {
			list3.push((i+1)+". "+list2[i].join(": "));
		}
		body.append('<strong>Number of added playlist items:</strong><br/><br/>'+list3.join("<br/>"));
	});

	// click: play next video

	$("#opt5").click(function() {
		socket.emit("playNext");
	});

	// click: add random video

	var lastAdd=0;
	$("#opt6").click(function() {
		a=(new Date()).getTime();
		if((a-lastAdd)<120000) {
			alert('You can add random video every 2 minutes.');
		} else {
			b="";
			while(b=="") {
				c=Math.round(Math.random()*(videos.length-1));
				b=videos[c][0];
			}
			addToPlaylist(b, "end");
			lastAdd=a;
		}
	});

	// click: move random video

	$("#opt7").click(function() {
		a=$("#queue").children().length;
		b=Math.floor(Math.random()*a)+1;
		c=Math.floor(Math.random()*a)+1;
		d=$("#queue .queue_entry:nth-child("+b+")").data("uid");
		e=$("#queue .queue_entry:nth-child("+c+")").data("uid");
		socket.emit("moveMedia", {from: d, after: e, moveby: null});
	});

	// click: move video from start to end

	$("#opt8").click(function() {
		a=$("#queue").children().length;
		b=$("#queue .queue_entry:nth-child(1)").data("uid");
		c=$("#queue .queue_entry:nth-child("+a+")").data("uid");
		socket.emit("moveMedia", {from: b, after: c, moveby: null});
	});

	// click: delete last video

	$("#opt9").click(function() {
		a=$("#queue").children().length;
		b=$("#queue .queue_entry:nth-child("+a+")").data("uid");
		socket.emit("delete", b);
	});

	// click: rebuild menu

	$("#opt13").click(function() {
		plControlsMode("menu");
	});
}

// select: change layout CSS
$("#theme-sel").change(function() {
	setCSS();
	selValue=$("#theme-sel").val();
	USER_THEME=selValue;
	setUserCSS();
	eraseCookie(cookiePrefix+"_theme");
	createCookie(cookiePrefix+"_theme", selValue, 365);
});

// configuration: adding Channel Galleries box

if(galleryTab=="1") {
	$("#userpltogglewrap").after('<div id="gallerytoggle-outer" class="well well-small span12 row-fluid"/>');
	$("#gallerytoggle-outer").append('<div id="gallerytoggle" class="span12 pointer"/>');
	$("#gallerytoggle").html('<i class="icon-plus pull-left"></i><p>Show Channel Galleries</p>');

	$("#gallerytoggle").after('<div id="gallerywrap" class="span12"/>');
	$("#gallerywrap").css('display', 'none').css('margin-left', '0').css('text-align', 'center');
	generateToggle("#gallerytoggle", "#gallerywrap");
}

// function: load channel gallery

function loadGallery() {
	$("#gallerywrap").append('<iframe id="galleryFrame" src='+galleryTabURL[0][1]+' width="100%"/>');
	$("#galleryFrame").attr('frameborder', '0').attr('scrolling', 'no').attr('height', '415px');
	if(galleryTabURL.length>1) {
		$("#gallerywrap").append('<br/><span id="galtitle" class="conf-opt">Select Gallery</span><br/>');
		$("#gallerywrap").append('<select id="gal-sel" style="width:150px"/>');
		for(i=0; i<galleryTabURL.length ;i++) {
			$("#gal-sel").append('<option value="'+galleryTabURL[i][1]+'">'+galleryTabURL[i][0]+'</option>');
		}
	}
}

// configuration: caching gallery
if(galleryTab=="1" && channelCache=="1") {
	loadGallery();
}

// select: change gallery

$("#gal-sel").change(function() {
	galValue=$("#gal-sel").val();
	$("#galleryFrame").attr('src', galValue);
});

// configuration: adding Channel Database box

if(channelDatabase=="1" && channelDatabaseURL=="") {

	/* IF YOU USE EXTERNAL DATABASE FILE, IT MUST CONTAINS CODE BELOW */

	$("#userpltogglewrap").after('<div id="dbtoggle-outer" class="well well-small span12 row-fluid"/>');
	$("#dbtoggle-outer").append('<div id="dbtoggle" class="span12 pointer"/>');
	$("#dbtoggle").html('<i class="icon-plus pull-left"></i><p>Show Channel Database</p>');

	$("#dbtoggle").after('<div id="dbwrap" class="span12"/>');
	$("#dbwrap").css('display', 'none').css('margin-left', '0').css('margin-bottom', '5px');
	generateToggle("#dbtoggle", "#dbwrap");

	var item_nr=0;
	var layer_nr=0;
	var opening=new Array();
	for(i=0; i<videos.length; i++) {
		if(videos[i][0]=="") {
			if(layer_nr>0) {
				$("#dbwrap").append(list);
				$("#la"+layer_nr).append(' <span class="songs-count">['+count_nr+']</span>');
				opening[layer_nr-1]=0;
			}
			layer_nr++;
			count_nr=0;
			btn=$('<button id="la'+layer_nr+'" style="width:100%" onClick="toggleCat('+layer_nr+')"/>');
			btn.addClass('btn btn-small db-break');
			btn.text(videos[i][1]);
			$("#dbwrap").append(btn);
			list=$('<ul id="l'+layer_nr+'" style="max-height:450px; overflow:auto; margin-bottom:0px"/>');
			list.addClass('videolist db-cat');
		} else {
			item_nr++;
			count_nr++;
			item=$('<li class="queue_entry"/>');
			btn=$('<button onClick="addVideo(\''+videos[i][0]+'\')"/>');
			btn.addClass('btn btn-mini qe_btn pull-right');
			btn.text('End');
			item.append(btn);
			parsed=parseMediaLink(videos[i][0]);
			if(parsed["type"]=="yt") {
				a=parsed["id"];
				btn2=$('<button onClick="prevVideo(\''+a+'\')"/>');
				btn2.addClass('btn btn-mini qe_btn pull-right');
				btn2.append('<i class="icon-film"></i>');
				item.append(btn2);
			}
			item.append('<span class="badge db-badge">'+item_nr+'</span>');
			item.append('<span class="db-title" style="margin-left:4px">'+videos[i][1]+'</span><br/>');
			item.append('<span class="db-link">'+videos[i][0]+'</span>');
			list.append(item);
		}
	}
	$("#dbwrap").append(list);
	$("#la"+layer_nr).append(' <span class="songs-count">['+count_nr+']</span>');
	opening[layer_nr-1]=0;

	// function: toggle database sections

	function toggleCat(a) {
		b=a-1;
		if(opening[b]==0) {
			closeAll();
			$("#l"+a).show();
			opening[b]=1;
		} else {
			$("#l"+a).hide();
			opening[b]=0;
		}
	}

	// function: close all database sections

	function closeAll() {
		$(".db-cat").hide();
		for(i=0; i<opening.length; i++) {
			opening[i]=0;
		}
	}
	closeAll();

	// function: add database link to playlist

	var addedLinks=new Array();
	function addVideo(link) {
		parsed=parseMediaLink(link);
		idx=parsed["id"];
		if(idx!=null) {
			a=(new Date()).getTime();
			if(!hasPermission("playlistadd")) {
				alert('You have no permission to add a link.');
			} else if(addedLinks[idx]!=undefined && a-addedLinks[idx]<120000) {
				alert('You have just added this link.');
			} else {
				socket.emit("queue", {id: idx, pos: "end", type: parsed["type"]});
				addedLinks[idx]=a;
			}
		}
	}

	// function: preview video

	function prevVideo(a) {
		createModal('Preview Video', 'Close');

		player=$('<iframe/>');
		player.attr('src', 'http://www.youtube.com/embed/'+a+'?enablejsapi=1')
		  .attr('width', '530').attr('height', '323').attr('frameborder', '0');
		player.appendTo(body);
	}

	/* END OF NECESSARY CODE */

} else if(channelDatabase=="1" && channelDatabaseURL!="") {
	$.getScript(channelDatabaseURL);
}

// adding playlist pin-up button

$("#qualitywrap").prepend('<button id="pl-pinup" class="btn btn-small pull-right">PinUp ▴</button>');

// click: pin-up playlist to player

var isPlPin=false;
$("#pl-pinup").click(function() {
	if(!isPlPin) {
		if(userconfig["player"]=="center" || userconfig["queue"]=="center") {
			alert('You can\'t pin playlist if player or library are centered.');
		} else {
			if(userconfig["player"]=="left") {
				$("#videowrap").after($("#rightpane-outer").detach());
			} else if(userconfig["player"]=="right") {
				$("#videowrap").before($("#rightpane-outer").detach());
			}
			if(userconfig["queue"]=="left") {
				$("#leftpane-outer").before($("#chatwrap").detach());
			} else if(userconfig["queue"]=="right") {
				$("#leftpane-outer").after($("#chatwrap").detach());
			}
			$("#rightpane-outer").removeClass().addClass('span5');
			if(userconfig["qsize"]=="wide") {
				$("#chatwrap").removeClass().addClass('span7');
				if(checkButtons()) {
					$("#chatline").removeClass().addClass('span6');
				} else {
					$("#chatline").removeClass().addClass('span7');
				}
			} else {
				$("#chatwrap").removeClass().addClass('span5');
				if(checkButtons()) {
					$("#chatline").removeClass().addClass('span4');
				} else {
					$("#chatline").removeClass().addClass('span5');
				}
			}
			$("#pl-pinup").text('UnPin ▾');
			$("#minplrow").hide();
			$("#userConfig").hide();
			$("#mode-sel option[value='chMode']").hide();
			isPlPin=true;
			scrollQueue();
		}
	} else {
		if(userconfig["queue"]=="left") {
			$("#leftpane-outer").before($("#rightpane-outer").detach());
		} else if(userconfig["queue"]=="right") {
			$("#leftpane-outer").after($("#rightpane-outer").detach());
		}
		if(userconfig["player"]=="left") {
			$("#videowrap").after($("#chatwrap").detach());
		} else if(userconfig["player"]=="right") {
			$("#videowrap").before($("#chatwrap").detach());
		}
		$("#chatwrap").removeClass().addClass('span5');
		if(checkButtons()) {
			$("#chatline").removeClass().addClass('span4');
		} else {
			$("#chatline").removeClass().addClass('span5');
		}
		if(userconfig["qsize"]=="wide") {
			$("#rightpane-outer").removeClass().addClass('span7');
		} else {
			$("#rightpane-outer").removeClass().addClass('span5');
		}
		$("#pl-pinup").text('PinUp ▴');
		$("#minplrow").show();
		$("#userConfig").show();
		$("#mode-sel option[value='chMode']").show();
		isPlPin=false;
		scrollQueue();
	}
});

// click: improved getting playlist URLs

$("#getplaylist").unbind();
$("#getplaylist").click(function() {
	createModal('Playlist URLs', 'Close');

	data=$("<textarea/>").attr('rows', '8').css('width', '97%').val(formatRawList()).appendTo(body);
	rlist=$("<button/>").addClass('btn pull-left').text('Raw List').appendTo(footer);
	tlist=$("<button/>").addClass('btn pull-left').text('Plain Text').appendTo(footer);
	hlist=$("<button/>").addClass('btn pull-left').text('HTML Code').appendTo(footer);

	rlist.click(function() {
		data.val(formatRawList());
	});

	tlist.click(function() {
		data.val(formatPlainTextList());
	});

	hlist.click(function() {
		data.val('<ol>\n'+formatHTMLList()+'\n</ol>');
	});	
});

// functions: get playlist helper functions

function formatRawList() {
	a=$("#queue .queue_entry").length+1;
	var list=new Array();
	for(i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		link=formatURL(item);
		list.push(link);
	}
	return list.join(",");
}

function formatPlainTextList() {
	a=$("#queue .queue_entry").length+1;
	var list=new Array();
	for(i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		link=formatURL(item);
		title=item.title;
		duration=item.duration;
		list.push(i+'. '+link+' '+title+' ['+duration+']');
	}
	return list.join('\n');
}

function formatHTMLList() {
	a=$("#queue .queue_entry").length+1;
	var list=new Array();
	for(i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		title=item.title;
		duration=item.duration;
		link=formatURL(item);
		list.push('<li>'+title+' ['+duration+'] - <a href="'+link+'" target="_blank">'+link+'</a></li>');
	}
	return list.join('\n');
}

// adding fonts and emotes install filters buttons

$("#multifiltersubmit").after('<button id="installfonts" class="btn">Install Fonts</button>');
$("#installfonts").after('<button id="installemotes" class="btn">Install Emotes</button>');

// clicks: install filters

$("#installfonts").click(function() {
	arr=new Array();
	for(i=0; i<fontsBtn.length; i++) {
		arr.push(fontsBtn[i][3]+" \\["+fontsBtn[i][1]+"\\] g "+fontsBtn[i][4]);
	}
	$("#multifiltereditor").val(arr.join("\n"));
});

$("#installemotes").click(function() {
	var arr=new Array();
	$.each(imgCodes, function(a,b) {
		a=a.replace(RegExp(" ","g"),"\\ ");
		arr.push(a+' '+a+' '+'g'+' '+'<img\\ src="'+emotesBasicURL+''+b[0]+'"\\ width="'+b[1]+'"\\ height="'+b[2]+'"\\ alt="'+a+'"\\ />');
	});
	arr.push('custom\\ image \\[img\\]([^\\*]+)\\[\\/img\\] g <a\\ href="http://$1"\\ target="_blank"><img\\ src="http://$1"\\ width="100"\\ alt="custom\\ image"\\ /></a>');
	$("#multifiltereditor").val(arr.join("\n"));
});

// cookie: getting number of visits

pie=readCookie(cookiePrefix+"_visits");
if(pie==null) pie=1;
var USER_VISITS=pie;
pie++;
createCookie(cookiePrefix+"_visits", pie, 365);

// footer improvement

$("#modrow").after('<div id="footerrow" class="row" style="margin-top:5px"/>');
$("#footerrow").append('<div id="footerwrap" class="span12" style="font-size:9pt"/>');
if(typeof success==="undefined") defFooter=$("#footer .muted").html();
$("#footer").remove();

$("#footerwrap").append('<span style="float:right; margin-left:15px">'+rightFooterHTML+'</span>'+defFooter+'<br/>');
$("#footerwrap").append('CyTube Plus Copyright &copy; 2013 Zimny Lech · ');
$("#footerwrap").append('Free source on <a href="http://github.com/zimny-lech/CyTube-Plus" target="_blank">GitHub</a> · ');
$("#footerwrap").append('<a href="http://github.com/zimny-lech/CyTube-Plus/wiki" target="_blank">Help</a><br/>');
$("#footerwrap").append('My Visits: <span class="badge footer-badge">'+USER_VISITS+'</span> / ');
$("#footerwrap").append('Online: <span id="onlinetime" class="badge footer-badge">0:00</span><br/><br/>');
$("#footerwrap").append(footerHTML);

$("#mainpage").after($("#sitefooter").detach());
if($("#sitefooter").html()=="") {
	$("#sitefooter").remove();
}

// function: set user online time

var USER_ONLINE=0;
function onlineTime() {
	USER_ONLINE++;
	hours=Math.floor(USER_ONLINE/60);
	minutes=USER_ONLINE-hours*60;
	if(minutes<10) minutes="0"+minutes;
	$("#onlinetime").html(hours+":"+minutes);
}
var intervalB=setInterval(function() {onlineTime()}, 60000);

// configuration: creating user chat commands, signs and optional filters

if((userCommands=="1" || independentFilters=="1" || userSpecialSign=="1") && (typeof success==="undefined")) {
	_chatBuffer=addChatMessage;
	addChatMessage=function(data) {
		if(independentFilters=="1") {
			for(i=0; i<independentCodes.length; i++) {		
				data.msg=data.msg.replace(independentCodes[i].before, independentCodes[i].after);
			}
		}
		if(userSpecialSign=="1") {
			if(userSigns[data.username]!=undefined) {
				data.msg=userSigns[data.username]+' '+data.msg;
			}
		}
		_chatBuffer(data);

		if(userCommands=="1") {
			var isCommand=false;
			if(data.msg.indexOf("!pick ")>-1) {
				isCommand=true;
				temp=data.msg.split("!pick ");
				arr=temp[1].split(",");
				a=Math.round(Math.random()*(arr.length-1));
				data.msg=arr[a];
			} else if(data.msg.indexOf("!ask ")>-1) {
				isCommand=true;
				answers=[
				"100% for sure", "definitely yes", "yes", "probably", 
				"not any chance", "definitely no", "a little chance", "no", 
				"50/50", "fairy is tired and will not answer", "I refuse to answer"
				];
				a=Math.round(Math.random()*(answers.length-1));
				data.msg=answers[a];
			} else if(data.msg.indexOf("!time")>-1) {
				isCommand=true;
				a=new Date();
				b=a.getHours();
				if(b<10) {
					b='0'+b;
				}
				c=a.getMinutes();
				if(c<10) {
					c='0'+c;
				}
				data.msg='<i>current time:</i> '+b+':'+c;
			} else if(data.msg.indexOf("!dice")>-1) {
				isCommand=true;
				a=Math.round(Math.random()*5)+1;
				data.msg=a;
			} else if(data.msg.indexOf("!q")>-1) {
				isCommand=true;
				a=Math.round(Math.random()*(randomQuotes.length-1));
				data.msg='"'+randomQuotes[a]+'"';
			} else if(data.msg.indexOf("!random")>-1 && channelDatabase=="1") {
				isCommand=true;
				a="";
				while(a=="") {
					b=Math.round(Math.random()*(videos.length-1));
					a=videos[b][0];
					c=videos[b][1];
				}
				addToPlaylist(a, "end");
				data.msg='<i>added random video:</i> '+c;
			} else if(data.msg.indexOf("!random")>-1 && channelDatabase!="1") {
				isCommand=true;
				data.msg='channel database is not enabled';
			} else if(data.msg.indexOf("!calc ")>-1) {
				isCommand=true;
				temp=data.msg.split("!calc ");
				data.msg=eval(temp[1]);
			}
			if(isCommand) {
				data.msg='<div class="command">'+data.msg+'</div>';
				_chatBuffer(data);
			}
		}
	}
}

// configuration: adding additional script file

if(additionalScriptURL!="") {
	$.getScript(additionalScriptURL);
}

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

var success=true;

/* ----- END OF LIBRARY ----- */
