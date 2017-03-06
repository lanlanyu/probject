
//peganation

var json1=null;
$.ajax({
			type:"POST",
			url:"./all_shangPin.php",
			dataType:'json',
			data:{
				code:0
			},
			success:function(json){
				console.log(json);
				json1=json;
				var gg=Math.ceil(json1[1]/40);
				if(json1[0]>40){
					json1[0]=40;
				}
				
				for(var i=0;i<json1[0];i++){
					var fffff=json1[i+3].need_num-json1[i+3].join_num;
						if(fffff<0){
							fffff=0;
						}
					var LI=$('<li class="li"><div class="mia_goods_div"><div class="mia_goods_phone"><a href="shangpin_details.html"><img src="mia_'+json1[i+3].img+'"/></a></div><a href="shangpin_details.html"><p>'+json1[i+3].name+'</p></a><p class="mia_zongxu">总需人数：'+json1[i+3].need_num+'</p><div class="mia_progress"><p class="pro1"><img src="mia_img/jindu2.png" alt="" /></p><p class="pro2"><img src="mia_img/jindu1.png" alt="" /></p></div><div	 class="mia_can mia_clear"><div	 class="mia_fl" style="width: 50%;"><b>'+json1[i+3].join_num+'</b><p>已参与人次</p></div><div class="mia_fr" style="width: 50%;text-align: right;"><b>'+fffff+'</b><p>剩余人次</p></div></div><div class="mia_gou mia_clear"><div class="mia_fl mia_jiajian"><p class="mia_fl mia_shu">123456</p><div class="mia_fr"><p class="mia_jjb">+</p><p>-</p></div></div><a href="shangpin_details.html"><p class="mia_fl mia_liji">立即购买</p></a><p class="mia_fr mia_che"><img src="mia_img/gouwuche.png" alt=""/></p></div></div></li>');
					$("#mia_body #mia_b #mia_goods .mia_gr").append(LI);
				}
				for(var $i=gg;$i>0;$i--){
					var LI=$('<li class="mia_fl chpage">'+$i+'</li>');
					LI.click(changePage);
					$("#ggsimada").after(LI);
				}
				$("#mia_sxy .chpage").eq(0).css("color","white");

				shangYiYe(gg);

			},
			async:true
});


var b=null;
function changePage(){
	var a=this.innerText;
	b=a-1;
	console.log(this);
	$("#mia_body #mia_b #mia_goods .mia_gr .li").remove();
	$("#mia_sxy .chpage").remove();
	$.ajax({
			type:"POST",
			url:"./all_shangPin.php",
			dataType:'json',
			data:{
				"code":a
			},
			success:function(json){
				console.log(json);
				json1=json;
				var gg=Math.ceil(json1[1]/40);
				if(json1[0]>40){
					json1[0]=40;
				}
				
				for(var i=0;i<json1[0];i++){
					var fffff=json1[i+3].need_num-json1[i+3].join_num;
						if(fffff<0){
							fffff=0;
						}
					var LI=$('<li class="li"><div class="mia_goods_div"><div class="mia_goods_phone"><a href="shangpin_details.html"><img src="mia_'+json1[i+3].img+'"/></a></div><a href="shangpin_details.html"><p>'+json1[i+3].name+'</p></a><p class="mia_zongxu">总需人数：'+json1[i+3].need_num+'</p><div class="mia_progress"><p class="pro1"><img src="mia_img/jindu2.png" alt="" /></p><p class="pro2"><img src="mia_img/jindu1.png" alt="" /></p></div><div	 class="mia_can mia_clear"><div	 class="mia_fl" style="width: 50%;"><b>'+json1[i+3].join_num+'</b><p>已参与人次</p></div><div class="mia_fr" style="width: 50%;text-align: right;"><b>'+fffff+'</b><p>剩余人次</p></div></div><div class="mia_gou mia_clear"><div class="mia_fl mia_jiajian"><p class="mia_fl mia_shu">123456</p><div class="mia_fr"><p class="mia_jjb">+</p><p>-</p></div></div><a href="shangpin_details.html"><p class="mia_fl mia_liji">立即购买</p></a><p class="mia_fr mia_che"><img src="mia_img/gouwuche.png" alt=""/></p></div></div></li>');
					$("#mia_body #mia_b #mia_goods .mia_gr").append(LI);
				}
				for(var $i=gg;$i>0;$i--){
					var LI=$('<li class="mia_fl chpage">'+$i+'</li>');
					LI.click(changePage);
					$("#ggsimada").after(LI);
				}
				$("#mia_sxy .chpage").eq(b).css("color","white");
				
			},
			async:true
	});
}


