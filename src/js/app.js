$(document).ready(function(){
    // FORMS
    $('.sdl-form').simple_dynamic_labels();

    // NAV
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $('#nav').toggleClass('nav-open');
        return false;
    });

    // SMOOTH SCROLLING
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top

          }, 500);

            // Close nav
            $('#nav, .hamburger-nav').removeClass('nav-open');
            $('#hamburger').removeClass('open');
            return false;
          }
        }

      });
    });
});

// Simple Dynamic Labels
$.fn.simple_dynamic_labels = function (){

    // Find inputs
    var inputs = $(this).find('input, textarea, select');

    // Find labels
    var labels = $(this).find('label.sdl-label');
        $(labels).parent().css('position', 'relative');

    // Set active class
    var active = "has-value";

    // For each input
    $(inputs).each(function(){
        // On focus
        $(this).focus(function() {
            if(!$(this).val()) {
                $(this).parent().find(labels).addClass(active);
            }
        });

        // On blur
        $(this).blur(function() {
            if($(this).val() ) {
                $(this).parent().find(labels).addClass(active);
            } else {
                $(this).parent().find(labels).removeClass(active);
            }
        });

        // Has value
        if($(this).val() ) {
            $(this).parent().find(labels).addClass(active);
        }
    });
};


// Tooltips
var tooltips = document.querySelectorAll("[data-qt]");
// If qt-tooltip elements exist
if (tooltips.length > 0){
    tooltips.forEach(function (e){

        // Vars
        var show, hide, fade;
        // Create qt-tooltip & Append to element
        e.innerHTML += '<span class="qt-tooltip" aria-hidden="true">' + e.dataset.qt + '</span>';
        // Get qt-tooltip
        var tooltip = e.getElementsByClassName('qt-tooltip')[0];

        // On mouseOver (hover)
        e.onmouseover = function(){
            // Cal qt-tooltip position
            var tooltip_w = tooltip.offsetWidth;
            var tooltip_pos = '-' + tooltip_w / 2 + 'px';

            // Show tooltip
            show = setTimeout(function(){
                tooltip.style.display = 'block';
                tooltip.style.left = '50%';
                tooltip.style.marginLeft = tooltip_pos;
            }, 250);
            // Animate tooltip
            fade = setTimeout(function(){ tooltip.style.opacity = '1'; }, 500);
        };
        // On mouseOut
        e.onmouseout = function(){
            // Hide tooltip
            tooltip.style.opacity = '0';
            tooltip.style.left = '-9999px';
            tooltip.style.marginLeft = "0";
            // Cancel actions
            clearTimeout(show);
            clearTimeout(fade);
        };
    });

    // Add css to document
    var style = document.createElement('style');
    var css = "[data-qt]{position:relative}.qt-tooltip,.qt-tooltip:before{position:absolute;background:#222}.qt-tooltip{display:block;line-height:1;margin-top:10px;top:100%;left:-9999px;padding:10px;pointer-events:none;color:#fff;text-decoration:none;white-space:nowrap;font-size:.75rem;opacity:0;z-index:1;border-radius:4px;-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out}.qt-tooltip:before{content:'';display:block;top:-3px;left:50%;margin-left:-5px;width:10px;height:10px;transform:rotate(45deg)}";
    style.innerHTML = css;
    document.head.appendChild(style);
}
