// Document Ready
$( document ).ready(function() {
    // Add function to container element
    $('.simple-expand').simple_expand_collapse();
});

// Expand & Collapes
$.fn.simple_expand_collapse = function(){
    $(this).click(function(){
	    var moredetails = $(this).children('.simple-expand--content'),
	        action = $(this).children('.simple-expand--action'),
	        buttontext = moredetails.is(':visible') ? 'View more +' : 'View less -';

        $(this).find(action).text(buttontext);
        $(this).find(moredetails).slideToggle(150);
        return false;
    });
};