$("#mia_c .mia_tc").click(function(){
		b=0;
		xiePage(1);
		$("#mia_bimg li").css("color","black");
		
	})

//传参写法
function shangYiYe(bg){
	$("#ggsimada").click(function(){
		//获取到当前的页面数
		var page=Number(json1[2]);
		if(page==0){
			page=1;
		}
		page--;
		b=page-1;
		if(page<1){
			page=1;
		}else{
			xiePage(page);
		}
		console.log(page);
	})
	$("#ggsimada_xia").click(function(){
		var page=Number(json1[2]);
		if(page==0){
			page=1;
		}
		page++;
		if(page>bg){
			page=bg;
		}
		b=page-1;
		xiePage(page);
	})
}


function xiePage(cpage){
	$("#mia_body #mia_b #mia_goods .mia_gr .li").remove();
	$("#mia_sxy .chpage").remove();
	$("#mia_c .new").remove();
	$("#ggsimada").remove();
	$("#ggsimada_xia").remove();
	$.ajax({
			type:"POST",
			url:"./all_shangPin.php",
			dataType:'json',
			data:{
				"code":cpage
			},
			success:function(json){
				console.log(json);
				json1=json;
				bg=Math.ceil(json1[1]/40);
				if(json1[0]>40){
					json1[0]=40;
				}
				
				for(var i=0;i<json1[1];i++){
					var fffff=json1[i+3].need_num-json1[i+3].join_num;
						if(fffff<0){
							fffff=0;
						}
					var LI=$('<li class="li"><div class="mia_goods_div"><div class="mia_goods_phone"><a href="shangpin_details.html"><img src="mia_'+json1[i+3].img+'"/></a></div><a href="shangpin_details.html"><p>'+json1[i+3].name+'</p></a><p class="mia_zongxu">总需人数：'+json1[i+3].need_num+'</p><div class="mia_progress"><p class="pro1"><img src="mia_img/jindu2.png" alt="" /></p><p class="pro2"><img src="mia_img/jindu1.png" alt="" /></p></div><div	 class="mia_can mia_clear"><div	 class="mia_fl" style="width: 50%;"><b>'+json1[i+3].join_num+'</b><p>已参与人次</p></div><div class="mia_fr" style="width: 50%;text-align: right;"><b>'+fffff+'</b><p>剩余人次</p></div></div><div class="mia_gou mia_clear"><div class="mia_fl mia_jiajian"><p class="mia_fl mia_shu">123456</p><div class="mia_fr"><p class="mia_jjb">+</p><p>-</p></div></div><a href="shangpin_details.html"><p class="mia_fl mia_liji">立即购买</p></a><p class="mia_fr mia_che"><img src="mia_img/gouwuche.png" alt=""/></p></div></div></li>');
					$("#mia_body #mia_b #mia_goods .mia_gr").append(LI);
				}
				
				var sli=$('<li class="mia_fl" id="ggsimada"></li>');
				sli.html("上一页");
				$("#mia_sxy ul").append(sli);
				
				for(var $i=bg;$i>0;$i--){
					var LI=$('<li class="mia_fl chpage">'+$i+'</li>');
					LI.click(changePage);
					$("#ggsimada").after(LI);
				}
				var xli=$('<li class="mia_fl" id="ggsimada_xia"></li>');
				xli.html("下一页");
				$("#mia_sxy ul").append(xli);
				$("#mia_sxy .chpage").eq(b).css("color","white");
				shangYiYe(bg);
			},
			async:true
	});
}


//部分产品展示
var abcdef=null;
var json2=null;
var txt=null;




for(var i=0;i<$("#mia_bimg li").length;i++){
	$("#mia_bimg li").eq(i).click(function(){
		$("#mia_bimg li").css("color","black");
		txt=$(this).children("p").text();
		console.log(txt);
		$(this).css("color","red");
		abcdef=$(this).index();
		newShow(abcdef);
	})
}
		


var k=null;
var bg=null;



