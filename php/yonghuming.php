<?php
	header("Content-type: text/html; charset=utf-8");
	//1.接受客户端的输入数据
	$userName= $_POST['userName'];
	
	//2.保存到数据库
		//1)连接到数据库
	$con = mysql_connect("localhost","root","root");
		
	if(!$con){
		
		die( "注册失败：服务器连接有问题".mysql.error());
	}else{
		//2)执行SQL语句
		
	
	}
	
		mysql_select_db("wanbiao",$con);
		$str="select * from usertable where userName='".$userName."'";
		$result = mysql_query($str,$con);
		$rowCount = mysql_num_rows($result);
		if($rowCount==0){
			echo "0";//没找到
		}else{
			echo "1";//找到了
		}
		//3）关闭数据库
		mysql_close($con);
	//3.响应(根据查询结果给前段响应对应的（1：用户名已经被使用；0：用户名没有注册）)
		//echo $rowCount;
?>
