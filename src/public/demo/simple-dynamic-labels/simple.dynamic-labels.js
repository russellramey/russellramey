// Document Ready
$( document ).ready(function() {
    $('.sdl-form').simple_dynamic_labels();
});
// Simple Dynamic Labels
$.fn.simple_dynamic_labels = function (){

    // Find inputs
    var inputs = $(this).find('input[type="text"], input[type="email"], input[type="password"], input[type="tel"], input[type="number"], textarea, select');

    // Find labels
    var labels = $(this).find('label.sdl-label');
        $(labels).parent().css('position', 'relative');

    // Set active class
    var active = "has-value";

    // For each text based input
    $(inputs).each(function(){
        // On focus
        $(this).focus(function() {
            if(!$(this).val()) {
                $(this).parent().find(labels).addClass(active);
            }
        });

        // On blur
        $(this).blur(function() {
            if($(this).val()) {
                $(this).parent().find(labels).addClass(active);
            } else {
                $(this).parent().find(labels).removeClass(active);
            }
        });

        // Has value
        if($(this).val()) {
            $(this).parent().find(labels).addClass(active);
        }
    });

    // Radio
    $(this).find("input[type=checkbox]").on('change', function () {
        // Toggle current selected checkbox
        $(this).parent().toggleClass("selected");
        return false;
    });

    // Checkbox
    $(this).find("input[type=radio]").on('change', function () {
        // Get all .input-radios from parent
        var options = $(this).parent().parent().find('.sdl-radio');
        // Remove all 'selected' classes
        $(options).removeClass('selected');
        // Toggle current selected radio
        $(this).parent().toggleClass("selected");
        return false;
    });
    
};