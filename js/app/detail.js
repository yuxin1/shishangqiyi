/**
 * Created by Administrator on 2017/2/22.
 */
$(function(){
    $(".btn").hover(function(){
        $(".specitical").stop(true).animate({"width":"200","height":"200"},1000)
    },function(){
        $(".specitical").stop(true).animate({"width":"24","height":"24"},1000)
    });
    $(".good-detail1").hover(function(){
        $(".move").show();

        $(".move").mousemove(function(){

        })
    },function(){
        $(".move").hide()
    })
});
