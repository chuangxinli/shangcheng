$(".zonghe").click(function(){
	$(".goodslist").html("");
	getdata("男装");
});
$(".xiaoliang").click(function(){
	$(".goodslist").html("");
	getdatabyxiaoliang("男装");
});
$(".xinkuan").click(function(){
	$(".goodslist").html("");
	getdatabyshijian("男装");
});
$(".pricejiang").click(function(){
	$(".goodslist").html("");
	getdatabypricejiang("男装");
});
$(".pricesheng").click(function(){
	$(".goodslist").html("");
	getdatabypricesheng("男装");
});
getdata("男装");
//价格区间选择后处理
$(".btn-p").click(function(){
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
		getdatabypricequjian(smallnum,bignum,"男装");
	}
});
$(".leibie li a").click(function(){
	console.log($(".d-ci").length);
	var length=$(".d-ci").length;
	if(length==0){
		getdata("男装");
	}
	if(length==1){
		var arg1=$($(".d-ci")[0]).html();
		getdata2("男装",arg1);
	}
	if(length==2){
		var arg1=$($(".d-ci")[0]).html();
		var arg2=$($(".d-ci")[1]).html();
		getdata3("男装",arg1,arg2);
	}
	if(length==3){
		var arg1=$($(".d-ci")[0]).html();
		var arg2=$($(".d-ci")[1]).html();
		var arg3=$($(".d-ci")[2]).html();
		getdata4("男装",arg1,arg2,arg3);
	}
	if(length==4){
		var arg1=$($(".d-ci")[0]).html();
		var arg2=$($(".d-ci")[1]).html();
		var arg3=$($(".d-ci")[2]).html();
		var arg4=$($(".d-ci")[3]).html();
		getdata5("男装",arg1,arg2,arg3,arg4);
	}
	if(length==5){
		var arg1=$($(".d-ci")[0]).html();
		var arg2=$($(".d-ci")[1]).html();
		var arg3=$($(".d-ci")[2]).html();
		var arg4=$($(".d-ci")[3]).html();
		var arg5=$($(".d-ci")[4]).html();
		getdata6("男装",arg1,arg2,arg3,arg4,arg5);
	}
});
