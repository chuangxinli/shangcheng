		//获取url参数
		function getQueryString(name){
			//设置查找name前缀
			var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
			//进行查找
			var r=window.location.search.substr(1).match(reg);
			if(r!=null){
				return decodeURI(r[2]);
			}
			return null;
		}
		var goodsid=getQueryString("goodsid");
		console.log(goodsid);
		//登录时判断上次是否记住了账号密码
		$(function(){
			var str=localStorage.getItem("user");
			if(str!=""&&str){
				$("#checkbox").attr("checked",true);
				$(".num").val(JSON.parse(str).username);
				$(".password").val(JSON.parse(str).password);
				
			}
		});
		//登录验证
		$(".login-btn").click(function(){
			//console.log("点击了注册！");
			var username=$('.num').val();
			var password=$('.password').val();
			$.ajax({
				url: 'http://127.0.0.1:3000/login',
				type: 'GET',
				data:{ username: username, password: password },
				success: function(data) {
					console.log(data);
					var ret = jQuery.parseJSON(data);
					console.log(ret);
					console.log(ret.msg);
					if(ret.msg==0){
						//alert("用户名输入错误!");
						$(".tip-mes").html("用户名输入错误!请仔细核对!");
					}else if(ret.msg==1){
						//alert("密码输入错误！");
						$(".tip-mes").html("密码输入错误!请仔细核对!");
					}else if(ret.msg==2){
						//alert("登录成功！");
						$(".tip-mes").html("登录成功!即将跳转!");
						//临时存入用户名
						sessionStorage.setItem("username",username);
						//记住密码
						if($("#checkbox").is(":checked")){
							console.log($("#checkbox").is(":checked"));
							var str="{\"username\":\""+username+"\",\"password\":\""+password+"\"}"
							console.log(str);
							localStorage.setItem("user",str);
							console.log("aaa");
						}else{
							var str=localStorage.getItem("user");
							str=JSON.parse(str).username;
							console.log(str);
							if(str==$(".num").val()){
								localStorage.removeItem("user");
								console.log("bbb");
							}
						}
						/*3秒后跳转*/
						setTimeout(function(){
							if(goodsid){
								window.location.href="detail.html?goodsid="+encodeURI(goodsid);
							}else{
								window.location.href="index.html";
							}
							
						},3000);
					}
					console.log('Success: ')
				},
				error: function(xhr, status, error) {
					console.log('Error: ' + error.message);
				},
			});
		});
		//记住密码
		
		/*登录框设置*/
		$(".right .user").click(function(){
			$(".right .user").css({
				border:"1px darkblue solid"
			});
			$(".right .pwd").css({
				border:"1px #cdcdcd solid"
			});
		});
		$(".right .pwd").click(function(){
			$(".right .pwd").css({
				border:"1px darkblue solid"
			});
			$(".right .user").css({
				border:"1px #cdcdcd solid"
			});
		});
