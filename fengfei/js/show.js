var arr = ["helpIntro", "helpFAQ", "agreement", "baozhangtixi", "safepay", "privacy", "delivery", "checkgood", "toolong", "about", "kefuzx", "suggest"];
window.onload = function() {
	var UL1 = document.querySelector("#navl .ul1");
	var UL2 = document.querySelector("#navl .ul2");
	var UL3 = document.querySelector("#navl .ul3");
	var UL4 = document.querySelector("#navl .ul4");
	var Li1 = UL1.getElementsByTagName("li");
	var Li2 = UL2.getElementsByTagName("li");
	var Li3 = UL3.getElementsByTagName("li");
	var Li4 = UL4.getElementsByTagName("li");
	var arr1 = []
	push1(Li1, arr1);
	push1(Li2, arr1);
	push1(Li3, arr1);
	push1(Li4, arr1);
	
	for(var i = 0; i < arr1.length; i++) {
		arr1[i].index = i;
		arr1[i].onclick = function() {
			none(arr1, arr);
			console.log(arr[this.index]);
			var id = document.getElementById(arr[this.index]);
			id.style.display = "block";
		}
	}
}

function push1(obj, obj2) {
	for(var i = 0; i < obj.length; i++) {
		obj2.push(obj[i]);
	}
}

function none(obj, obj2) {
	for(var i = 0; i < obj.length; i++) {
		var id1 = document.getElementById(obj2[i]);
		id1.style.display = "none";
	}
}


var hint1 = document.querySelector(".h-ht1");
		var hint2 = document.querySelector(".h-ht2");
		var txtArea = function fnOnblur(obj) {
			if(obj.value.length < 1) {
				hint1.style.display = "block";
			}else if(hint1.style.display = "none") {
				hint1.style.display = "none";
				
			}
		}
		//jq验证码
    		$.idcode.setCode();   //加载生成验证码方法
    		$("#btn").click(function(){
        		var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        		if(IsBy){
        			if(hint1.style.display == "block"){
        				alert("请在上方填写您的详细意见或建议");
        			}else{
        				alert("感谢您的宝贵建议！我们会尽快回复");
        				hint2.style.display = "none";
        			}
            		
        		}else {
            		hint2.style.display = "block";
        		}
    		})
    		
		var Location=location.href;
		var Location_num=Location.substring(Location.indexOf("?")+1);
		if(!isNaN(Location_num)){
			none(arr, arr);
			var id = document.getElementById(arr[Location_num]);
			id.style.display = "block";
		}