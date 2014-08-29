/* ----- DATABASE CONFIGURATION ----- */

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

/* ----- CREATING DATABASE LAYOUT - DO NOT REMOVE ----- */

dbwrap = $('<div id="dbwrap" class="col-lg-12 col-md-12" style="display:none" />').insertBefore(configwrap);
dbwell = $('<div id="db-well" class="well" />').appendTo(dbwrap);

var item_nr=0;
var layer_nr=1;
var opening=new Array();
var item_count=new Array(0);
var count_nr=0;

if (ChannelDatabase.length<1 || ChannelDatabase[0][0]!="") {
	ChannelDatabase.unshift(['', '(various media)']);
}
UI_ChannelCache=="1" ? createDatabase() : '';

/* ----- END OF FILE ----- */
