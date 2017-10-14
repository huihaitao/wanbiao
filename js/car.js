function cal(obj,oper){
	let trs =w$("tbs").firstElementChild.children;
	//1、商品数量
	var num = Number(obj.previousElementSibling.innerHTML);
	oper=="+"?num++:num--;
	if(num<=0){
		return;
	}else if(num>5){
		alert("已达到购物车数量上限,不能再继续添加了");
		return;
	}
	
	obj.previousElementSibling.innerHTML=num;
	//2、总价
	//1)、获取单价
	var price = obj.parentNode.previousElementSibling.innerHTML.substring(1);
//	console.log(price)
	//2）、计算总价
	var money = num*price;
	obj.parentNode.nextElementSibling.firstElementChild.innerHTML = "￥"+money;
	//3、改变合计
	var sum = 0;
	var letter=0;
	for(let j=1;j<trs.length-1;j++){
		sum += parseFloat(trs[j].children[5].firstElementChild.innerHTML.substring(1));
		
		letter+=parseFloat(trs[j].children[4].children[1].innerHTML);
	}
	
	trs[trs.length-1].children[3].firstElementChild.innerHTML ="￥"+sum;
	trs[trs.length-1].children[2].firstElementChild.innerHTML = letter;
	//4、改变数量
	
	
	
	
	
}
window.onload=function(){
	
	let trs =w$("tbs").firstElementChild.children;
	
	$(function(){
		$("#btn1").click(function(){
			$(":checkbox").checkAll($("#btn1").attr("checked"))
		})
		$("#btn2").click(function(){
			$(":checkbox").checkAll($("#btn2").attr("checked"))
		})
		$(".button").click(function(){
			$(".button").checkParent($("#btn1"))
		})
		$(".button").click(function(){
			$(".button").checkParent($("#btn2"))
		})
		
		
	})
	
	for(let i=1;i<trs.length;i++){
		//--
		trs[i].children[4].children[0].onclick=function(){
//			console.log(trs[i].children[4].children[0])
			cal(this.nextElementSibling.nextElementSibling,"-");			
		}	
		//++
		trs[i].children[4].children[2].onclick=function(){
			cal(this,"+");	
		}
		trs[i].children[6].firstElementChild.onclick=function(){
			alert("亲，确定要删除该宝贝吗")
			trs[i].parentNode.removeChild(this.parentNode.parentNode);
		}
		
		
		
		

	}
	
}

	
