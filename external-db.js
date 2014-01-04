/*
This is external Channel Database configuration file.

Copy this file into your location, configure, and insert URL into main.js 'EmotesBasicURL' variable.
Do not remove anything below configuration array - without necessary functions Channel Database will not load.
*/

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

/* ----- CODE BELOW MUST BE INCLUDED IN EXTERNAL FILE ----- */

// adding Channel Database box

if (UI_ChannelGalleries=="1") {
	$_dbtoggleouter=$('<div id="dbtoggle-outer" class="well well-small span12 row-fluid" />')
 	 .insertBefore($_gallerytoggleouter);
} else {
	$_dbtoggleouter=$('<div id="dbtoggle-outer" class="well well-small span12 row-fluid" />')
  	.appendTo("#leftpane-inner");
}
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
