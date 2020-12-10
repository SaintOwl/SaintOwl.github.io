/*ВВЕРХ*/
$('.button').click(function() {
	$('html,body').animate({scrollTop:0},1000);
});


/*ПРОСМОТРЕТЬ ЭЛЕКТРОМОБИЛИ*/
$(".title_button").click(function() {
    $('html,body').animate({scrollTop: $('#view_cars').offset().top}, 1000);
});