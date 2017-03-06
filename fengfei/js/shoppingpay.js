var payPassword = $(".alieditContainer"),
	_this = payPassword.find('i'),
	k = 0;
var m = 1234567;
var psw = 123456;
var n = 5;
var sqlJson = 0;
payPassword.on('focus', "input[name='payPassword_rsainput']", function() {
	var _this = payPassword.find('i');
	if(payPassword.attr('data-busy') === '0') {
		//在第一个密码框中添加光标样式
		_this.eq(k).addClass("active");
		payPassword.attr('data-busy', '1');
	}
});
payPassword.on('change', "input[name='payPassword_rsainput']", function() {
	_this.eq(k).removeClass("active");
	payPassword.attr('data-busy', '0');
}).on('blur', "input[name='payPassword_rsainput']", function() {
	_this.eq(k).removeClass("active");
	payPassword.attr('data-busy', '0');
});
//使用keyup事件，绑定键盘上的数字按键和backspace按键
payPassword.on('keyup', "input[name='payPassword_rsainput']", function(e) {
	var e = (e) ? e : window.event;
	//键盘上的数字键按下才可以输入
	if(e.keyCode == 8 || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
		k = this.value.length; //输入框里面的密码长度
		if(k == 6 && $("#zong").text() < m && $(".i-text").val() == 123456) {
			clearTimeout(time);
			var time = setTimeout(function() {
				$('.ball_box1').css("display", "none");
				$('.ball_box2').css("display", "block");
				clearTimeout(time);
				var time = setTimeout(function() {
					$("#ball").css("display", "none");
					$(".section1").css("display", "none");
					if(sqlJson==0){
						$(".section2").css("display", "block");
					}else if(sqlJson==1){
						$(".section4").css("display", "block");
					}else if(sqlJson==2){
						$(".section5").css("display", "block");
					}else if(sqlJson==3){
						$(".section6").css("display", "block");
					}else if(sqlJson==4){
						$(".section7").css("display", "block");
					}else if(sqlJson==5){
						$(".section8").css("display", "block");
					}else if(sqlJson==6){
						$(".section9").css("display", "block");
					}
				}, 1000)
			}, 2000)
		}
		if(k == 6 && $(".i-text").val() != 123456) {
			n--;
			if(n <= 0) {
				n = 0;
			}
			$(".ball_box4 p span").text(n);
			clearTimeout(time);
			var time = setTimeout(function() {
				$('.ball_box1').css("display", "none");
				$('.ball_box4').css("display", "block");
			}, 300)
			this.value = "";
		}

		if(k == 6 && $("#zong").text() > m && $(".i-text").val() == 123456) {
			clearTimeout(time);
			var time = setTimeout(function() {
				$('.ball_box1').css("display", "none");
				$('.ball_box3').css("display", "block");
			}, 300)
		}
		l = _this.size(); //6
		for(; l--;) {
			//输入到第几个密码框，第几个密码框就显示光标（在输入框内有2个数字密码，第三个密码框要显示光标，之前的显示黑点后面的显示空白，输入和删除都一样）
			if(l === k) {
				_this.eq(l).addClass("active");
				_this.eq(l).find('b').css('display', 'none');
			} else {
				_this.eq(l).removeClass("active");
				_this.eq(l).find('b').css('display', l < k ? 'block' : 'none');
			}
		}
	} else {
		//输入其他字符，直接清空
		var _val = this.value;
		this.value = _val.replace(/\D/g, '');
	}
});

$("#yw_pay").click(function() {
	$("#ball").css("display", "block");
})
$(".no_pay").click(function() {
	$(".ball_box1").css("display", "none");
	$(".ball_box5").css("display", "block");
})
$(".yw_yes").click(function() {
	$("#ball").css("display", "none");
})
$(".yw_no").click(function() {
	$(".ball_box5").css("display", "none");
	$(".ball_box1").css("display", "block");
})
$(".yw_close").click(function() {
	$("#ball").css("display", "none");
})

$(".yw_del").click(function() {
	$("#ball").css("display", "none");
})
$(".yw_restart").click(function() {
	$(".ball_box4").css("display", "none");
	$(".ball_box1").css("display", "block");
})
$(".yw_nor").click(function() {
	$("#ball").css("display", "none");
	window.location.href = "phone&idVerify.html";
})
$("#yw_back").click(function(){
	window.location.href="shoppinglist.html";
})

