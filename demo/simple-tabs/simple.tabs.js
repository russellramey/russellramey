// Document Ready
$( document ).ready(function() {
    $('.simple-tabs').simple_tabs();
});
// Simple Tabs
$.fn.simple_tabs = function (){
    $(".simple-tab--nav li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $(".simple-tab--nav li.active").removeClass("active");
            $(this).addClass("active");
            $(".simple-tab--panels li.active").removeClass("active");
            $(".simple-tab--panels li:nth-child("+nthChild+")").addClass("active");
        }
    return false;
    });
};