function newShow(abcdef){
	b=0;
	k=abcdef+1;
	$("#mia_body #mia_b #mia_goods .mia_gr .li").remove();
	$("#mia_sxy .chpage").remove();
	$("#mia_c .new").remove();
	$("#ggsimada").remove();
	$("#ggsimada_xia").remove();
	$.ajax({
			type:"POST",
			url:"./abcdef.php",
			dataType:'json',
			data:{
				"code":k,
				"number":1
			},
			success:function(json){
				json2=json;
				bg=Math.ceil(json2[0]/40);
				if(json2[1]>40){
					json2[1]=40;
				}
				
				for(var i=0;i<json2[1];i++){
					var fffff=json2[i+3].need_num-json2[i+3].join_num;
						if(fffff<0){
							fffff=0;
						}
					var LI=$('<li class="li"><div class="mia_goods_div"><div class="mia_goods_phone"><a href="shangpin_details.html"><img src="mia_'+json2[i+3].img+'"/></a></div><a href="shangpin_details.html"><p>'+json2[i+3].name+'</p></a><p class="mia_zongxu">总需人数：'+json2[i+3].need_num+'</p><div class="mia_progress"><p class="pro1"><img src="mia_img/jindu2.png" alt="" /></p><p class="pro2"><img src="mia_img/jindu1.png" alt="" /></p></div><div	 class="mia_can mia_clear"><div	 class="mia_fl" style="width: 50%;"><b>'+json2[i+3].join_num+'</b><p>已参与人次</p></div><div class="mia_fr" style="width: 50%;text-align: right;"><b>'+fffff+'</b><p>剩余人次</p></div></div><div class="mia_gou mia_clear"><div class="mia_fl mia_jiajian"><p class="mia_fl mia_shu">123456</p><div class="mia_fr"><p class="mia_jjb">+</p><p>-</p></div></div><a href="shangpin_details.html"><p class="mia_fl mia_liji">立即购买</p></a><p class="mia_fr mia_che"><img src="mia_img/gouwuche.png" alt=""/></p></div></div></li>');
					$("#mia_body #mia_b #mia_goods .mia_gr").append(LI);
				}
				
				var sli=$('<li class="mia_fl" id="ggsimada"></li>');
				sli.html("上一页");
				$("#mia_sxy ul").append(sli);
				
				for(var $i=bg;$i>0;$i--){
					var LI=$('<li class="mia_fl chpage">'+$i+'</li>');
					LI.click(changePage1);
					$("#ggsimada").after(LI);
				}
				var span=$("<span class='new'></span>");
				span.html(" > "+txt);
				span.css("color","#0033CC");
				$("#mia_c").append(span);
				
				var xli=$('<li class="mia_fl" id="ggsimada_xia"></li>');
				xli.html("下一页");
				$("#mia_sxy ul").append(xli);
				
				$("#mia_sxy .chpage").eq(b).css("color","white");
				shangYiYe1();
			},
			async:true
	});
	
}



function changePage1(){
	var a=this.innerText;
	b=a-1;
	$("#mia_body #mia_b #mia_goods .mia_gr .li").remove();
	$("#mia_sxy .chpage").remove();
	$("#mia_c .new").remove();
	$("#ggsimada").remove();
	$("#ggsimada_xia").remove();
	$.ajax({
			type:"POST",
			url:"./abcdef.php",
			dataType:'json',
			data:{
				"code":k,
				"number":a
			},
			success:function(json){
				json2=json;
				if(json2[1]>40){
					json2[1]=40;
				}
				
				for(var i=0;i<json2[1];i++){
					var fffff=json2[i+3].need_num-json2[i+3].join_num;
						if(fffff<0){
							fffff=0;
						}
					var LI=$('<li class="li"><div class="mia_goods_div"><div class="mia_goods_phone"><a href="shangpin_details.html"><img src="mia_'+json2[i+3].img+'"/></a></div><a href="shangpin_details.html"><p>'+json2[i+3].name+'</p></a><p class="mia_zongxu">总需人数：'+json2[i+3].need_num+'</p><div class="mia_progress"><p class="pro1"><img src="mia_img/jindu2.png" alt="" /></p><p class="pro2"><img src="mia_img/jindu1.png" alt="" /></p></div><div	 class="mia_can mia_clear"><div	 class="mia_fl" style="width: 50%;"><b>'+json2[i+3].join_num+'</b><p>已参与人次</p></div><div class="mia_fr" style="width: 50%;text-align: right;"><b>'+fffff+'</b><p>剩余人次</p></div></div><div class="mia_gou mia_clear"><div class="mia_fl mia_jiajian"><p class="mia_fl mia_shu">123456</p><div class="mia_fr"><p class="mia_jjb">+</p><p>-</p></div></div><a href="shangpin_details.html"><p class="mia_fl mia_liji">立即购买</p></a><p class="mia_fr mia_che"><img src="mia_img/gouwuche.png" alt=""/></p></div></div></li>');
					$("#mia_body #mia_b #mia_goods .mia_gr").append(LI);
				}
				var sli=$('<li class="mia_fl" id="ggsimada"></li>');
				sli.html("上一页");
				$("#mia_sxy ul").append(sli);
				
				for(var $i=bg;$i>0;$i--){
					var LI=$('<li class="mia_fl chpage">'+$i+'</li>');
					LI.click(changePage1);
					$("#ggsimada").after(LI);
				}
				var span=$("<span class='new'></span>");
				span.html(" > "+txt);
				span.css("color","#0033CC");
				$("#mia_c").append(span);
				
				var xli=$('<li class="mia_fl" id="ggsimada_xia"></li>');
				xli.html("下一页");
				$("#mia_sxy ul").append(xli);
				$("#mia_sxy .chpage").eq(b).css("color","white");
				shangYiYe1();
			},
			async:true
	});
}

