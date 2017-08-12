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
});