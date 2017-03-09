/**
 * Created by luwen on 2017/3/9.
 */
function loginstart(){
    $("body").append('<div class="mask"></div>');
    $("#mask").addClass("mask").fadeIn("slow");
    $("#loginBolck").fadeIn("slow");

}
$("a[class=close_btn]").on("click",function(){
    $("#loginBolck").fadeOut("fast");
    $(".mask").css({display:"none"});
});