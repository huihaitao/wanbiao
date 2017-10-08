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
	
//-----------------------------------------图片内部放大------------
var arr=["images/detail/pic1.jpg","images/detail/pic5.jpg","images/detail/pic4.jpg","images/detail/pic3.jpg","images/detail/pic2.jpg"];
	$("#box").bigMirror({boxDom:$("#box")[0],bigImg:arr[0]});
$(".ul-pic li").click(function(){
	 var num=$(this).index();
	 $("#box").append($("<img/>"));
	 $("#box img").attr("src",arr[num]);
	 $("#box").bigMirror({boxDom:$("#box")[0],bigImg:arr[num]});
})