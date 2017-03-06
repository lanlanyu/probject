$(".meua ul li").click(function(){
	var asd=$(this).index();
	window.location.href="all_shangPin.html?"+asd;
})
$(".result_top_right").click(function(){
	var asd=$(this).index();
	window.location.href="all_shangPin.html?"+asd;
})


$(".header_one_left_two div:nth-child(2) span").click(function(){
	console.log("0000")
	window.location.href="page7endhtml.html";
})

$(".foot_mid li").each(function(index,value){
	value.onclick=function(){
		window.location.href="help_centre.html?"+index;
	}
})

$(".shopcar").click(function(){
//	console.log($(".header_one_left_two div:nth-child(2)").css("display"));
	if($(".header_one_left_two div:nth-child(2)").css("display")=="none"){
		$("#zhuce_success").css("display","block");
		$("#zhuce_success p:nth-child(2)").html("请登录!!!");
		$("#zhuce_success p:nth-child(3)").css("display","none");
	}else{
		window.location.href="shoppinglist.html";
	}
})

