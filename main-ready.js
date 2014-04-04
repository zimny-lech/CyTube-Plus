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

// DESCRIPTION:			CyTube Plus - JavaScript and CSS library for CyTube channels enhancements
// CURRENT VERSION:		4.0
// DATE OF MODIFICATION:	2014-04-03
// PROJECT URL:			https://github.com/zimny-lech/CyTube-Plus

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// INSTALLATION NOTES:

// 0. Choose simple or custom installation (simple one has ready-to-use library with limited functionality).
// SIMPLE: use 'https://dl.dropboxusercontent.com/s/6bg3lo29fk1tlmo/main-ready.js' as default URL, go to -> 3.
// CUSTOM: go to -> 1.

// 1. Configure this library according to your wishes (see configuration sections below).
// 2. Save customized library to your file hosting (e.g. Dropbox) or to your own server.
// WARNING! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
// WARNING FOR DROPBOX USERS! Always use 'dl.dropboxusercontent.com' URL instead of 'www.dropbox.com' URL.

// 3. Enter your JS file location into 'External Javascript' field in 'Channel Settings' modal window.
// 4. Enter library CSS file location into 'External CSS' field in 'Channel Settings' modal window.
// NOTE: use default 'https://dl.dropboxusercontent.com/s/adzglmczhmymv8h/main.css' URL, or copy it to your location.
// 5. Congratulations,  your have just installed CyTube Plus!

// Problems? Something doesn't work? Go to https://github.com/zimny-lech/CyTube-Plus/wiki/Troubleshooting

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONFIGURE BELOW BEFORE INSTALLING IF YOU WANT TO CUSTOMIZE THIS LIBRARY

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- STARTING CONFIGURATION - USER INTERFACE (UI) ----- */

// CONFIGURATION NOTES:

// In this section you can immediately enable and disable every option (set '1' to enable, '0' to disable)
// Every option marked as [&] requires additional configuration (see other sections below)
// IMPORTANT: change 'StoragePrefix' with unique, random name using basic letters and numbers
// FILTERS INSTALLATION: open 'Channel Settings' modal window, go to 'Edit' -> 'Chat Filters',
//   click 'Prepare fonts filters' button, and import
// WARNING! apostrophe sign (') in all text/html values must be prepend with "\" sign (e.g. "don\'t") 
// If you need more explanations, go to https://github.com/zimny-lech/CyTube-Plus/wiki/Library-settings

UI_Favicon = 1;			// [&] channel favicon
UI_MiniLogo = 1;		// [&] small channel logo/avatar in the top navbar
UI_ChannelName = 1;		// [&] channel custom brand name
UI_HeaderDropMenu = 1;		// [&] additional header dropdown menu
UI_RemoveLayoutMenu = 1;	// removing 'Layout' menu from the header
UI_MOTDAutoLogo = 0;		// [&] big channel logo inserted into MOTD
UI_RulesBtn = 0;		// [&] button displaying channel rules
UI_AttentionBar = 0;		// [&] imageboard-style attention bar
UI_ChannelAnnouncement = 1;	// [&] additional custom channel announcement
UI_FullTitleBar = 1;		// full-width video title bar
UI_ProgressBar = 1;		// YouTube/Dailymotion progress bar
				// [ REQUIRE: UI_FullTitleBar enabled ]
UI_TitleIcon = 1;		// [&] full-width title bar icon
				// [ REQUIRE: UI_FullTitleBar enabled ]
UI_TitleBarDescription = 1;	// [&] custom title bar description
UI_UserCommands = 1;		// [&] additional commands in the chat window
UI_UserSpecialSigns = 0;	// [&] special signs preceding messages in the chat window for selected users
UI_ChatSuffix = 0;		// [&] text added to random chat messages
UI_IndependentFilters = 1;	// [&] additional filters visible only in current chat session
UI_JoinText = 1;		// [&] chat message after user joining
UI_LeaveText = 1;		// [&] chat message after user leaving
UI_CustomChatSound = 0;		// [&] custom sound for chat notifications
UI_PlayerOptions = 1;		// [&] additional player options
UI_TransformationBtns = 1;	// player transformation buttons
UI_FontsBtn = 0;		// button displaying box with clickable chat fonts
				// [ REQUIRE: INSTALLATION (see above) ]
UI_UnicodeChars = 1;		// [&] additional buttons in the fonts panel with unicode characters
				// [ REQUIRE: UI_FontsBtn enabled ]
UI_EmotesBtn = 1;		// button displaying box with clickable chat emotes
UI_CommandsBtn = 1;		// button displaying modal window with chat commands help
UI_ChatVoices = 0;		// [&] chat sounds played after sending certain words
UI_ModPanel = 0;		// [&] panel with messages and help for moderators
UI_DefaultNonTemp = 1;		// default adding non-temporary media for registered users
UI_ExtendedGetURLs = 1;		// extended 'Get URLs' function
UI_DisplayModeSel = 1;		// selector with player display modes
UI_ChannelTheme = 0;		// [&] additional default theme channel
UI_QuickCommandsBtns = 1;	// buttons with '/clear' and '/afk' functions
UI_VolumeBtns = 1;		// additional volume buttons for YouTube player
UI_ChannelDatabase = 0;		// [&] box with embed additional media database
UI_ChannelGalleries = 0;	// [&] box with embed galleries
UI_EmptyCornerBackground = 0;	// [&] random background image for empty playlist row corner
UI_CustomFooter = 0;		// [&] custom channel footer
UI_CustomRightFooter = 0;	// [&] channel right-sided footer box
UI_UserStatistics = 1;		// displaying in the footer user visits number and current online time
UI_DefaultSynchtube = 1;	// default Synchtube layout
UI_ExternalScript = 0;		// [&] additional external script file
UI_ChannelCache = 1;		// caching script emotes, additional media database and default gallery

StoragePrefix='yutj76gjkh';	// local storage name random prefix

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- DETAILED BASIC CONFIGURATION ----- */

// NOTES:
// a) in 'HeaderDropMenu_Items' leave empty URL field to create section title
// b) values for 'MOTDAutoLogo_Mode': 1 = first logo; 2 = random logo; 3 = logo rotation; 7 = weekdays logos
// c) in 'ChatVoices_Array' use .ogg or .wav files, some browsers has problems with embedded .mp3
// d) in 'ModPanel_Array' leave empty username field to make a message to all moderators
// e) in 'UnicodeChars_Array' use 1 character for an item for the best effect (although it's not the limitation)

Favicon_URL = 'https://dl.dropboxusercontent.com/s/xgefazzyhs8xncp/icon.png';

MiniLogo_URL = 'https://dl.dropboxusercontent.com/s/xgefazzyhs8xncp/icon.png';

ChannelName_Caption = 'CyTube Plus';

HeaderDropMenu_Title = 'Synch';

HeaderDropMenu_Items = [
['CyTube Servers', ''],
['Calzoneman CyTube', 'http://cytu.be/'],
['6irc Synchtube', 'http://synchtube.6irc.net/'],
['CyTube Stuff', ''],
['Source code', 'https://github.com/calzoneman/sync'],
['FAQ', 'https://github.com/calzoneman/sync/wiki/CyTube-3.0-User-Guide'],
['IRC', 'http://webchat.6irc.net/?channels=cytube'],
['CyTube Plus', 'https://github.com/zimny-lech/CyTube-Plus'],
];

MOTDAutoLogo_Mode = 2;

MOTDAutoLogo_Array = [
'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png',
];

MOTDAutoLogo_Interval = 20;

RulesBtn_Caption = '';

RulesBtn_HTML = '';

AttentionBar_URL = '';

ChannelAnnouncement_Title = 'Administration Message';

ChannelAnnouncement_HTML = 'This channel has been created with <a href="https://github.com/zimny-lech/CyTube-Plus" target="_blank">CyTube Plus 4.0</a>.';

TitleIcon_URL = 'https://dl.dropboxusercontent.com/s/xgefazzyhs8xncp/icon.png';

TitleBarDescription_Caption = 'Now Playing:';

RandomQuotes = [
'I like the Pope dancing', 'No quotes today', 'O rly?', 
'People have the right to be stupid. You abuse that privilege', 'Don\'t play stupid with me', 
'Roses are red violets are blue, God made me pretty, what happened to you?', 
'Please don\'t interrupt me while I\'m ignoring you', 
'Are you always this stupid, or are you making a special effort today?', 
'I like you. You remind me of when I was young and stupid.', 'Go and buy me a beer', 
'The door of this channel is always open for you... so feel free to leave!', 
];

AskAnswers = [
'100% for sure', 'definitely yes', 'yes', 'probably', 'not any chance', 'definitely no', 
'a little chance', 'no', '50/50', 'fairy is tired and will not answer', 'I refuse to answer',
];

UserSpecialSigns_Array = {}

ChatSuffix_Text = '';

ChatSuffix_Percentage = 5;

JoinText_Message = 'joined';

LeaveText_Message = 'left';

CustomChatSound_URL = '';

PlayerHiding_URL = 'https://dl.dropboxusercontent.com/s/xz2o99scw5i7aai/stop.png';

UnicodeChars_Array = [
'★', '☆', '▲', '▼', '♥', '♪', '♿', '⚒', '♕', '✉', '☏', '♠', '→', 
'☑', '☒', '✡', '☪', '✝', '☭', '☯', 'Ⓐ', '☕', '♨', '¥', '©', '∞', 
];

ChatVoices_Array = {}

ModPanel_Array = [];

ChannelGalleries_Array = [];

CustomFooter_HTML = '';

CustomRightFooter_HTML = '';

ExternalScript_URL = '';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- THEMES CONFIGURATION ----- */

ChannelThemeURL = '';

ThemesCSS = [
['Kobato', 'https://dl.dropboxusercontent.com/s/1r3twlb0loipybw/kobato.css'],
];

TopUserLogo = [
['cytube plus', 'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png', 90],
['anime girl', 'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png', 200],
['cosmos', 'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg', 200],
['disco ball', 'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg', 162],
['japanese landscape', 'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg', 200],
['korean collage', 'https://dl.dropboxusercontent.com/s/qud9adhs183dq30/korea.jpg', 160],
['my little pony', 'https://dl.dropboxusercontent.com/s/r4ozo8oj8lmerec/mlp.jpg', 190],
];

EmptyCornerBackground = [];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- INDEPENDENT FILTERS CONFIGURATION ----- */

// NOTES AND DEFAULT FILTERS EXAMPLES:
// If you use regular expression, you must put it between // signs
// a) [mq]text[/mq] - fast scrolling text
// b) [mq0]text[/mq0] - slow scrolling text
// c) [imgur]suok1xr.jpg[/imgur] - imgur picture
// d) [drop]7mrz85gl29eiiks/logo.png[/drop] - dropbox picture
// e) [minus/i5]ig0qs6fvWvgBu.jpg[/minus] - minus.com picture
// f) [vi/b]1r8ih4t1.vichan.png[/vi] - vichan imageboard picture

