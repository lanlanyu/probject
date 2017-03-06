$(function() {
	/*瀑布流开始*/
	var container = $('.waterfull ul');
	var loading = $('#imloading');
	// 初始化loading状态
	loading.data("on", true);
	/*判断瀑布流最大布局宽度，最大为909*/
	function tores() {
		var tmpWid = $(window).width();
		if(tmpWid > 909) {
			tmpWid = 909;
		} else {
			var column = Math.floor(tmpWid / 303);
			tmpWid = column * 303;
		}
		$('.waterfull').width(tmpWid);
	}
	tores();
	$(window).resize(function() {
		tores();
	});
	container.imagesLoaded(function() {
		container.masonry({
			columnWidth: 303,
			itemSelector: '.item',
			isFitWidth: true, //是否根据浏览器窗口大小自动适应默认false
			isAnimated: true, //是否采用jquery动画进行重拍版
			isRTL: false, //设置布局的排列方式，即：定位砖块时，是从左向右排列还是从右向左排列。默认值为false，即从左向右
			isResizable: false, //是否自动布局默认true
			animationOptions: {
				duration: 800,
				easing: 'easeInOutBack', //如果你引用了jQeasing这里就可以添加对应的动态动画效果，如果没引用删除这行，默认是匀速变化
				queue: false //是否队列，从一点填充瀑布流
			}
		});
	});
	/*模拟从后台获取到的数据*/
	var sqlJson = [{
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	},{
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}, {
		'res': 'imgs/phone.png',
		'res_name': '商品名称左对齐',
		'res_num': '123456789',
		'res_people': '123456',
		'user_img': 'imgs/头像.png',
		'user_name': '用户名称用户名称...',
		'user_num': '123456789',
		'user_people': '123456'
	}];
	/*本应该通过ajax从后台请求过来类似sqljson的数据然后，便利，进行填充，这里我们用sqlJson来模拟一下数据*/
	$(window).scroll(function() {
		if(!loading.data("on")) return;
		// 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
		var itemNum = $('#waterfull').find('.item').length;
		console.log(itemNum);
		var itemArr = [];
		itemArr[0] = $('#waterfull').find('.item').eq(itemNum - 1).offset().top + $('#waterfull').find('.item').eq(itemNum - 1)[0].offsetHeight;
		itemArr[1] = $('#waterfull').find('.item').eq(itemNum - 2).offset().top + $('#waterfull').find('.item').eq(itemNum - 1)[0].offsetHeight;
		itemArr[2] = $('#waterfull').find('.item').eq(itemNum - 3).offset().top + $('#waterfull').find('.item').eq(itemNum - 1)[0].offsetHeight;
		var maxTop = Math.max.apply(null, itemArr);
		if(maxTop < $(window).height() + $(document).scrollTop()) {
			//加载更多数据
			loading.data("on", false).fadeIn(800);
			(function(sqlJson) {
				/*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
				if(itemNum > 75) {
					return;
				} else {
					var html = "";
					for(var i in sqlJson) {
						html += "<li class='item'><a href='####' class='a-img'><img src='" + sqlJson[i].res + "'></a>";
						html += "<div class='yw_message'><p>" + sqlJson[i].res_name + "</p><p>期号：<span>" + sqlJson[i].res_num + "</span></p><p>总需人次：<span>" + sqlJson[i].res_people + "</span></p></div>";
						html += "<div class='yw_usermessage clear'><img src='" + sqlJson[i].user_img + "' class = 'left'><div class='usermessage left'><p>" + sqlJson[i].user_name + "</p><p>幸运号码：<span>" + sqlJson[i].user_num + "</span></p><p>参与人次：<span>" + sqlJson[i].user_people + "</span></p></div></div>";
						html += "<a href='' class='yw_sou right'>查看详情&nbsp;></a></li>";
					}
					/*模拟ajax请求数据时延时800毫秒*/
					var time = setTimeout(function() {
						$(html).find('img').each(function(index) {
							loadImage($(this).attr('src'));
						})
						var $newElems = $(html).css({
							opacity: 0
						}).appendTo(container);
						$newElems.imagesLoaded(function() {
							$newElems.animate({
								opacity: 1
							}, 800);
							container.masonry('appended', $newElems, true);
							loading.data("on", true).fadeOut();
							clearTimeout(time);
						});
					}, 800)
				}
				var btnN = itemNum / 15;
				for(var i = 1; i < btnN; i++) {
					if(itemNum < 75 * i) {
						return;
					} else {
						$(".section1").click(function() {
							var html = "";
					for(var i in sqlJson) {
						html += "<li class='item'><a href='####' class='a-img'><img src='" + sqlJson[i].res + "'></a>";
						html += "<div class='yw_message'><p>" + sqlJson[i].res_name + "</p><p>期号：<span>" + sqlJson[i].res_num + "</span></p><p>总需人次：<span>" + sqlJson[i].res_people + "</span></p></div>";
						html += "<div class='yw_usermessage clear'><img src='" + sqlJson[i].user_img + "' class = 'left'><div class='usermessage left'><p>" + sqlJson[i].user_name + "</p><p>幸运号码：<span>" + sqlJson[i].user_num + "</span></p><p>参与人次：<span>" + sqlJson[i].user_people + "</span></p></div></div>";
						html += "<a href='' class='yw_sou right'>查看详情&nbsp;></a></li>";
					}
					/*模拟ajax请求数据时延时800毫秒*/
					var time = setTimeout(function() {
						$(html).find('img').each(function(index) {
							loadImage($(this).attr('src'));
						})
						var $newElems = $(html).css({
							opacity: 0
						}).appendTo(container);
						$newElems.imagesLoaded(function() {
							$newElems.animate({
								opacity: 1
							}, 800);
							container.masonry('appended', $newElems, true);
							loading.data("on", true).fadeOut();
							clearTimeout(time);
						});
					}, 800)
						})
					}
				}
			})(sqlJson);
		}
	});

	function loadImage(url) {
		var img = new Image();
		//创建一个Image对象，实现图片的预下载
		img.src = url;
		if(img.complete) {
			return img.src;
		}
		img.onload = function() {
			return img.src;
		};
	};
	loadImage('imgs/phone.png');
})

