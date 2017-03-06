		var img1=$(".lun img:first");
		var img2=$(".lun img:last-child");
		var span=$(".dian span");
		var lun=$(".lun");
	
		var timer=null;
		var num=0;
		var Carousel=$(".Carousel");
		var bgColor=["#7d4cf7","#9ce3e5","#f0dbbc","#27c5ea"]
		
		var timer2=null;
		var endbol=false;//用来判断轮播图是否在运动
		var endbol1=false;
		var skdj=true;
		var gg=2;
		var img_width=$(".lun img")[0].clientWidth;
		
		
		function move(){
			
			clearInterval(timer);
			timer=setInterval(function(){
				if(skdj==true){
					
					num+=1;
				}else{
					gg +=1;
					num +=1;
				}
				skdj=false;
				
				if(num>3){
					num=0;
				}
				if(gg>4){
					gg=1;
				}
				if(num%2==0){
					img2.css("left",img_width);
					img1.css("left",0);
					img2.attr({src:"img/lun_Img"+gg+".png"});
				}else{
					img1.css("left",img_width);
					img2.css("left",0);
					img1.attr({src:"img/lun_Img"+gg+".png"});
				}
				
				starMove1(1);
				bg();
				
			},2000);
		}
		
		move();
		function starMove1(h){
				clearInterval(timer2);
				if(endbol==true){return};
				endbol=true;
				var t=0;
				var b=0;
				var c=-img_width*h;
				var d=30;
				timer2=setInterval(function(){
					t++;
					if(t>d){
						clearInterval(timer2);
						endbol=false;
					}else{
						lun.css("left",Tween.Bounce.easeOut(t,b,c,d));
					}
				},30)
				lun.css("left",0);
			}
		
		
		$(".img_left").click(function(){
			clearInterval(timer);
			num--;
			gg--;
			if(num<0){
				num=3;
				gg=4;
			}
			
			console.log(num,gg);
			if(num%2==0){
					img1.css("left",-img_width);
					img2.css("left",0);
					img1.attr({src:"img/lun_Img"+gg+".png"});
				}else{
					img2.css("left",-img_width);
					img1.css("left",0);
					img2.attr({src:"img/lun_Img"+gg+".png"});
				}
			starMove1(-1);
			bg();
			
			move();
		})
		
		$(".img_right").click(function(){
			clearInterval(timer);
			num++;
			gg++;
			if(num>3){
					num=0;
				}
				if(gg>4){
					gg=1;
				}
			if(num%2==0){
					img2.css("left",img_width);
					img1.css("left",0);
					img2.attr({src:"img/lun_Img"+gg+".png"});
					
				}else{
					img1.css("left",img_width);
					img2.css("left",0);
					img1.attr({src:"img/lun_Img"+gg+".png"});
				}
			starMove1(1);
			bg();
			move();
		})
		

			span.click(function(){
				if(endbol==true){return;}
				clearInterval(timer);
				num=$(this).index();
				
				console.log(num);
				gg=num+1;
				if(num%2==0){
					img2.css("left",img_width);
					img1.css("left",0);
					img2.attr({src:"img/lun_Img"+gg+".png"});
				}else{
					img1.css("left",img_width);
					img2.css("left",0);
					img1.attr({src:"img/lun_Img"+gg+".png"});
				}
				starMove1(1);
				bg();
				move();
			})

		function bg(){
			for(var i=0;i<span.length;i++){
					span.eq(i).removeClass("dian1");
				}
			span.eq(num).addClass("dian1");
			
			// Carousel.css("background",bgColor[num]);
			Carousel.css({
				background:bgColor[num],
				transition:"2s"

			})
			
		}
		