IndependentFilters=[
{
before:/\[mq\]([^\*]+)\[\/mq\]/,
after:'<marquee scrollamount="10" behavior="alternate">$1</marquee>'
},
{
before:/\[mq0\]([^\*]+)\[\/(mq0|mq)\]/,
after:'<marquee scrollamount="5" behavior="alternate">$1</marquee>'
},
{
before:/\[imgur\]([^\*]+)\[\/(i|imgur)\]/, 
after:'<a href="http://i.imgur.com/$1" target="_blank"><img src="http://i.imgur.com/$1" style="max-width:160px"></a>'
},
{
before:/\[drop\]([^\*]+)\[\/(d|drop)\]/, 
after:'<a href="https://dl.dropboxusercontent.com/s/$1" target="_blank">'
  + '<img src="https://dl.dropboxusercontent.com/s/$1" style="max-width:160px"></a>'
},
{
before:/\[minus\/([^\*]+)\]([^\*]+)\[\/(m|minus)\]/, 
after:'<a href="http://$1.minus.com/$2" target="_blank">'
  + '<img src="http://$1.minus.com/$2" style="max-width:160px"></a>'
},
{
before:/\[vi\/([^\*]+)\]([^\*]+)\[\/(v|vi)\]/, 
after:'<a href="https://pl.vichan.net/$1/src/$2" target="_blank">'
  + '<img src="https://pl.vichan.net/$1/src/$2" style="max-width:160px"></a>'
},
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- MEDIA DATABASE CONFIGURATION ----- */

// NOTES:
// Leave empty URL field to create category button.
// WARNING! Use ChannelDatabase_URL only if you want to use external database file, it overwrites database below.
// If so, copy and configure 'https://raw.github.com/zimny-lech/CyTube-Plus/master/external-db.js' file.

ChannelDatabase=[];

ChannelDatabase_URL='';


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION, DO NOT CHANGE ANYTHING BELOW ----- */

/* ----- Initial channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reload script after unexpected re-connection or script URL change

var LOADED = (typeof LOADED==="undefined") ? false : true;
LOADED ? location.reload() : '';

/* ----- getting channel options ----- */

if (UI_DefaultSynchtube=="1") {
	defplayer="left"; defuserlist="right"; defqueue="left";
} else {
	defplayer="right"; defuserlist="left"; defqueue="right";
}

var USERCONFIG = {
	"player":getOrDefault(StoragePrefix+"_player", defplayer),
	"userlist":getOrDefault(StoragePrefix+"_userlist", defuserlist),
	"queue":getOrDefault(StoragePrefix+"_queue", defqueue),
	"qsize":getOrDefault(StoragePrefix+"_qsize", "wide"),
	"main":getOrDefault(StoragePrefix+"_main", "top"),
	"motd":getOrDefault(StoragePrefix+"_motd", "top"),
	"logo":getOrDefault(StoragePrefix+"_logo", "no"),
	"logourl":getOrDefault(StoragePrefix+"_logourl", ""),
	"logoht":getOrDefault(StoragePrefix+"_logoht", "200"),
	"header":getOrDefault(StoragePrefix+"_header", "detached"),
	"css":getOrDefault(StoragePrefix+"_css", "no"),
	"csscode":getOrDefault(StoragePrefix+"_csscode", ""),
	"modhash":getOrDefault(StoragePrefix+"_modhash", ""),
}
var DEFTHEME = (UI_ChannelTheme=="1" && ChannelThemeURL!="") ? ChannelThemeURL : "/css/themes/slate.css";
var USERTHEME = getOrDefault(StoragePrefix+"_theme", DEFTHEME);
var USERVISITS = getOrDefault(StoragePrefix+"_visits", "0");
var USERONLINE = 0;
var PREVTIME = 0;
var DEFDESCR = true;
var NOPLAYER = false;
var COMMAND = false;
var VOICES = false;
var MUTEDVOICES = new Array();
var CHATSTAT = {"n":0, "l":0, "m":[]};
var EMOTES = false;
var SOUNDSPANEL = false;
var FULLPL = false;
var FLUID = false;
var MINIMIZED = false;
var PINNED = false;
var HASH = '';
var CHANDB = false;
var GALLERY = false;
var LASTADD = 0;
var ADDEDLINKS = new Array();
var WEBKIT = "webkitRequestAnimationFrame" in window;
var BGCHANGE = 0;
var IMBA = new Audio("https://dl.dropboxusercontent.com/s/xdnpynq643ziq9o/inba.ogg");

CHATSOUND.volume=0.6;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Global functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// toggle elements visibility

function toggleDiv(a) {
	$(a).css('display')=="none" ? $(a).show() : $(a).hide();
}

// refresh player

function refreshPlayer() {
	PLAYER.type="";
	PLAYER.id="";
	socket.emit("playerReady");
}

// add link to playlist

function addToPlaylist(link,position) {
	parsed=parseMediaLink(link);
	parsed["id"]!=null ? socket.emit("queue", {id:parsed["id"], pos:position, type:parsed["type"]}) : '';
}

// create modal window

function createModal(title) {
	hidePlayer();
	outer=$('<div />').addClass('modal fade').appendTo($("body"));
	modal=$('<div />').addClass('modal-dialog').appendTo(outer);
	modal=$('<div />').addClass('modal-content').appendTo(modal);
	head=$('<div />').addClass('modal-header').appendTo(modal);
	$('<button />').addClass('close').attr('data-dismiss', 'modal').attr('aria-hidden', 'true').html('&times;')
	  .appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body=$('<div />').addClass('modal-body').appendTo(modal);
	footer=$('<div />').addClass('modal-footer').appendTo(modal);
	outer.on("hidden", function() {
		outer.remove();
		unhidePlayer();
	});
	outer.modal();
}

// insert code into chatline

function insertText(a) {
	$("#chatline").val($("#chatline").val()+a).focus();
}

// fit player height

function fitPlayer() {
	VWIDTH = $("#videowrap").width() + "";
	VHEIGHT = Math.floor(parseInt(VWIDTH) * 9 / 16 + 1) + "";
	$("#ytapiplayer").width(VWIDTH).height(VHEIGHT);
}

// fit chat height

function fitChat(a) {
	if (a=="auto") {
		VW = $("#messagebuffer").width();
		VH = Math.floor(parseInt(VW) * 9 / 16 + 1);
	} else {
		VH = a;
	}
	$("#messagebuffer").height(VH);
	$("#userlist").height(VH);
}

// fix chat height in centered layout

function fixChatHeight() {
	USERCONFIG.player=="center" ? fitChat(200) : '';
}

// format chat messages

function prepareMessage(msg) {
	if (UI_ChatSuffix=="1") {
		if ((typeof ChatSuffix_Percentage!=="number") || ChatSuffix_Percentage<0) {
			ChatSuffix_Percentage='10';		}
		Math.random()<(ChatSuffix_Percentage/100) ? msg+=' '+ChatSuffix_Text : '';
	}

	if (UI_UserCommands=="1" && msg.indexOf("!")==0) {
		COMMAND=true;
		if (msg.indexOf("!stat")==0) {

			num=CHATSTAT['n'];
			len=CHATSTAT['l'];
			if (num>0) {
				a=Math.round(Math.random()*(CHATSTAT['m'].length-1));
				avg=Math.round(len/num*10)/10;
			} else {
				a=0;
				avg=0;
			}
			msg='you have sent '+num+' messages, '
			  +'total length is '+len+' characters ('+avg+' per message), '
			  +'random message: '+CHATSTAT['m'][a];

		} else if (msg.indexOf("!pick ")==0) {

			arr=msg.split("!pick ")[1].split(",");
			a=Math.round(Math.random()*(arr.length-1));
			msg=arr[a];

		} else if (msg.indexOf("!ask ")==0) {

			AskAnswers.length<1 ? AskAnswers=['yes', 'no'] : '';
			a=Math.round(Math.random()*(AskAnswers.length-1));
			msg=AskAnswers[a];

		} else if (msg.indexOf("!time")==0) {

			a=new Date().getHours();
			a<10 ? a='0'+a : false;
			b=new Date().getMinutes();
			b<10 ? b='0'+b : false;
			msg='current time: '+a+':'+b;

		} else if (msg.indexOf("!dice")==0) {

			a=Math.round(Math.random()*5)+1;
			msg=''+a;

		} else if (msg.indexOf("!roll")==0) {

			a=Math.round(Math.random()*999);
			a<100 ? a="0"+a : '';
			a<10 ? a="0"+a : '';
			msg=''+a;

		} else if (msg.indexOf("!q")==0) {

			RandomQuotes.length<1 ? RandomQuotes=['error: no quotes available'] : '';
			a=Math.round(Math.random()*(RandomQuotes.length-1));
			msg=RandomQuotes[a];

		} else if (msg.indexOf("!random")==0 && hasPermission("playlistadd")) {

			if (UI_ChannelDatabase=="1") {
				a="";
				while (a=="") {
				b=Math.round(Math.random()*(ChannelDatabase.length-1));
					a=ChannelDatabase[b][0];
					c=ChannelDatabase[b][1];
				}
				addToPlaylist(a, "end");
				msg='random media adding attempt: '+c;
			}

		} else if (msg.indexOf("!calc ")==0) {

			temp=msg.split("!calc ");
			msg=''+eval(temp[1]);

		} else if (msg.indexOf("!skip")==0 && hasPermission("voteskip")) {

			socket.emit("voteskip");
			msg='current media has been voteskipped';

		} else if (msg.indexOf("!next")==0 && hasPermission("playlistjump")) {

			socket.emit("playNext");
			msg='start playing next item';

		} else if (msg.indexOf("!bump")==0 && hasPermission("playlistmove")) {

			a=$("#queue").children().length;
			b=$("#queue .queue_entry:nth-child("+a+")").data("uid");
			c=$("#queue .queue_entry:nth-child("+a+") .qe_title").html();
			socket.emit("moveMedia", {from:b, after:PL_CURRENT});
			msg='last item bumped as next: '+c;

		} else if (msg.indexOf("!add ")==0 && hasPermission("playlistadd")) {

			parsed=parseMediaLink(msg.split("!add ")[1]);
			if (parsed["id"]===null) {
				msg='error: wrong item link, item has not been added';
			} else {
				socket.emit("queue", {id: parsed["id"], pos: "end", type: parsed["type"]});
				msg='video has been added';
			}

		} else if (msg.indexOf("!now")==0) {

			msg='Now playing: '+$(".queue_active a").html();

		} else if (msg.indexOf("!CO ZJE TEH?")==0) {

			msg='TEH ZJE HUJ';

		} else if (msg.indexOf("!inba")==0) {

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
			msg='JP2GMD';

		} else {
			COMMAND=false;
		}
	}
	return msg;
}

// refresh user chat statistics

function userChatStats(a) {
	CHATSTAT['n']++;
	CHATSTAT['l']=CHATSTAT['l']+a.length;
	CHATSTAT['m'].push(a);
}

// get playlist helper functions

function formatRawList() {
	a=$("#queue .queue_entry").length+1;
	list=new Array();
	for (i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		list.push(formatURL(item));
	}
	return list.join(",");
}

function formatPlainTextList() {
	a=$("#queue .queue_entry").length+1;
	list=new Array();
	for (i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		list.push(i+'. '+formatURL(item)+' '+item.title+' ['+item.duration+']');
	}
	return list.join('\n');
}

function formatHTMLList() {
	a=$("#queue .queue_entry").length+1;
	list=new Array();
	for (i=1; i<a; i++) {
		item=$("#queue .queue_entry:nth-child("+i+")").data("media");
		title=item.title;
		duration=item.duration;
		link=formatURL(item);
		list.push('<li>'+title+' ['+duration+'] - <a href="'+link+'" target="_blank">'+link+'</a></li>');
	}
	return list.join('\n');
}

// toggle mod panel button
function toggleModPanel() {
	if (CLIENT.rank<2) {
		$("#mod-btn").hide();
	} else {
		$("#mod-btn").show();
		HASH='';
		for (i in ModPanel_Array) {
			name=ModPanel_Array[i][0];
			if (name=="" || name==CLIENT.name) {
				HASH+=''+ModPanel_Array[i][1].length;
			}
		}
		if (HASH!=USERCONFIG.modhash) {
			$("#mod-btn").addClass('btn-danger').html($("#mod-btn").html()+' (New Mess.)');
		}
	}
}

// toggle "/clear" button depends on rank

function toggleClearBtn() {
	hasPermission("playlistclear") ? clearbtn.show() : 'clearbtn.hide()';
}

// toggle YT volume buttons depends on player type

function toggleVolBtn() {
	if (PLAYER && PLAYER.type=="yt") {
		voldownbtn.show();
		volupbtn.show();
	} else {
		voldownbtn.hide();
		volupbtn.hide();
	}
}

// layout elements settings

function playerLocation(a) {
	$("#pinup-btn").show();
	if (a=="left") {
		$("#videowrap").after($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a=="right") {
		$("#videowrap").before($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a=="center") {
		$("#videowrap").after($("#chatwrap").detach());
    		$("#videowrap, #chatwrap").removeClass().addClass("col-lg-8 col-lg-offset-2 col-md-12");
		fitPlayer();
		fitChat(200);
		$("#pinup-btn").hide();
	}
}

function userlistLocation(a) {
	a=="left" ? $("#userlist").css('float', 'left') : $("#userlist").css('float', 'right');
}

function queueLocation(a) {
	$("#pinup-btn").show();
	if (a=="right") {
		$("#rightpane").before($("#leftpane").detach());
	} else if (a=="left") {
		$("#rightpane").after($("#leftpane").detach());
	} else if (a=="center") {
		$("#rightpane").after($("#leftpane").detach())
		  .removeClass().addClass('col-md-8 col-md-offset-2 col-md-12');
		$("#leftpane").removeClass().addClass('col-md-8 col-md-offset-2 col-md-12');
		$("#pinup-btn").hide();
	}
	b = (a=="right") ? "left" : "right";
	$("#playlistrow").css('background-position', b+' bottom');
}

function queueSize(a) {
	if (USERCONFIG.queue!="center") {
		if (a=="wide") {
			$("#leftpane").removeClass().addClass('col-lg-5 col-md-5');
			$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
		} else if (a=="narrow") {
			$("#leftpane").removeClass().addClass('col-lg-7 col-md-7');
			$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
		}
	}
}

function mainLocation(a) {
	if (a=="top") {
		$("#main").before($("#titlerow").detach()).after($("#playlistrow").detach());
	} else if (a=="bottom") {
		$("#main").before($("#playlistrow").detach()).before($("#titlerow").detach());
	}
	$("#main").after($("#chatpanel").detach());
}

function motdLocation(a) {
	if (a=="top") {
		$("#zerorow").after($("#announcements").detach()).after($("#motdrow").detach());
	} else if (a=="bottom") {
		$("#resizewrap").before($("#motdrow").detach()).before($("#announcements").detach());
	}
}

function logoInsert(a) {
	if (a!="no") {
		link = (a!="user") ? TopUserLogo[a][1] : USERCONFIG.logourl;
		ht = (a!="user") ? TopUserLogo[a][2] : USERCONFIG.logoht;
		azukirow.css('min-height', ht+'px').css('background-image', 'url('+link+')');
	} else if (a=="no") {
		azukirow.css('min-height', '5px').css('background-image', '');
	}
}

function headerMode(a) {
	$(".navbar-fixed-top").unbind();
	if (a=="fixed") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '0px');
		$("#mainpage").css('margin-top', '0px');
	} else if (a=="detached") {
		$(".navbar-fixed-top").css('position', 'inherit');
		$("#mainpage").css('margin-top', '-72px');
	} else if (a=="mouseover") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '-40px')
		  .on("mouseover", function() {
			$(".navbar-fixed-top").css('top', '0px');
		  })
		  .on("mouseout", function() {
			$(".navbar-fixed-top").css('top', '-40px');
		  });
		$("#mainpage").css('margin-top', '-40px');

	}
}

