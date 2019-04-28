$(document).ready(function(){
    // NAV
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $('#nav').toggleClass('nav-open');
        return false;
    });

    // MODAL
    $('.project-more').click(function(){
        // Get variables and data
        var project = $(this).closest('.project-item'),
            project_thumb = project.find('.project-item-thumbnail').html(),
            project_link = project.find('.button').attr('href'),
            project_title = project.find('h3').text(),
            project_tech = project.find('.project-stack').text(),
            project_desc = project.find('.project-desc').text(),
            project_feat = project.find('.project-item-features ul').html(),
            project_close = $('#modal').find('.hamburger'),
            project_details = '<div id="project" class="project-item"> \
                                    <div class="project-item-details"> \
                                        <h1 class="project-title">' + project_title + '</h1> \
                                        <p class="project-stack">' + project_tech + '</p> \
                                        <a href="' + project_link + '" class="button project-link" target="_blank">visit this site<span> &raquo;</span></a> \
                                    </div> \
                                    <div class="project-item-thumbnail">'+ project_thumb + '</div> \
                                    <div class="project-item-features"> \
                                        <p class="project-desc">' + project_desc + '</p><br> \
                                        <h3>Features</h3> \
                                        <ul>' + project_feat + '</ul> \
                                    </div> \
                                </div>';


        // Open project deatils
        $('#modal').append(project_details).delay(100).fadeIn(300);
        $('body').addClass('no-scroll');

        // Close details
        $(project_close).click(function(){
            $('#modal').fadeOut(300);
            $('#project').remove();
            $('body').removeClass('no-scroll');
            return false;
        });

        // prevent default
        return false;
    });



    // FORMS
    $('.sdl-form').simple_dynamic_labels();
    // Process form
    $('#contactform').on('submit', function(e) {
        var processURL = $(this).attr('action');
        var string = $(this).serialize();
        // Send AJAX request
        $.ajax({
            type: 'post',
            url: processURL,
            data: $(this).serialize(),
            // Give user feedback
            beforeSend: function(){
                $('input[type="submit"]').addClass('disabled').val('Sending...');
            },
            // On success
            success: function (data) {
                //console.log('Submission was successful.');
                $('#contactform').html(data);
                $('input[type="submit"]').addClass('disabled').val('Drop a line');

                // Vars
                $bodyHeight = $('body').outerHeight();
                $contactHeight = $('#contact').outerHeight();

                // Add margin to body
                $('body').css({'margin-bottom' : $contactHeight});
                // Scroll to revel form
                $("html, body").animate({
                    scrollTop: $bodyHeight + $contactHeight
                }, 1000);
            },
            // On error
            error: function (data) {
                //console.log('An error occurred.');
                $('#form-results').html(data);
            },
        });

        // Prevent default
        return false;
    });


    // SHOW EMAIL FORM
    $('li.email a').click(function(){
        // Vars
        var bodyHeight = $('body').outerHeight();
        var contactHeight = $('#contact').outerHeight();

        // Add margin to body
        $('body').css({'margin-bottom' : contactHeight});
        // Scroll to revel form
        $("html, body").animate({
            scrollTop: bodyHeight + contactHeight
        }, 1000);

        // Prevent default
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
