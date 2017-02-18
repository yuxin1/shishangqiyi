/**
 * Created by Administrator on 2017/2/18.
 */
$(function(){
    $("#closes").click(function(){
        $(".container").hide();
    });
   $("#sp1 a").hover(function(){
       $(this).css({
           "text-decoration":"underline",
           "color":"blue"
       })
   },function(){
       $(this).css({
           "text-decoration":"none",
           "color":"black"
       })
   });

    $("#sp2 a").hover(function(){
        $(this).css({
            "text-decoration":"underline",
            "color":"white"
        })
    },function(){
        $(this).css({
            "text-decoration":"none"
        })
    })



});