onload = function() {
	//顶部导航栏的初始样式
	$(".sn-i-arrow").css({
		float: "right",
		width: "6px",
		margin: "13px 0",
		height: "6px",
		background: "url(images/sitenav_icons.png) no-repeat",
		backgroundPosition: "0px 2px",
		marginLeft: "8px"
	});
	$(".sn-i-cart").css({
		float: "left",
		width: "14px",
		height: "14px",
		margin: "8px 8px",
		background: "url(images/sitenav_icons.png) no-repeat",
		backgroundPosition: "0px -3px"
	});
	$(".sn-i-favorite").css({
		float: "left",
		width: "14px",
		height: "14px",
		margin: "8px 8px",
		background: "url(images/sitenav_icons.png) no-repeat",
		backgroundPosition: "-15px -3px"
	});
	$(".sn-i-service").css({
		float: "left",
		width: "14px",
		height: "14px",
		margin: "8px 8px",
		background: "url(images/sitenav_icons.png) no-repeat",
		backgroundPosition: "-29px -3px"
	});
	$(".sn-i-phone").css({
		float: "left",
		width: "14px",
		height: "14px",
		margin: "8px 8px",
		background: "url(images/sitenav_icons.png) no-repeat",
		backgroundPosition: "-42px -3px"
	});
	$(".sn-i-site").css({
		float: "left",
		width: "14px",
		height: "14px",
		margin: "8px 8px",
		background: "url(images/sitenav_icons.png) no-repeat",
		backgroundPosition: "-57px -3px"
	});
	$(".index-link").css({
		float: "right",
		lineHeight: "32px",
		marginRight: "8px"
	});
	/*收藏夹*/
	$(".ely-sn-menuwrap .q-favorite .menu-hd").mousemove(function() {
		console.log("aaaa");
		//左右边框出来
		$(".ely-sn-menuwrap .q-favorite .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid"
		});
		//图标变色
		$(".sn-i-favorite").css({
			backgroundPosition: "-16px -17px"
		});
		//小三角翻转
		$(".q-favorite .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
		//下边的菜单出来
		$(".q-favorite .menu-bd").css({
			display: "block",
			zIndex: "10"
		});
	})

	$(".ely-sn-menuwrap .q-favorite .menu-hd").mouseout(function() {
		$(".sn-i-favorite").css({
			backgroundPosition: "-15px -3px"
		});
		$(".q-favorite .sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".q-favorite .menu-bd").css({
			display: "none"
		});
		$(".ely-sn-menuwrap .q-favorite .menu-hd").css({
			borderLeft: "1px #ffffff solid",
			borderRight: "1px #ffffff solid"
		});

	})
	$(".q-favorite .menu-bd").mousemove(function() {
		$(".ely-sn-menuwrap .q-favorite .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid",
			color:"#ca062c"
		});
			//图标变色
		$(".sn-i-favorite").css({
			backgroundPosition: "-16px -17px"
		});
		//小三角翻转
		$(".q-favorite .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
		$(".q-favorite .menu-bd").css({
			display: "block",
			zIndex: "10"
		});

	})
	$(".q-favorite .menu-bd").mouseout(function() {
		$(".ely-sn-menuwrap .q-favorite .menu-hd").css({
			borderLeft: "1px #ffffff solid",
			borderRight: "1px #ffffff solid",
			color:"#666"
		});
		$(".sn-i-favorite").css({
			backgroundPosition: "-15px -3px"
		});
		$(".q-favorite .sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".q-favorite .menu-bd").css({
			display: "none"
		});

	});
	/*我的衣联*/
	$(".ely-sn-menuwrap .q-myeelly .menu-hd").mousemove(function() {
		//console.log("aaaa");
		$(".q-myeelly .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid",
			zIndex: "100",
			color:"#ca062c"
		});
		//		$(".ely-sn-cart .menu-hd").css({
		//			zIndex:"1"
		//		})
		$(".q-myeelly .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
		$(".q-myeelly .menu-bd").css({
			display: "block",
			zIndex: "10"
		});
	})
	$(".ely-sn-menuwrap .q-myeelly .menu-hd").mouseout(function() {
		$(".q-myeelly .menu-hd").css({
			borderLeft: "1px #fff solid",
			borderRight: "1px #fff solid",
			zIndex: "auto",
			color:"#666"
		});
		$(".q-myeelly .sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".q-myeelly .menu-bd").css({
			display: "none",
			zIndex: "auto"
		});
	})
	$(".q-myeelly .menu-bd").mousemove(function() {
		$(".q-myeelly .menu-bd").css({
			display: "block",
			zIndex: "10"
		})
		$(".q-myeelly .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid",
			zIndex: "100",
			color:"#ca062c"
		});
		$(".q-myeelly .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
	});
	$(".q-myeelly .menu-bd").mouseout(function() {
		$(".q-myeelly .menu-hd").css({
			borderLeft: "1px #fff solid",
			borderRight: "1px #fff solid",
			zIndex: "auto",
			color:"#666"
		});
		$(".q-myeelly .sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".q-myeelly .menu-bd").css({
			display: "none",
			zIndex: "auto"
		});
	});
	/*网站导航*/
	$(".ely-sn-menuwrap .q-site .menu-hd").mousemove(function() {
		console.log("aaaa");
		//左右边框出来
		$(".ely-sn-menuwrap .q-site .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid",
			borderBottom:"1px #ffffff solid",
			zIndex:"100"
		});
		//图标变色
		$(".sn-i-site").css({
			backgroundPosition: "-57px -17px"
		});
		//小三角翻转
		$(".q-site .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
		//下边的菜单出来
		$(".q-site .menu-bd").css({
			display: "block",
			zIndex: "10"
		});
	})

	$(".ely-sn-menuwrap .q-site .menu-hd").mouseout(function() {
		$(".sn-i-site").css({
			backgroundPosition: "-57px -3px"
		});
		$(".q-site.sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".q-site .menu-bd").css({
			display: "none"
		});
		$(".ely-sn-menuwrap .q-site .menu-hd").css({
			borderLeft: "1px #ffffff solid",
			borderRight: "1px #ffffff solid"
		});

	})
	$(".q-site .menu-bd").mousemove(function() {
		$(".ely-sn-menuwrap .q-site .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid",
			color:"#ca062c"
		});
			//图标变色
		$(".sn-i-site").css({
			backgroundPosition: "-57px -17px"
		});
		//小三角翻转
		$(".q-site .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
		$(".q-site .menu-bd").css({
			display: "block",
			zIndex: "10"
		});

	})
	$(".q-site .menu-bd").mouseout(function() {
		$(".ely-sn-menuwrap .q-site .menu-hd").css({
			borderLeft: "1px #ffffff solid",
			borderRight: "1px #ffffff solid",
			color:"#666"
		});
		$(".sn-i-site").css({
			backgroundPosition: "-57px -3px"
		});
		$(".q-site .sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".q-site .menu-bd").css({
			display: "none"
		});

	});
	//导航栏购物车
	$(".ely-sn-menuwrap .ely-sn-cart .menu-hd").mousemove(function() {
		//console.log("aaaa");
		//图标变色
		$(".sn-i-cart").css({
			backgroundPosition: "0px -17px"
		});
		$(".ely-sn-cart .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid",
			zIndex: "100",
			color:"#ca062c"
		});
		//		$(".ely-sn-cart .menu-hd").css({
		//			zIndex:"1"
		//		})
		$(".ely-sn-cart .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
		$(".ely-sn-cart .menu-bd").css({
			display: "block",
			zIndex: "10"
		});
	})
	$(".ely-sn-menuwrap .ely-sn-cart .menu-hd").mouseout(function() {
		$(".ely-sn-cart .menu-hd").css({
			borderLeft: "1px #fff solid",
			borderRight: "1px #fff solid",
			zIndex: "auto",
			color:"#666"
		});
		$(".ely-sn-cart .sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".ely-sn-cart .menu-bd").css({
			display: "none",
			zIndex: "auto"
		});
		$(".sn-i-cart").css({
			backgroundPosition: "0px -3px"
		});
	})
	$(".ely-sn-cart .menu-bd").mousemove(function() {
		$(".sn-i-cart").css({
			backgroundPosition: "0px -17px"
		});
		$(".ely-sn-cart .menu-bd").css({
			display: "block",
			zIndex: "10"
		})
		$(".ely-sn-cart .menu-hd").css({
			borderLeft: "1px #cdcdcd solid",
			borderRight: "1px #cdcdcd solid",
			zIndex: "100",
			color:"#ca062c"
		});
		$(".ely-sn-cart .sn-i-arrow").css({
			backgroundPosition: "-6px 2px"
		});
	});
	$(".ely-sn-cart .menu-bd").mouseout(function() {
		$(".ely-sn-cart .menu-hd").css({
			borderLeft: "1px #fff solid",
			borderRight: "1px #fff solid",
			zIndex: "auto",
			color:"#666"
		});
		$(".ely-sn-cart .sn-i-arrow").css({
			backgroundPosition: "0px 2px"
		});
		$(".ely-sn-cart .menu-bd").css({
			display: "none",
			zIndex: "auto"
		});
		$(".sn-i-cart").css({
			backgroundPosition: "0px -3px"
		});
	});
		//	手机逛衣联
	$(".ely-sn-menuwrap .q-phone .menu-hd").mousemove(function() {
			console.log("aaaa");
			$(".sn-i-phone").css({
				backgroundPosition: "-42px -17px"
			});
			$(".q-phone .sn-i-arrow").css({
				backgroundPosition: "-6px 2px"
			});
		})
		//main-nav动画
	$(".bg-2").mouseenter(function() {
		$(".bg-1").css({
			background: "#ee2346"
		});
		$(".bg-2").css({
			background: "#303345"
		});
		$(".cc-level-right2").css({
			display: "block",
			zIndex:"999"
		});
		$(".cc-level-right2").stop().animate({
			width: "628px"
		}, 500);
	});
	$(".bg-2").mouseleave(function() {
		$(".cc-level-right2").stop().animate({
			width: "0px"
		}, 500);
		$(".bg-1").css({
			background: "#303345"
		});
		$(".bg-2").css({
			background: "#e11639"
		});
		setTimeout(function() {
			$(".cc-level-right2").css({
				display: "none"
			});
		}, 500);
	});
	/*优质当口--手风琴效果*/
	$(".jingpin-00").mouseenter(function() {
		$(".jingpin-02").stop().animate({
			left: "695px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "765px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "835px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "905px",
			opacity:"0.75"
		}, 200);
	});
	$(".jingpin-00").mouseleave(function() {
		$(".jingpin-02").stop().animate({
			left: "195px",
			opacity:"1"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "390px",
			opacity:"1"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "585px",
			opacity:"1"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "780px",
			opacity:"1"
		}, 200);
	});
	$(".jingpin-02").mouseenter(function() {
		$(".jingpin-00").stop().animate({
			opacity:"0.75"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "70px",
			opacity:"1"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "765px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "835px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "905px",
			opacity:"0.75"
		}, 200);
	});
	$(".jingpin-02").mouseleave(function() {
		$(".jingpin-00").stop().animate({
			opacity:"1"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "195px",
			opacity:"1"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "390px",
			opacity:"1"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "585px",
			opacity:"1"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "780px",
			opacity:"1"
		}, 200);
	});
	$(".jingpin-03").mouseenter(function() {
		$(".jingpin-00").stop().animate({
			opacity:"0.75"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "70px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "140px",
			opacity:"1"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "835px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "905px",
			opacity:"0.75"
		}, 200);
	});
	$(".jingpin-03").mouseleave(function() {
		$(".jingpin-00").stop().animate({
			opacity:"1"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "195px",
			opacity:"1"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "390px",
			opacity:"1"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "585px",
			opacity:"1"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "780px",
			opacity:"1"
		}, 200);
	});
	$(".jingpin-04").mouseenter(function() {
		$(".jingpin-00").stop().animate({
			opacity:"0.75"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "70px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "140px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "210px",
			opacity:"1"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "905px",
			opacity:"0.75"
		}, 200);
	});
	$(".jingpin-04").mouseleave(function() {
		$(".jingpin-00").stop().animate({
			opacity:"1"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "195px",
			opacity:"1"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "390px",
			opacity:"1"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "585px",
			opacity:"1"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "780px",
			opacity:"1"
		}, 200);
	});
	$(".jingpin-05").mouseenter(function() {
		$(".jingpin-00").stop().animate({
			opacity:"0.75"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "70px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "140px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "210px",
			opacity:"0.75"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "280px",
			opacity:"1"
		}, 200);
	});
	$(".jingpin-05").mouseleave(function() {
		$(".jingpin-00").stop().animate({
			opacity:"1"
		}, 200);
		$(".jingpin-02").stop().animate({
			left: "195px",
			opacity:"1"
		}, 200);
		$(".jingpin-03").stop().animate({
			left: "390px",
			opacity:"1"
		}, 200);
		$(".jingpin-04").stop().animate({
			left: "585px",
			opacity:"1"
		}, 200);
		$(".jingpin-05").stop().animate({
			left: "780px",
			opacity:"1"
		}, 200);
	});
	//轮播图
	$(function() {
		var $banner = $('.banner');
		var $banner_ul = $('.banner-img');
		var $btn = $('.banner-btn');
		var $btn_a = $btn.find('a')
		var v_width = $banner.width();
		var page = 1;
		var timer = null;
		var btnClass = null;
		var page_count = $banner_ul.find('li').length;
		var banner_cir = "<li class='selected' href='#'><a></a></li>";
		for (var i = 1; i < page_count; i++) {
			banner_cir += "<li><a href='#'></a></li>";
		}
		$('.banner-circle').append(banner_cir);
		var cirLeft = $('.banner-circle').width() * (-0.5);
		$('.banner-circle').css({
			'marginLeft': cirLeft
		});
		$banner_ul.width(page_count * v_width);
		function move(obj, classname) {
			if (!$banner_ul.is(':animated')) {
				if (classname == 'prevBtn') {
					if (page == 1) {
						$banner_ul.animate({
							left: -v_width * (page_count - 1)
						});
						page = page_count;
						cirMove();
					} else {
						$banner_ul.animate({
							left: '+=' + v_width
						}, "slow");
						page--;
						cirMove();
					}
				} else {
					if (page == page_count) {
						$banner_ul.animate({
							left: 0
						});
						page = 1;
						cirMove();
					} else {
						$banner_ul.animate({
							left: '-=' + v_width
						}, "slow");
						page++;
						cirMove();
					}
				}
			}
		}
		function cirMove() {

			$('.banner-circle li').eq(page - 1).addClass('selected')
				.siblings().removeClass('selected');
		}

		$banner.mouseover(function() {
			$btn.css({
				'display': 'block'
			});
			clearInterval(timer);
		}).mouseout(function() {
			$btn.css({
				'display': 'none'
			});
			clearInterval(timer);
			timer = setInterval(move, 3000);
		}).trigger("mouseout"); 

		$btn_a.mouseover(function() {

			$(this).animate({
				opacity: 0.6
			}, 'fast');
			$btn.css({
				'display': 'block'
			});
			return false;
		}).mouseleave(function() {
			$(this).animate({
				opacity: 0.3
			}, 'fast');
			$btn.css({
				'display': 'none'
			});
			return false;
		}).click(function() {

			btnClass = this.className;
			clearInterval(timer);
			timer = setInterval(move, 3000);
			move($(this), this.className);
		});

		$('.banner-circle li').live('click', function() {
			var index = $('.banner-circle li').index(this);
			$banner_ul.animate({
				left: -v_width * index
			}, 'slow');
			page = index + 1;
			cirMove();
		});
	});
	/*精品市场特效*/
	$(".makcen-bot img").mouseenter(function(){
		$(this).stop().animate({
			bottom:"-40px"
		});
	});
	$(".makcen-bot img").mouseleave(function(){
		$(this).stop().animate({
			bottom:"4px"
		});
	});
	/**儿童装和综合装区*/
	$(".ert-li0").mouseenter(function(){
		$(".ert-li0 .ertong1 img").css({
			opacity:"0.4"
		});
		$(".ert-li0 .enter").css({
			display:"block"
		});
		$(".ert-li0 .ertong1-show").stop().animate({
			left:"88px"
		});
		$(".ert-li0 .ertong1-show h4").css({
			marginLeft:"15px"
		});
		$(".ert-li0 .ertong1-show-tanchu").css({
			display:"block"
		});
	});
	$(".ert-li0").mouseleave(function(){
		$(".ert-li0 .ertong1 img").css({
			opacity:"1"
		});
		$(".ert-li0 .enter").css({
			display:"none"
		});
		$(".ert-li0 .ertong1-show").stop().animate({
			left:"148px"
		});
		$(".ert-li0 .ertong1-show h4").css({
			marginLeft:"0px"
		});
		$(".ert-li0 .ertong1-show-tanchu").css({
			display:"none"
		});
	});
	$(".ert-li2").mouseenter(function(){
		$(".ert-li2 .ertong1 img").css({
			opacity:"0.4"
		});
		$(".ert-li2 .enter").css({
			display:"block"
		});
		$(".ert-li2 .ertong1-show").stop().animate({
			left:"88px"
		});
		$(".ert-li2 .ertong1-show h4").css({
			marginLeft:"15px"
		});
		$(".ert-li2 .ertong1-show-tanchu").css({
			display:"block"
		});
	});
	$(".ert-li2").mouseleave(function(){
		$(".ert-li2 .ertong1 img").css({
			opacity:"1"
		});
		$(".ert-li2 .enter").css({
			display:"none"
		});
		$(".ert-li2 .ertong1-show").stop().animate({
			left:"148px"
		});
		$(".ert-li2 .ertong1-show h4").css({
			marginLeft:"0px"
		});
		$(".ert-li2 .ertong1-show-tanchu").css({
			display:"none"
		});
	});
	$(".ert-li3").mouseenter(function(){
		$(".ert-li3 .ertong1 img").css({
			opacity:"0.4"
		});
		$(".ert-li3 .enter").css({
			display:"block"
		});
		$(".ert-li3 .ertong1-show").stop().animate({
			left:"88px"
		});
		$(".ert-li3 .ertong1-show h4").css({
			marginLeft:"15px"
		});
		$(".ert-li3 .ertong1-show-tanchu").css({
			display:"block"
		});
	});
	$(".ert-li3").mouseleave(function(){
		$(".ert-li3 .ertong1 img").css({
			opacity:"1"
		});
		$(".ert-li3 .enter").css({
			display:"none"
		});
		$(".ert-li3 .ertong1-show").stop().animate({
			left:"148px"
		});
		$(".ert-li3 .ertong1-show h4").css({
			marginLeft:"0px"
		});
		$(".ert-li3 .ertong1-show-tanchu").css({
			display:"none"
		});
	});
	$(".ert-li4").mouseenter(function(){
		$(".ert-li4 .ertong1 img").css({
			opacity:"0.4"
		});
		$(".ert-li4 .enter").css({
			display:"block"
		});
		$(".ert-li4 .ertong1-show").stop().animate({
			left:"88px"
		});
		$(".ert-li4 .ertong1-show h4").css({
			marginLeft:"15px"
		});
		$(".ert-li4 .ertong1-show-tanchu").css({
			display:"block"
		});
	});
	$(".ert-li4").mouseleave(function(){
		$(".ert-li4 .ertong1 img").css({
			opacity:"1"
		});
		$(".ert-li4 .enter").css({
			display:"none"
		});
		$(".ert-li4 .ertong1-show").stop().animate({
			left:"148px"
		});
		$(".ert-li4 .ertong1-show h4").css({
			marginLeft:"0px"
		});
		$(".ert-li4 .ertong1-show-tanchu").css({
			display:"none"
		});
	});
	$(".ert-li5").mouseenter(function(){
		$(".ert-li5 .ertong1 img").css({
			opacity:"0.4"
		});
		$(".ert-li5 .enter").css({
			display:"block"
		});
		$(".ert-li5 .ertong1-show").stop().animate({
			left:"88px"
		});
		$(".ert-li5 .ertong1-show h4").css({
			marginLeft:"15px"
		});
		$(".ert-li5 .ertong1-show-tanchu").css({
			display:"block"
		});
	});
	$(".ert-li5").mouseleave(function(){
		$(".ert-li5 .ertong1 img").css({
			opacity:"1"
		});
		$(".ert-li5 .enter").css({
			display:"none"
		});
		$(".ert-li5 .ertong1-show").stop().animate({
			left:"148px"
		});
		$(".ert-li5 .ertong1-show h4").css({
			marginLeft:"0px"
		});
		$(".ert-li5 .ertong1-show-tanchu").css({
			display:"none"
		});
	});
	$(".ert-li6").mouseenter(function(){
		$(".ert-li6 .ertong1 img").css({
			opacity:"0.4"
		});
		$(".ert-li6 .enter").css({
			display:"block"
		});
		$(".ert-li6 .ertong1-show").stop().animate({
			left:"88px"
		});
		$(".ert-li6 .ertong1-show h4").css({
			marginLeft:"15px"
		});
		$(".ert-li6 .ertong1-show-tanchu").css({
			display:"block"
		});
	});
	$(".ert-li6").mouseleave(function(){
		$(".ert-li6 .ertong1 img").css({
			opacity:"1"
		});
		$(".ert-li6 .enter").css({
			display:"none"
		});
		$(".ert-li6 .ertong1-show").stop().animate({
			left:"148px"
		});
		$(".ert-li6 .ertong1-show h4").css({
			marginLeft:"0px"
		});
		$(".ert-li6 .ertong1-show-tanchu").css({
			display:"none"
		});
	});
	/*悬浮框效果*/
	$(window).scroll(function(){
		if($(document).scrollTop()>=200){
			$(".xuanfuk").stop().animate({
				top:"0px"
			});
		}else{
			$(".xuanfuk").stop().animate({
				top:"-48px"
			});
		}
		
	});
	/*json加载图片*/
	//getGoods();
	//获取商品
	function getGoods(){
		//jQurey中 ajax
		$.ajax({
			url: 'http://127.0.0.1:3000/goodslist',
			type: 'GET',
			success: function(data) {
				console.log(data);
				var list = jQuery.parseJSON(data);
				console.log(list);
				for(var i=0;i<list.length;i++){
					var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"><div class=\"w\"></div><div class=\"h\"></div></figure><h3 class=\"price\">"+list[i].price+"</h3><h4 class=\"time\">"+list[i].time+"</h4><h5>"+list[i].fangshi+"</h5><p>"+list[i].infor+"</p></a></li>");
					
					$("#xinpintj li").mouseenter(function(){
						$(this).css({
							opacity:"0.7"
						});
					});
					$("#xinpintj li").mouseleave(function(){
						$(this).css({
							opacity:"1"
						});
					});
					
					$("#xinpintj").append($code);
					
				}	
				console.log('Success:');
				//点击商品
				$("#xinpintj li").click(function(){
					var goodsid=$(this).children().children().children()[0].getAttribute("index");
					console.log(goodsid);
					//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
					window.open("detail.html?goodsid="+escape(goodsid));
				});
			},
			error: function(xhr, status, error) {
				console.log('Error: ' + error.message);
			},
		});
	}
	/*新品推荐*/
	$("#xinpintj li").mouseenter(function(){
		$(this).css({
			opacity:"0.3"
		});
	});
	$("#xinpintj li").mouseleave(function(){
		$(this).css({
			opacity:"1"
		});
	});
	/*返回顶部*/
	$(window).scroll(function(){
		if($(document).scrollTop()>=800){
			$(".goback").css({
				display:"block"
			});
		}else{
			$(".goback").css({
				display:"none"
			});
		}
	});
	$(".goback").mouseenter(function(){
		$(".gb").stop().animate({
			width:"100px"
		});
	});
	$(".goback").mouseleave(function(){
		$(".gb").stop().animate({
			width:"0px"
		});
	});
	/*$(".goback").mousedown(function(){
		$(document).scrollTop("0px")
		
	});*/
	//点击后滑动滚到顶部
	$(".goback").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        //return false;
    });
	//是否登录判断
	var username=sessionStorage.getItem("username");
	if(username){
		$(".login1").html("用户"+":"+username+"您好!");
		$(".register1").html("退出");
		$(".register1").click(function(){
			sessionStorage.removeItem("username");
			window.location.reload();
		});
		getGoodsNum();
		console.log("aaaaaaaaaaa");
		
	}else{
		$(".login1").html("请登录");
		$(".register1").html("免费注册");
		$(".login1").click(function(){
			window.location.href="login.html";
		});
		$(".register1").click(function(){
			window.location.href="register.html";
		});
		$(".empty-tips").html("您还没有登录，请先登录！");
		$(".empty-tips").click(function(){
			window.location.href="login.html";
		});
	} 
	$(".empty-tips").mouseenter(function(){
		$(".empty-tips").css({
			color:"red"
		});
	});
	$(".empty-tips").mouseleave(function(){
		$(".empty-tips").css({
			color:"#666666"
		});
	});
	//获取购物车数量
	function getGoodsNum(){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/getgoodsnum",
			data:{username:username},
			async:true,
			success:function(data){
				console.log(data);
				var ret=jQuery.parseJSON(data);
				console.log(ret.number);
				$("#goodsnum").html(" "+ret.number);
				if($("#goodsnum").html()>99){
					console.log("bbbbb");
					$("#goodsnum").html(" "+"99+");
				}
				if($("#goodsnum").html()==0){
					$(".empty-tips").html("您的购物车为空请赶紧购物吧！");
				}else{
					$(".empty-tips").html("点击查看我的购物车！");
					$(".empty-tips").click(function(){
						window.location.href="goodscart.html";
					});
				}
				/*if($("#goodsnum").html()==undefined){
					$("#goodsnum").html("0");
				}*/
			},
		});
	}
	//搜索框
	$(".search-text").click(function(evt){
		var e=evt||event;
		e.stopPropagation();//阻止冒泡，
		if($(".search-text").val()==""){
			$(".datalist").html("");
			var data=eval([{h5:"女士裙子01"},{h5:"精品女士毛衣02"},{h5:"女士潮流连衣裙"},{h5:"裤子女士精美漏洞白裤"}]);
			for(var i=0;i<data.length;i++){
				var $info = $('<li>' + data[i].h5 + '</li>');
				$(".datalist").append($info);
				$info.click(function(){
					$(".search-text").val($(this).html());
				});
			}
		}
		$(".datalist").css({
			display:"block"
		});
	})
	$(".search-text").on("keyup",function(){
		if($(".search-text").val()==""){
			$(".datalist").css({
				display:"none"
			});
		}
		$(".datalist").html("");
		var value = $(".search-text").val();
		if(value!=""){
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:3000/searchgoods",
				async:true,
				data:{goodsname:value},
				success:function(data){
					var data=JSON.parse(data).name;
					console.log(data.length);
					if(data.length==0){
						$(".datalist").css({
							display:"none"
						});
					}
					if(data.length>0){
						$(".datalist").css({
							display:"block"
						});
					}
					var length;
					if(data.length>10){
						length=10;
					}else{
						length=data.length;
					}
					for(var index=0;index<length;index++){
						var goodsid = data[index].goodsid;
						var $info = $('<li>' + data[index].h5 + '</li>');
						$(".datalist").append($info);
						$info.click(function(){
							$(".search-text").val($(this).html());
						});
					}
				}
			});
		}
	});
	//点击搜索按钮
	$(".search-btn").click(function(){
		var goodsname=$(".search-text").val();
		if($(".search-text").val()!=""){
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:3000/getgoodsid",
				async:true,
				data:{goodsname:goodsname},
				success:function(data){
					console.log(data);
					var res=JSON.parse(data);
					console.log(res.msg.length+"---"+typeof res.msg);
					if(Number(res.msg)>0){
						console.log("xxx");
						var goodsid=res.msg;
						window.open("detail.html?goodsid="+encodeURI(goodsid));
					}else{
						console.log("yyy");
						console.log(goodsname);
						window.open("searchresult.html?goodsname="+encodeURI(goodsname));
					}
				}
			});
		}
	});
	//悬浮框搜索  //搜索框
	$(".search-text2").click(function(evt){
		var e=evt||event;
		e.stopPropagation();//阻止冒泡，
		if($(".search-text2").val()==""){
			$(".datalist2").html("");
			var data=eval([{h5:"女士裙子01"},{h5:"精品女士毛衣02"},{h5:"女士潮流连衣裙"},{h5:"裤子女士精美漏洞白裤"}]);
			for(var i=0;i<data.length;i++){
				var $info = $('<li>' + data[i].h5 + '</li>');
				$(".datalist2").append($info);
				$info.click(function(){
					$(".search-text2").val($(this).html());
				});
			}
		}
		$(".datalist2").css({
			display:"block"
		});
	})
	$(".search-text2").on("keyup",function(){
		if($(".search-text2").val()==""){
			$(".datalist2").css({
				display:"none"
			});
		}
		$(".datalist2").html("");
		var value = $(".search-text2").val();
		if(value!=""){
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:3000/searchgoods",
				async:true,
				data:{goodsname:value},
				success:function(data){
					var data=JSON.parse(data).name;
					if(data.length==0){
						$(".datalist2").css({
							display:"none"
						});
					}
					if(data.length>0){
						$(".datalist2").css({
							display:"block"
						});
					}
					var length;
					if(data.length>10){
						length=10;
					}else{
						length=data.length;
					}
					for(var index=0;index<length;index++){
						var goodsid = data[index].goodsid;
						var $info = $('<li>' + data[index].h5 + '</li>');
						$(".datalist2").append($info);
						$info.click(function(){
							$(".search-text2").val($(this).html());
						});
					}
					/*$.each(data,function (index) {
						
					});*/
				}
			});
		}
	});
	//点击搜索按钮
	$(".search-btn2").click(function(){
		var goodsname=$(".search-text2").val();
		if($(".search-text2").val()!=""){
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:3000/getgoodsid",
				async:true,
				data:{goodsname:goodsname},
				success:function(data){
					var res=JSON.parse(data);
					console.log(res.msg.length+"---"+typeof res.msg);
					if(Number(res.msg)>0){
						console.log("xxx");
						var goodsid=res.msg;
						window.open("detail.html?goodsid="+encodeURI(goodsid));
					}else{
						console.log("yyy");
						window.open("searchresult.html?goodsname="+encodeURI(goodsname));
					}
					/*var goodsid=res.msg;
					if(goodsid==-1){
						window.open("error.html");
					}else{
						window.open("detail.html?goodsid="+escape(goodsid));
					}*/
				}
			});
		}
	});
	document.onclick=function(){
		$(".datalist2").css({
			display:"none"
		});
		$(".datalist").css({
			display:"none"
		});
	}
	//////判断何时加载
	var temp=0;
	$(window).scroll(function(){
		console.log($(document).scrollTop());
		if($(document).scrollTop()>=2020){
			if(temp==0){
				setTimeout(function(){
					$(".jiazai").css({
						display:"none"
					});
					getGoods();
					$("#bottom").css({
						display:"block"
					});
				},3000);
				temp++;
			}
			
		}
	});
	//下拉加载
	$("#bottom").css({
		display:"none"
	});
	//点击查看收藏
	$(".zuijin").click(function(){
		if(username==undefined){
			window.location.href="login.html";
		}else{
			window.open("myfavorite.html?canshu=0");
		}
	});
	$(".zuijin1").click(function(){
		if(username==undefined){
			window.location.href="login.html";
		}else{
			window.open("myfavorite.html?canshu=1");
		}
	});
	//houjia全部商品类目效果
	$(".menu-title").mouseenter(function(){
		$(".leimu").css({
			border:"1px solid #cdcdcd"
		});
		$(".leimu").stop().animate({
			height:"480px"
		});
	});
	$(".menu-title").mouseleave(function(){
		$(".leimu").stop().animate({
			height:"0px"
		},1000);
		setTimeout(function(){
			$(".leimu").css({
				border:"0px"
			});
		},1000);
	});
	//个人设置
	$(".self-shezhi").click(function(){
		if(username==undefined){
			window.location.href="login.html";
		}else{
			window.open("userinfo.html");
		}
	});
}