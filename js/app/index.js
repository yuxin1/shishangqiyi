/**
 * Created by Administrator on 2017/2/20.
 */
$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>40){
            $(".navbox").slideDown();
            console.log($(".c-right"));
            $(".c-right").stop(true).animate({"top":"40"},100)
        }else{
            $(".navbox").slideUp();
            $(".c-right").stop(true).animate({"top":"130"},100)
        }
    })
});