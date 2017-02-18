/**
 * Created by Administrator on 2017/2/17.
 */
$(function(){
  $(".box01 span a").eq(0).hover(function(){
      $(this).css({
          "color":"white",
          "text-decoration":"underline"
      })
  },function(){
      $(this).css({
          "text-decoration":"none"
      })
  });
    $(".box01 span a").eq(1).hover(function(){
        $(this).css({
            "color":"blue",
            "text-decoration":"underline"
        })
    },function(){
        $(this).css({
            "color":"black",
            "text-decoration":"none"
        })
    })
});
//验证
var ruleMail = /^\w+@(126|qq|163)\.(com|cn)$/;
$(function(){
   $("#dz").keyup(function(){
       if(ruleMail.test($(this).val())){
           console.log(0);
           $(".error1").hide(200);
       }else{
           $(".error1").text("您的格式有误");
           $(".error1").show(200);
           $(".error1").css({
               "color":"red"
           })
           $(document).click(function(){
               $("#dz").focus()
           })
       }
   })
    $("#dz").blur(function(){
        if($(this).val()==""){
            $(".error1").text("内容不能为空");
            $(".error1").show()
        }
    })
});
var rulespwd=/^(a-zA-Z)\W{4,10}$/;
