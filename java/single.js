 (function($){
 	
	//If jQuery Present Remove "no-js" and Add "js" , 
	//To use ass fallback CSS for brwosers not supporting jQuery
	$('html').removeClass('no-js').addClass('js'); 

	(function menuInit() { //Menu
		var nav = $('#menu_list'),
			nav_list = nav.find('li');

		nav_list.each(function () {
			$(this).click(function () {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			});
		});
	})();

	(function commentBlckInit() {
		var main = $('.comments_list'),
			wid = main.find('#container').width() -180,
			child = main.find('li #child');
			console.log(child);

		main.each(function () {
			child.css({ 'min-width': wid});
		});


	})();

})(jQuery);