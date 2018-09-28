onload=function(){
	//获取参数
	//获取url参数
	function getQueryString(name){
		//设置查找name前缀
		//在你要添加的名字前面进行添加前缀 匹配元素的正则表达式
		var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
		//进行查找
		var r=window.location.search.substr(1).match(reg);
		if(r!=null){
			return decodeURI(r[2]);
		}
		return null;
	}
	var canshu=getQueryString("canshu");
	
	console.log(canshu);
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
			window.location.href="login.html?goodsid="+encodeURI(goodsid);    
		});
		$(".register1").click(function(){
			window.location.href="register.html";
		});
		$(".empty-tips").html("您还没有登录，请先登录！");
		$(".empty-tips").click(function(){
			window.location.href="login.html?goodsid="+encodeURI(goodsid);
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
	//getdata(username);
	//getzuijindata(username);
	function getdata(username){
		$(".goodslist").html("");
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/getfavorite",
			async:true,
			data:{username:username},
			success:function(data){
				console.log(data);
				var ret=jQuery.parseJSON(data);
				console.log(ret);
				var length=ret.length;
				console.log(length);
				for(var i=length-1;i>=0;i--){
					console.log(ret[i].goodsid);
					var $code=("<li><a href=\""+'detail.html?goodsid='+ret[i].goodsid+"\" target=\"_blank\" goodsid=\""+ret[i].goodsid+"\"><img src=\""+ret[i].goodsimg+"\" /></a><p class=\"p1\">商品价格：<span class=\"price\">￥"+ret[i].goodsprice+"</span></p><p class=\"p2\"><span class=\"nmqian\">商品名称：</span><span class=\"nm\">"+ret[i].goodsname+"</span></p><a href=\"###\" class=\"delshoucang\">取消收藏</a></li>");
					$(".goodslist").append($code);
				}
				$(".delshoucang").click(function(){
					console.log("aaa");
					var goodsid=$(this).prev().prev().prev()[0].getAttribute("goodsid");
					console.log(goodsid);
					delshoucang(username,goodsid);
					$(this).parent().remove();
				});
			}
		});
	}
	
	//取消收藏
	function delshoucang(username,goodsid){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/delshoucang",
			async:true,
			data:{username:username,goodsid:goodsid},
			success:function(data){
				
			}
		});
	}
	function getzuijindata(username){
		$(".goodslist").html("");
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/getfavorite",
			async:true,
			data:{username:username},
			success:function(data){
				console.log(data);
				var ret=jQuery.parseJSON(data);
				console.log(ret);
				var length=ret.length;
				console.log(length);
				if(length>3){
					for(var i=length-1;i>length-5;i--){
						console.log(ret[i].goodsid);
						var $code=("<li><a href=\""+'detail.html?goodsid='+ret[i].goodsid+"\" target=\"_blank\" goodsid=\""+ret[i].goodsid+"\"><img src=\""+ret[i].goodsimg+"\" /></a><p class=\"p1\">商品价格：<span class=\"price\">￥"+ret[i].goodsprice+"</span></p><p class=\"p2\"><span class=\"nmqian\">商品名称：</span><span class=\"nm\">"+ret[i].goodsname+"</span></p><a href=\"javascript:;\" class=\"delshoucang\">取消收藏</a></li>");
						$(".goodslist").append($code);
					}
				}else{
					for(var i=length-1;i>=0;i--){
						console.log(ret[i].goodsid);
						var $code=("<li><a href=\""+'detail.html?goodsid='+ret[i].goodsid+"\" target=\"_blank\" goodsid=\""+ret[i].goodsid+"\"><img src=\""+ret[i].goodsimg+"\" /></a><p class=\"p1\">商品价格：<span class=\"price\">￥"+ret[i].goodsprice+"</span></p><p class=\"p2\"><span class=\"nmqian\">商品名称：</span><span class=\"nm\">"+ret[i].goodsname+"</span></p><a href=\"javascript:;\" class=\"delshoucang\">取消收藏</a></li>");
						$(".goodslist").append($code);
					}
				}
				$(".delshoucang").click(function(){
					console.log("aaa");
					var goodsid=$(this).prev().prev().prev()[0].getAttribute("goodsid");
					console.log(goodsid);
					delshoucang(username,goodsid);
					$(this).parent().remove();
				});
			}
		});
	}
	if(canshu==0){
		getzuijindata(username);
	}else{
		getdata(username);
	}
}
