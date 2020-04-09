$(function(){
    $(".long-model .summary").hide();
    $(".long-model .card").mouseenter(function () {
        $(this).find(".summary").fadeIn("slow");
    }).mouseleave(function () {
        $(this).find(".summary").fadeOut("slow");
    })
    $(".advanced").click(function(){
        $(".checkbox-group").show();
    })
})