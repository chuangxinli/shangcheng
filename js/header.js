
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
					/*$.each(data,function (index) {
						var goodsid = data[index].goodsid;
						var $info = $('<li>' + data[index].h5 + '</li>');
						$(".datalist").append($info);
						$info.click(function(){
							$(".search-text").val($(this).html());
						});
					});*/
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
					var res=JSON.parse(data);
					var goodsid=res.msg;
					console.log(res.msg.length+"---"+typeof res.msg);
					if(Number(res.msg)>0){
						console.log("xxx");
						var goodsid=res.msg;
						window.open("detail.html?goodsid="+encodeURI(goodsid));
					}else{
						console.log("yyy");
						window.open("searchresult.html?goodsname="+encodeURI(goodsname));
					}
					/*if(goodsid==-1){
						window.open("error.html");
					}else{
						window.open("detail.html?goodsid="+escape(goodsid));
					}*/
				}
			});
		}
	});
	document.onclick=function(){
		$(".datalist").css({
			display:"none"
		});
	}
	var username=sessionStorage.getItem("username");
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
	$(".self-shezhi").click(function(){
		if(username==undefined){
			window.location.href="login.html";
		}else{
			window.open("userinfo.html");
		}
	});
	
