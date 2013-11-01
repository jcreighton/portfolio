(function($) {

	var img = null;
	var $scrollPosition = 0;
	var $navLi = $('nav li a');
	var $sections = $('.section');
	var offsets = []; //[0, 1800, 2900, 3950, 4980]
		

	$('nav li').hover(
		function() {
			animateLine($(this));
		},
		function() {
			
			var $orig = $('a.is-active').parent();
			var $origWidth = $orig.width();
			var $origLeft = $orig.offset().left;
			
			$magicLine.stop().animate({
				left: $origLeft,
				width: $origWidth
			});	
		}
	);


	$('.pin').hover(
		function() {
			img = "#" + $(this).data('img');
			$(img).fadeIn('slow');
		},
		function() {
			var img = "#" + $(this).data('img');
			$(img).fadeOut('slow');
		}
		);


		$sections.each(function(i, section){

			var $section = $(section);
	        var offset = $section.offset();

			offsets.push(offset.top);
		});
		
		//on document ready, add active-line span & set left position
		$('nav ul').append('<span class="active-line"></span>');
		var $magicLine = $('.active-line');
		$magicLine.css('left', $('.is-active').parent().offset().left);

		$(window).scroll(function(e) {
			$scrollPosition = $(window).scrollTop();
			parallax();
			animateNavigation();
		});


	function parallax() {
		$('#map, #points').css('top', (0 - ((4.92 * $scrollPosition) * 0.1)) + 'px');
	}	


	function animateNavigation() {
		$.each(offsets, function(i, section) {

            if($scrollPosition >= section && !$($navLi[i]).hasClass('is-active')) {

				$navLi.removeClass('is-active');
                $($navLi[i]).addClass('is-active');
				animateLine($($navLi[i]).parent());
				
			}

		});
	}

	function animateLine(thisObj) {

		var $this = thisObj;
		var $newLeft = $this.offset().left;
		var $newWidth = $this.width();

		$magicLine.stop().animate({
			left: $newLeft,
			width: $newWidth
		});
		
	}
	

})(jQuery);


						