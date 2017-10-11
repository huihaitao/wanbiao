$(function(){
	$("#login").click(function(){
		$.post("php/loginCheck.php",
				{
					"userName":$("#txt2").val(),
					"userPass":$("#txt3").val()
				},
				function(str){
					if(str=="1"){
						//保存cookie
							userName=$("#txt2").val()
							userPass=$("#txt3").val()
						addCookie("userName",userName,7);
						addCookie("userPass",userPass,7);
						
						
						alert("恭喜您，登陆成功！")
						location.href="index.html";
					}else{
						$("#ps").html("用户名或者密码错误，登录失败！");
					}
					
				}
		);
    })
})