
function locationCard(settings) {

    var _options = $.fn.extend({ //合并配置参数
        ids: []
        /*onProvinceSelect: function (name) { },
        onCitySelect: function (name) { },
        onCountySelect: function (name) { }*/
    }, settings);
    var provinceAndCity = _areaselect_data;
    console.log(provinceAndCity);
    var provinceInputId = _options.ids[0], cityInputId = _options.ids[1], countyInputId = _options.ids[2];
    console.log(provinceInputId+"--"+cityInputId+"--"+countyInputId);
    var self = this;
    var pdiv, cdiv, xdiv;
    var p_list = getProvinceList(), c_list = [], x_list = [];
	console.log(p_list+"--"+c_list+"--"+x_list);
    var pInput = $('#' + provinceInputId);
    console.log(pInput);
    var cInput = $('#' + cityInputId);
    console.log(cInput);
    var xInput = countyInputId ? $('#' + countyInputId) : null;
	console.log(xInput);
    var p_pos = pInput.offset(), c_pos, x_pos;
	console.log(p_pos);
    var cur_p = pInput.val() ? pInput.val() : null,
        cur_c = cInput.val() ? cInput.val() : null,
        cur_x = countyInputId ? (xInput.val() ? xInput.val() : null) : null;

    var c_css, p_css, x_css;

    /********************************************************************/

    function writeProvinceValue() {
        if (!cur_p) return;
        pInput.val(cur_p);
        console.log(pInput.val());
        cInput.val('');
        xInput.val('');
    }
    function writeCityValue() {
        if (!cur_c) return;
        cInput.val(cur_c);
        xInput.val('');
    }
    function writeCountyValue() {
        if (!cur_x) return;
        xInput.val(cur_x);
    }

    //显示城市列表
    function showCityList(province) {
        clearCards(); //确保展开卡片的时候，把其他卡片隐藏掉
        hideProvinceList();
        hideCountyList();
        if (!cur_p || cur_p.length == 0) { return; }
        c_list = getCityList(cur_p);
        cInput.show();

        c_pos = c_pos || cInput.offset();
        c_css = c_css || {
            'top': c_pos.top + cInput.outerHeight() + 'px',
            'left': c_pos.left + 'px'
        };
        createC(c_list).css(c_css).show();
    }
    //显示省份列表
    function showProvinceList() {
        clearCards(); //确保展开卡片的时候，把其他卡片隐藏掉
        hideCityList();
        hideCountyList();
        p_css = p_css || {
            'top': p_pos.top + pInput.outerHeight() + 'px',//outerHeight()返回元素的外部高度 包含padding border,如果包含margin即outerHeight(true);
            'left': p_pos.left + 'px'
        };
        createP().css(p_css).show();
    }
    //显示县级列表
    function showCountyList() {
        if (!countyInputId) { return; }
        clearCards(); //确保展开卡片的时候，把其他卡片隐藏掉
        hideProvinceList();
        hideCityList();
        if (!cur_p || cur_p.length == 0 || !cur_c || cur_c.length == 0) { return; }
        x_list = getCountyList(cur_p, cur_c);
        if (x_list == undefined) { //如果是直辖市，则不存在县级
            xInput.hide();
            return;
        }
        xInput.show();
        x_pos = x_pos || xInput.offset();
        x_css = x_css || {
            'top': x_pos.top + xInput.outerHeight() + 'px',
            'left': x_pos.left + 'px'
        };
        createX(x_list).css(x_css).show();
    }
    //隐藏省份列表
    function hideProvinceList() {
        if (pdiv && pdiv.length > 0) {
            pdiv.hide();
        }
    }

    //隐藏城市列表
    function hideCityList() {
        if (cdiv && cdiv.length > 0) {
            cdiv.hide();
        }
    }
    //隐藏县级列表
    function hideCountyList() {
        if (xdiv && xdiv.length > 0) {
            xdiv.hide();
        }
    }
    //获取省份列表
    function getProvinceList() {
        return provinceAndCity['p'];
    }
    //获取城市列表
    function getCityList(province) {
        return provinceAndCity['c'][province];
    }
    //获取县级列表
    function getCountyList(ps, cs) {
        return provinceAndCity['a'][ps + '-' + cs];
    }

    //创建县级列表
    function createX(countys) {
        var html = '';
        //如果创建过
        if (xdiv && xdiv.length > 0) {
            for (var i = 0; i < countys.length; i++) {
                html += '<a class="a" href="javascript:;">' + countys[i] + '</a>';
            }
            xdiv.html(html);
            return xdiv;
        }
        //如果没有创建过
        html += '<div id="__' + countyInputId + '" class="countys clearfix" style="display:none;">';
        for (var i = 0; i < countys.length; i++) {
            html += '<a class="a" href="javascript:;">' + countys[i] + '</a>';
        }
        html += '</div>';
        xdiv = $(html);
        xdiv.delegate('a', 'click', function (event) {
            var target = $(this);
            cur_x = target.text();
            writeCountyValue();
            hideCountyList();
            event.stopPropagation(); //阻止事件冒泡
        }).appendTo('body');
        return xdiv;
    }
    //创建城市列表
    function createC(citys) {
        var html = '';
        //如果创建过
        if (cdiv && cdiv.length > 0) {
            for (var i = 0; i < citys.length; i++) {
                html += '<a class="a" href="javascript:;">' + citys[i] + '</a>';
            }
            cdiv.html(html);
            return cdiv;
        }
        //如果没有创建过
        html += '<div id="__' + cityInputId + '" class="citys clearfix" style="display:none;">';
        for (var i = 0; i < citys.length; i++) {
            html += '<a class="a" href="javascript:;">' + citys[i] + '</a>';
        }
        html += '</div>';
        cdiv = $(html);
        cdiv.delegate('a', 'click', function (event) {
            var target = $(this);
            cur_c = target.text();
            writeCityValue();
            hideCityList();
            showCountyList();
            event.stopPropagation(); //阻止事件冒泡
        }).appendTo('body');
        return cdiv;
    }
    //创建省份列表
    function createP() {
        //如果创建过
        if (pdiv && pdiv.length > 0) {
            return pdiv;
        }
        //如果没有创建过
        var html = '<div id="__' + provinceInputId + '" class="privinces clearfix" style="display:none;">';
        for (var i = 0; i < p_list.length; i++) {
            html += '<a class="a" href="javascript:;">' + p_list[i] + '</a>';
        }
        html += '</div>';
        pdiv = $(html);
        console.log(pdiv.length);
        console.log($('#__' + provinceInputId).length+"---"+$('#__' + provinceInputId));
        console.log($('#__' + provinceInputId));
        if ($('#__' + provinceInputId).length == 0) {
            pdiv.delegate('a', 'click', function (event) {
                var target = $(this);
                cur_p = target.text();
                writeProvinceValue(cur_p);
                showCityList(cur_p);
                event.stopPropagation(); //阻止事件冒泡
            }).appendTo('body');
        }
        return pdiv;
    }
    this.setCardsHide = function () {
        hideCountyList();
        hideCityList();
        hideProvinceList();
    }
    function clearCards() {
    	console.log(self.cards.length);
        for (var i = 0; i < self.cards.length; i++) {
            if (self.id != i) {
                self.cards[i].setCardsHide();
            }
        }
    }
    this.init = function () {
        pInput.click(function (event) {
            showProvinceList();
            event.stopPropagation(); //阻止事件冒泡
        });
        cInput.click(function (event) {
            showCityList();
            event.stopPropagation(); //阻止事件冒泡
        });
        if (xInput) {
            xInput.click(function (event) {
                showCountyList();
                event.stopPropagation(); //阻止事件冒泡
            });
        }
            
        $(document).delegate('html', 'click', function (event) {
            var target = $(event.target);
            //console.log(target);
            if (target.closest('#__' + cityInputId).length == 0 && target.closest('#__' + provinceInputId).length == 0 && target.closest('#__' + countyInputId).length == 0) {
                hideCountyList();
                hideCityList();
                hideProvinceList();
            }
        });
      	/*this.id = this.cards.length;
        console.log(this.id+"--"+this);
        console.log(this);
        this.cards.push(this);*/
    }
}
locationCard.prototype = {
    cards: [] //保存卡片实例
}
//是否登录判断
var username=sessionStorage.getItem("username");
$(".yonghuming").html(username);
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
//个人信息验证
var f = false;
$(".phonenum").blur(function() {
	if ($(".phonenum").val() == "") {
		$(".phonenum-tip").html("手机号不能为空！");
	} else if (!(/^1(3|4|7|8)\d{9}$/.test($(".phonenum").val()))) {
		$(".phonenum-tip").html("手机号格式错误！");
	} else {
		$(".phonenum-tip").html("完成！");
	}
});
$(".qqhao").blur(function() {
	if ($(".qqhao").val() == "") {
		$(".qqhao-tip").html("QQ号不能为空！");
	} else if (!(/^\d{5,10}$/.test($(".qqhao").val()))) {
		$(".qqhao-tip").html("QQ号格式错误！");
	} else {
		$(".qqhao-tip").html("完成！");
	}
});
$(".nicheng").blur(function() {
	if ($(".nicheng").val() == "") {
		$(".nicheng-tip").html("昵称不能为空！");
	} else if (!($(".nicheng").val().length<=20&&$(".nicheng").val().length>=4)){
		$(".nicheng-tip").html("昵称为4-20个字符！");
	} else {
		$(".nicheng-tip").html("完成！");
	}
});
$(".realname").blur(function() {
	if ($(".realname").val() == "") {
		$(".realname-tip").html("名字不能为空！");
	} else if (!(/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/.test($(".realname").val()))){
		$(".realname-tip").html("汉子不能出现空格，英文名不能连续出现空格！");
		//英文名的空格可以是多个，但是不能连续出现多个，汉字不能出现空格
	} else {
		$(".realname-tip").html("完成！");
	}
});
$(".btn").click(function(){
	console.log($("#pr1").val());
	if($("#pr1").val()==""||$("#ci1").val()==""){
		f=false;
	}else if($("#pr1").val()=="北京市"||$("#pr1").val()=="天津市"||$("#pr1").val()=="上海市"||$("#pr1").val()=="重庆市"){
		f=true;
	}else{
		if($("#co1").val()!=""){
			f=true;
		}else{
			f=false;
		}
	}
	if((/^1(3|4|7|8)\d{9}$/.test($(".phonenum").val()))&&(/^\d{5,10}$/.test($(".qqhao").val()))&&(/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/.test($(".realname").val()))&&($(".nicheng").val().length<=20&&$(".nicheng").val().length>=4)&&f){
		userinfo();
	}else{
		if(!f){
			$(".btn-tip").html("地址信息不完整！");
		}else{
			$(".btn-tip").html("请确保信息的完整正确！");
		}
	}
});
function userinfo(){
	var nicheng=$(".nicheng").val();
	var realname=$(".realname").val();
	var provice=$("#pr1").val();
	var city=$("#ci1").val();
	var country=$("#co1").val();
	var tel=$(".phonenum").val();
	var qqnum=$(".qqhao").val();
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/userinfo",
		async:true,
		data:{username:username,nicheng:nicheng,realname:realname,provice:provice,city:city,country:country,tel:tel,qqnum:qqnum},
		success:function(data){
			console.log(data);
			var ret=JSON.parse(data);
			if(ret.msg==1){
				$(".btn-tip").html("提交成功！");
			}else{
				$(".btn-tip").html("提交失败！");
			}
		}
	});
}
getuserinfo();
function getuserinfo(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getuserinfo",
		async:true,
		data:{"username":username},
		success:function(data){
			console.log(data);
			if(data=="[]"){
				
			}else{
				$(".nicheng-tip").html("");
				$(".realname-tip").html("");
				$(".phonenum-tip").html("");
				$(".qqhao-tip").html("");
				$(".btn-tip").html("");
				var ret=JSON.parse(data);
				console.log(ret[0]);
				$(".nicheng").val(ret[0].nicheng);
				$(".realname").val(ret[0].realname);
				$("#pr1").val(ret[0].provice);
				$("#ci1").val(ret[0].city);
				if(ret[0].country!=""){
					$("#co1").show();
					$("#co1").val(ret[0].country);
				}
				$("#ci1").show();
				$(".phonenum").val(ret[0].tel);
				$(".qqhao").val(ret[0].qqnum);
			}
		}
	});
}
//收货地址验证
var g = false; 
$(".tel-num").blur(function() {
	if ($(".tel-num").val() == "") {
		$(".tel-num-tip").html("手机号不能为空！");
	} else if (!(/^1(3|4|7|8)\d{9}$/.test($(".tel-num").val()))) {
		$(".tel-num-tip").html("手机号格式错误！");
	} else {
		$(".tel-num-tip").html("完成！");
	}
});
$(".zip-code").blur(function() {
	if ($(".zip-code").val() == "") {
		$(".zip-code-tip").html("邮编不能为空！");
	} else if (!(/^[1-9][0-9]{5}$/.test($(".zip-code").val()))) {
		$(".zip-code-tip").html("邮编号格式错误！");
	} else {
		$(".zip-code-tip").html("完成！");
	}
});
$(".add-juti").blur(function() {
	if ($(".add-juti").val() == "") {
		$(".add-juti-tip").html("昵称不能为空！");
	} else if (!($(".add-juti").val().length<=20&&$(".add-juti").val().length>=2)){
		$(".add-juti-tip").html("昵称为2-20个字符！");
	} else {
		$(".add-juti-tip").html("完成！");
	}
});
$(".name-shouhuo").blur(function() {
	if ($(".name-shouhuo").val() == "") {
		$(".name-shouhuo-tip").html("收货人姓名不能为空！");
	} else if (!(/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/.test($(".name-shouhuo").val()))){
		$(".name-shouhuo-tip").html("汉子不能出现空格，英文名不能连续出现空格！");
		//英文名的空格可以是多个，但是不能连续出现多个，汉字不能出现空格
	} else {
		$(".name-shouhuo-tip").html("完成！");
	}
});
$(".btn2").click(function(){
	console.log($("#pr2").val());
	if($("#pr2").val()==""||$("#ci1").val()==""){
		g=false;
	}else if($("#pr2").val()=="北京市"||$("#pr2").val()=="天津市"||$("#pr2").val()=="上海市"||$("#pr2").val()=="重庆市"){
		g=true;
	}else{
		if($("#co2").val()!=""){
			g=true;
		}else{
			g=false;
		}
	}
	if((/^1(3|4|7|8)\d{9}$/.test($(".tel-num").val()))&&(/^[1-9][0-9]{5}$/.test($(".zip-code").val()))&&(/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/.test($(".name-shouhuo").val()))&&(/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/.test($(".name-shouhuo").val()))&&g){
		useraddress();
	}else{
		if(!f){
			$(".btn-tip").html("地址信息不完整！");
		}else{
			$(".btn-tip").html("请确保信息的完整正确！");
		}
	}
});
function useraddress(){
	var shouhuoname=$(".name-shouhuo").val();
	console.log(shouhuoname);
	var addjuti=$(".add-juti").val();
	var provice=$("#pr2").val();
	var city=$("#ci2").val();
	var country=$("#co2").val();
	var telnum=$(".tel-num").val();
	var zipcode=$(".zip-code").val();
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/useraddress",
		async:true,
		data:{username:username,shouhuoname:shouhuoname,addjuti:addjuti,provice:provice,city:city,country:country,telnum:telnum,zipcode:zipcode},
		success:function(data){
			console.log(data);
			var ret=JSON.parse(data);
			if(ret.msg==1){
				$(".btn2-tip").html("提交成功！");
			}else{
				$(".btn2-tip").html("提交失败！");
			}
		}
	});
}
//getuseraddress();
function getuseraddress(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/getuseraddress",
		async:true,
		data:{username:username},
		success:function(data){
			console.log(data);
			if(data=="[]"){

			}else{
				$(".name-shouhuo-tip").html("");
				$(".zip-code-tip").html("");
				$(".tel-num-tip").html("");
				$(".btn2-tip").html("");
				$(".add-juti").html("不需要重复写省市区！");
				var ret=JSON.parse(data);
				$(".name-shouhuo").val(ret[0].shouhuoname);
				$(".zip-code").val(ret[0].zipcode);
				$(".tel-num").val(ret[0].telnum);
				$(".add-juti").val(ret[0].addjuti);
				$("#pr2").val(ret[0].provice);
				$("#ci2").val(ret[0].city);
				$("#ci2").show();
				if(ret[0].country!=""){
					$("#co2").val(ret[0].country);
					$("#co2").show();
				}
			}
		}
	});
}
$(".user-add").click(function(){
	$(".user-info").css({
		background:"#ffffff",
		color:"#666666"
	});
	$(".user-add").css({
		background:"#F16767",
		color:"#ffffff"
	});
	$(".user-address-sheet").css({
		display:"block"
	});
	$(".user-info-sheet").css({
		display:"none"
	});
	new locationCard({
	    ids: ['pr2', 'ci2', 'co2']
	}).init();
	getuseraddress();
});
$(".user-info").click(function(){
	$(".user-add").css({
		background:"#ffffff",
		color:"#666666"
	});
	$(".user-info").css({
		background:"#F16767",
		color:"#ffffff"
	});
	$(".user-address-sheet").css({
		display:"none"
	});
	$(".user-info-sheet").css({
		display:"block"
	});
	new locationCard({
	    ids: ['pr1', 'ci1', 'co1']
	}).init();
	getuserinfo();
});

 