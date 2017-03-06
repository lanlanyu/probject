<?php
	$code=$_POST['code'];
	switch($code){
		case 1:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 2:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 3:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 4:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 5:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 6:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 7:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 8:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
		case 9:
			$NEW=new hoTT();
			$NEW->HOT($code);
			break;
	}
	class HOTT{
		function HOT($gg){
			@$mysqli = new mysqli("localhost", "root", "");
			$mysqli->select_db("1008");
			$mysqli->query("SET NAMES UTF8");
			$result = $mysqli->query("select * from hot_shangpin where hot='$gg'");
			$row=$result->num_rows;
			$arr=array();
			$arr[]=$row;
			while($rows=$result->fetch_assoc()){
				$arr[]=$rows;
			}
		//	var_dump($arr);
			$str=json_encode($arr);
			echo $str;
		}
	}
?>