$(function() {
	/*瀑布流开始*/
	var baowei = $('#baowei');
	var load = $('#load');
	load.data("on", true);
	$(window).resize(function() {
		var tmpWid = 291;
		$('#baowei').width(tmpWid);
	});
	baowei.imagesLoaded(function() {
		baowei.masonry({
			columnWidth: 291,
			itemSelector: '.baowei',
			isFitWidth: false,
			isAnimated: true,
			isRTL: false,
			isResizable: true,
			animationOptions: {
				duration: 800,
				easing: 'easeInOutBack',
				queue: false
			}
		});
	});
	/*模拟从后台获取到的数据*/
	var sqlJ = [{
		'src': 'imgs/phone.png',
		'name': '商品名称左对齐',
		'num1': '123456',
		'num2': '123456',
		'num3': '123456'
	}, {
		'src': 'imgs/phone.png',
		'name': '商品名称左对齐',
		'num1': '123456',
		'num2': '123456',
		'num3': '123456'
	}, {
		'src': 'imgs/phone.png',
		'name': '商品名称左对齐',
		'num1': '123456',
		'num2': '123456',
		'num3': '123456'
	}, {
		'src': 'imgs/phone.png',
		'name': '商品名称左对齐',
		'num1': '123456',
		'num2': '123456',
		'num3': '123456'
	}, {
		'src': 'imgs/phone.png',
		'name': '商品名称左对齐',
		'num1': '123456',
		'num2': '123456',
		'num3': '123456'
	}];
	$(window).scroll(function() {
		if(!load.data("on")) return;
		// 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
		var baoNum = $('#baowei').find('.baowei').length;
		console.log(baoNum);
		var maxT = $('#baowei').find('.baowei').eq(baoNum - 1).offset().top + $('#baowei').find('.baowei').eq(baoNum - 1)[0].offsetHeight;
		if(maxT < $(window).height() + $(document).scrollTop()) {
			//加载更多数据
			load.data("on", false).fadeIn(800);
			(function(sqlJ) {
				/*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
				if(baoNum > 25) {
					return;
				} else {
					var html = "";
					for(var i in sqlJ) {
						html += "<li class='baowei'><a href='####' class='b-img'><img src='" + sqlJ[i].src + "'></a>";
						html += "<div class='bw_message'><p>" + sqlJ[i].name + "</p><p>总需人次：<span>" + sqlJ[i].num1 + "</span></p></div>";
						html += "<div class='yw_progress'></div>";
						html += "<div class='bw_usermessage clear'><div class='bw_usermessage_l left'><p>" + sqlJ[i].num2 + "</p><p>已参与人次</p></div><div class='bw_usermessage_r right'><p>" + sqlJ[i].num3 + "</p><p>剩余人次</p></div></div>";
						html += "<div id='yw_btn'>我来包尾</div>";
					}
					/*模拟ajax请求数据时延时800毫秒*/
					var timer = setTimeout(function() {
						$(html).find('img').each(function(index) {
							loadImg($(this).attr('src'));
						})
						var $newElems = $(html).css({
							opacity: 0
						}).appendTo(baowei);
						$newElems.imagesLoaded(function() {
							$newElems.animate({
								opacity: 1
							}, 800);
							baowei.masonry('appended', $newElems, true);
							load.data("on", true).fadeOut();
							clearTimeout(timer);
						});
					}, 800)
				}
				var btnNum = baoNum / 5;
				for(var i = 1; i < btnNum; i++) {
					if(baoNum < 25 * i) {
						return;
					} else {
						$(".section1").click(function() {
							var html = "";
							for(var i in sqlJ) {
								html += "<li class='baowei'><a href='####' class='b-img'><img src='" + sqlJ[i].src + "'></a>";
								html += "<div class='bw_message'><p>" + sqlJ[i].name + "</p><p>总需人次：<span>" + sqlJ[i].num1 + "</span></p></div>";
								html += "<div class='yw_progress'></div>";
								html += "<div class='bw_usermessage clear'><div class='bw_usermessage_l left'><p>" + sqlJ[i].num2 + "</p><p>已参与人次</p></div><div class='bw_usermessage_r right'><p>" + sqlJ[i].num3 + "</p><p>剩余人次</p></div></div>";
								html += "<div id='yw_btn'>我来包尾</div>";
							}
							/*模拟ajax请求数据时延时800毫秒*/
							var timer = setTimeout(function() {
								$(html).find('img').each(function(index) {
									loadImg($(this).attr('src'));
								})
								var $newElems = $(html).css({
									opacity: 0
								}).appendTo(baowei);
								$newElems.imagesLoaded(function() {
									$newElems.animate({
										opacity: 1
									}, 800);
									baowei.masonry('appended', $newElems, true);
									load.data("on", true).fadeOut();
									clearTimeout(timer);
								});
							}, 800)
						})
					}
				}
			})(sqlJ);
		}
	});

	function loadImg(url) {
		var img = new Image();
		//创建一个Image对象，实现图片的预下载
		img.src = url;
		if(img.complete) {
			return img.src;
		}
		img.onload = function() {
			return img.src;
		};
	};
	loadImg('imgs/phone.png');
})