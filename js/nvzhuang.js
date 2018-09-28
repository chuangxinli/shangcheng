
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
function setReturnValueFalse(){
	if(document.all)  {  
    	window.event.returnValue = false;  
	}else{  
		event.preventDefault();  
	}  
}
//阻止浏览器的默认行为 
function stopDefault(e) { 
	//阻止默认浏览器动作(W3C) 
	if(e&&e.preventDefault) 
    	e.preventDefault(); 
	//IE中阻止函数器默认动作的方式 
	else 
    	window.event.returnValue = false; 
	//return false; 
}
function onlyNum(){ 
	//var event=arguments.callee.caller.arguments[0]||window.event;//消除浏览器差异
	if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39)) 
	if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105))) 
	//event.returnValue=false;
	//event.preventDefault();
	setReturnValueFalse();
	//stopDefault(e);
	console.log("aa");
} 
$(".txt1,.txt2").keydown(function(){
	onlyNum();
});
//getdata("0");
function getdata(leibie){
	$(".goodslist").html("");
	var leibie=leibie;
	console.log(leibie);
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuang",
		async:true,
		data:{leibie:leibie},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
				if($(".searchresult")){
					$(".searchresult").html("你搜索的商品暂时还没有,不好意思！")
				}
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			console.log(list);
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
$(".chazhao a").click(function(){
	var length=$(".chazhao a").length;
	console.log(length);
	for(var i=0;i<length;i++){
		console.log($(".chazhao a")[i]);
		console.log($($(".chazhao a")[i]));
		$($(".chazhao a")[i]).removeClass("active");
	}
	$(this).addClass("active");
});
$(".dangci a").click(function(){
	var length=$(".dangci a").length;
	console.log(length);
	if($(this).get(0).className=="d-ci"){
		$(this).removeClass("d-ci");
	}else{
		for(var i=0;i<length;i++){
			console.log($(".dangci a")[i]);
			console.log($($(".dangci a")[i]));
			$($(".dangci a")[i]).removeClass("d-ci");
		}
		$(this).addClass("d-ci");
	}
});
$(".leimu a").click(function(){
	var length=$(".leimu a").length;
	console.log(length);
	if($(this).get(0).className=="d-ci"){
		$(this).removeClass("d-ci");
	}else{
		for(var i=0;i<length;i++){
			$($(".leimu a")[i]).removeClass("d-ci");
		}
		$(this).addClass("d-ci");
	}
});
$(".fengge a").click(function(){
	var length=$(".fengge a").length;
	if($(this).get(0).className=="d-ci"){
		$(this).removeClass("d-ci");
	}else{
		for(var i=0;i<length;i++){
			$($(".fengge a")[i]).removeClass("d-ci");
		}
		$(this).addClass("d-ci");
	}
});
$(".cailiao a").click(function(){
	var length=$(".cailiao a").length;
	if($(this).get(0).className=="d-ci"){
		$(this).removeClass("d-ci");
	}else{
		for(var i=0;i<length;i++){
			$($(".cailiao a")[i]).removeClass("d-ci");
		}
		$(this).addClass("d-ci");
	}
});
$(".gongyi a").click(function(){
	var length=$(".gongyi a").length;
	if($(this).get(0).className=="d-ci"){
		$(this).removeClass("d-ci");
	}else{
		for(var i=0;i<length;i++){
			$($(".gongyi a")[i]).removeClass("d-ci");
		}
		$(this).addClass("d-ci");
	}
});
function getdata2(leibie,arg1){
	$(".goodslist").html("");
	var leibie=leibie;
	var arg1=arg1
	console.log(leibie);
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuang2",
		async:true,
		data:{leibie:leibie,arg1:arg1},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！")
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			console.log(list);
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
function getdata3(leibie,arg1,arg2){
	$(".goodslist").html("");
	var leibie=leibie;
	var arg1=arg1;
	var arg2=arg2;
	console.log(leibie);
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuang3",
		async:true,
		data:{leibie:leibie,arg1:arg1,arg2:arg2},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			console.log(list);
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
function getdata4(leibie,arg1,arg2,arg3){
	$(".goodslist").html("");
	/*var leibie=leibie;
	var arg1=arg1;
	var arg2=arg2;*/
	console.log(leibie);
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuang4",
		async:true,
		data:{leibie:leibie,arg1:arg1,arg2:arg2,arg3:arg3},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			console.log(list);
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
function getdata5(leibie,arg1,arg2,arg3,arg4){
	$(".goodslist").html("");
	console.log(leibie);
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuang5",
		async:true,
		data:{leibie:leibie,arg1:arg1,arg2:arg2,arg3:arg3,arg4:arg4},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			console.log(list);
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
function getdata6(leibie,arg1,arg2,arg3,arg4,arg5){
	$(".goodslist").html("");
	console.log(leibie);
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuang6",
		async:true,
		data:{leibie:leibie,arg1:arg1,arg2:arg2,arg3:arg3,arg4:arg4,arg5:arg5},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			console.log(list);
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
/*$(".zonghe").click(function(){
	$(".goodslist").html("");
	getdata("0");
});
$(".xiaoliang").click(function(){
	$(".goodslist").html("");
	getdatabyxiaoliang("0");
});
$(".xinkuan").click(function(){
	$(".goodslist").html("");
	getdatabyshijian("0");
});
$(".pricejiang").click(function(){
	$(".goodslist").html("");
	getdatabypricejiang("0");
});
$(".pricesheng").click(function(){
	$(".goodslist").html("");
	getdatabypricesheng("0");
});*/
function getdatabyxiaoliang(leibie){
	$(".goodslist").html("");
	var leibie=leibie;
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuangbyxiaoliang",
		async:true,
		data:{leibie:leibie},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			console.log(list);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
function getdatabyshijian(leibie){
	$(".goodslist").html("");
	var leibie=leibie;
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuangbyshijian",
		async:true,
		data:{leibie:leibie},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			console.log(list);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
function getdatabypricesheng(leibie){
	$(".goodslist").html("");
	var leibie=leibie;
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuangbypricesheng",
		async:true,
		data:{leibie:leibie},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			console.log(list);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
function getdatabypricejiang(leibie){
	$(".goodslist").html("");
	var leibie=leibie;
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuangbypricejiang",
		async:true,
		data:{leibie:leibie},
		success:function(data){
			console.log(data);
			var list = jQuery.parseJSON(data);
			console.log(list);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}
//价格区间选择后处理
/*$(".btn-p").click(function(){
	var num1=Number($(".txt1").val());
	var num2=Number($(".txt2").val());
	if($(".txt1").val()!=""&&$(".txt2").val()!=""&&($(".txt1").val()!=$(".txt2").val())&&$(".txt1").val().length<8&&$(".txt2").val().length<8){
		//console.log($(".txt1").val().length);
		console.log(typeof num1+"---"+num1);
		if(num1>num2){
			var temp;
			temp=num1;
			num1=num2;
			num2=temp;
			$(".txt1").val(num1);
			$(".txt2").val(num2);
		}
		console.log($(".txt1").val().length);
		var length1=$(".txt1").val().length;
		var length2=$(".txt2").val().length;
		var a=$(".txt1").val();
		var b=$(".txt2").val()
		var bignum;
		var smallnum;
		if(length2==1){
			bignum="0000000"+b;
		}
		if(length2==2){
			bignum="000000"+b;
		}
		if(length2==3){
			bignum="00000"+b;
		}
		if(length2==4){
			bignum="0000"+b;
		}
		if(length2==5){
			bignum="000"+b;
		}
		if(length2==6){
			bignum="00"+b;
		}
		if(length2==7){
			bignum="0"+b;
		}
		if(length1==1){
			smallnum="0000000"+a;
		}
		if(length1==2){
			smallnum="000000"+a;
		}
		if(length1==3){
			smallnum="00000"+a;
		}
		if(length1==4){
			smallnum="0000"+b;
		}
		if(length1==5){
			smallnum="000"+a;
		}
		if(length1==6){
			smallnum="00"+a;
		}
		if(length1==7){
			smallnum="0"+a;
		}
		console.log(bignum+"----"+smallnum);
		$(".goodslist").html("");
		getdatabypricequjian(smallnum,bignum,"0");
	}
});*/
function getdatabypricequjian(smallnum,bignum,leibie){
	$(".goodslist").html("");
	var smallnum=smallnum;
	var bignum=bignum;
	var leibie=leibie;
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getnvzhuangbypricequjian",
		async:true,
		data:{smallnum:smallnum,bignum:bignum,leibie:leibie},
		success:function(data){
			var list = jQuery.parseJSON(data);
			console.log(list);
			if(list.length==0){
				$(".zong-shu").html("该类型的商品暂时没有！");
			}else{
				$(".zong-shu").html("匹配的商品有"+list.length+"件！");
			}
			for(var i=0;i<list.length;i++){
				var $code=("<li><a href=\"javascript:;\"><figure class=\"effect\"><img src=\""+list[i].src+"\" index=\""+list[i].goodsid+"\"></figure><h3 class=\"price\">￥"+Number(list[i].price2)+"</h3><h4 class=\"time\">已上线"+Number(list[i].days)+"天</h4><h5>已售出"+Number(list[i].xiaoliang)+"件</h5><p>"+list[i].infor+"</p></a></li>");
				
				$(".goodslist li").mouseenter(function(){
					$(this).css({
						opacity:"0.7"
					});
				});
				$(".goodslist li").mouseleave(function(){
					$(this).css({
						opacity:"1"
					});
				});
				
				$(".goodslist").append($code);
				
			}	
			console.log('Success:');
			//点击商品
			$(".goodslist li").click(function(){
				var goodsid=$(this).children().children().children()[0].getAttribute("index");
				console.log(goodsid);
				//window.location.href="detail.html?goodsid="+encodeURI(goodsid);
				window.open("detail.html?goodsid="+escape(goodsid));
			});
		}
	});
}


