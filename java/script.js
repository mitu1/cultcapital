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

	(function humourInit() { //Humour Accordin		
		var humour = $('.humour'),
			dl = humour.find('dl'),
			dt = dl.find('dt'),
			dd = dl.find('dd'),
			down = dt.find('#down'),
			up = dt.find('#up');

		dd.hide(); /* hide all dd tags */
		dd.first().show(); /* Show first dd tag */

		dl.on('click', 'dt', function() {
			$(this).addClass('active').next().slideDown(500).siblings('dd').slideUp(500);
			$(this).siblings('dt').removeClass('active');
			$(this).find('#up').hide();
			$(this).find('#down').slideDown();
			$(this).siblings('dt').find('#up').slideDown();
			$(this).siblings('dt').find('#down').hide();
		});
	})();


	(function ulloInit() { //Ullo Lists
		var main = $('.ullo_banao_space'),
			viewport = main.find('> ul > li:nth-child(1)')
			more = main.find('.more'),
			less = main.find('.less'),
			viewport_height = viewport.find('> ul').height();

		main.find('> ul, > ul > li').css( { 'height': viewport_height});

		more.on('click',function(){
			viewport.animate({ 'margin-top':'-' + viewport_height +'px' },1200);
			$(this).animate({ 'margin-top':'-42px'},500)
		});

		less.on('click',function(){
			viewport.animate({ 'margin-top':'0px' },1200);
			more.animate({ 'margin-top':'0px'}, 500)
		});
	})();

	//Short Stories 
	(function shortStoriesInit() {
		var parent = $('.short_stories'),
				down = parent.find('.down'),
				fakedown = parent.find('.fakedown'),
				fakeup = parent.find('.fakeup'),
				up = parent.find('.up'),
				sp = parent.find('ul'),
				ele = sp.find('li'),
				ele_first = ele.first(),
				ele_height = ele_first.height() + 30,
				current = 1,
				upspace = parent.find('.up_space'),
				downspace = parent.find('.down_space');
				

			ele.each( function () {
				$(this).on('mouseover', function() {
					$(this).prev('li').css({ 'border-color': 'transparent' });
					$(this).css({ 'border-color': 'transparent' });
				});
			});

			ele.each( function () {
				$(this).on('mouseout',function () {
					$(this).prev().css({ 'border-color': '#575656' });
					$(this).css({ 'border-color': '#575656' });
				});
			});

			ele.each(function () { $(this).css({ 'height':ele_height}); }); // Make all li Equal height
			sp.css({ 'height':ele_height*5}); //set parent view posrt to 5 elements of li
			upspace.addClass('disabled').find('p').hide(); //Initally hide up buttons

			down.on('click',function(){
				current++;
				upspace.removeClass('disabled');
				console.log(current);
				ele_first.animate({
					'margin-top':'-='+ ele_height
				});
				if(current==2){
					up.show();
					fakeup.hide();
				}
				else if(current==6){
						fakedown.show();
						down.hide();
						downspace.addClass('disabled');
					};

			});

			up.on('click',function(){
				current--;
				console.log(current);
				ele_first.animate({
					'margin-top':'+='+ ele_height
				});
				if(current==1){
					fakeup.show();
					up.hide();
					upspace.addClass('disabled');
				} 
				else
					if(current==5){
						down.show();
						fakedown.hide();
						downspace.removeClass('disabled');
					}

			});
	})();

})(jQuery);