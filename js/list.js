//------------------------------------连接数据库

$("#zixun_a").click(function(){
	$("#zixun").animate({
		height:"0px"
	},500,function(){
		$("#zixun").css("display","none");
	});
	$("#header_a").css({
		top:"28px",
	});
	$("#serve").css({
		top:"28px",
	});
})
$(".header_b").mouseenter(function(){
	$(".header_c").css({
		display:"block",
		width:"50px",
		height:"28px",
		background:"#fff",
		color:"#000"
	});
	$("#header_a").slideDown(150);
})
$(".header_b").mouseleave(function(){
	$("#header_a").stop().slideUp(150);
})
$(".header_c").mouseleave(function(){
	$(".header_c").css({
		width:"50px",
		height:"28px",
		background:"#333",
		color:"#ccbeb8"
	});
})
$(".header_c").mouseenter(function(){
	$(".header_c").css({
		display:"block",
		width:"50px",
		height:"28px",
		background:"#fff",
		color:"#000"
	});
})

$(".header_d").mouseenter(function(){
	$(".header_e").css({
		display:"block",
		width:"50px",
		height:"28px",
		background:"#fff",
		color:"#000"
	});
	$("#serve").slideDown(150);
})
$(".header_d").mouseleave(function(){
	$("#serve").stop().slideUp(150);
})
$(".header_e").mouseleave(function(){
	$(".header_e").css({
		width:"50px",
		height:"28px",
		background:"#333",
		color:"#ccbeb8"
	});
})
$(".header_e").mouseenter(function(){
	$(".header_e").css({
		display:"block",
		width:"50px",
		height:"28px",
		background:"#fff",
		color:"#000"
	});
})
//------------------------
w$("header_ad").onmouseover=function(){
	w$("header_ab").style.opacity="1";
	w$("header_aa").style.opacity="0";
	w$("header_ad").style.cssText="background: #332e2e;color: #fff";
	w$("header_ac").style.cssText="background: #fff;color: #000";
}
w$("header_ac").onmouseover=function(){
	w$("header_ab").style.opacity="0";
	w$("header_aa").style.opacity="1";
	w$("header_ac").style.cssText="background: #332e2e;color: #fff";
	w$("header_ad").style.cssText="background: #fff;color: #000";
}
//---------------
//hot小图标上下晃动
function startTime(){
	setInterval(showImg,200)
}
var currTop=0;
//增量
var addTop=2;
function showImg(){
   currTop+=addTop;
   if(currTop<4){
   		addTop=2;
   }else {
   		addTop=-2;
   }
   w$("nava_bimgs1").style.top=currTop+"px"
}

//-------------------------------导航left-（全部腕表）---------------------------------------------------
$("#nava_a").mouseenter(function(){
	$("#nava_ab").stop().slideDown(400)
})
$("#nava_a").mouseleave(function(){
	$("#nava_ab").slideUp(400)
})
var dd=document.getElementsByClassName("nava_aca");  //要出现的
var dls=document.getElementsByClassName("nava_ac");   //鼠标放上
//console.log(dd);
//console.log(dls);

	for(let i=0;i<dls.length;i++){
		dls[i].onmouseover=function(){
			this.index=i;  //给每一个鼠标放上的dl添加一个自定义属性
			dd[this.index].style.display="block";
		}
		dls[i].onmouseout=function(){
			this.index=i;  //给每一个鼠标放上的dl添加一个自定义属性
			dd[this.index].style.display="none";
		}
	}
//------------------------------------------选表中心
$("#nava_bw").mouseenter(function(){
	$("#nava_c").slideDown(150);
})
$("#nava_bw").mouseleave(function(){
	$("#nava_c").mouseenter(function(){
		$("#nava_c").stop();
	})
	   $("#nava_c").slideUp(150);
})
$("#nava_c").mouseleave(function(){
	$("#nava_c").slideUp(150);
})
//-------------------------------------------------

	$(".shop_a img").mouseenter(function(){
		$(this).siblings().css("opacity","0.4")
	})
	$(".shop_a img").mouseleave(function(){
		$(this).siblings().css("opacity","1")
	})
//--------------------------------获取cookie




//动态获取list
window.onload=function(){
	var str1="";
	$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		success:function(data){
			//data  json类的数组
			//console.log(data);
			var str=eval(data);
			//str是 解析data数组的 每一条json元素
			console.log(str);	
			for(var i=0;i<str.length;i++){
				//str1是每个商品列表的结构
				var str1="<div id='content_b'>"
				+"<div id='content_c'>"
					+"<img src='"+str[i].goodsImg+"' id='list02'/>"
					+"<a href='xiangqing.html'><img src='"+str[i].beiyong1+"'/></a></div>"
				+"<p id='p2'>"+str[i].goodsDesc+"</p>"
				+"<p class='p3'>"
					+"<span>￥"+str[i].goodsPrice+"</span><span>￥"+str[i].beiyong2+"</span>"
				+"</p></div>";
					
				  	$("#content_a").append(str1);
			}
		
		
		}
	});
	
	startTime();//-----------------------hot小图标调用
	
	var userName=getCookie("userName");
	if(w$("yonghu1").style.cssText="opacity: 1;"){
	w$("yonghu").style.cssText="opacity: 1;"
		w$("yonghu1").style.cssText="opacity: 0;"
		w$("yonghu").innerHTML="欢迎您："+userName
	
}else{
	return;
}
}
	










