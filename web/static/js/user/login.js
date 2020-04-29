;
var user_login_ops={
    init:function(){
        this.eventBind()
    },
    eventBind:function(){
        $('.login_wrap .do-login').click(function(){
            var btn_target=$(this)
            if (btn_target.hasClass('disabled')){
                alert('重复提交')
                return;
            }
            var login_name=$(".login_wrap input[name=login_name]").val()
            var login_pwd=$(".login_wrap input[name=login_pwd]").val()

            // 前端效验，不为空 长度不下于1
            if(login_name==undefined || login_name.length<1){
                alert('你输入的用户名为空')
                return;
            }
            if(login_pwd==undefined || login_pwd.length<1){
                alert('你输入的密码为空')
                return;
            }
            btn_target.addClass('disabled')

            // ajax前后端分离  数据格式是json  {key:value}
            // 前端发送的是json格式 所以后端reponse饭后的数据也是json格式
            $.ajax({
                url:"/user/login",
                type:"POST",
                data:{"login_name":login_name,"login_pwd":login_pwd},
                dataType:"json",
                success:function(reponse){
                    btn_target.removeClass('disabled')
                    console.log(reponse)
                }
            })
        })
    }
}
$(document).ready(function(){
    user_login_ops.init()
})