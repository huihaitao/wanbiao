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
//--------------------------------------------轮播图top
 var btn = document.getElementById("btn").children;//获取底部圆圈
      btn[0].style.cssText="background:deepskyblue;"
       /* 右按钮*/
      var num = 0;
       w$("right").onclick = function(){
       	     num++   
       	     if(num>= w$("wrap").children.length){
       	     	num=0;
       	     }
       	   for (var j =0;j<w$("wrap").children.length;j++) {
       	   	 	 w$("wrap").children[j].style.opacity =0;
     		}
       	     w$("wrap").children[num].style.opacity =1;
//     	     w$("wrap").children[num].style.cssText="transform: scale(0.95);"
			
       	     /*小圆点*/
           for (var j =0;j<  w$("wrap").children.length;j++) {
     			btn[j].style.cssText="background: #ccc;";
     		}
     		btn[num].style.cssText="background:deepskyblue;";
       }
       
         /* 左按钮*/
       w$("left").onclick = function(){
       	   num--;
       	  
       	  if(num<0){
       	     	num=w$("wrap").children.length-1;
       	    }
       	   for (var j =0;j<  w$("wrap").children.length;j++) {
       	   	 	 w$("wrap").children[j].style.opacity =0;
     		}
       	     w$("wrap").children[num].style.opacity =1;
       	        /*小圆点*/
           for (var j =0;j<  w$("wrap").children.length;j++) {
     			btn[j].style.cssText="background: #ccc;";
     		}
     		btn[num].style.cssText="background:deepskyblue;";
       }
       
      /* 底部小圆圈鼠标移入*/
     for (var i in btn) {
     	btn[i].index = i;
     	btn[i].onmouseover = function(){
     		for (var j =0;j<  w$("wrap").children.length;j++) {
     			btn[j].style.cssText="background: #ccc;";
     			 w$("wrap").children[j].style.opacity =0;
     		}
     		btn[this.index].style.cssText="background:deepskyblue;";
     		  w$("wrap").children[this.index].style.opacity =1; 
     	}
     }
    var time = null;  
   time = setInterval(w$("right").onclick,2000)
    
    /* jQuery左右按钮的显示与隐藏*/
   	$("#box").mouseenter(function(){
   		$("#left").css("display","block")
   		$("#left").stop().animate({
   			left:"305px"
   		},100)
   		$("#right").css("display","block")
   		$("#right").stop().animate({
   			right:"75px"
   		},100)
   		 clearInterval(time)
   	})
   	$("#box").mouseleave(function(){
   		$("#left").css("display","none")
   		$("#left").animate({
   			left:"290px"
   		},100)
   		$("#right").css("display","none")
   		$("#right").animate({
   			right:"60px"
   		},100)
   		 clearInterval(time)
	     time = setInterval(w$("right").onclick,2000);
   	})
   	
   	window.onload=function(){//--------------------------------------------------------------------页面加载完成
		
		startTime();
		
		//--------------------------------获取cookie
			var userName=getCookie("userName");
			if(userName==""){
				w$("yonghu1").style.cssText="opacity: 1;"
			}else{
				w$("yonghu").style.cssText="opacity: 1;"
				w$("yonghu1").style.cssText="opacity: 0;"
				w$("yonghu").innerHTML="欢迎您："+userName
			}

	}

//-----------------------------------------无缝
$("#lbwf_a").mouseenter(function(){
	$("#lbwf_a span").css("display","block")
	$("#zuo").stop().animate({
		left:"2px"
	},100)
	$("#you").stop().animate({
		right:"2px"
	},100)
})
$("#lbwf_a").mouseleave(function(){
	$("#lbwf_a span").css("display","none")
	$("#zuo").animate({
		left:"-25px"
	},100)
	$("#you").animate({
		right:"-21px"
	},100)
})

$("#you").click(function(){
	$("#lbwf_b").stop().animate({
		left:"-1200px"
	},200,function(){
		$("#lbwf_b").css("left","0");
	})
	
})
$("#zuo").click(function(){
	$("#lbwf_b").stop().animate({
		left:"0px"
	},300,function(){
		$("#lbwf_b").css("left","-1200px");
	})
})
//-----------------------------热销
 var mySwiper = new Swiper ('.hot_left1', {
	direction: 'horizontal',
	loop: true,
	effect:'fade',
	autoplay:2000,
	autoplayDisableOnInteraction : false,
	// 如果需要分页器
	 pagination: '.swiper-pagination',
	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	fade: {
	      crossFade: false,
	},
	onSlideChangeEnd: function(swiper){
	   let num = swiper.activeIndex;
	  $(".1 img").css({"transform":"scale(1.1)"})
	  $(".1 img").eq(1).css({"transform":"scale(1.051)"})
	  $(".1 img").eq(num).css({"transform":"scale(1.051)"})
	  
	}
 }) 
