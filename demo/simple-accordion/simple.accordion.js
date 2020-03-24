// Document Ready
$( document ).ready(function() {
    // Add function to container element
    $('.simple-accordion').simple_accordion();
});
// Simple Accordion funciton
$.fn.simple_accordion = function(){
    // Set your action element
    var action = $('.simple-accordion--action');
    // Set you hidden content element
    var moredetails = $('.simple-accordion--content');
    $(action).click(function(){
        if (!$(this).hasClass('active')){
            $(action).removeClass('active');
            $(moredetails).slideUp(150).removeClass('active');
            $(this).parent().find(moredetails).slideDown(150).addClass('active');
            $(this).addClass('active');
        } else {
            $(action).removeClass('active');
            $(moredetails).slideUp(150).removeClass('active');
        }
        return false;
    });
};