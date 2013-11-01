(function() {
	
	if (!Modernizr.csstransitions) {
		$('.more-info').hover(
		function() {
			$(this).animate({ left: 0 });
		},
		function() {
			$(this).animate({ left: 200 });
		});
		
	}
	
}());
