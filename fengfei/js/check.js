//右上角的点击事件

//	console.log(111)

var idName=$("#idName span").html();

  $("#ulUse li").eq(0).on("click",function(){
  	    alert("链接客服中心")
  })
  $("#ulUse li").eq(1).on("click",function(){
  	 alert("链接app下载地址")
  })
  $("#ulUse li").eq(2).on("click",function(){
  	  	 if($("#idName").attr("style")=="display: block;"){
  	 window.location="pageChongzhi.html"
  	 }else{
  	 	alert("请先登录,才可以进行充值")
  	 }
  })
  $("#ulUse li").eq(3).on("click",function(){
  	 if($("#idName").attr("style")=="display: block;"){
  	 	 console.log(00000) 
  	 	  window.location="page7endhtml.html?"+idName;
  	 }else{
  	 	window.location="strange-information.html"
  	 }
  })




//登录注册按钮


$("#Login").click(function(){
	$("#denglu").css("display","block");
})

$("#Register").click(function(){
	$("#denglu").css("display","block");
	$(".dengluzhuce_content").css("display","none");
	$(".zhuce").css("display","block");
})

//界面切换
$(".dengluzhuce_top span:nth-child(1)").click(function(){
	$(".zhuce").css("display","none");
	$(".dengluzhuce_content").css("display","block");
	$(".denglu_pws_eorr").html("");
	$(".denglu_name_eorr").html("");
})
$(".dengluzhuce_top span:nth-child(2)").click(function(){
	$(".dengluzhuce_content").css("display","none");
	$(".zhuce").css("display","block");
	$(".yanzhengma input").val("");
	$(".denglu_name_eorr").html("");
	$(".denglu_pws_eorr").html("");
})
//关闭界面
$(".dengluzhuce_top img").click(function(){
	$("#denglu").css("display","none");
	$(".denglu_name_eorr").html("");
	$(".denglu_pws_eorr").html("");
	$(".yanzhengma1 div:nth-child(2)").html("获取验证码");
	$(".denglu_queding").html("登录");
	$(".zhuce_queding").html("注册")
})


$("#zhuce_success div img").click(function(){
	$("#zhuce_success").css("display","none");
})
$("#zhuce_success div p:nth-child(3)").click(function(){
	$("#zhuce_success p:nth-child(2)").html("注册成功！");
	$("#zhuce_success p:nth-child(3)").css("display","block");
	$("#zhuce_success").css("display","none");
	$("#denglu").css("display","block");
	$(".zhuce").css("display","none");
	$(".dengluzhuce_content").css("display","block");
	$(".denglu_pws_eorr").html("");
	$(".denglu_name_eorr").html("");
	$(".yanzhengma input").val("");
	$("#psw").val("");
	$("#psw_zhuce").val("");
	$("#new_psw_again").val("");
	$("#username").val("");
	$("#username_zhuce").val("");
	$("#new_psw").val("");
})

//验证码倒数
var t1=null;
var eobl3=true;
var t2=null;
var eobl4=true;

$(".yanzhengma div:nth-child(2)").click(function(){
	
	var time=60;
	daojishi(time);
})

$(".yanzhengma1 div:nth-child(2)").click(function(){
	
	var time=60;
	daojishi1(time);
})
function daojishi1(t){
		if(eobl4==false) return;
		eobl4=false;
		clearInterval(t2);
		t2=setInterval(function(){
			t--;
			$(".yanzhengma1 div:nth-child(2)").html(t+"秒");
			if(t<=0){
				eobl4=true;
				$(".yanzhengma1 div:nth-child(2)").html("重新发送");
				clearInterval(t2);
				return;
			}
			
		},1000);	
	}
function daojishi(t){
		if(eobl3==false) return;
		eobl3=false;
		clearInterval(t1);
		t1=setInterval(function(){
			t--;
			$(".yanzhengma div:nth-child(2)").html(t+"秒");
			if(t<=0){
				eobl3=true;
				$(".yanzhengma div:nth-child(2)").html("重新发送");
				clearInterval(t1);
				
				return;
			}
			
		},1000);	
	}

//检测格式
function fnOnfocuout(obj){
	var reg=/^\d{11}$/;
	var str=$("#username").val();
	if((reg.test(str))){
		$(".denglu_name_eorr").html("");
	}else{
		$(".denglu_name_eorr").html("手机号格式错误");
		
	}
	
	if(obj.value==""){
		$(".denglu_name_eorr").html("请输入你的手机号");
	}else{
		$(".denglu_name_eorr").html("");
	}
	
	
	
}

function fnOnfocuout4(obj){
	var reg=/^\d{11}$/;
	var str1=$("#username_zhuce").val();
	if((reg.test(str1))){
		$(".denglu_name_eorr").html("");
	}else{
		$(".denglu_name_eorr").html("手机号格式错误");
	}
	
	if(obj.value==""){
		$(".denglu_name_eorr").html("请输入你的手机号");
	}else{
		$(".denglu_name_eorr").html("");
	}
}


function fnOnfocuout5(obj){
	if(obj.value==""){
		$(".denglu_pws_eorr").html("请输入密码");
	}else{
		$(".denglu_pws_eorr").html("");
	}
}