// 左右按钮
	$("#hot_left").mouseenter(function(){
   		$(".a1").stop().animate({
   			left:"20px"
   		},150)
   		$(".a2").stop().animate({
   			right:"20px"
   		},150)
   	})
	$("#hot_left").mouseleave(function(){
   		$(".a1").stop().animate({
   			left:"-20px"
   		},150)
   		$(".a2").stop().animate({
   			right:"-20px"
   		},150)
   	})
//------------------------------------------------闪购	
var mySwiper = new Swiper ('.hot_left2', {
	direction: 'horizontal',
	loop: true,
	effect:'fade',
	autoplay:2000,
	autoplayDisableOnInteraction : false,
	// 如果需要分页器
	 pagination: '.swiper-pagination',
	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	fade: {
	      crossFade: false,
	},
	onSlideChangeEnd: function(swiper){
	   let num = swiper.activeIndex;
	  $(".2 img").css({"transform":"scale(1.1)"})
	  $(".2 img").eq(1).css({"transform":"scale(1.051)"})
	  $(".2 img").eq(num).css({"transform":"scale(1.051)"})
	  
	}
 }) 
// 左右按钮
	$("#shangou_left").mouseenter(function(){
   		$(".a1").stop().animate({
   			left:"20px"
   		},150)
   		$(".a2").stop().animate({
   			right:"20px"
   		},150)
   	})
	$("#shangou_left").mouseleave(function(){
   		$(".a1").stop().animate({
   			left:"-20px"
   		},150)
   		$(".a2").stop().animate({
   			right:"-20px"
   		},150)
   	})
//--------------------------------------------------新品	
var mySwiper = new Swiper ('.hot_left3', {
	direction: 'horizontal',
	loop: true,
	effect:'fade',
	autoplay:2000,
	autoplayDisableOnInteraction : false,
	// 如果需要分页器
	 pagination: '.swiper-pagination',
	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	fade: {
	      crossFade: false,
	},
	onSlideChangeEnd: function(swiper){
	   let num = swiper.activeIndex;
	  $(".3 img").css({"transform":"scale(1.1)"})
	  $(".3 img").eq(1).css({"transform":"scale(1.051)"})
	  $(".3 img").eq(num).css({"transform":"scale(1.051)"})
	  
	}
 }) 
// 左右按钮
	$("#xinpin_left").mouseenter(function(){
   		$(".a1").stop().animate({
   			left:"20px"
   		},150)
   		$(".a2").stop().animate({
   			right:"20px"
   		},150)
   	})
	$("#xinpin_left").mouseleave(function(){
   		$(".a1").stop().animate({
   			left:"-20px"
   		},150)
   		$(".a2").stop().animate({
   			right:"-20px"
   		},150)
   	})
//	-----------------------------------------猜你喜欢Like

	$(".like_rightb a").mouseenter(function(){
		$(this).parent().siblings().css("opacity","0.4")
	})
	$(".like_rightb a").mouseleave(function(){
		$(this).parent().siblings().css("opacity","1")
	})
//-------------------------------------------右侧边栏客服
	$("#cebianlan1 img").mouseenter(function(){
		$("#cebianlan1_a").css("opacity","1")
		$("#cebianlan1_a").animate({
			 right:"70px"
		},300)
	})
	$("#cebianlan1_a img").click(function(){
		$("#cebianlan1_a").animate({
			 right:"-227px"
		},200,function(){
			$("#cebianlan1_a").css("opacity","0")
		})
		
	})
//	---------------------------------右导航
$(".cb a").mouseenter(function(){
	$(this).nextAll("div").delay(100).show(200);

})
$(".cb a").mouseleave(function(){
		$(".car").mouseenter(function(){
			$(this).stop()
		})
		$(".car_m").mouseenter(function(){
			$(this).stop()
		})
		  $(this).nextAll("div").hide(100)
	})	
	$(".car").mouseleave(function(){
			$(this).hide(100)
	})
	$(".car_m").mouseleave(function(){
			$(this).hide(100)
	})
		
//	---------------------------------------------回到顶部
	$("#dingbu").click(function(){
		$("body,html").animate({
			scrollTop:0
		},1000)
  })
//---------------------------------------------------楼梯
	$("#louti a").click(function(){
		var sTop = $(".left").eq($(this).index()).offset().top;
 			console.log(sTop)
	 	$("body,html").animate({
	 		"scrollTop":sTop,
	 	},500)
	})




