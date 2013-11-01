(function() {
	
	if (!Modernizr.csstransitions) {
		$('figure').hover(
		function() {
			$('.more-info').animate({ 
				left: 0,
				top: 0
			});
		},
		function() {
			$('.more-info').animate({ 
				left: 200;
			});
		});
		
	}
	
}());
