		var jie_right=$("result_right");
		var jie_left=$("result_left");
		var ul1=$(".win ul");
		var timer3=null;
		var timer4=null;
		var win_width=$(".win")[0].clientWidth;
		
		var skdj1=true;
		var dian_dian=$(".result_dian span");
		var num_num=0;
		var endbol7=false;
		
		
		function move1(){
			clearInterval(timer3);
			timer3=setInterval(function(){
				num_num++;
				if(num_num>2){
					num_num=0;
				}
		
				starMove2(num_num);
			},3000);
		}
		
		function starMove2(obj){
				var win_left=ul1.offset().left;
				if(num_num==0){
					win_left=1000;
				}
				
				clearInterval(timer4);
				if(endbol7==true){return};
				endbol7=true;
				var t=0;
				var b=win_left;
				var c=-win_width;
				var d=30;
				timer4=setInterval(function(){
					t++;
					if(t>d){
						clearInterval(timer4);
						endbol7=false;
					}else{
						ul1.css("left",Tween.Linear(t,b,c,d));
					}
				},30)
			
			}
		
		move1();