$(function() {

	var $scrollPosition = 0;
	var $navLi = $('nav li a');
	var $sections = $('.section');
	var offsets = []; //[0, 1800, 2900, 3950, 4980]
		
		
	//add active-line span & set left position
	$('nav ul').append('<span class="active-line"></span>');
	var $magicLine = $('.active-line');
	$magicLine.css('left', $('.is-active').parent().offset().left);
	
		
	// Animate magic line to new position on hover & back to original position off hover
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
	

	// On hover, grab img data from attribute and fade in image
	$('.pin').hover(
		function() {
			var img = "#" + $(this).data('img');
			$(img).fadeIn('slow');
		},
		function() {
			var img = "#" + $(this).data('img');
			$(img).fadeOut('slow');
		}
		);
		

		// For each section, grab its offset.top
		$sections.each(function(i, section){

			var $section = $(section);
	        var $offset = $section.offset();

			offsets.push($offset.top);
		});
		
		
		// on scroll, grab window's scrolltop, use parallax to scroll, and animate navigation during scroll
		$(window).scroll(function(e) {
			$scrollPosition = $(window).scrollTop();
			parallax();
			animateNavigation();
		});


	function parallax() {
		$('#map, #points').css('top', (0 - ((4.92 * $scrollPosition) * 0.1)) + 'px');
	}	

	// check current position against array of section offsets to set navigation magic line
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
	

});


						