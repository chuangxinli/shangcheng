onload=function(){
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
	var shopid=getQueryString("shopid");
	console.log(shopid);
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
	
	getshopdata(shopid);
	$(".gengduoshangpin").click(function(){
		getshopdata(shopid);
	});
	
	function getshopdata(shopid){
		$.ajax({
			url: 'http://127.0.0.1:3000/shoplist',
			type: 'GET',
			data:{"shopid": shopid},
			success: function(data) {
				console.log(data);
				var ret = jQuery.parseJSON(data);
				//console.log(ret.msg[0].add);
				$(".dm").html(ret.msg[0].name);
				$(".adds").html(ret.msg[0].add);
				$(".chengjiaoshu").html(ret.msg[0].chengjiaoshu);
				$(".manyidu").html(ret.msg[0].manyidu);
				console.log(ret.msg[0].manyidu);
				$(".maijiashu").html(ret.msg[0].maijiashu);
				data = ret.msg[0].goodslist;
				$.each(data,function (index) {
					console.log(data[index].src);
					var $code=("<li><a href=\""+data[index].href+"\" target=\"_blank\"><img src=\""+data[index].src+"\"><h3 class=\"price\">"+data[index].h3+"</h3><h4 class=\"time\">"+data[index].h4+"</h4><h5>"+data[index].h5+"</h5><p>"+data[index].p+"</p><div class=\"yuan\">立即选购</div></a></li>")
					$(".goodslist").append($code);
					$(".goodslist img").mouseenter(function(){
						console.log("aa");
						$(this).css({
							opacity:"0.3"
						});
						$(this).next().next().next().next().next().css({
							display:"block"
						});
					});
					$(".goodslist img").mouseleave(function(){
						console.log("aa");
						$(this).css({
							opacity:"1"
						});
						$(this).next().next().next().next().next().css({
							display:"none"
						});
					});
					$(".yuan").mouseenter(function(){
						$(this).prev().prev().prev().prev().prev().css({
							opacity:"0.3"
						});
						$(this).css({
							display:"block",
							opacity:"1"
						});
					});
				});
				console.log('Success: ');
			},
			
			error: function(xhr, status, error) {
				console.log('Error: ' + error.message);
			},
		});
	}
}
