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
//验证邮箱
var ruleMail = /^\w+@(126|qq|163)\.(com|cn)$/;
function _focus(){
    $(document).click(function(){
        $("#dz").focus()
    })
}
$(function(){
    $("#dz").keyup(function(){
        if(ruleMail.test($(this).val())){
            console.log(0);
            $(".error0").hide(200);
            _focus = null;
        }else{
            $(".error0").text("您的格式有误");
            $(".error0").show(200);
            $(".error0").css({
                "color":"red"
            });
            _focus()

        }
    })
    $("#dz").blur(function(){
        if($(this).val()==""){
            $(".error0").text("内容不能为空");
            $(".error0").show()
            $(".error0").css({
                "color":"red"
            })
        }
    })
//验证密码
    var rulespwd=/^\w{4,10}$/;
    $("#pwd").keyup(function(){
        if(rulespwd.test($(this).val())){
            $(".error1").hide(200);
        }else{
            $(".error1").show(200);
            $(".error1").text("密码不对");
            $(".error1").css({
                "color":"red"
            })
        }
    })
    $("#pwd").blur(function(){
        if($(this).val()==""){
            $("error2").text("内容不能为空");
            $(".error2").show();
            $(".error2").css({
                "color":"red"
            })
        }
    })
    //确认密码确认
    $("#pwd2").keyup(function(){
        if($(this).val()==$("#pwd").val()){
            $(".error3").hide();
        }else{
            $(".error3").text("密码不一致");
            $(".error3").show();
            $(".error3").css({
                "color":"red"
            })
        }
    })
})
//验证用户名
var ruleun=/^[a-zA-Z]\w{3,6}$/;
$(function(){
    $("#un").keyup(function(){
        if(ruleun.test($(this).val())){
            $(".error4").hide();
        }else{
            $(".error4").show();
            $(".error4").text("用户名输入错误");
            $(".error4").css("color","red")

        }
    })
    var  re = /^1\d{10}$/
    $(function(){
        $("#phone").keyup(function(){
            if(re.test($(this).val())){
                $(".error6").hide();
            }else{
                $(".error6").show();
                $(".error6").text("手机格式不正确");
                $(".error6").css("color","red")
            }
        })
    })
});