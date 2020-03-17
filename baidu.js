$(function(){
    var $name=$("#name"),
        $sub=$("#subm"),
        $phone=$('#phone'),
        $mima=$('#mima'),
        $nameout=$('#nameout'),
        $phoneout=$('#phoneout'),
        $mimaout=$('#mimaout'),
        $code=$('#code');

    $sub.click(function(){
        if(!validate('#name') || !validate('#phone') || !validate('#mima'))return;
        
    })
    //字段级
    $name.focusout(function(){           
            var $msgname=$('#name-v-msg');
           
            //!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/
            ///^[\u4e00-\u9fa5A-Za-z0-9-_]+$/
            
            
            // if(!/^[a-z-A-Z]{1}([a-z-A-Z0-9]|[._]){4,15}$/.test($name.val()) && $name.val()!=''){
                 if(!/^[a-zA-Z\u4e00-\u9fa5]{1}[a-zA-Z0-9_\u4e00-\u9fa5]{3,9}$/.test($name.val())){
                $msgname.html('用户名仅支持中英文、数字和下划线且不能为纯数字')
                $name.select();
                
                return false;
            }
            if(validate('#name')){
                $msgname.html('')
                return true;
            }
    })
    $phone.focusout(function(){
        var $msgphone=$('#phone-v-msg');
        if(!(/^1[3456789]\d{9}$/.test($phone.val())) && $phone.val()!==''){
            $msgphone.html('手机号码格式不正确')
            $phone.select();
            return false;
        }
        if(validate('#name')){
            $msgphone.html('')
            return true;
        }
    })
    $mima.focusout(function(){
        var $msgmima=$('#mima-v-msg');
        if(!/^[a-z-A-Z]{1}([a-z-A-Z0-9]|[._]){4,15}$/.test($mima.val()) && $mima.val()!==''){
            $msgmima.html('密码设置不符合要求')
            $mima.select();
            return false;
        }
        if(validate('#mima')){
            $msgmima.html('')
            return true;
        }
    })
    

    // 表单级
    function validate(field){
        var $data=$(field),
            $msg=$(field+'-v-msg');
        if($data.val()===''){
            $msg.html($(field+'out').html()+'不能为空')
            $data.select();
            return false;
        }
        $msg.html('')
        return true;
    }
    //倒计时
    var time,e=60;
    $code.click(function(){
        $code.attr("disabled","disabled");
        time=window.setInterval(function(){
            $code.val("发送中 ("+e--+" s)");
            if(-1===e){
                window.clearInterval(time);
                $code.val("重新发送");
                $code.removeAttr("disabled");
                e=60;
            }
        },1000)
    })
});