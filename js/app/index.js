/**
 * Created by Administrator on 2017/2/20.
 */
$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>40){
            $(".navbox").slideDown();
            //console.log($(".c-right"));
            $(".c-right").stop(true).animate({"top":"40"},100)
        }else{
            $(".navbox").slideUp();
            $(".c-right").stop(true).animate({"top":"130"},100)
        }
    })
    //图片加载
    /*  $(".tupian01").hover(function(){
     //console.log($(this));
     $(this).children().eq(1).show();
     $(this).children().eq(2).show();
     },function(){
     $(this).children().eq(1).hide();
     $(this).children().eq(2).hide();
     })*/
    //商品数据加载
    var goodsmsg = [{img:"images/D701843_m.gif",msg:["★ 특가 ★ 베이직 스트라이프 티셔츠","★ 特价 ★ 基础条纹T恤","Long Sleeve Striped Tee","RMB 48"]},{img:"images/D701686_m.jpg",msg:["★ 특가 ★ 베이직 스트라이프 티셔츠","★ 特价 ★ 基础条纹T恤","Long Sleeve Striped Tee","RMB 48"]},{img:"images/D701525_m.jpg",msg:["★ 특가 ★ 베이직 스트라이프 티셔츠","★ 特价 ★ 基础条纹T恤","Long Sleeve Striped Tee","RMB 48"]}];
    var goodsmsg03=[{img:"images/D702863_m.jpg",msg:["★ 특가 ★ 베이직 스트라이프 티셔츠","★ 特价 ★ 基础条纹T恤","Long Sleeve Striped Tee","RMB 48"]},{img:"images/D702872_m.jpg",msg:["★ 특가 ★ 베이직 스트라이프 티셔츠","★ 特价 ★ 基础条纹T恤","Long Sleeve Striped Tee","RMB 48"]},{img:"images/D702889_m.gif",msg:["★ 특가 ★ 베이직 스트라이프 티셔츠","★ 特价 ★ 基础条纹T恤","Long Sleeve Striped Tee","RMB 48"]}];

    function goodload(msg,box){
        var $dl=$("<dl>");
        $dl.addClass("tupian01");
        $dl.appendTo(box);
        var $dt = $("<dt>");
        var $img=$("<img>");
        $dt.append($img);
        $img.attr("src",msg.img);
        $dl.append($dt);
        var $dd = $("<dd>");
        $dl.append($dd);
        $dd.addClass("bg");
        var $dd=$("<dd>");
        $dl.append($dd);
        $.each(msg.msg,function(i,value){
            var $p = $("<p>");
            $p.text(value);
            $p.appendTo($dd);
        })

    }
    $.each(goodsmsg,function(i){
        goodload(this,$(".m-shang"));
    });
    $.each(goodsmsg03,function(i){
        goodload(this,$(".mmbox"))
    })

    /*  function goodload(){
     var $dl=$("<dl>");
     $dl.addClass("tupian01");
     $dl.appendTo($(".m-shang"));
     var $dt = $("<dt>");
     var $img=$("<img>");
     $dt.append($img);
     $img.attr("src",goodsmsg.img);
     $dl.append($dt);
     var $dd = $("<dd>");
     $dl.append($dd);
     $dd.addClass("bg");
     var $dd=$("<dd>");
     $dl.append($dd);
     $.each(goodsmsg.msg,function(i,value){
     var $p = $("<p>");
     $p.text(value)
     $p.appendTo($dd);
     })

     }
     goodload();
     */
    var goodsmsg02=[{img:"images/342_1.jpg"}];
    $(".imgbox").each(function(i){
        var $img=$("<img>");
        $img.appendTo($(".imgbox"));
        $img.attr("src",goodsmsg02[i].img)
    });
    //创建框架，加载数据
    var goodsmsg04={img:["images/keyword_31.jpg","images/keyword_32.jpg","images/keyword_07.jpg",
        "images/keyword_28.jpg","images/keyword_23.jpg"]};
   $.each(goodsmsg04.img,function(i){
       var $tupian=$("<img>");
       $tupian.appendTo($(".m-end"));
       $tupian.attr("src",goodsmsg04.img[i])
   })

var goodsmsg05 = [{img:"images/D702829_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702424_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702960_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702946_m.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702963_m.jpg",msg1:["New","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702917_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702903_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702829_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},{img:"images/D702881_m.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702882_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702829_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
    {img:"images/D702960_m.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},];
function goodsload01(msg,box){
    var $dl=$("<dl>");
    $dl.addClass("m-tupian");
    $dl.appendTo(box);
  var $dt=$("<dt>");
    var $img=$("<img>");
    $dt.append($img);
    $img.attr("src",msg.img);
  $dt.appendTo($dl);
    var $dd=$("<dd>");
    $dd.appendTo($dl);
   $.each(msg.msg1,function(i,value){
        var $p=$("<p>");
        $p.text(value);
        $p.appendTo($dd);
    })
}
$.each(goodsmsg05,function(i){
    goodsload01(this,$(".main"));
});
    var goodsmsg06=[{img:"images/1.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/35.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/3.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/41.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/4.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/5.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/6.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/7.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/8.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/9.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/10.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/11.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/12.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/13.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/14.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/15.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/16.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/17.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/18.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/19.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/20.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/21.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/22.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/23.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/24.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/25.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/26.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/27.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/28.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/28.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/29.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/29.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/4.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/30.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/31.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/32.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/33.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/34.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/35.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/36.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/37.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/38.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/39.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/40.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/41.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/42.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/43.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/35.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/1.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/2.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/3.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/4.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/5.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/18.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/7.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/9.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/8.gif",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/10.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/11.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/12.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/14.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/22.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},
        {img:"images/11.jpg",msg1:["New!","두가패턴타입의자가드스커트","两款印图亮点的半身裙","Two Pattern A-line Skirt","¥ 190"]},

    ]
    function goodsload03(msg,box){
        var $dl=$("<dl>");
        $dl.addClass("z-tupian");
        $dl.appendTo(box);
        var $dt=$("<dt>");
        var $img=$("<img>");
        $dt.append($img);
        $img.attr("src",msg.img);
        $dt.appendTo($dl);
        var $dd=$("<dd>");
        $dd.appendTo($dl);
        $.each(msg.msg1,function(i,value){
            var $p=$("<p>");
            $p.text(value);
            $p.appendTo($dd);
        })
    }
    $.each(goodsmsg06,function(i){
        goodsload03(this,$(".zhuti"));
    });
    var flag=true;
    $(".fit").click(function(){
        if(flag){
        $(".c-right").stop(true).animate({"width":"0"},1000)
        }else{
            $(".c-right").stop(true).animate({"width":"100"},1000)
        }
        flag=!flag;
    });
    $(".dianji").click(function(){
        $("#xianshi").hide();
    })
});