//清空input标签的内容
$(".denglu_name span:last-child").click(function(){
	$("#username").val("");
	$("#username_zhuce").val("");
	$("#new_psw").val("");
})
$(".denglu_pws span").click(function(){
	$("#psw").val("");
	$("#psw_zhuce").val("");
	$("#new_psw_again").val("");
	
})
$(".yanzhengma div:nth-child(1) span").click(function(){
	$(".yanzhengma input").val("");
})
//登录验证
$(".denglu_queding").click(function(){
	if($("#username").val()==""){
		$(".denglu_name_eorr").html("请输入你的手机号");
		
	}else{
		$(".denglu_name_eorr").html("");
	}
	if($("#psw").val()==""){
		$(".denglu_pws_eorr").html("请输入密码");
	}else if(!($("#psw").val()=="123456")){
		$(".denglu_pws_eorr").html("密码错误");
	}else{
		$(".denglu_pws_eorr").html("");
	}
	
	if(($("#username").val()=="13631858592")&&($("#psw").val()=="123456")){
		$(".denglu_queding").html("正在登录...");
		var timer=null;
		timer=setTimeout(function(){
			$("#denglu").css("display","none");
			$(".denglu_name_eorr").html("");
			$(".denglu_pws_eorr").html("");
			$(".yanzhengma1 div:nth-child(2)").html("获取验证码");
			$(".zhuce_queding").html("注册");
			$(".header_one_left_two div:nth-child(1)").css("display","none");
			$(".header_one_left_two div:nth-child(2)").css("display","block");
		},1000)
		
		
	}
	
});

//注册验证
$(".zhuce_queding").click(function(){
	var reg=/^\d{11}$/;
	var str1=$("#username_zhuce").val();
	if((reg.test(str1))){
		$(".denglu_name_eorr").html("");
	}else{
		$(".denglu_name_eorr").html("手机号格式错误");
	}
	if($("#username_zhuce").val()==""){
		$(".denglu_name_eorr").html("请输入你的手机号");
		return;
	}
	if($("#psw_zhuce").val()==""){
		$(".denglu_pws_eorr").html("请输入密码");
		return;
	}else{
		$(".denglu_pws_eorr").html("");
	}
	if($(".yanzhengma input").val()==""){
		$(".yanzhengma_yanzheng").html("请输入验证码");
		return;
	}
	if($(".yanzhengma input").val()=="1234"){
		$(".zhuce_queding").html("正在注册...");
		var timer=setTimeout(function(){
			$("#zhuce_success").css("display","block");
		},1000)
	}
})

function fnOnfocuout1(obj){
	if(obj.value==""){
		$(".denglu_pws_eorr").html("请输入密码");
	}else{
		$(".denglu_pws_eorr").html("");
	}
}

$(".yanzheng_queding").click(function(){
	var reg=/^\d{11}$/;
	var str1=$("#username_yanzheng").val();
	if((reg.test(str1))){
		$(".denglu_name_eorr").html("");
	}else{
		$(".denglu_name_eorr").html("手机号格式错误");
		return;
	}
	if($(".yanzhengma1 input").val()=="1234"){
		$(".yanzheng_queding").html("正在验证...")
		window.location.href="forback_psw2.html";
		
	}
})

function fnOnfocuout3(obj){
	if(obj.value==""){
		$(".yanzhengma_yanzheng").html("请输入验证码");
	}else{
		$(".yanzhengma_yanzheng").html("");
	}
}


function new_psw1(obj){
	var reg=/^\d+$/;
	var reg1=/^\w+$/
	if(obj.value==""){
		$(".new_psw_check").html("请输入新密码");
		return;
	}else{
		$(".new_psw_check").html("");
	}
	
	if(obj.value.length>16||obj.value.length<6||reg.test(obj.value)||!(reg1.test(obj.value))){
		$(".new_psw_check").html("密码格式不符合要求");
		return;
	}else{
		$(".new_psw_check").html("");
	}
}
function new_psw_again1(obj){
	if(obj.value==""){
		$(".new_psw_again_check").html("请再次输入新密码");
	}else{
		$(".new_psw_again_check").html("");
	}
	if(obj.value==$("#new_psw").val()){
		$(".new_psw_again_check").html("");
	}else{
		$(".new_psw_again_check").html("新密码和确认密码不一致");
	}
}


$(".xiugai_quding").click(function(){
	var reg=/^\d+$/;
	var reg1=/^\w+$/
	if($("#new_psw").val()==""){
		$(".new_psw_check").html("请输入新密码");
		return;
	}else{
		$(".new_psw_check").html("");
	}
	
	if($("#new_psw").val().length>16||$("#new_psw").val().length<6||reg.test($("#new_psw").val())||!(reg1.test($("#new_psw").val()))){
		$(".new_psw_check").html("密码格式不符合要求");
		return;
	}else{
		$(".new_psw_check").html("");
	}
	
	if($("#new_psw_again").val()==""){
		$(".new_psw_again_check").html("请再次输入新密码");
	}else{
		$(".new_psw_again_check").html("");
	}
	console.log($("#new_psw_again").val(),$("#new_psw").val())
	if($("#new_psw_again").val()==$("#new_psw").val()){
		$(".new_psw_again_check").html("");
	}else{
		$(".new_psw_again_check").html("新密码和确认密码不一致");
		return;
	}
	
	$(".xiugai_quding").html("正在修改...")
	window.location.href="forback_psw3.html";
})
