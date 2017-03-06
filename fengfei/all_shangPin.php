<?php
	$code=$_POST['code'];
	if($code=="0"||$code=="1"){
		$page1=0;
	}else{
		$page1=($code*40)-40;
	}

    class all{
	    	function all_shangpin($page1){
	    		global $code;
			$mysqli=new mysqli("localhost","root","");
			$mysqli->select_db("1008");
			$mysqli->query("SET NAMES UTF8");
				$sum=$mysqli->query("select * from hot_shangpin0");		
				$result = $mysqli->query("select * from hot_shangpin0 limit $page1,40");
				$total=$sum->num_rows;  
				$row=$result->num_rows;  
				$arr=array();
				$arr[]=$row;
				$arr[]=$total;
				$arr[]=$code;
				while($rows=$result->fetch_assoc()){
					$arr[]=$rows;
				}
			$str=json_encode($arr);
			echo $str;
		}
    }
	$All=new all();
	$All->all_shangpin($page1);
	
?>