function shangYiYe1(){
	$("#ggsimada").click(function(){
		var page=Number(json2[2]);
		page--;
		b=page-1;
		if(page<1){
			page=1;
		}else{
			xiePage1(page);
		}
	})
	$("#ggsimada_xia").click(function(){
		var page=Number(json2[2]);
		page++;
		if(page>bg){
			page=bg;
		}
		b=page-1;
		xiePage1(page);
	})
}



function xiePage1(cpage){
	$("#mia_body #mia_b #mia_goods .mia_gr .li").remove();
	$("#mia_sxy .chpage").remove();
	$("#mia_c .new").remove();
	$("#ggsimada").remove();
	$("#ggsimada_xia").remove();
	$.ajax({
			type:"POST",
			url:"./abcdef.php",
			dataType:'json',
			data:{
				"code":k,
				"number":cpage
			},
			success:function(json){
				json2=json;
				if(json2[1]>40){
					json2[1]=40;
				}

				for(var i=0;i<json2[1];i++){
					var fffff=json2[i+3].need_num-json2[i+3].join_num;
						if(fffff<0){
							fffff=0;
						}
					var LI=$('<li class="li"><div class="mia_goods_div"><div class="mia_goods_phone"><img src="mia_'+json2[i+3].img+'"/></div><p>'+json2[i+3].name+'</p><p class="mia_zongxu">总需人数：'+json2[i+3].need_num+'</p><div class="mia_progress"><p class="pro1"><img src="mia_img/jindu2.png" alt="" /></p><p class="pro2"><img src="mia_img/jindu1.png" alt="" /></p></div><div	 class="mia_can mia_clear"><div	 class="mia_fl" style="width: 50%;"><b>'+json2[i+3].join_num+'</b><p>已参与人次</p></div><div class="mia_fr" style="width: 50%;text-align: right;"><b>'+fffff+'</b><p>剩余人次</p></div></div><div class="mia_gou mia_clear"><div class="mia_fl mia_jiajian"><p class="mia_fl mia_shu">123456</p><div class="mia_fr"><p class="mia_jjb">+</p><p>-</p></div></div><p class="mia_fl mia_liji">立即购买</p><p class="mia_fr mia_che"><img src="mia_img/gouwuche.png" alt=""/></p></div></div></li>');
					$("#mia_body #mia_b #mia_goods .mia_gr").append(LI);
				}
				var sli=$('<li class="mia_fl" id="ggsimada"></li>');
				sli.html("上一页");
				$("#mia_sxy ul").append(sli);
				
				for(var $i=bg;$i>0;$i--){
					var LI=$('<li class="mia_fl chpage">'+$i+'</li>');
					LI.click(changePage1);
					$("#ggsimada").after(LI);
				}
				var span=$("<span class='new'></span>");
				span.html(" > "+txt);
				span.css("color","#0033CC");
				$("#mia_c").append(span);
				
				var xli=$('<li class="mia_fl" id="ggsimada_xia"></li>');
				xli.html("下一页");
				$("#mia_sxy ul").append(xli);
				$("#mia_sxy .chpage").eq(b).css("color","white");
				shangYiYe1();
			},
			async:true
	});
}



		


//获取地址栏的信息
var Location=location.href;
var Location_num=Location.charAt(Location.length-1);
console.log(Location_num);
if(!isNaN(Location_num)){
	abcdef=Location_num;
	for(var i=0;i<$("#mia_bimg li").length;i++){
		$("#mia_bimg li").css("color","black");
		txt=$("#mia_bimg li").eq(abcdef).children("p").text();
		$("#mia_bimg li").eq(abcdef).css("color","red");
}
	newShow(abcdef);
}







