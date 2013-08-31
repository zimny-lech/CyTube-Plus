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

/* ----- CODE BELOW MUST BE INCLUDED IN EXTERNAL FILE ----- */

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
		list=$('<ul id="l'+layer_nr+'" style="max-height:410px; overflow:auto; margin-bottom:0px"/>');
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
