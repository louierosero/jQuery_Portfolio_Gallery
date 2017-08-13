$(document).ready(function() {
	$('nav a').on('click', function() {
		
		// Current Class Assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
		
		//  Set Heading Text
		$('h1#heading').text($(this).text());
		
		// Get and Filter Link Text
		var category = $(this).text().toLowerCase().replace(' ','-');
		
		// Remove Hidden Class if 'All Animals' is selected
		if (category == 'all-animals') {
			$('ul#gallery li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function() {
				if (!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// Stop Link Behaviour
		return false;
	});
	
	// Mouse Enter Overlay
	$('ul#gallery li').on('mouseenter', function() {
		// Get Data Attributes Value
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');
		
		// Validation
		if(desc == null) {
			desc = 'Click to Enlarge.';
		}
		
		if(title == null) {
			title = '';
		}
		
		// Create Overlay <DIV>
		$(this).append('<div class="overlay"></div>');
		
		// Get the Overlay <DIV>
		var overlay = $(this).children('.overlay');
		
		// Add HTML to Overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		
		// Fade in Overlay
		overlay.fadeIn();
	});
	
	// Mouse Leave Overlay
	$('ul#gallery li').on('mouseleave', function() {
		// Create Overlay <DIV>
		$(this).append('<div class="overlay"></div>');
		
		// Get the Overlay <DIV>
		var overlay = $(this).children('.overlay');
		
		// Fade Out Overlay
		overlay.fadeOut();
	});
});