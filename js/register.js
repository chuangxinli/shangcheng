onload=function(){
		var yanzhengma;
		//canvas 应用 验证码
		function getCheckCode(){
			var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			createTxt(ctx);
		   	function createTxt(ctx){
			    var lg = ctx.createLinearGradient(0,0,60,0);
				lg.addColorStop(0,randomColor());
				lg.addColorStop(0.3,randomColor());
				lg.addColorStop(0.5,randomColor());
				lg.addColorStop(1,"yellow");
				ctx.strokeStyle = lg;
				ctx.clearRect(0,0,100,40);
				ctx.font="italic 30px microsoft yahei";
				ctx.textBaseline="top";
				var text = createCheckCode(4);
				yanzhengma=text;
				ctx.strokeText(text,0,7);
		   	}
		}
		//获取 随机 颜色
		function randomColor(){
			var R = Math.round(Math.random()*255).toString(16);
			var G = Math.round(Math.random()*255).toString(16);
			var B = Math.round(Math.random()*255).toString(16);
			return "#"+(R.length<2?"0"+R:R)+(G.length<2?"0"+G:G)+(B.length<2?"0"+B:B);
		}
		//产生验证码函数
		function createCheckCode(size) {
			var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			var temp = [];
			for (var i = 0; i < size; i++) {
				temp.push(list[parseInt(Math.random() * list.length)]);
			}
			return temp.join("").toUpperCase();
		}
		var code = createCheckCode(4);
		console.log(code);
		//$(".yanzhengma").html(createCheckCode(4));
		//$(".yanzhengma").html(getCheckCode());
		$("#check-box").click(function() {
			//$(".yanzhengma").html(getCheckCode());
			getCheckCode();
		});
		////////////////////////////////////////////////////////////////////////////
		//手机号验证
		var a = false,
			b = false,
			c = false,
			d = false;
		$("#num").blur(function() {
			if ($("#num").val() == "") {
				$("#tip-account-register").html("手机号不能为空！");
			} else if (!(/^1(3|4|7|8)\d{9}$/.test($("#num").val()))) {
				$("#tip-account-register").html("手机号格式错误！");
			} else {
				a = true;
				$("#tip-account-register").html("手机号格式验证通过！");
			}
		});
		//验证登录密码
		$("#password").blur(function() {
			if ($("#password").val() == "") {
				$("#tip-password").html("登录密码不能为空！");
			} else if (!(/^[0-9a-zA-Z_-]{6,20}$/.test($("#password").val()))) {
				$("#tip-password").html("6-20位大小写字母，数字及'-'、'_'组合!");
			} else {
				b = true;
				$("#tip-password").html("登录密码设置通过!");
			}
		});
		//验证确认密码
		$("#password2").blur(function() {
			if ($("#password2").val() == "") {
				$("#tip-password2").html("登录密码不能为空！");
			} else if (!(/^[0-9a-zA-Z_-]{6,20}$/.test($("#password2").val()))) {
				$("#tip-password2").html("6-20位大小写字母，数字及'-'、'_'组合!");
			} else if($("#password").val()!=$("#password2").val()){
				$("#tip-password2").html("请确保和第一次输入的密码一致!")
			}else {
				b = true;
				$("#tip-password2").html("确认登录密码设置通过!");
			}
		});
		//验证验证码
		$("#check-box").blur(function() {
			if ($("#check-box").val() == "") {
				$("#tip-checkcode").html("验证码不能为空！");
			} else if ($("#check-box").val().toUpperCase() != yanzhengma) {
				$("#tip-checkcode").html("验证码输入错误！");
			} else {
				c = true;
				$("#tip-checkcode").html("验证码验证通过！");
			}
		});
		//验证单选按钮是否选中
		$("#agree").click(function() {
			if ($("#agree").is(":checked")) {
				console.log("aaaaa");
				d = true;
			}else{
				d=false;
			}
		});
		//点击注册按钮事件
		$("#submit-register").click(function() {
			var flag = true;
			var username;
			console.log(a && b && c && d);
			var e=a && b && c && d;
			if(d==false){
				console.log(d);
				$("#btn-tip").html("请确定单选按钮是否勾选！");
			}else{
				if (e) {
					console.log("点击了注册！");
				    var username=$('#num').val();
				    var password=$('#password').val();
				    $.ajax({
						url: 'http://127.0.0.1:3000/registor',
						type: 'POST',
						data:{ username: username, password: password },
						success: function(data) {
							console.log(data);
							var ret = jQuery.parseJSON(data);
							console.log(ret);
							if(ret.msg==0){
								//alert("用户名已经被注册了！");
								$('#btn-tip').html("该手机号已经被注册了!");
							}
							if(ret.msg==1){
								//alert("注册成功！");
								$("#btn-tip").html("注册成功!即将跳转到登录界面!");
								setTimeout(function(){
									window.location.href="login.html";
								},3000);
							}
							console.log('Success: ');
						},
						error: function(xhr, status, error) {
							console.log('Error: ' + error.message);
						},
					});
				} else {
					$("#btn-tip").html("请核对您填写的信息是否完整以及正确!")
				}
			} 
		});
		/*注册框设置*/
		$(".user").click(function(){
			$(".user").css({
				border:"1px darkblue solid"
			});
			$(".pwd").css({
				border:"1px #cdcdcd solid"
			});
			$(".pwd2").css({
				border:"1px #cdcdcd solid"
			});
			$(".yanzheng").css({
				border:"1px #cdcdcd solid"
			});
		});
		$(".pwd").click(function(){
			$(".pwd").css({
				border:"1px darkblue solid"
			});
			$(".user").css({
				border:"1px #cdcdcd solid"
			});
			$(".pwd2").css({
				border:"1px #cdcdcd solid"
			});
			$(".yanzheng").css({
				border:"1px #cdcdcd solid"
			});
		});
		$(".pwd2").click(function(){
			$(".pwd2").css({
				border:"1px darkblue solid"
			});
			$(".user").css({
				border:"1px #cdcdcd solid"
			});
			$(".pwd").css({
				border:"1px #cdcdcd solid"
			});
			$(".yanzheng").css({
				border:"1px #cdcdcd solid"
			});
		});
		$(".yanzheng").click(function(){
			$(".yanzheng").css({
				border:"1px darkblue solid"
			});
			$(".user").css({
				border:"1px #cdcdcd solid"
			});
			$(".pwd").css({
				border:"1px #cdcdcd solid"
			});
			$(".pwd2").css({
				border:"1px #cdcdcd solid"
			});
		});
}

