'use strict';$(document).ready(function(){// NAV
// MODAL
// FORMS
// Process form
// SMOOTH SCROLLING
$('#hamburger').click(function(){return $(this).toggleClass('open'),$('#nav').toggleClass('nav-open'),!1}),$('.project-more').click(function(){// Get variables and data
var a=$(this).closest('.project-item'),b=a.find('.project-item-thumbnail').html(),c=a.find('.button').attr('href'),d=a.find('h3').text(),e=a.find('.project-stack').text(),f=a.find('.project-desc').text(),g=a.find('.project-item-features ul').html(),h=$('#modal').find('.hamburger');c=c?'<a href="'+c+'" class="button project-link" target="_blank">visit this site<span> &raquo;</span></a>':'';// Modal content markup
var i='<div id="project" class="project-item">                                     <div class="project-item-details">                                         <h1 class="project-title">'+d+'</h1>                                         <p class="project-stack">'+e+'</p>                                         '+c+'                                     </div>                                     <div class="project-item-thumbnail">'+b+'</div>                                     <div class="project-item-features">                                         <p class="project-desc">'+f+'</p><br>                                         <h3>Features</h3>                                         <ul>'+g+'</ul>                                     </div>                                 </div>';// Open project deatils
// prevent default
return $('#modal').append(i).delay(100).fadeIn(300),$('body').addClass('no-scroll'),$(h).click(function(){return $('#modal').fadeOut(300),$('#project').remove(),$('body').removeClass('no-scroll'),!1}),!1}),$('.sdl-form').simple_dynamic_labels(),$('#contactform').on('submit',function(){var a=$(this).attr('action'),b=$(this).serialize();// Send AJAX request
// Prevent default
return $.ajax({type:'post',url:a,data:$(this).serialize(),// Give user feedback
beforeSend:function a(){$('input[type="submit"]').addClass('disabled').val('Sending...')},// On success
success:function b(a){$('#contactform').html(a),$('input[type="submit"]').addClass('disabled').val('Drop a line'),$bodyHeight=$('body').outerHeight(),$contactHeight=$('#contact').outerHeight(),$('body').css({"margin-bottom":$contactHeight}),$('html, body').animate({scrollTop:$bodyHeight+$contactHeight},1e3)},// On error
error:function b(a){$('#form-results').html(a)}}),!1}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$('[name='+this.hash.slice(1)+']'),a.length)return $('html, body').animate({scrollTop:a.offset().top},500),$('#nav, .hamburger-nav').removeClass('nav-open'),$('#hamburger').removeClass('open'),!1}})})}),$.fn.simple_dynamic_labels=function(){// Find inputs
var a=$(this).find('input, textarea, select'),b=$(this).find('label.sdl-label');// Find labels
$(b).parent().css('position','relative');// Set active class
// For each input
$(a).each(function(){// On focus
// On blur
$(this).focus(function(){$(this).val()||$(this).parent().find(b).addClass('has-value')}),$(this).blur(function(){$(this).val()?$(this).parent().find(b).addClass('has-value'):$(this).parent().find(b).removeClass('has-value')}),$(this).val()&&$(this).parent().find(b).addClass('has-value')})};// Tooltips
var tooltips=document.querySelectorAll('[data-qt]');// If qt-tooltip elements exist
if(0<tooltips.length){tooltips.forEach(function(a){// Vars
var b,c;// Create qt-tooltip & Append to element
a.innerHTML+='<span class="qt-tooltip" aria-hidden="true">'+a.dataset.qt+'</span>';// Get qt-tooltip
var d=a.getElementsByClassName('qt-tooltip')[0];// On mouseOver (hover)
// On mouseOut
a.onmouseover=function(){// Cal qt-tooltip position
var a=d.offsetWidth;// Show tooltip
// Animate tooltip
b=setTimeout(function(){d.style.display='block',d.style.left='50%',d.style.marginLeft='-'+a/2+'px'},250),c=setTimeout(function(){d.style.opacity='1'},500)},a.onmouseout=function(){// Hide tooltip
// Cancel actions
d.style.opacity='0',d.style.left='-9999px',d.style.marginLeft='0',clearTimeout(b),clearTimeout(c)}});// Add css to document
var style=document.createElement('style'),css='[data-qt]{position:relative}.qt-tooltip,.qt-tooltip:before{position:absolute;background:#222}.qt-tooltip{display:block;line-height:1;margin-top:10px;top:100%;left:-9999px;padding:10px;pointer-events:none;color:#fff;text-decoration:none;white-space:nowrap;font-size:.75rem;opacity:0;z-index:1;border-radius:4px;-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out}.qt-tooltip:before{content:\'\';display:block;top:-3px;left:50%;margin-left:-5px;width:10px;height:10px;transform:rotate(45deg)}';style.innerHTML=css,document.head.appendChild(style)}
