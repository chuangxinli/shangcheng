onload=function(){
	var username=sessionStorage.getItem("username");
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
					window.location.href="index.html";
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
	getGoodsCart(username);
	function getGoodsCart(username){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/goodscart",
			async:true,
			data:{username:username},
			success:function(data){
				console.log(data);
				data=jQuery.parseJSON(data);
				data=data.msg;
				console.log(data);
				if(data==0){
					console.log("你的购物车为空！");
				}else{
					$.each(data,function(index){
						var $code=$("<li class=\"li1\"><div class=\"xuanze\"><input type=\"checkbox\" id=\"xz\" class=\"xz\"/></div><h2 class=\"name\"><a href=\""+'detail.html?goodsid='+data[index].goodsid+"\" target=\"_blank\"><img src=\""+data[index].goodsimg+"\" goodsid=\""+data[index].goodsid+"\" totalnum=\""+data[index].totalnum+"\"/></a><span class='goodsnm'>"+data[index].goodsname+"</span></h2><h3 class=\"size\">"+data[index].goodssize+"</h3><h4 class=\"color\">"+data[index].goodscolor+"</h4><h5 class=\"price\">￥"+data[index].goodsprice+"</h5><h6 class=\"num\"><span class=\"jian\">-</span><span class=\"numb\">"+data[index].goodsnum+"</span><span class=\"jia\">+</span></h6><p><a href=\"javascript:;\" class=\"del\">删除</a></p></li>");
						$("#cart-main-c").append($code);
						
 
					});
					//商品数量的增减
					$(".jia").click(function(){
						var x=parseInt($(this).prev().html());
						console.log(x);
						console.log($(this).parent().prev().prev().prev().prev().children().children()[0].getAttribute("totalnum"));
						if(x>=$(this).parent().prev().prev().prev().prev().children().children()[0].getAttribute("totalnum")){
							$(this).prev().html(x);    
							alert("商品没那么多了！");
						}else{
							$(this).prev().html(x+1);
							var goodsnum=$(this).prev().html();
							var goodsid=$(this).parent().prev().prev().prev().prev().children().children()[0].getAttribute("goodsid");
							var goodscolor=$(this).parent().prev().prev().html();
							var goodssize=$(this).parent().prev().prev().prev().html();
							console.log(goodsid+"---"+goodscolor+"---"+goodssize+"---"+username+"---"+goodsnum);
							changeNum(username,goodscolor,goodsid,goodssize,goodsnum);
							getGoodsNum();
						}
					});
					$(".jian").click(function(){
						console.log($(this));
						var x=parseInt($(this).next().html());
						console.log(x);
						if(x>0){
							$(this).next().html(x-1);
							var goodsnum=$(this).next().html();
							var goodsid=$(this).parent().prev().prev().prev().prev().children().children()[0].getAttribute("goodsid");
							var goodscolor=$(this).parent().prev().prev().html();
							var goodssize=$(this).parent().prev().prev().prev().html();
							console.log(goodsid+"---"+goodscolor+"---"+goodssize+"---"+username+"---"+goodsnum);
							changeNum(username,goodscolor,goodsid,goodssize,goodsnum);
							getGoodsNum();
							
						}else{
							$(this).next().html(0);
						}
					});
					$(".del").click(function(){
						var height=document.body.scrollHeight;
						var goodsid=$(this).parent().prev().prev().prev().prev().prev().children().children()[0].getAttribute("goodsid");
						var goodscolor=$(this).parent().prev().prev().prev().html();
						var goodssize=$(this).parent().prev().prev().prev().prev().html();
						console.log(goodsid+"---"+goodscolor+"---"+goodssize);
						$(this).parent().parent().addClass("beishanchu");
						//console.log($li);
						console.log(height);
						$(".fugaiceng").css({
							height:height,
							display:"block"
						});
						$(".tip-del").css({
							display:"block"
						});
						$(".close").click(function(){
							$(".fugaiceng").css({
								height:height,
								display:"none"
							});
							$(".tip-del").css({
								display:"none"
							});
						});
						$(".quxiao").click(function(){
							$(".fugaiceng").css({
								height:height,
								display:"none"
							});
							$(".tip-del").css({
								display:"none"
							});
						});
						$(".queding").click(function(){
							$(".fugaiceng").css({
								height:height,
								display:"none"
							});
							$(".tip-del").css({
								display:"none"
							});
							deleteGoods(username,goodscolor,goodsid,goodssize);
							$(".beishanchu").remove();
							//$li.remove();
							//window.location.reload();
							getGoodsCart();
							getGoodsNum();
						});
					});
					$(".xz").click(function(){
						console.log("wwww");
						if($(".quanxuan").prop("checked")==true){
							$(".quanxuan").prop("checked",false);
						}
						if($(this).prop("checked")==true){
							console.log("sss");
							$(this).addClass("xuanzhong");
							
						}else{
							console.log("dd");
							$(this).removeClass("xuanzhong");
						}
						$(".xz").parent().parent().css({
							background:"#ffffff"
						});
						$(".xuanzhong").parent().parent().css({
							background:"#cdcdcd"
						});
						//商品总数
						var n=$(".xuanzhong").length;
						var goodssum=0;
						for(var i=0;i<n;i++){
							console.log($($($(".xuanzhong")[i]).parent().next().next().next().next().next().children()[1]).html());
							console.log($($(".xuanzhong")[i]).parent().next().next().next().next().html());
							var num=$($($(".xuanzhong")[i]).parent().next().next().next().next().next().children()[1]).html();
							goodssum+=parseInt(num);
						}
						$(".jianshu").html(goodssum);
						//总计钱数
						var pricesum=0;
						for(var i=0;i<n;i++){
							var danjia=$($(".xuanzhong")[i]).parent().next().next().next().next().html().split("￥")[1];
							var shuliang=$($($(".xuanzhong")[i]).parent().next().next().next().next().next().children()[1]).html();
							var m=danjia*shuliang;
							pricesum+=m;
						}
						$(".pri").html("￥"+pricesum);
						$(".jiesuan").css({
							background:"red"
						});
						if($(".jianshu").html()==0){
							$(".jiesuan").css({
								background:"darkgrey"
							});
						}
					});
				}
			}
		});
	}
	function changeNum(username,goodscolor,goodsid,goodssize,goodsnum){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/changenum",
			async:true,
			data:{username:username,goodsid:goodsid,goodscolor:goodscolor,goodssize:goodssize,goodsnum:goodsnum},
			success:function(data){
				console.log(data);
			}
		})
	}
	function deleteGoods(username,goodscolor,goodsid,goodssize){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/deletegoods",
			async:true,
			data:{username:username,goodscolor:goodscolor,goodsid:goodsid,goodssize:goodssize},
			success:function(data){
				console.log(data);
			}
		});
	}
	//checkbox判断
	$(".quanxuan").click(function(){
		console.log("dianjile");
		if($(".quanxuan").prop("checked")==true){
			console.log("dianjile1");
			//prop 与 attr区别 attr再次 不好用只管一次
			$(".xz").prop("checked",true);
			$(".xz").addClass("xuanzhong");
			console.log($(".xz").length);
			//商品总数
			var n=$(".xz").length;
			var goodssum=0;
			for(var i=0;i<n;i++){
				console.log($($($(".xz")[i]).parent().next().next().next().next().next().children()[1]).html());
				console.log($($(".xz")[i]).parent().next().next().next().next().html());
				var num=$($($(".xz")[i]).parent().next().next().next().next().next().children()[1]).html();
				goodssum+=parseInt(num);
			}
			$(".jianshu").html(goodssum);
			//总计钱数
			var pricesum=0;
			for(var i=0;i<n;i++){
				var danjia=$($(".xz")[i]).parent().next().next().next().next().html().split("￥")[1];
				var shuliang=$($($(".xz")[i]).parent().next().next().next().next().next().children()[1]).html();
				var m=danjia*shuliang;
				pricesum+=m;
			}
			$(".pri").html("￥"+pricesum);
			$(".jiesuan").css({
				background:"red"
			});
			$(".xuanzhong").parent().parent().css({
				background:"#cdcdcd"
			});
			
		}else{
			$(".xz").prop("checked",false);
			console.log("dianjile2");
			$(".xz").removeClass("xuanzhong");
			$(".xz").parent().parent().css({
				background:"#FFFFFF"
			});
			$(".jianshu").html("0");
			$(".pri").html("￥"+0);
			$(".jiesuan").css({
				background:"darkgrey"
			});
			
		}
		
	});
	
	
}

