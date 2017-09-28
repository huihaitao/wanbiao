//	用户名验证
w$("txt1").onblur = function(){
	let str = w$("txt1").value;
	let reg = /^1\d{10}$/;
	//验证手机号的正则
	if(reg.test(str)){
		//验证用户名是否存在
		jQuery.ajax({
			url:"php/yonghuming.php",
			async:true,
			data:"userName="+w$("txt1").value,
			type:"post",
			success:function(data){
				if(data=="1"){
					jQuery("#spans").html("该手机号已经被注册了");
					    
				}else{
					jQuery("#spans").html("该手机号没有人使用");
					jQuery(".imgs2").css("opacity","1");
					jQuery("#spans").css("color","green");
				}
			}		
		});	}else if(w$("txt1").value==""){
			w$("spans").innerHTML ="";
		}else{
			w$("spans").innerHTML = "请检查您的手机号格式是否正确";
			w$("spans").style.cssText="color:red";
			w$("imgs2").style.opacity="0";
			return;
	}
};

//随机验证码
	var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
	'p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0'];
	var str="";
	while(str.length<6){
			var iNum=parseInt(Math.random()*100)
			while(iNum>36){
				iNum=parseInt(Math.random()*100)
			}
			str+=arr[iNum];
		}
		w$("txt4").value=str.toUpperCase();
	window.onload=function(){	
		w$("imgs4").onclick=function(){
			var str='';
			while(str.length<6){
				var iNum=parseInt(Math.random()*100)
				while(iNum>36){
					iNum=parseInt(Math.random()*100)
				}
				str+=arr[iNum];
			}
			w$("txt4").value=str.toUpperCase();
		}
	}

	function showa(){
		 var num=w$("txt3").value;
		if(num!=w$("txt4").value){
			w$("spans1").innerHTML="验证码输入错误";
			w$("spans1").style.cssText="color:red";
			w$("imgs21").style.opacity="0";
			w$("imgs4").style.display="block";
			w$("txt4").innerHTML=w$("txt4").value;
	    }else{
			w$("imgs21").style.opacity="1";
			w$("spans1").innerHTML="验证码输入正确";
			w$("spans1").style.cssText="color:green";
			w$("imgs4").style.display="none";
		} 
	}
	
	
	
	
	var img=["img/yzm1 (1).png","img/yzm1 (2).png","img/yzm1 (3).png","img/yzm1 (4).png","img/yzm1 (5).png","img/yzm1 (6).png",]
	
	for(let i=0;i<img.length;i++){
		photo=img[i];
			console.log(photo)
		w$("imgs").onclick=function(){
			//this.index=i;
			//var imga=document.createElement("img")
			//w$("imgs").appendChild(imga)
			//w$("imgs").innerHTML=img[i]
			
			imga=document.getElementsByClassName("imgs3")[0].setAttribute('src','img/yzm1 (10).png')
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//密码
	w$("txt5").onblur=function(){
	//密码只能使用数字字母下划线，长度不得小于8位
		let str=w$("txt5").value;	
		let reg=/^\w{8,}$/g;
		if(reg.test(str)){
			w$("imgs22").style.opacity="1";
			w$("spans2").innerHTML="密码格式正确";
			w$("spans2").style.cssText="color:green";
		}else{
			w$("spans2").innerHTML="密码格式错误"
			w$("spans2").style.cssText="color:red";
			w$("imgs22").style.opacity="0";
		}		
	}
//确认密码
	w$("txt6").onblur=function(){
		if((w$("txt5").value!=w$("txt6").value)||(w$("txt6").value=="")){
			w$("spans3").innerHTML="两次密码不一致";
			w$("spans3").style.cssText="color:red";
			w$("imgs23").style.opacity="0";
		}else{
			w$("imgs23").style.opacity="1";
			w$("spans3").innerHTML="密码一致"
			w$("spans3").style.cssText="color:green";
		}
	}
	
w$("zhuce").onclick = function(){
	if((w$("txt1").value.length<=0) || (w$("txt3").value.length<=0) || (w$("txt5").value.length<=0) || (w$("txt6").value.length<=0)){
		w$("h6").innerHTML = "请检查您的页面信息是否填写完整";
	}else{
		let str = w$("txt1").value;
		let reg = /^1\d{10}$/;
		if(reg.test(str)==true){
			let num=w$("txt3").value;
			if(num!=w$("txt4").value){
				w$("spans1").innerHTML="验证码输入错误";
				w$("spans1").style.cssText="color:red";
				w$("imgs21").style.opacity="0";
				w$("imgs4").style.display="block";
				w$("txt4").innerHTML=w$("txt4").value;
		
	   		}else{
	   		let str1=w$("txt5").value;	
			let reg=/^\w{8,}$/g;
			if(reg.test(str1)==false){
				w$("spans2").innerHTML="密码格式错误"
				w$("spans2").style.cssText="color:red";
				w$("imgs22").style.opacity="0";	
			}else{
				if((w$("txt5").value!=w$("txt6").value)||(w$("txt6").value=="")){
					w$("spans3").innerHTML="两次密码不一致";
					w$("spans3").style.cssText="color:red";
					w$("imgs23").style.opacity="0";
			
				}else{
					jQuery.ajax({
					url:"php/regSave.php",
					async:true,
					data:"userName="+w$("txt1").value+"&userPass="+w$("txt5").value,
					type:"post",
					success:function(data){
								if(data=="1"){
									window.location.href="index.html";
								}else{
									alert("您好，您的用户名已经被占用了，请重新注册");
									w$("txt1").value="";
									w$("spans").innerHTML="";
									w$("imgs2").style.cssText="opacity:0";
									w$("txt3").value="";
									w$("spans1").innerHTML="";
									w$("imgs21").style.cssText="opacity:0";
									w$("imgs4").style.display="block";
									w$("txt5").value="";
									w$("spans2").innerHTML="";
									w$("imgs22").style.cssText="opacity:0";
									w$("txt6").value="";
									w$("spans3").innerHTML="";
									w$("imgs23").style.cssText="opacity:0";
									
								}
							}		
				});
			}
		}
   }
			
		}else{
			w$("qa5a").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
		}
	}
}