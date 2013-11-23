// JavaScript Document
$(window).resize(function(){
	if ($(window).width() <= 640){	
		$('#home_link').attr('src','../img/home_video_640px.png');
	}	
});