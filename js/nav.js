/* Jquery script to control nav opening and closing */

$(document).ready(function() {
	$('#nav-button').click(function(e) {  /* on click or tap event ... */
		e.preventDefault();  /* prevent the default behaviour - ie. following the link */
		if($('#nav-list').hasClass('nav-hidden')) {  /* check if #nav-list (ul) has a class called 'nav-hidden'. This hides the menu */
			$('#nav-list').removeClass('nav-hidden'); /* if so, remove the 'nav-hidden' class to show the menu */
			$(this).addClass('selected');  /* add a 'selected' class to the toggle button to give a visual clue that a state has changed */
		} else {  /* if doesn't contain class (nav open) */
			$('#nav-list').addClass('nav-hidden');  /* add the nav-hidden class to close the menu */
			$(this).removeClass('selected');  /* remove the 'selected' class on toggle */       
		}
	});
});