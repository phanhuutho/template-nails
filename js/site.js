var position_active = 0;
$(document).ready(function(){
    $(".list-inline-item-link").each(function(index,element){
        if($(element).hasClass("active"))
        position_active = index;
    });

    $(".list-inline-item-link").hover(
        function () {
            $(".list-inline-item-link").removeClass("active");
        }, 
        function () {
            var elementActive = $(".list-inline-item-link")[position_active];
            $(elementActive).addClass("active");
        }
    );

    $(".menu-bars button").on("click", function(){
        $(".list-menu").show("slow");
        $(".menu-mobile-tablet, .call-us").hide();
        $(".list-menu .call-us").show();
        $("body").css("overflow","hidden");
    });

    $(".list-menu .btn-close").on("click", function(){
        $(".list-menu").hide();
        $(".menu-mobile-tablet, .call-us").show();
        $("body").css("overflow","auto");
    });
});

function ActiveMenu(ElementId){
    $("#" + ElementId).addClass("active");
}