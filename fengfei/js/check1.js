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
})

//验证码倒数
var timer=null;
var eobl=true;
var timer2=null;
var eobl1=true;

$(".yanzhengma div:nth-child(2)").click(function(){
	var time=60;
	move(time);
})

$(".yanzhengma1 div:nth-child(2)").click(function(){
	var time=60;
	move1(time);
})
function move1(t){
		if(eobl1==false) return;
		eobl1=false;
		clearInterval(timer2);
		timer2=setInterval(function(){
			t--;
			$(".yanzhengma1 div:nth-child(2)").html(t+"秒");
			if(t<=0){
				$(".yanzhengma1 div:nth-child(2)").html("重新发送");
				clearInterval(timer2);
				return;
			}	
		},1000);	
	}
function move(t){
		if(eobl==false) return;
		eobl=false;
		clearInterval(timer);
		timer=setInterval(function(){
			t--;
			$(".yanzhengma div:nth-child(2)").html(t+"秒");
			if(t<=0){
				$(".yanzhengma div:nth-child(2)").html("重新发送");
				clearInterval(timer);	
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
		$(".denglu_name_eorr").html("请输入您的手机号");
	}else{
		$(".denglu_name_eorr").html("");
	}
}
function fnOnfocuout6(obj){
	var reg=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
	var str=$("#identity").val();
	if((reg.test(str))){
		$(".denglu_id_eorr").html("");
	}else{
		$(".denglu_id_eorr").html("身份证号错误");	
	}
	if(obj.value==""){
		$(".denglu_id_eorr").html("请输入您的身份证号");
	}else{
		$(".denglu_id_eorr").html("");
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
		$(".denglu_name_eorr").html("请输入您的手机号");
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
	$("#username_shouji").val("");
	$("#username_yanzheng").val("");
	$("#identity").val("");
})
$(".denglu_pws span").click(function(){
	$("#psw").val("");
	$("#psw_zhuce").val("");
})
$(".yanzhengma div:nth-child(1) span").click(function(){
	$(".yanzhengma input").val("");
})
$(".yanzhengma1 div:nth-child(1) span").click(function(){
	$(".yanzhengma1 input").val("");
})
//登录验证
$(".denglu_queding").click(function(){
	if($("#username").val()==""){
		$(".denglu_name_eorr").html("请输入您的手机号");
	}else{
		$(".denglu_name_eorr").html("手机号格式错误");
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
		$(".denglu_name_eorr").html("请输入您的手机号");
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
		$(".zhuce_queding").html("正在注册...")
	}else{
		$(".yanzhengma_yanzheng").html("验证码错误");
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
	var reg1=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
	var str2=$("#identity").val();
	if((reg1.test(str2))){
		$(".denglu_id_eorr").html("");
	}else{
		$(".denglu_id_eorr").html("身份证号错误");
		return;
	}
	if($(".yanzhengma1 input").val()!="1234"){
		$(".yanzhengma_yanzheng").html("验证码错误");
	}
	if(($("#username_yanzheng").val()=="13631858592")&&($(".yanzhengma1 input").val()=="1234")&&($("#identity").val()=="340722198508203046")){
		$(".yanzheng_queding").html("正在验证...");
		clearTimeout(time);
		var time = setTimeout(function() {
			window.location.href = "paymentcodeReset.html";
		}, 2000)
	}	
})

function fnOnfocuout3(obj){
	if(obj.value==""){
		$(".yanzhengma_yanzheng").html("请输入验证码");
	}else{
		$(".yanzhengma_yanzheng").html("");
	}
}

function pay_psw1(obj){
	var reg=/^\d{6}$/;
	var str =$(".i-text").val()
	if(obj.value==""){
		$(".yw_check").html("请输入新的支付密码");
		return;
	}else{
		$(".yw_check").html("");
	}	
	if(!(reg.test(str))){
		$(".yw_check").html("支付密码格式不符合要求");
		return;
	}else{
		$(".yw_check").html("");
	}
}
function pay_psw2(obj){
	if(obj.value==""){
		$(".yw_again_check").html("请再次输入新的支付密码");
		return;
	}else{
		$(".yw_again_check").html("");
	}	
	if(obj.value==$(".i-text").val()){
		$(".yw_again_check").html("");
	}else{
		$(".yw_again_check").html("新密码和确认密码不一致");
	}
}


$(".yw_xiugai").click(function(){
	var reg=/^\d+$/;
	var str =$(".i-text").val()
	if($(".i-text").val()==""){
		$(".yw_check").html("请输入新密码");
		return;
	}else{
		$(".yw_check").html("");
	}
	if(!(reg.test(str))){
		$(".yw_check").html("支付密码格式不符合要求");
		return;
	}else{
		$(".yw_check").html("");
	}
	
	if($(".ui-input").val()==""){
		$(".yw_again_check").html("请再次输入新的支付密码");
	}else{
		$(".yw_again_check").html("");
	}
	console.log($(".ui-input").val(),$(".i-text").val())
	if($(".ui-input").val()==$(".i-text").val()){
		$(".yw_again_check").html("");
	}else{
		$(".yw_again_check").html("新密码和确认密码不一致");
		return;
	}
	$(".yw_xiugai").html("正在修改...");
	clearTimeout(time);
		var time = setTimeout(function() {
			window.location.href = "modify&success.html";
		}, 2000)
})