function customCSS(a) {
	$("#usercss").remove();
	a=="yes" ? $("head").append('<style id="usercss" type="text/css">'+USERCONFIG.csscode+'</style>') : '';
}

// set global layout according to user preferences

function setLayout() {
	playerLocation(USERCONFIG.player);
	userlistLocation(USERCONFIG.userlist);
	queueLocation(USERCONFIG.queue);
	queueSize(USERCONFIG.qsize);
	mainLocation(USERCONFIG.main);
	motdLocation(USERCONFIG.motd);
	logoInsert(USERCONFIG.logo);
	headerMode(USERCONFIG.header);
	customCSS(USERCONFIG.css);
}

// display mode helper functions

function bigPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-12 col-md-12");
	fitPlayer();
}

function bigChat() {
	$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
	fitChat("auto");
}

function normalPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");
	fitPlayer();
}

function normalChat() {
	c = (PINNED && USERCONFIG.qsize=="wide") ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
	$("#chatwrap").removeClass().addClass(c);
	fitChat(338);
}

// set display mode

function setMode(a) {
	if (NOPLAYER) {
		$("#videowrap").show();
		ytapiplayer = $('<div id="ytapiplayer" />')
		  .insertBefore("#playercontrols");
		refreshPlayer();
		NOPLAYER = false;
	}

	$("#main").show();
	pinupbtn.hide();
	modesel.find("option[value='chMode'], option[value='rMode']").show();
	PINNED ? modesel.find("option[value='chMode']").hide() : '';

	switch (a) {
		case "syMode":
		$("#videowrap, #videowrap p, #videowrap div, #chatwrap, #rightpane, #pinup-btn").show();
		$("#config-btn, #configbtnwrap br, #pinup-btn").show();
		$("#min-layout").parent().show();
		normalPlayer();
		normalChat();
		playerLocation(USERCONFIG.player);
		PINNED ? pinUp() : '';
		resizeStuff();
		break;

		case "kMode":
		$("#videowrap").show();
		PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
		bigPlayer();
		$("#fontspanel, #emotespanel").hide();
		break;

		case "chMode":
		$("#chatwrap").show();
		if (WEBKIT) {
			$("#videowrap").hide();
		} else {
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		bigChat();
		break;

		case "sMode":
		$("#chatwrap").show();
		$("#videowrap").hide();
		$("#ytapiplayer").remove();
		bigChat();
		modesel.find("option[value='chMode'], option[value='rMode']").hide();
		$("#fontspanel, #emotespanel").hide();
		NOPLAYER = true;
		break;

		case "rMode":
		if (WEBKIT) {
			$("#main").hide();
		} else {
			PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		!PINNED ? $("#min-layout").parent().show() : '';
		break;
	}
}

// fix setting mode after video change for chatroom/radio modes

function setModeAfterVideoChange() {
	a=modesel.val();
	(a=="chMode" || a=="rMode") ? setMode(a) : '';
}

// create media database

function createDatabase() {
	html='<button id="la1" class="btn btn-default btn-sm db-break" onclick="toggleCat(1)">'
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
			html+='<button id="la'+layer_nr+'" class="btn btn-default btn-sm db-break" '
			  + 'onclick="toggleCat('+layer_nr+')">'
			  + ChannelDatabase[i][1]
			  + '</button>'
			  + '<ul id="l'+layer_nr+'" class="videolist db-cat">';
		} else {
			item_nr++;
			count_nr++;
			link=ChannelDatabase[i][0];
			html+='<li class="queue_entry">'
			  + '<button class="btn btn-default btn-xs pull-right" onclick="addVideo(\''+link+'\')">'
			  + 'End'
			  + '</button>';
			parsed=parseMediaLink(link);
			if (parsed["type"]=="yt") {
				a=parsed["id"];
				html+='<button class="btn btn-default btn-xs pull-right" '
				  + 'onclick="prevVideo(\''+a+'\')">'
				  + '<i class="glyphicon glyphicon-film"></i>'
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
	  + '<button id="cleardb-btn" class="btn btn-default btn-sm">'
	  + 'Reload Data (if channel seems working slow)</button>'
	  + '</div>';
	item_count[layer_nr-1]=count_nr;
	opening[layer_nr-1]=0;
	$("#db-well").html(html);
	for(i=1; i<=item_count.length; i++) {
		$("#la"+i).append(' ['+item_count[i-1]+']');
	}
	CHANDB=true;

	dbcat = $(".db-cat");
	cleardbbtn = $("#cleardb-btn");

	dbcat.hide();
	for (i in opening) {
		opening[i]=0;
	}

	cleardbbtn.on("click", function() {
		toggleDiv("#dbwrap");
		$("#db-well").html('');
		CHANDB=false;
	});
}

// toggle database sections

function toggleCat(a) {
	b=a-1;
	if (opening[b]==0) {
		dbcat.hide();
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

// create channel gallery

function createGallery() {
	galleryframe = $('<iframe id="galleryFrame" src='+ChannelGalleries_Array[0][1]+' width="100%" />')
	  .attr('frameborder', '0').attr('scrolling', 'no').attr('height', '415px')
	  .appendTo(gallerywell);
	gallerywell.append('<br />');
	galtitle = $('<span id="galtitle" class="conf-opt">Select Gallery</span>')
	  .appendTo(gallerywell);
	gallerywell.append('<br />');
	galsel = $('<select id="gal-sel" class="form-control" />')
	  .appendTo(gallerywell)
	  .on("change", function() {
		galleryframe.attr('src', galsel.val());
	  });

	for (i in ChannelGalleries_Array) {
		$('<option value="'+ChannelGalleries_Array[i][1]+'" />')
		  .html(ChannelGalleries_Array[i][0])
		  .appendTo(galsel);
	}

	gallerywell.append('<br />');
	text='Reload Galleries (if channel seems working slow)';
	cleargallerybtn = $('<button id="cleargallery-btn" class="btn btn-default btn-sm">'+text+'</button>')
	  .appendTo(gallerywell)
	  .on("click", function() {
		toggleDiv(gallerywrap);
		gallerywell.html('');
		GALLERY=false;
	  });
	GALLERY=true;
}

// set user online time

function onlineTime() {
	USERONLINE++;
	hours=Math.floor(USERONLINE/60);
	minutes=USERONLINE-hours*60;
	minutes<10 ? minutes="0"+minutes : '';
	$("#onlinetime").html(hours+":"+minutes);
}

// set user CSS

function setUserCSS() {
	$("#usertheme").attr('href', '/css/themes/slate.css');
	$("#usertheme-fix").remove();
	if (USERTHEME.indexOf("/css/themes/")>-1) {
		$("#usertheme").attr('href', USERTHEME);
	} else {
		$('<link id="usertheme-fix" rel="stylesheet" type="text/css" href="'+USERTHEME+'"></link>')
		  .appendTo("head");
	}
	$("#usercss").remove();
	if (USERCONFIG.css!="no") {
		$("head").append('<style id="usercss" type="text/css">'+USERCONFIG.csscode+'</style>');
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- UI events functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function prepareFilters() {
	str='{"name":"white color","source":"\\\\[white\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:white\\">","active":true,"filterlinks":false},'
	  + '{"name":"yellow color","source":"\\\\[yellow\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:gold\\">","active":true,"filterlinks":false},'
	  + '{"name":"orange color","source":"\\\\[orange\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:orange\\">","active":true,"filterlinks":false},'
	  + '{"name":"pink color","source":"\\\\[pink\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:#FFBBFF\\">","active":true,"filterlinks":false},'
	  + '{"name":"red color","source":"\\\\[red\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:red\\">","active":true,"filterlinks":false},'
	  + '{"name":"limegreen color","source":"\\\\[lime\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:limegreen\\">","active":true,"filterlinks":false},'
	  + '{"name":"green color","source":"\\\\[green\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:green\\">","active":true,"filterlinks":false},'
	  + '{"name":"aqua color","source":"\\\\[aqua\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:aqua\\">","active":true,"filterlinks":false},'
	  + '{"name":"blue color","source":"\\\\[blue\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:blue\\">","active":true,"filterlinks":false},'
	  + '{"name":"violet color","source":"\\\\[violet\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:#660099\\">","active":true,"filterlinks":false},'
	  + '{"name":"brown color","source":"\\\\[brown\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:#660000\\">","active":true,"filterlinks":false},'
	  + '{"name":"silver color","source":"\\\\[silver\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:silver\\">","active":true,"filterlinks":false},'
	  + '{"name":"black color","source":"\\\\[black\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:black\\">","active":true,"filterlinks":false},'
	  + '{"name":"white color on black","source":"\\\\[bw\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:white; background-color:black\\">","active":true,"filterlinks":false},'
	  + '{"name":"bold text","source":"\\\\[b\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"font-weight:bold\\">","active":true,"filterlinks":false},'
	  + '{"name":"italic text","source":"\\\\[i\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"font-style:italic\\">","active":true,"filterlinks":false},'
	  + '{"name":"underlined text","source":"\\\\[u\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"text-decoration:underline\\">","active":true,"filterlinks":false},'
	  + '{"name":"striked text","source":"\\\\[s\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"text-decoration:line-through\\">","active":true,"filterlinks":false},'
	  + '{"name":"distinguished text","source":"\\\\[d\\\\]","flags":"g",'
	  + '"replace":"<span class=\\"dist\\">","active":true,"filterlinks":false},'
	  + '{"name":"fire text","source":"\\\\[f\\\\]","flags":"g",'
	  + '"replace":"<span style=\\"color:#FFFFFF; font-family:impact, sans-serif; padding-top:20px; '
	  + 'text-shadow:0px 0px 4px #000000, 0px -5px 4px #FFFF33, 2px -8px 6px #FFDD33, -2px -15px 10px #FF8800, '
	  + '2px -20px 18px #FF2200; letter-spacing:2px\\">","active":true,"filterlinks":false},'
	  + '{"name":"short spoiler","source":"\\\\[sp\\\\]","flags":"g",'
	  + '"replace":"<span class=\\"spoiler\\">","active":true,"filterlinks":false},'
	  + '{"name":"closing font style","source":"\\\\[\\\\/\\\\]","flags":"g",'
	  + '"replace":"</span>","active":true,"filterlinks":false}]';

	callback = function(data) {
		socket.listeners("chatFilters").splice(
			socket.listeners("chatFilters").indexOf(callback)
		);
		temp = JSON.stringify(data);
		comma = (temp.length!="2") ? ',' : '';
		$("#cs-chatfilters-exporttext").val(temp.substring(0, temp.length-1)+comma+str);
	};

	socket.on("chatFilters", callback);
	socket.emit("requestChatFilters");
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
	  .prependTo("#motd");
	$("#motdwrap").show();
}

// add rules panel

function rulesPanel() {
	RulesBtn_Caption=="" ? RulesBtn_Caption='Read Channel Rules' : '';
	$("#motdwrap").show();
	rulesbtnwrap = $('<div id="rulesbtnwrap" />')
	  .appendTo("#motd");
	rulesbtn = $('<button id="rules-btn" class="btn btn-default btn-sm" />')
	  .text(RulesBtn_Caption+' ▸')
	  .appendTo(rulesbtnwrap)
	  .on("click", function() {
		toggleDiv(rulespanel);
	  });
	rulespanelouter = $('<div id="rulespanel-outer" />')
	  .appendTo("#motd");
	rulespanel = $('<div id="rulespanel" style="display:none" />')
	  .html(RulesBtn_HTML)
	  .appendTo(rulespanelouter);
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
	titlerow.css('background-size', a+'% 100%');
}

// change title bar description

function changeTitle() {
	title=$("#currenttitle").text();
	$("#currenttitle").text(title.replace(/Currently Playing:/, TitleBarDescription_Caption));
}

// show info about current or next media

function showInfo() {
	if (DEFDESCR) {
		addedby=$(".queue_active").attr("title");
		if (typeof addedby==="undefined") {
			text='Nothing Playing';
		} else {
			duration=$(".queue_active .qe_time").html();
			text=addedby+' ['+duration+']';
		}
		mediainfo.html(text);	
	} else {
		var arr=new Array();
		text='Playing Next:';
		li1=$(".queue_active").next();
		li2=li1.next();
		li3=li2.next();
		li1.length>0 ? arr.push(' [1]▸ '+li1.children("a").html()) : '';
		li2.length>0 ? arr.push(' [2]▸ '+li2.children("a").html()) : '';
		li3.length>0 ? arr.push(' [3]▸ '+li3.children("a").html()) : '';
		text+=arr.join("");
		arr.length<3 ? text+=' // END OF PLAYLIST //' : '';
		mediainfo.html('<marquee scrollamount="5">'+text+'</marquee>');
	}	
}

// hide and show player with covering image

function coverPlayer() {
	PlayerHiding_URL=="" ? PlayerHiding_URL='https://dl.dropboxusercontent.com/s/xz2o99scw5i7aai/stop.png' : '';
	$("#videowrap").addClass('relative');
	w=$("#ytapiplayer").css('width');
	h=$("#videowrap").css('height').replace('px', '')-31;
	coverpl = $('<div id="coverpl" />')
	  .css({'width':w, 'height':h+'px', 'background-image':'url('+PlayerHiding_URL+')'})
	  .appendTo($("#videowrap"));
	$("#ytapiplayer").addClass('covered');
	hideplayer.addClass('btn-danger').attr('title', 'Show player');
}

function showPlayer() {
	coverpl.remove();
	hideplayer.removeClass('btn-danger').attr('title', 'Hide player');
	$("#videowrap").removeClass('relative');
	$("#ytapiplayer").removeClass('covered');
}

// toggle mute button depends on player type

function toggleMuteBtn() {
	(PLAYER && PLAYER.type=="yt") ? muteplayer.show() : muteplayer.hide();
}

// mute YT player

function mutePlayer() {
	(PLAYER && PLAYER.type=="yt") ? PLAYER.player.mute() : '';
}

// unmute YT player

function unmutePlayer() {
	(PLAYER && PLAYER.type=="yt") ? PLAYER.player.unMute() : '';
}

// download current item

function downloadCurrentItem() {
	a=PL_CURRENT+1;
	b=$("#queue .queue_entry:nth-child("+a+")").data("media");
	c={
		'yt':'http://youtube.com/watch?v=',
		'vi':'http://vimeo.com/',
		'dm':'http://dailymotion.com/video/',
		'sc':''
	}
	link = (b.type in c ? c[b.type]+''+b.id : '');
	if (link=="") {
		alert('This link is not supported. Try YouTube, Vimeo, Dailymotion or SoundCloud.');
	}
	else {
		link='http://keepvid.com/?url='+link;
		createModal("Download current item");
		$('<a href="'+link+'" target="_blank">Click here to download</a>')
		  .appendTo(body)
		  .on("click", function() {
			outer.modal('hide');
		  });
	}
}

// display list of emotes

function showEmotes() {
	for (i in CHANNEL.emotes) {
		$('<img src="'+CHANNEL.emotes[i].image+'" onclick="insertText(\''+CHANNEL.emotes[i].name+' \')" />')
		  .attr('title', CHANNEL.emotes[i].name)
		  .appendTo(emotespanel);
	}
	EMOTES=true;
	if (CHANNEL.emotes.length<1) {
		emotespanel.addClass('row');
		makeAlert("No emotes available", "Ask channel administrator.").appendTo(emotespanel);
		$("#emotespanel .alert").css({'text-align':'left', 'margin':'5px -10px'});
	}
}

// toggle advanced playlist options buttons

function toggleAdvancedPl() {
	CLIENT.rank<2 ? advplaylist.hide() : advplaylist.show();
	hasPermission("playlistjump") ? playnextbtn.show() : playnextbtn.hide();
	if (hasPermission("playlistadd") && UI_ChannelDatabase=="1") {
		addrandombtn.show();
	} else {
		addrandombtn.hide();
	}
	hasPermission("playlistmove") ? bumplastbtn.show() : bumplastbtn.hide();
	hasPermission("playlistdelete") ? deletelastbtn.show() : deletelastbtn.hide();
}

// pin-up playlist to player

function pinUp() {
	if (USERCONFIG.player=="left") {
		$("#videowrap").after($("#rightpane").detach());
	} else if (USERCONFIG.player=="right") {
		$("#videowrap").before($("#rightpane").detach());
	}
	if (USERCONFIG.queue=="left") {
		$("#leftpane").before($("#chatwrap").detach());
	} else if (USERCONFIG.queue=="right") {
		$("#leftpane").after($("#chatwrap").detach());
	}
	$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	if (USERCONFIG.qsize=="wide") {
		$("#chatwrap").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Unpin playlist');
	$("#config-btn, #configbtnwrap br").hide();
	$("#min-layout").parent().hide();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").hide();
	PINNED=true;
}

// un-pin playlist from player

function unPin() {
	if (USERCONFIG.queue=="left") {
		$("#leftpane").before($("#rightpane").detach());
	} else if (USERCONFIG.queue=="right") {
		$("#leftpane").after($("#rightpane").detach());
	}
	if (USERCONFIG.player=="left") {
		$("#videowrap").after($("#chatwrap").detach());
	} else if (USERCONFIG.player=="right") {
		$("#videowrap").before($("#chatwrap").detach());
	}
	$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	if (USERCONFIG.qsize=="wide") {
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Pinup playlist to player');
	$("#config-btn, #configbtnwrap br").show();
	$("#min-layout").parent().show();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").show();
	PINNED=false;
}

// show chat commands modal window

function showChatHelp() {
	createModal('Chat Commands');
	if (UI_FontsBtn=="1") {
		body.append('<strong>Fonts commands</strong><br /><br />');
		html='<li><code>[white]</code>, <code>[yellow]</code>, <code>[orange]</code>, <code>[pink]</code>, '
		  + '<code>[red]</code>, <code>[lime]</code>, <code>[green]</code>, <code>[aqua]</code>, '
		  + '<code>[blue]</code>, <code>[violet]</code>, <code>[brown]</code>, <code>[silver]</code>, '
		  + '<code>[black]</code> - begin of colored text</li>'
		  + '<li><code>[bw]</code> - begin of white text on the black background</li>'
		  + '<li><code>[b]</code>, <code>[i]</code>, <code>[u]</code>, <code>[s]</code> - '
		  + 'begin of bold, italic, underlined, striked or underlined text</li>'
		  + '<li><code>[d]</code> - begin of a distinguished text (red on yelllow background)</li>'
		  + '<li><code>[f]</code> - begin of a text with a fire effect</li>'
		  + '<li><code>[sp]</code> - begin of an inline spoiler</li>'
		  + '<li><code>[/]</code> - <b>end of any color, style or spoiler</b></li>';
		$('<ul />').html(html).appendTo(body);
	}
	if (UI_UserCommands=="1") {
		scrcmd = {
			'pick':'choosing a random option from a list separated by commas '
			  + '(e.g. <i>!pick japan,korea,china</i>)',
			'ask':'asking a question with yes/no type answer '
			  + '(e.g. <i>!ask Will this channel be popular?</i>)',
			'q':'displaying random quote (<i>!q</i>)',
			'dice':'rolling dice (<i>!dice</i>)',
			'roll':'rolling 3-digit number (<i>!roll</i>)',
			'time':'displaying current time (<i>!time</i>)',
			'now':'displaying current playing title (<i>!now</i>)',
			'calc':'calculating a math operation '
			  + '(all JavaScript Math methods and constants allowed, e.g. <i>!calc Math.PI*10</i>)',
			'skip':'skip current item (<i>!skip</i>)',
			'add':'adding a link to the end of playlist '
			  + '(e.g. <i>!add http://www.youtube.com/watch?v=YLNH_Fqj4DE</i>)',
			'stat': 'displaying user chat statistics in current session (<i>!stat</i>)'
		}
		if (UI_ChannelDatabase=="1") {
			scrcmd['random']='adding random link from database (<i>!random</i>)';
		}
		body.append('<br /><strong>New chat commands</strong><br /><br />');
		cmdlist=$('<ul />').appendTo(body);
		for (cmd in scrcmd) {
			cmdlist.append('<li><code>!'+cmd+'</code> - '+scrcmd[cmd]+'</li>');
		}
	}
	defcmd = {
		'me':'showing an action-style message (username does something, e.g. <i>/me is dancing</i>)',
		'sp':'hiding a message in a hover-to-show spoiler box (e.g. <i>/sp This message is hidden</i>)',
		'afk':'toggling your AFK (away from keyboard) status (<i>/afk</i>)',
	}
	body.append('<br /><strong>Default CyTube commands</strong><br /><br />');
	cmdlist2=$('<ul />').appendTo(body);
	for (cmd in defcmd) {
		cmdlist2.append('<li><code>/'+cmd+'</code> - '+defcmd[cmd]+'</li>');
	}
}

// show chat sounds panel

function showSoundsPanel() {
	$("#userlist").append('<div id="sounds-dropdown" />');
	bgcolor=$("body").css('background-color');
	color=$("body").css('color');
	height=$("#userlist").height();
	$("#sounds-dropdown").css('background-color', bgcolor).css('color', color).css('height', height+'px');

	muteall = $('<button id="muteall" class="btn btn-xs btn-default">Mute All</button>')
	  .appendTo("#sounds-dropdown")
	  .on("click", function() {
		if (VOICES) {
			$(this).html('Unmute All').addClass('btn-danger');
			voicesbtn.addClass('btn-danger').attr('title', 'Unmute All');
			VOICES = false;
			SOUNDSPANEL = false;
			$("#sounds-dropdown").remove();
		} else {
			$(this).html('Mute All').removeClass('btn-danger');
			voicesbtn.removeClass('btn-danger').attr('title', 'Mute All');
			VOICES = true;
		}
	  });
	!VOICES ? muteall.html('Unmute All').addClass('btn-danger') : '';

	$('<div>Select users to mute sounds:</div>')
	  .appendTo("#sounds-dropdown");
	mutegroup = $('<div id="mutegroup" class="btn-group-vertical"></div>')
	  .appendTo("#sounds-dropdown");

	$(".userlist_item").each(function() {
		user=$(this).find("span:nth-child(2)").html();
		btn=$('<button class="btn btn-xs btn-default" name="'+user+'" />')
		  .html(user)
		  .appendTo(mutegroup)
		  .on("click", function() {
			name=$(this).attr('name');
			if (name in MUTEDVOICES && MUTEDVOICES[name]=="1") {
				$(this).removeClass('btn-danger');
				MUTEDVOICES[name]=0;
			} else {
				$(this).addClass('btn-danger');
				MUTEDVOICES[name]=1;
			}
	 	   });
		(user in MUTEDVOICES && MUTEDVOICES[user]=="1") ? btn.addClass('btn-danger') : '';
	});
}

// show moderators panel

function showModPanel() {
	createModal("Moderators panel");
	html='';
	for (i in ModPanel_Array) {
		name=ModPanel_Array[i][0];
		mess=ModPanel_Array[i][1];
		if (name=="") {
			html+='<i class="glyphicon glyphicon-comment"></i> '
			  + mess
			  + '<br /><br />';
		} else if (name==CLIENT.name) {
			html+='<i class="glyphicon glyphicon-comment"></i> '
			  + '<i class="glyphicon glyphicon-user"></i> '
			  + '(to: '+CLIENT.name+') → '+mess
			  + '<br /><br />';
		}
	}
	body.append(html);
	setOpt(StoragePrefix+"_modhash", HASH);
	$("#mod-btn").removeClass('btn-danger').html('<i class="glyphicon glyphicon-tasks"></i>');
}

// show contributors list

function showContributors() {
	createModal("Contributors List");
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
		j=i*1+1;
		list3.push(j+". "+list2[i].join(": "));
	}
	html='<strong>Number of added playlist items:</strong>'
	  + '<br /><br />'+list3.join("<br />");
	body.append(html);
}

// expand/collapse queue

function expandQueue() {
	if (!FULLPL) {
		$("#queue").css('max-height', '100000px');
		expandbtn.attr('title', 'Collapse playlist');
		FULLPL=true;
	} else {
		$("#queue").css('max-height', '500px');
		expandbtn.attr('title', 'Expand playlist');
		FULLPL=false;
		scrollQueue();
	}
}

// get playlist URLS

function getPlaylistURLs() {
	createModal('Playlist URLs');

	data=$('<textarea rows="10" class="form-control" />').val(formatRawList()).appendTo(body);
	rlist=$('<button />').addClass('btn btn-default pull-left').text('Raw List').appendTo(footer);
	tlist=$('<button />').addClass('btn btn-default pull-left').text('Plain Text').appendTo(footer);
	hlist=$('<button />').addClass('btn btn-default pull-left').text('HTML Code').appendTo(footer);

	rlist.on("click", function() {
		data.val(formatRawList());
	});

	tlist.on("click", function() {
		data.val(formatPlainTextList());
	});

	hlist.on("click", function() {
		data.val('<ol>\n'+formatHTMLList()+'\n</ol>');
	});
}

// add random item from channel database

function addRandomItem() {
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
}

// toggle configuration panel

function toggleConfigPanel() {
	if (MINIMIZED) {
		if (!PINNED) {
			$("#rightpane-inner").show();
		} else {
			$("#chatwrap").show();
		}
		$("#azukirow, #leftpane-inner").show();
		!$("#hide-motd").prop('checked') ? $("#motdrow").show() : '';
		!$("#hide-ann").prop('checked') ? $("#announcements").show() : '';
		!$("#hide-hf").prop('checked') ? $("footer").show() : '';
		pinupbtn.show();
		layoutbtn.removeClass('btn-danger').addClass('btn-success')
		  .html('<span class="glyphicon glyphicon-cog"></span> Layout');
		$("#min-layout").prop('checked', false);
		$("#plcontrol button, #db-btn, #gallery-btn, #newpollbtn").removeAttr('disabled');
		MINIMIZED=false;
	} else {
		toggleDiv(configwrap);
		if (configwrap.css('display')=="none") {
			layoutbtn.removeClass('btn-success');
		} else {
			layoutbtn.addClass('btn-success');
		}
	}
}

// preview YT video in modal window

function prevVideo(a) {
	createModal('Preview Video');

	player=$('<iframe width="558" height="314" frameborder="0" />').appendTo(body)
	  .attr('src', 'http://www.youtube.com/embed/'+a+'?wmode=transparent&enablejsapi');
}

// show layout configuration modal window

function showConfig() {
	createModal("Layout Configuration");

	form=$('<form />').addClass('form-horizontal').appendTo(body);

	function addOption(lbl, thing) {
		g=$('<div />').addClass('form-group').appendTo(form);
		$('<label />').addClass('control-label col-sm-4').text(lbl).appendTo(g);
		c=$('<div />').addClass('col-sm-8').appendTo(g);
		thing.appendTo(c);
	}

	playerlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
	$('<option />').attr('value', 'center').text('center').appendTo(playerlocation);
	playerlocation.val(USERCONFIG.player);
	addOption('Player location', playerlocation);

	userlistlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
	userlistlocation.val(USERCONFIG.userlist);
	addOption('Userlist location', userlistlocation);

	queuelocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
	$('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
	$('<option />').attr('value', 'center').text('center').appendTo(queuelocation);
	queuelocation.val(USERCONFIG.queue);
	addOption('Queue location', queuelocation);

	queuesize=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
	$('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
	queuesize.val(USERCONFIG.qsize);
	addOption('Queue column size', queuesize);

	mainlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
	$('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
	mainlocation.val(USERCONFIG.main);
	addOption('Player & chat', mainlocation);

	motdlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('channel top').appendTo(motdlocation);
	$('<option />').attr('value', 'bottom').text('channel bottom').appendTo(motdlocation);
	motdlocation.val(USERCONFIG.motd);
	addOption('MOTD & announcements', motdlocation);

	logoinsert=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no image').appendTo(logoinsert);
	$('<option />').attr('value', 'user').text('user image').appendTo(logoinsert);
	for (i in TopUserLogo) {
		$("<option />").attr('value', i).text(TopUserLogo[i][0]).appendTo(logoinsert);
	}
	logoinsert.val(USERCONFIG.logo);
	addOption('Top logo', logoinsert);

	userlogo=$('<input />').addClass('form-control').attr('type', 'text')
	  .attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht=$('<input />').addClass('form-control').attr('type', 'text')
	  .attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if (USERCONFIG.logo!="user") {
		userlogo.parent().parent().hide();
		userlogoht.parent().parent().hide();
	} else {
		userlogo.val(USERCONFIG.logourl);
		userlogoht.val(USERCONFIG.logoht);
	}

	headermode=$('<select />').addClass('form-control')
	$('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
	$('<option />').attr('value', 'detached').text('detached').appendTo(headermode);
	$('<option />').attr('value', 'mouseover').text('mouseover').appendTo(headermode);
	headermode.val(USERCONFIG.header);
	addOption('Header menu', headermode);

	customcss=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no').appendTo(customcss);
	$('<option />').attr('value', 'yes').text('yes').appendTo(customcss);
	customcss.val(USERCONFIG.css);
	addOption('Custom CSS', customcss);

	usercss=$('<textarea rows="8" />').addClass('form-control')
	  .attr('placeholder', 'Insert CSS code');
	usercss.val(USERCONFIG.csscode);
	addOption('CSS code', usercss);

	if (USERCONFIG.css=="no") {
		usercss.parent().parent().hide();
	}

	submit=$('<button />').addClass('btn btn-default btn-success').text("Save changes").appendTo(footer);
	reset=$('<button />').addClass('btn btn-default pull-left').text('Default').appendTo(footer);
	column=$('<button />').addClass('btn btn-default pull-left').text('One column').appendTo(footer);

	logoinsert.on("change", function() {
		if (logoinsert.val()=="user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
			userlogo.val(USERCONFIG.logourl);
			userlogoht.val(USERCONFIG.logoht);
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	customcss.on("change", function() {
		if (customcss.val()=="yes") {
			usercss.parent().parent().show();
		} else {
			usercss.parent().parent().hide();
		}
	});

	submit.on("click", function() {
		outer.modal('hide');

		USERCONFIG.player=playerlocation.val();
		setOpt(StoragePrefix+"_player",playerlocation.val());

		USERCONFIG.userlist=userlistlocation.val();
		setOpt(StoragePrefix+"_userlist",userlistlocation.val());

		USERCONFIG.queue=queuelocation.val();
		setOpt(StoragePrefix+"_queue",queuelocation.val());

		USERCONFIG.qsize=queuesize.val();
		setOpt(StoragePrefix+"_qsize",queuesize.val());

		USERCONFIG.main=mainlocation.val();
		setOpt(StoragePrefix+"_main",mainlocation.val());

		USERCONFIG.motd=motdlocation.val();
		setOpt(StoragePrefix+"_motd",motdlocation.val());

		if (logoinsert.val()=="user") {
			if (userlogo.val()=="") {
				logoinsert.val("no");
			} else if (userlogoht.val()=="") {
				userlogoht.val('200');
			} else {
				a=userlogoht.val()*1;
				if (isNaN(a) || a<1) {
					userlogoht.val('200');
				}
			}
			USERCONFIG.logourl=userlogo.val();
			USERCONFIG.logoht=userlogoht.val();
			setOpt(StoragePrefix+"_logourl",userlogo.val());
			setOpt(StoragePrefix+"_logoht",userlogoht.val());
		}

		USERCONFIG.logo=logoinsert.val();
		setOpt(StoragePrefix+"_logo",logoinsert.val());

		USERCONFIG.header=headermode.val();
		setOpt(StoragePrefix+"_header",headermode.val());

		if (customcss.val()=="yes") {
			USERCONFIG.csscode=usercss.val();
			setOpt(StoragePrefix+"_csscode",usercss.val());
		}

		USERCONFIG.css=customcss.val();
		setOpt(StoragePrefix+"_css",customcss.val());

		setLayout();
		scrollChat();
		scrollQueue();
	});

	reset.on("click", function() {
		outer.modal("hide");

		USERCONFIG.player="left";
		setOpt(StoragePrefix+"_player","left");

		USERCONFIG.userlist="right";
		setOpt(StoragePrefix+"_userlist","right");

		USERCONFIG.queue="left";
		setOpt(StoragePrefix+"_queue","left");

		USERCONFIG.qsize="wide";
		setOpt(StoragePrefix+"_qsize","wide");

		USERCONFIG.main="top";
		setOpt(StoragePrefix+"_main","top");

		USERCONFIG.motd="top";
		setOpt(StoragePrefix+"_motd","top");

		USERCONFIG.logo="no";
		setOpt(StoragePrefix+"_logo","no");

		USERCONFIG.header="detached";
		setOpt(StoragePrefix+"_header","detached");

		USERCONFIG.css="no";
		setOpt(StoragePrefix+"_css","no");

		setLayout();
		scrollChat();
		scrollQueue();
	});

	column.on("click", function() {
		outer.modal("hide");

		USERCONFIG.player="center";
		setOpt(StoragePrefix+"_player","center");

		USERCONFIG.userlist="left";
		setOpt(StoragePrefix+"_userlist","left");

		USERCONFIG.queue="center";
		setOpt(StoragePrefix+"_queue","center");

		USERCONFIG.main="top";
		setOpt(StoragePrefix+"_main","top");

		USERCONFIG.motd="bottom";
		setOpt(StoragePrefix+"_motd","bottom");

		USERCONFIG.logo="no";
		setOpt(StoragePrefix+"_logo","no");

		USERCONFIG.header="detached";
		setOpt(StoragePrefix+"_header","detached");

		setLayout();
		scrollChat();
		scrollQueue();
	});
}

// toggle fluid layout

function toggleFluidLayout() {
	if ($("body").hasClass('fullscreen')) {
		$("body").removeClass('fullscreen');
		$(".container-fluid").removeClass('container-fluid').addClass('container');
	} else {
		$("body").addClass('fullscreen');
		$(".container").removeClass('container').addClass('container-fluid');
		$("footer .container-fluid").removeClass('container-fluid').addClass('container');
	}
	USERCONFIG.player=="center" ? setTimeout(function() {fitChat(200)}, 1000) : '';
	resizeStuff();
	scrollChat();
}

// toggle minimized layout

function toggleMinLayout() {
	if (!MINIMIZED) {
		if (!PINNED) {
			$("#rightpane-inner").hide();
		} else {
			$("#chatwrap").hide();
		}
		$("#azukirow, #motdrow, #announcements, #leftpane-inner, footer").hide();
		pinupbtn.hide();
		layoutbtn.removeClass('btn-success').addClass('btn-danger').html('Maximize');
		$("#plcontrol button, #db-btn, #gallery-btn, #newpollbtn").attr('disabled', 'disabled');
		MINIMIZED=true;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- User Interface ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// adding important hidden reference row

zerorow = $('<div id="zerorow" class="row" />').insertBefore("#motdrow");

// adding top logo row

azukirow = $('<div id="azukirow" class="row" />').insertBefore(zerorow);

// adding video wrap if user has enabled "Hide Player" option

if (USEROPTS.hidevid) {
	$("#chatwrap, #chatline").removeClass('col-lg-12 col-md-12').addClass('col-lg-5 col-md-5');
	videowrap = $('<div id="videowrap" class="col-lg-7 col-md-7" />')
	  .insertBefore("#chatwrap");
	currenttitle = $('<p id="currenttitle" />')
	  .html('Currently Playing: '+$(".queue_active a").html())
	  .appendTo(videowrap);
	ytapiplayer = $('<div id="ytapiplayer" />')
	  .appendTo(videowrap);

	html='According to your User Preferences, video player is hidden. '
	  + 'Click a button below to continue hiding player. '
	  + 'Click default "Reload" icon to show player in this session. '
	  + 'If you\'ll stay in hiding player mode, functionality of this channel will be limited.<br /><br />';
	makeAlert("No Player", html).appendTo(ytapiplayer);
	$("#ytapiplayer .alert").css({'text-align':'left', 'margin':'0px -15px'});

	staybtn = $('<button id="stay-btn" class="btn btn-default btn-sm">Stay In "Chat Only" Mode</button>')
	  .appendTo("#ytapiplayer .alert")
	  .on("click", function() {
        	videowrap.remove();
		$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
		$("#configform, #modeform, #pinup-btn").hide();
		fitChat("auto");
	});
}

// changing initial layout to compact

$("body").addClass('fluid');
USERCONFIG.player=="center" ? setTimeout(function() {fitChat(200)}, 1000) : '';
compactLayout();
setLayout();
scrollChat();
scrollQueue();

// adding "id" attributes

$(".navbar-collapse .navbar-nav").children().first().attr('id', 'home-link');
$("#home-link").next().attr('id', 'account-link');
$("#account-link").next().attr('id', 'options-link');
$("#options-link").next().attr('id', 'channelset-link');
$("#channelset-link").next().attr('id', 'layout-link');

// changing location of some layout elements

$("#main").prepend($("#drinkbar").detach());
$("#videowrap").append('<div id="playercontrols" class="btn-group" />');
$("#playercontrols").append($("#mediarefresh").detach());
$("#rightpane").prepend($("#videocontrols").detach());
$("#rightpane").prepend($("#plcontrol").detach());
$("#leftpane").prepend($("#newpollbtn").detach());
$("#plcontrol").prepend($("#showmediaurl").detach());

// header and footer links open in a new tab

$("#home-link a, #account-link ul a, .credit a").attr('target', '_blank');

// adding default CyTube Plus CSS if not set

if ($("#chanexternalcss").length<1) {
	url='https://dl.dropboxusercontent.com/s/hbhlrmys5piztgo/main.css';
	$("head").append('<link id="chanexternalcss" href="'+url+'" rel="stylesheet" type="text/css">');
}

setUserCSS();

// adding favicon

if (UI_Favicon=="1" && Favicon_URL!="") {
	$(document).ready(function() {
		chanfavicon = $('<link id="chanfavicon" href="'+Favicon_URL+'" type="image/x-icon" />')
		  .attr('rel', 'shortcut icon')
		  .appendTo("head");
	});
}

// changing carets to unicode characters

$("nav .caret, #cs-edit-dd-toggle .caret").removeClass('caret').html(' ▾');

// adding important messages to "Options"

text1='Please use "Personal theme" selector in the room configuration box to select a theme for this channel. ';
text2='Please use "Click to configure" button in the room configuration box to configure this channel. ';
text3='If you want to make global changes, please go to another channel.';
$("#us-theme").hide();
$("#us-theme").parent().append('<p class="text-danger">'+text1+''+text3+'</p>');
$("#us-layout").hide();
$("#us-layout").parent().append('<p class="text-danger">'+text2+''+text3+'</p>');

// creating channel settings filters preparation button

csfontsimport = $('<button id="cs-fonts-import" class="btn btn-default pull-right" />')
  .text('Prepare fonts filters')
  .insertAfter("#cs-chatfilters-import")
  .on("click", function() {
	prepareFilters();
  });

// fix layout after saving user options

$("#useroptions .modal-footer button:nth-child(1)").on("click", function() {
	USEROPTS.hidevid ? location.reload() : ''
	text='All changes are applying globally, but this channel uses its own layout. '
	  + 'Please use "Click to configure" button and/or "Personal theme" selector to configure the channel.<br />'
	  + 'Reload player if the wrong title is displaying. '
	  + 'In HD layout or if player is removed, you may not see some elements due to CyTube API. '
	  + 'If so, reload channel.';
	makeAlert("User Preferences change", text, "alert-info").appendTo("#announcements");
	USERCONFIG.player=="center" ? setTimeout(function() {fitChat(200)}, 1000) : '';
	compactLayout();
	setLayout();
	scrollChat();
	scrollQueue();
	$("body").hasClass('fullscreen') ? fluidLayout() : '';
});

// changing channel name

if (UI_ChannelName=="1" && ChannelName_Caption!="") {
	$(".navbar-brand").html(ChannelName_Caption);
}

// adding channel small logo

if (UI_MiniLogo=="1" && MiniLogo_URL!="") {
	chanavatar = $('<img id="chanavatar" src="'+MiniLogo_URL+'" />')
	  .prependTo(".navbar-brand");
}

// adding header dropdown menu

if (UI_HeaderDropMenu=="1") {
	HeaderDropMenu_Title=="" ? HeaderDropMenu_Title='Menu' : '';
	headerdrop = $('<li id="headerdrop" class="dropdown" />')
	  .insertAfter("#home-link");
	$('<a class="dropdown-toggle" data-toggle="dropdown" href="#" />')
	  .html(HeaderDropMenu_Title+' ▾')
	  .appendTo(headerdrop);
	headermenu = $('<ul id="headermenu" class="dropdown-menu" />')
	  .appendTo(headerdrop);

	HeaderDropMenu_Items.length<1 ? HeaderDropMenu_Items=[['no menu available', '']] : '';
	for (i in HeaderDropMenu_Items) {
		title=HeaderDropMenu_Items[i][0];
		link=HeaderDropMenu_Items[i][1];
		if (link=="") {
			headermenu.append('<li class="dropdown-header">'+title+'</li>');
		} else {
			$('<li class="header-drop-link" />')
			  .append('<a href="'+link+'" target="_blank">'+title+'</a>')
			  .appendTo(headermenu);
		}
	}
}

// optional removing of "Layout" menu from header

if (UI_RemoveLayoutMenu=="1") {
	$("#layout-link").remove();
} else {
	$("#layout-link li:nth-child(2) a").on("click", function() {
		$("#configform, #modeform, #pinup-btn").hide();
		fitChat("auto");
	});
}

// adding MOTD logo

if (UI_MOTDAutoLogo=="1") {
	if (MOTDAutoLogo_Mode!="1" && MOTDAutoLogo_Mode!="2" && MOTDAutoLogo_Mode!="3" && MOTDAutoLogo_Mode!="7") {
		MOTDAutoLogo_Mode='1';
	}
	if (MOTDAutoLogo_Mode=="3") {
		if (typeof MOTDAutoLogo_Interval!=="number" || MOTDAutoLogo_Interval<1) {
			MOTDAutoLogo_Interval='20';
		}
		setInterval(function() {
			nr=Math.floor(Math.random()*MOTDAutoLogo_Array.length);
			$("#motdlogo").attr('src', MOTDAutoLogo_Array[nr]);
		}, MOTDAutoLogo_Interval*1000);
	}

	socket.on("setMotd", changeMOTD);
	changeMOTD();
}

// adding rules button and panel

if (UI_RulesBtn=="1") {
	socket.on("setMotd", rulesPanel);
	rulesPanel();
}

// adding attention bar

if (UI_AttentionBar=="1" && AttentionBar_URL!="") {
	attbarwrap = $('<div id="attbarrow-outer" class="col-md-12" />')
	  .prependTo("#announcements");
	attbar = $('<iframe id="attbar" width="100%" />')
	  .attr('frameborder', '0').attr('scrolling', 'no').attr('src', AttentionBar_URL)
	  .appendTo(attbarwrap);
}

// adding custom channel announcement

if (UI_ChannelAnnouncement=="1") {
	ChannelAnnouncement_Title=="" ? ChannelAnnouncement_Title='Administration Message' : '';
	ChannelAnnouncement_HTML=="" ? ChannelAnnouncement_HTML='<i>no messages</i>' : '';
	makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).appendTo("#announcements");
}

// adding full-width title bar and progress bar

if (UI_FullTitleBar=="1") {
	titlerow = $('<div id="titlerow" class="row" />')
	  .insertBefore("#main");
	titlerowouter = $('<div id="titlerow-outer" class="col-md-12" />')
	  .html($("#currenttitle").detach())
	  .appendTo(titlerow);
	mediainfo = $('<p id="mediainfo" />')
	  .html('Nothing Playing')
	  .prependTo("#videowrap");

	UI_ProgressBar=="1" ? setInterval(function() {progressBar()}, 2000) : '';

	socket.on("changeMedia", showInfo);
	showInfo();

	if (UI_TitleIcon=="1" && TitleIcon_URL!="") {
		$("#titlerow #currenttitle").css({
			'background-image':'url("'+TitleIcon_URL+'")', 
			'background-repeat':'no-repeat', 
			'background-position':'left center'
		});
	}
}

// changing title bar description

if (UI_TitleBarDescription=="1") {
	socket.on("changeMedia", changeTitle);
	changeTitle();
}

// easter egg

function inba() {
	$("body").css('background-image', 'none');
	BGCHANGE++;
	BGCHANGE%2==0 ? $("body").css('background-color', 'gold') : $("body").css('background-color', 'blue');
}

// customizing chat notifications sound

if (UI_CustomChatSound=="1" && CustomChatSound_URL!="") {
	CHATSOUND = new Audio(CustomChatSound_URL);
	CHATSOUND.volume=0.6;
}

// optional chat joining message

if (UI_JoinText=="1") {
	JoinText_Message=="" ? JoinText_Message="joined" : '';
	socket.emit("chatMsg", {msg: '/me '+JoinText_Message});
}

// optional chat leaving message

if (UI_LeaveText=="1") {
	LeaveText_Message=="" ? LeaveText_Message="left" : '';
	$(window).unload(function() {
		socket.emit("chatMsg", {msg: '/me '+LeaveText_Message});
	});
}

// adding player control buttons

if (UI_PlayerOptions=="1") {
	if (UI_FullTitleBar=="1") {
		switchdescr = $('<button id="switchdescr" class="btn btn-sm btn-default" />')
		  .attr('title', 'Switch description')
		  .html('<span class="glyphicon glyphicon-info-sign"></span>')
		  .appendTo("#playercontrols")
		  .on("click", function() {
			DEFDESCR = DEFDESCR ? false : true;
			showInfo();
		  });
	}

	hideplayer = $('<button id="hideplayer" class="btn btn-sm btn-default" title="Hide player" />')
	  .html('<span class="glyphicon glyphicon-ban-circle"></span>')
	  .appendTo("#playercontrols")
	  .on("click", function() {
		$("#ytapiplayer").hasClass('covered') ? showPlayer() : coverPlayer();
	  });

	muteplayer = $('<button id="muteplayer" class="btn btn-sm btn-default" title="Mute player" />')
	  .append('<span class="glyphicon glyphicon-volume-off" />')
	  .appendTo("#playercontrols")
	  .on("click", function() {
		if (muteplayer.hasClass('btn-danger')) {
			muteplayer.removeClass('btn-danger').attr('title', 'Mute player');
			unmutePlayer();
		} else {
			muteplayer.addClass('btn-danger').attr('title', 'Unmute player');
			mutePlayer();
		}
	  });

	socket.on("changeMedia", toggleMuteBtn);
	toggleMuteBtn();

	savemedia = $('<button id="savemedia" class="btn btn-sm btn-default" title="Download" />')
	  .html('<span class="glyphicon glyphicon-floppy-save"></span>')
	  .appendTo("#playercontrols")
	  .on("click", function() {
		downloadCurrentItem();
	  });
}

// adding player transformation buttons

if (UI_TransformationBtns=="1") {
	transcontrols = $('<div id="transcontrols" class="btn-group pull-right" />')
	  .appendTo("#videowrap");

	mirrorxbtn = $('<button id="mirrorx-btn" class="btn btn-sm btn-default" title="Mirror X player" />')
 	 .html('<span class="glyphicon glyphicon-resize-horizontal"></span>')
 	 .appendTo(transcontrols)
 	 .on("click", function() {
		if ($("#ytapiplayer").hasClass('mX')) {
			$("#ytapiplayer").removeClass('mX');
		} else {
			$("#ytapiplayer").addClass('mX');
		}
 	 });

	mirrorybtn = $('<button id="mirrory-btn" class="btn btn-sm btn-default" title="Mirror Y player" />')
 	 .html('<span class="glyphicon glyphicon-resize-vertical"></span>')
 	 .appendTo(transcontrols)
 	 .on("click", function() {
		if ($("#ytapiplayer").hasClass('mY')) {
			$("#ytapiplayer").removeClass('mY');
		} else {
			$("#ytapiplayer").addClass('mY');
		}
 	 });

	rotatebtn = $('<button id="rotate-btn" class="btn btn-sm btn-default" title="Rotate player" />')
 	 .html('<span class="glyphicon glyphicon-repeat"></span>')
 	 .appendTo(transcontrols)
 	 .on("click", function() {
		if ($("#ytapiplayer").hasClass('rotate')) {
			$("#ytapiplayer").removeClass('rotate');
		} else {
			$("#ytapiplayer").addClass('rotate');
		}
 		 });

	verticalbtn = $('<button id="vertical-btn" class="btn btn-sm btn-default" title="Vertical player" />')
	  .html('<span class="glyphicon glyphicon-arrow-up"></span>')
 	 .appendTo(transcontrols)
 	 .on("click", function() {
		if ($("#ytapiplayer").hasClass('vertical')) {
			$("#ytapiplayer").removeClass('vertical');
			this.attr('title', 'Vertical player');
		} else {
			$("#ytapiplayer").addClass('vertical');
			this.attr('title', 'Horizontal player');
		}
 	 });
}

// adding chat buttons wrapping

if (UI_FontsBtn=="1" || UI_EmotesBtn=="1" || UI_CommandsBtn=="1" || UI_ChatVoices=="1" || UI_ModPanel=="1") {
	chatcontrols = $('<div id="chatcontrols" class="btn-group" />')
	  .appendTo("#chatwrap");
}

// adding chat fonts button

if (UI_FontsBtn=="1") {
	fontsbtn = $('<button id="fonts-btn" class="btn btn-sm btn-default" title="Display fonts panel" />')
	  .html('<i class="glyphicon glyphicon-font"></i></button>')
	  .appendTo(chatcontrols)
	  .on("click", function() {
		toggleDiv(fontspanel)
	  });
}

// adding chat emotes button

if (UI_EmotesBtn=="1") {
	emotesbtn = $('<button id="emotes-btn" class="btn btn-sm btn-default" title="Display emotes panel" />')
	  .html('<i class="glyphicon glyphicon-picture"></i></button>')
	  .appendTo(chatcontrols)
	  .on("click", function() {
		toggleDiv(emotespanel);
		(UI_ChannelCache!="1" && !EMOTES) ? showEmotes() : '';
	  });
}

// adding chat commands button

if (UI_CommandsBtn=="1" && UI_UserCommands=="1") {
	chathelpbtn = $('<button id="chathelp-btn" class="btn btn-sm btn-default" />')
	  .text('Chat Commands')
	  .appendTo(chatcontrols)
	  .on("click", function() {
		showChatHelp();
	  });
}

// adding chat sounds toggle button and control panel

if (UI_ChatVoices=="1") {
	voicesbtn = $('<button id="voices-btn" class="btn btn-sm btn-default" title="Mute chat voices" />')
	  .html('<i class="glyphicon glyphicon-volume-down"></i></button>')
	  .appendTo(chatcontrols)
	  .on("click", function() {
		if(!SOUNDSPANEL) {
			showSoundsPanel();
			SOUNDSPANEL = true;
		} else {
			$("#sounds-dropdown").remove();
			SOUNDSPANEL = false;
		}
	  });
	VOICES=true;
}

// adding moderators panel button

if (UI_ModPanel=="1") {
	modbtn = $('<button id="mod-btn" class="btn btn-sm btn-default" title="Show moderators panel" />')
	  .html('<i class="glyphicon glyphicon-tasks"></i></button>')
	  .appendTo(chatcontrols)
	  .on("click", function() {
		showModPanel();
	  });

	socket.on("rank", toggleModPanel);
	toggleModPanel();
}

// creating fonts and emotes main row

if (UI_FontsBtn=="1" || UI_EmotesBtn=="1") {
	chatpanel = $('<div id="chatpanel" class="row" />')
	  .insertBefore("#playlistrow");
}

// adding fonts panel

if (UI_FontsBtn=="1") {
	fontspanel = $('<div id="fontspanel" style="display:none" />')
	  .appendTo(chatpanel);
	fontsbtnwrap = $('<div id="fontsbtnwrap" />')
	  .appendTo(fontspanel);

	FontsArray = [
		['background:white', 'white', '■'],
		['background:gold', 'yellow', '■'],
		['background:orange', 'orange', '■'],
		['background:#FFBBFF', 'pink', '■'],
		['background:red', 'red', '■'],
		['background:limegreen', 'lime', '■'],
		['background:green', 'green', '■'],
		['background:aqua', 'aqua', '■'],
		['background:blue', 'blue', '■'],
		['background:#660099', 'violet', '■'],
		['background:#660000', 'brown', '■'],
		['background:silver', 'silver', '■'],
		['background:black', 'black', '■'],
		['background:black; color:white', 'bw', 'a'],
		['background:white; font-weight:bold; color:black', 'b', 'B'],
		['background:white; font-style:italic; color:black', 'i', 'I'],
		['background:white; text-decoration:underline; color:black', 'u', 'U'],
		['background:white; text-decoration:line-through; color:black', 's', 's'],
		['background:gold; color:red', 'd', 'D'],
		['background:black; color:gold; font-family:impact, sans-serif', 'f', 'F'],
		['background:black; color:white', 'sp', 'sp'],
		['background:white; color:black; border:solid 2px red', '\\/', '\[\/\]'],
	];

	for (i in FontsArray) {
		$('<button id="cbtn'+i+'" onclick="insertText(\'['+FontsArray[i][1]+']\')" />')
	  	  .addClass('btn btn-default').attr('style', FontsArray[i][0]).text(FontsArray[i][2])
	 	  .appendTo(fontsbtnwrap);
		  i%13==12 ? fontsbtnwrap.append('<br />') : false;
	}

	if (UI_UnicodeChars=="1" && UnicodeChars_Array.length>0) {
		unibtnwrap = $('<div id="unibtnwrap" />')
		  .appendTo(fontspanel);
		for (i in UnicodeChars_Array) {
			btn=$('<button onclick="insertText(\''+UnicodeChars_Array[i]+'\')" />')
			  .addClass('btn btn-default').text(UnicodeChars_Array[i]);
			unibtnwrap.append(btn);
			i%13==12 ? unibtnwrap.append('<br />') : false;
		}
	}
}

// adding emotes panel

if (UI_EmotesBtn=="1") {
	emotespanel = $('<div id="emotespanel" style="display:none" />')
	  .appendTo(chatpanel);
	UI_ChannelCache=="1" ? showEmotes() : '';
}

// unchecking temporary media checkbox for registered users

if (UI_DefaultNonTemp=="1") {
	($(".add-temp").prop('checked') && CLIENT.rank>0) ? $(".add-temp").prop('checked', false) : '';
}

// adding playlist options for moderators button

advplaylist = $('<button id="advplaylist" class="btn btn-sm btn-default" title="Advanced options" />')
  .append('<span class="glyphicon glyphicon-wrench"></span>')
  .insertBefore("#qlockbtn")
  .on("click", function() {
	toggleDiv(advplcontrols);
  });

// adding advanced playlist options form

advplcontrol = $('<div id="advplcontrol" class="col-lg-12 col-md-12" />')
 .insertAfter("#playlistmanager");

advplcontrols = $('<div id="advplcontrols" class="btn-group pull-right" style="display:none" />')
  .appendTo(advplcontrol);

// adding advanced playlist options buttons

playnextbtn = $('<button id="playnext-btn" class="btn btn-default">Play next</button>')
  .appendTo(advplcontrols)
  .on("click", function() {
	socket.emit("playNext");
  });

addrandombtn = $('<button id="addrandom-btn" class="btn btn-default">Add random</button>')
  .appendTo(advplcontrols)
  .on("click", function() {
	addRandomItem();
  });

bumplastbtn = $('<button id="bumplast-btn" class="btn btn-default">Bump last</button>')
  .appendTo(advplcontrols)
  .on("click", function() {
	a=$("#queue").children().length;
	b=$("#queue .queue_entry:nth-child("+a+")").data("uid");
	socket.emit("moveMedia", {from:b, after:PL_CURRENT});
  });

deletelastbtn = $('<button id="deletelast-btn" class="btn btn-default">Delete last</button>')
  .appendTo(advplcontrols)
  .on("click", function() {
	if (confirm('Are you sure to delete last item?')) {
		a=$("#queue").children().length;
		b=$("#queue .queue_entry:nth-child("+a+")").data("uid");
		socket.emit("delete", b);
	}
  });

toggleAdvancedPl();

// adding playlist expanding button

expandbtn = $('<button id="expand-btn" class="btn btn-sm btn-default" title="Expand playlist" />')
  .append('<span class="glyphicon glyphicon-resize-full"></span>')
  .prependTo("#videocontrols")
  .on("click", function() {
	expandQueue();
  });

// adding playlist scrolling button

scrollbtn = $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll playlist to current item" />')
  .append('<span class="glyphicon glyphicon-hand-right"></span>')
  .prependTo("#videocontrols")
  .on("click", function() {
	scrollQueue();
  });

// adding contributors button

contribbtn = $('<button id="contrib-btn" class="btn btn-sm btn-default" title="Contributors list" />')
  .append('<span class="glyphicon glyphicon-user"></span>')
  .prependTo("#videocontrols")
  .on("click", function() {
	showContributors();
  });

// adding pin-up button

pinupbtn = $('<button id="pinup-btn" class="btn btn-sm btn-default" title="Pin playlist to player" />')
  .append('<span class="glyphicon glyphicon-pushpin"></span>')
  .prependTo("#videocontrols")
  .on("click", function() {
	!PINNED ? pinUp() : unPin();
	scrollQueue();
	scrollChat();
  });

// extending 'Get URLs' function

if (UI_ExtendedGetURLs=="1") {
	$("#getplaylist").unbind()
	  .on("click", function() {
		getPlaylistURLs();
	});
}

// adding background image to empty playlistrow corner

if (UI_EmptyCornerBackground=="1") {
	a=Math.round(Math.random()*(EmptyCornerBackground.length-1));
	$("#playlistrow").css({
		'background-image':'url("'+EmptyCornerBackground[a]+'")', 'background-repeat':'no-repeat'
	});
}

// adding layout configuration panel button

layoutbtn = $('<button id="layout-btn" class="btn btn-sm btn-default btn-success pull-right" />')
  .html('<span class="glyphicon glyphicon-cog"></span> Layout')
  .prependTo("#leftpane")
  .on("click", function() {
	toggleConfigPanel();
  });

// adding media database and gallery wrap

if (UI_ChannelDatabase=="1" || UI_ChannelGalleries=="1") {
	leftpanecontrols = $('<div id="leftpanecontrols" class="btn-group pull-left" />')
 	 .insertAfter(layoutbtn);
}

// adding media database button

if (UI_ChannelDatabase=="1") {
	dbbtn = $('<button id="db-btn" class="btn btn-sm btn-default">Channel Database</button>')
	  .appendTo(leftpanecontrols)
	  .on("click", function() {
		toggleDiv(dbwrap);
		!CHANDB ? createDatabase() : '';
	  });
}

// adding galleries button

if (UI_ChannelGalleries=="1") {
	gallerybtn = $('<button id="gallery-btn" class="btn btn-sm btn-default">Channel Galleries</button>')
	  .appendTo(leftpanecontrols)
	  .on("click", function() {
		toggleDiv(gallerywrap);
		!GALLERY ? createGallery() : '';
	  });
}

// adding layout configuration well

configwrap = $('<div id="configwrap" class="col-lg-12 col-md-12" />')
  .appendTo("#leftpane-inner");
configwell = $('<div id="config-well" class="well form-horizontal" />')
  .appendTo(configwrap);

// adding layout configuration form

configform = $('<div id="configform" class="form-group" />')
  .appendTo(configwell);

$('<div class="col-lg-5 col-md-5">Global layout</div>')
  .appendTo(configform);
configbtnwrap = $('<div id="configbtnwrap" class="col-lg-7 col-md-7" />')
  .appendTo(configform);

configbtn = $('<button id="config-btn" class="btn btn-default">Click to configure</button>')
  .appendTo(configbtnwrap)
  .on("click", function() {
	showConfig();
  });

configbtnwrap.append('<br />');
fluidlayout = $('<label class="checkbox-inline">Fluid </label>')
  .appendTo(configbtnwrap);
$('<input type="checkbox" id="fluid-layout" value="no" />')
  .appendTo(fluidlayout)
  .on("click", function() {
	toggleFluidLayout();
  });

minlayout = $('<label class="checkbox-inline">Minimized </label>')
  .appendTo(configbtnwrap);
$('<input type="checkbox" id="min-layout" value="no" />')
  .appendTo(minlayout)
  .on("click", function() {
	toggleMinLayout()
  });

// adding selector with player display modes

if (UI_DisplayModeSel=="1") {
	modeform = $('<div id="modeform" class="form-group" />')
	  .appendTo(configwell);
	$('<div class="col-lg-5 col-md-5">Display mode</div>')
	  .appendTo(modeform);
	modewrap = $('<div id="modewrap" class="col-lg-7 col-md-7" />')
	  .appendTo(modeform);
	modesel = $('<select id="mode-sel" class="form-control" />')
	  .append('<option value="syMode">synchtube mode</option>')
	  .append('<option value="kMode">cinema mode</option>')
	  .append('<option value="chMode">chatroom mode</option>')
	  .append('<option value="sMode">silent mode</option>')
	  .append('<option value="rMode">radio mode</option>')
	  .appendTo(modewrap)
	  .on("change", function() {
		$("#config-btn, #configbtnwrap br").hide();
		$("#min-layout").parent().hide();
		PLAYER.type=="jw" ? refreshPlayer() : '';
		setMode(modesel.val());
		scrollQueue();
		scrollChat();
		showPlayer();
	  });

	socket.on("changeMedia", setModeAfterVideoChange);
}

// adding selector with channel themes

themeform = $('<div id="themeform" class="form-group" />')
  .appendTo(configwell);
$('<div class="col-lg-5 col-md-5">Personal theme</div>')
  .appendTo(themeform);
themewrap = $('<div id="themewrap" class="col-lg-7 col-md-7" />')
  .appendTo(themeform);

themesel = $('<select id="theme-sel" class="form-control" />')
  .append('<option value="/css/themes/light.css"># Light</option>')
  .append('<option value="/css/themes/bootstrap-theme.min.css"># Bootstrap</option>')
  .append('<option value="/css/themes/slate.css"># Slate</option>')
  .append('<option value="/css/themes/cyborg.css"># Cyborg</option>')
  .appendTo(themewrap)
  .on("change", function() {
	USERTHEME=themesel.val();
	setUserCSS();
	setOpt(StoragePrefix+"_theme", USERTHEME);
  });

if (ThemesCSS.length>0) {
	themesel.append('<option value="" class="theme-header" disabled>additional themes</option>');
}
for (i in ThemesCSS) {
	themesel.append('<option value="'+ThemesCSS[i][1]+'">'+ThemesCSS[i][0]+'</option>');
}

if (UI_ChannelTheme=="1" && ChannelThemeURL!="") {
	themesel.prepend('<option value="" class="theme-header" disabled>default themes</option>')
	  .prepend('<option value="'+ChannelThemeURL+'"># Channel Theme</option>')
	  .prepend('<option value="" class="theme-header" disabled>main theme</option>');
}

themesel.val(USERTHEME);

// adding temporary hiding options

hideform = $('<div id="hideform" class="form-group" />')
  .appendTo(configwell);

$('<div class="col-lg-5 col-md-5">Temporary hide</div>')
  .appendTo(hideform);
hidewrap = $('<div id="hidewrap" class="col-lg-7 col-md-7" />')
  .appendTo(hideform);

hidemotd = $('<label class="checkbox-inline">MOTD </label>')
  .appendTo(hidewrap);
$('<input type="checkbox" id="hide-motd" value="no" >')
  .appendTo(hidemotd)
  .on("click", function() {
	toggleDiv("#motdrow");
  });

hideann = $('<label class="checkbox-inline">Announcements </label>')
  .appendTo(hidewrap);
$('<input type="checkbox" id="hide-ann" value="no" />')
  .appendTo(hideann)
  .on("click", function() {
	toggleDiv("#announcements");
  });

hidetitle = $('<label class="checkbox-inline">Title </label>')
  .appendTo(hidewrap);
$('<input type="checkbox" id="hide-title" value="no" />')
  .appendTo(hidetitle)
  .on("click", function() {
	toggleDiv(titlerow);
	toggleDiv("#currenttitle");
  });

hidepl = $('<label class="checkbox-inline">Playlist </label>')
  .appendTo(hidewrap);
$('<input type="checkbox" id="hide-pl" value="no" />')
  .appendTo(hidepl)
  .on("click", function() {
	toggleDiv("#queue");
	toggleDiv("#plmeta");
  });

hidehf = $('<label class="checkbox-inline">H&F </label>')
  .appendTo(hidewrap);
$('<input type="checkbox" id="hide-hf" value="no" />')
  .appendTo(hidehf)
  .on("click", function() {
	$("nav").css('display')!="none" ? headerMode("fixed") : headerMode(USERCONFIG.header);
	toggleDiv("nav");
	toggleDiv("footer");
  });

// adding fast commands and volume buttons

if (UI_QuickCommandsBtns=="1" || UI_VolumeBtns=="1") {
	funcbtnform = $('<div id="funcbtnform" class="form-group" />')
	  .appendTo(configwell);
	$('<div class="col-lg-5 col-md-5">Command buttons</div>')
 	 .appendTo(funcbtnform);
	funcbtnwrap = $('<div id="funcbtnwrap" class="col-lg-7 col-md-7" />')
 	 .appendTo(funcbtnform);

	btnsgroup = $('<div id="funcbtngroup" class="btn-group" />')
	  .appendTo(funcbtnwrap);

	if (UI_QuickCommandsBtns=="1") {
		clearbtn = $('<button id="clear-btn" class="btn btn-default btn-sm">/clear</button>')
		  .appendTo(btnsgroup)
		  .on("click", function() {
			if (confirm('Are you sure to clear the chat window?')) {
				socket.emit("chatMsg", {msg: '/clear'});
			}
		  });
		afkbtn = $('<button id="afk-btn" class="btn btn-default btn-sm">/afk</button>')
		  .appendTo(btnsgroup)
		  .on("click", function() {
			socket.emit("chatMsg", {msg: '/afk'});
		  });

		socket.on("rank", toggleClearBtn);
		toggleClearBtn();
	}

	if (UI_VolumeBtns=="1") {
		voldownbtn = $('<button id="voldown-btn" class="btn btn-default btn-sm">vol -</button>')
		  .appendTo(btnsgroup)
		  .on("click", function() {
			a=PLAYER.player.getVolume();
			PLAYER.player.setVolume(a-1);
		  });
		volupbtn = $('<button id="volup-btn" class="btn btn-default btn-sm">vol +</button>')
		  .appendTo(btnsgroup)
		  .on("click", function() {
			a=PLAYER.player.getVolume();
			PLAYER.player.setVolume(a+1);
		  });

		socket.on("changeMedia", toggleVolBtn);
		toggleVolBtn();
	}
}

// adding media database layout

if (UI_ChannelDatabase=="1" && ChannelDatabase_URL=="") {
	dbwrap = $('<div id="dbwrap" class="col-lg-12 col-md-12" style="display:none" />')
	  .insertBefore(configwrap);
	dbwell = $('<div id="db-well" class="well" />')
	  .appendTo(dbwrap);

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

// adding galleries layout

if (UI_ChannelGalleries=="1") {
	gallerywrap = $('<div id="gallerywrap" class="col-lg-12 col-md-12" style="display:none" />')
	  .appendTo("#leftpane-inner");
	gallerywell = $('<div id="gallery-well" class="well" />')
	  .appendTo(gallerywrap);
	if (ChannelGalleries_Array.length<1) {
		ChannelGalleries_Array=[['Japan gallery', 'http://imgur.com/a/185S2/embed']];
	}
	UI_ChannelCache=="1" ? createGallery() : '';
}

// rearranging footer

html='<br />CyTube Plus 4.0 · Copyright &copy; 2013-2014 Zimny Lech · '
  + 'Free source on <a href="http://github.com/zimny-lech/CyTube-Plus" target="_blank">GitHub</a> · '
  + '<a href="http://github.com/zimny-lech/CyTube-Plus/wiki" target="_blank">Wiki</a>';
$(".credit").append(html);

if (UI_CustomRightFooter=="1") {
	rightfooter = $('<span id="rightfooter">'+CustomRightFooter_HTML+'</span>')
	  .appendTo("footer .container");
}

if (UI_CustomFooter=="1" || UI_UserStatistics=="1") {
	leftfooter = $('<span id="leftfooter">'+CustomFooter_HTML+'</span>')
	  .appendTo("footer .container");
}

// updating user visits

USERVISITS++;
setOpt(StoragePrefix+"_visits", USERVISITS);

if (UI_UserStatistics=="1") {
	if (UI_CustomFooter=="1" && CustomFooter_HTML!="") {
		$('<br /><br />').appendTo(leftfooter);
	}
	$('<span>My visits: </span><span class="badge footer-badge">'+USERVISITS+'</span><span> / </span>')
	  .appendTo(leftfooter);
	$('<span>Current online time: </span><span id="onlinetime" class="badge footer-badge">0:00</span>')
	  .appendTo(leftfooter);
	setInterval(function() {onlineTime()}, 60000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Chat and window extensions and events ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// client-side chat buffer

_chatBuffer=addChatMessage;
addChatMessage=function(data) {
	if (UI_IndependentFilters=="1") {
		for (i in IndependentFilters) {		
			data.msg=data.msg.replace(IndependentFilters[i].before, IndependentFilters[i].after);
		}
	}
	if (UI_UserSpecialSigns=="1") {
		if (UserSpecialSigns_Array[data.username]!=undefined) {
			data.msg=UserSpecialSigns_Array[data.username]+' '+data.msg;
		}
	}
	if (data.msg.indexOf("/reload")>-1) {
		location.reload();
	}
	if (VOICES && (!(data.username in MUTEDVOICES) || MUTEDVOICES[data.username]=="0")) {
		for (i in ChatVoices_Array) {
			if (data.msg.indexOf(i)>-1) {
				CHATV=new Audio(ChatVoices_Array[i]);
				CHATV.volume=0.4;
				CHATV.play();
			}	
		}
	}
	_chatBuffer(data);
}

// fix formatting and sending chat messages

$("#chatline, #chatbtn").unbind();

$("#chatline").on("keydown", function(ev) {
	if (ev.keyCode==13) {
		if (CHATTHROTTLE) {
			return;
		}
		msg0=$("#chatline").val();
		msg=$("#chatline").val();
		if (msg0.indexOf("/reload")>-1 && CLIENT.rank<3) {
			alert('You have no permission to reload channel script.');
			return;
		}
		if (msg.trim()) {
			msg=prepareMessage(msg.trim());
			meta={};
			if (COMMAND) {
				socket.emit("chatMsg", {msg:msg0});
				msg='➥ '+msg;
				COMMAND=false;
			}
			if (USEROPTS.adminhat && CLIENT.rank>=255) {
				msg='/a '+msg;
			} else if (USEROPTS.modhat && CLIENT.rank>=Rank.Moderator) {
				meta.modflair=CLIENT.rank;
			}
			if (CLIENT.rank>=2 && msg.indexOf("/m ")===0) {
				meta.modflair=CLIENT.rank;
				msg=msg.substring(3);
			}
			socket.emit("chatMsg", {msg:msg, meta:meta});
			userChatStats(msg0);
			CHATHIST.push($("#chatline").val());
			CHATHISTIDX=CHATHIST.length;
			$("#chatline").val('');
		}
		return;
	} else if (ev.keyCode==9) {
		chatTabComplete();
		ev.preventDefault();
		return false;
	} else if (ev.keyCode==38) {
		if (CHATHISTIDX==CHATHIST.length) {
			CHATHIST.push($("#chatline").val());
		}
		if(CHATHISTIDX>0) {
			CHATHISTIDX--;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	} else if (ev.keyCode==40) {
		if (CHATHISTIDX<CHATHIST.length-1) {
			CHATHISTIDX++;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	}
});

$("#chatbtn").on("click", function() {
	msg0=$("#chatline").val();
	msg=$("#chatline").val();
	if (msg0.indexOf("/reload")>-1 && CLIENT.rank<3) {
		alert('You have no permission to reload channel script.');
		return;
	}
	if (msg.trim()) {
		msg=prepareMessage(msg.trim());
		if (COMMAND) {
			socket.emit("chatMsg", {msg:msg0});
			msg='➥ '+msg;
			COMMAND=false;
		}
		socket.emit("chatMsg", {msg:msg});
		userChatStats(msg0);
		$("#chatline").val('');
	}
});

// fix window resizing in cinema and radio mode and if player is centered

$(window).resize(function() {
	if (modesel.val()=="chMode" || modesel.val()=="sMode" || modesel.val()=="rMode") {
		setMode(modesel.val());
	}
	USERCONFIG.player=="center" ? playerLocation("center") : '';
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setting global sockets

socket.on("channelOpts", setUserCSS);

socket.on("changeMedia", fixChatHeight);

socket.on("rank", toggleAdvancedPl);

// setting final layout after loading

setLayout();
scrollChat();
scrollQueue();

LOADED=true;

// adding external script file

if (UI_ExternalScript=="1" && ExternalScript_URL!="") {
	$.getScript(ExternalScript_URL);
}

/* ----- END OF LIBRARY ----- */
