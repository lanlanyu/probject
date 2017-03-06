	$(".commodityAll").click(function(){
		window.location.href="all_shangpin.html";
	})
$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:1
			},
			success:function(json){
						if(json[0]>8){
							json[0]=8;
						}
						
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".hotShangpin_left_top ul").append(LI);
						}
					},
			async:true
		});
		
		
		$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:2
			},
			success:function(json){
						if(json[0]>5){
							json[0]=5;
						}
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".phone_phone ul").append(LI);
						}
					},
			async:true
		});
		
		
		$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:3
			},
			success:function(json){
						if(json[0]>5){
							json[0]=5;
						}
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".computer_computer ul").append(LI);
						}
					},
			async:true
		});
		
		
		$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:4
			},
			success:function(json){
				if(json[0]>5){
							json[0]=5;
						}
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".shuma_shuma ul").append(LI);
						}
					},
			async:true
		});
		$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:5
			},
			success:function(json){
				if(json[0]>5){
							json[0]=5;
						}
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".dianqi_dianqi ul").append(LI);
						}
					},
			async:true
		});
		
		$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:6
			},
			success:function(json){
				if(json[0]>5){
							json[0]=5;
						}
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".girl_girl ul").append(LI);
						}
					},
			async:true
		});
		
$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:7
			},
			success:function(json){
				if(json[0]>5){
							json[0]=5;
						}
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".chaoliu_chaoliu ul").append(LI);
						}
					},
			async:true
		});
	
$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:8
			},
			success:function(json){
				if(json[0]>5){
							json[0]=5;
						}
						for(var i=0;i<json[0];i++){
							var fffff=json[i+1].need_num-json[i+1].join_num;
							var LI=$('<li><div class="hotShangpin_left_top_img"><a href="shangpin_details.html"><img src="'+json[i+1].img+'"/></a></div><div class="hotShangpin_left_top_msg"><a href="shangpin_details.html"><p class="hotShangpin_left_top_name">'+json[i+1].name+'</p></a><p class="hotShangpin_left_top_people">总需人次: 	<span class="hotShangpin_left_top_num">'+json[i+1].need_num+'</span></p></div><div class="hotShangpin_jdt"><span></span></div><div class="hotShangpin_left_top_tongji clear"><div class="hotShangpin_left_top_tongji_left left"><p class="ycrs">'+json[i+1].join_num+'</p><p>已参与人次</p></div><div class="hotShangpin_left_top_tongji_right right"><p class="syrc">'+fffff+'</p><p>剩余人次</p></div></div><div class="shangping_buy clear"><a href="shangpin_details.html"><span class="shangping_buy_b left">立即购买</span></a><a href="shangpin_details.html"><span></span></a></div></li>');
							$(".meishi_meishi ul").append(LI);
						}
					},
			async:true
		});
		

$.ajax({
			type:"post",
			url:"index.php",
			dataType:'json',
			data:{
				code:9
			},
			success:function(json){
				if(json[0]>15){
							json[0]=15;
						}
						for(var i=0;i<json[0];i++){
							var LI=$('<li><div class="xinpin_img"><img src="'+json[i+1].img+'"/></div><p>'+json[i+1].name+'</p><p>总需人数:'+json[i+1].need_num+'</p></li>');
							$(".xinpin_xinpin ul").append(LI);
						}
					},
			async:true
		});