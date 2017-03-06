var inputlist = document.querySelectorAll(".input-checkbox");
var n = 0; //商品件数
// 全选 
$("#allselect").click(function() {
	$(this).toggleClass("active");
	for(var i = 0; i < $(".input-checkbox").length - 1; i++) {
		inputlist[i].className = allselect.className;
	}
	if($("#allselect").hasClass("active")) {
		n = $(".input-checkbox").length - 1;
		puanduan();
		$("#deleteall").click(function() {
			$(".gwc_tb2").remove();
		})
	} else {
		n = 0;
		$("#count").text(0);
		$("#zong").text(0 + "金币");
	}
})
//勾选
$(".gwc_tb2").click(function(e) {
	if(!/input-checkbox/.test(e.target.className)) {
		return;
	}
	e.target.classList.toggle("active");
	if(/active/.test(e.target.className)) {
		n++;
		if(n == $(".input-checkbox").length - 1) {
			$("#allselect").toggleClass("active");
		}
	} else {
		$("#allselect").removeClass("active");
		n--;
		if(n==0){
			$("#count").text(0);
			$("#zong").text(0 + "金币");
		}
	}
	puanduan();
})

//加减运算
for(var i = 0; i < $(".gwc_tb2 tr").length; i++) {
	oTr(i);
}

function oTr(i) {
	var price = $(".tb1_td4 span").eq(i).text();
	var t = $(".count-input").eq(i);
	$(".add").eq(i).click(function() {
		t.val(parseInt(t.val()) + 1);
		$(".subtotal").eq(i).html(parseInt(t.val()) * price);
		puanduan();
	})
	$(".reduce").eq(i).click(function() {
		if(t.val() > 0) {
			t.val(parseInt(t.val()) - 1);
			$(".subtotal").eq(i).html(parseInt(t.val()) * price);
		}
		puanduan();
	})
}
//件数，价格
function puanduan() {
	var tr = $(".gwc_tb2 tr .tb2_td1 span");
	var k = j = 0;
	for(var i = 0; i < tr.length; i++) {
		if(/active/.test(tr.eq(i).attr("class"))) {
			k += parseInt($(".count-input").eq(i).val());
		j += parseInt($(".subtotal").eq(i).html());
		$("#count").text(k);
		$("#zong").text(j + "金币");
		} 
	}
}
//删除
for(var i = 0; i < $(".delete").length; i++) {
	$(".delete").eq(i).click(function() {
		$(this).parent().remove();
	})
}
$("#deleteall").click(function(){
	var span=$(".gwc_tb2 tr .tb2_td1 span");
	var tr=$(".gwc_tb2 tr");
	for(var i =0;i<span.length;i++){
		if(/active/.test(span.eq(i).attr("class"))) {
			tr.eq(i).remove()
		}
	}
})
//弹出框
$(".yw_close").click(function() {
	$("#ball").css("display", "none");
})
$(".yw_del").click(function() {
	$("#ball").css("display", "none");
})

var b = 0;
$("#yw_next").click(function() {
	$("#ball").css("display", "block");
	b++;
	console.log(b);
	if(b % 2 == 0) {
		$(".ball_box1").css("display", "none");
		$(".ball_box2").css("display", "block");
	} else if(b%3 == 0){
		$("#ball").css("display", "none");
		window.location.href = "shoppingpay.html";
	}
})
$(".yw_get").on("click",function(){
	  window.location="personal_Information.html";
})
$(".yw_restart").on("click",function(){
	  window.location="phone&idVerify.html";
})


