<?php
	$code=$_POST['code'];
	$number=$_POST['number'];
	if($number=="1"){
		$number1=0;
	}else{
		$number1=($number*40)-40;
	}
    class all{
	    	function all_shangpin($code){
	    		global $number;
			global $number1;
			$mysqli=new mysqli("localhost","root","");
			$mysqli->select_db("1008");
			$mysqli->query("SET NAMES UTF8");
				$sum=$mysqli->query("select * from hot_shangpin0 where hot='{$code}'");		
				//所有的该类商品数
				$result = $mysqli->query("select * from hot_shangpin0 where hot='{$code}' limit $number1,40");
				//一页限制展示的商品数
				$arr=array();
				$total=$sum->num_rows;  
				$arr[]=$total;
				$row=$result->num_rows;  
				$arr[]=$row;
				$arr[]=$number;
				while($rows=$result->fetch_assoc()){
					$arr[]=$rows;
				}
			$str=json_encode($arr);
			echo $str;
		}
    }
	$All=new all();
	$All->all_shangpin($code);
	
?>