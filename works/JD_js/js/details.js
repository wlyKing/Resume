//---------------放大镜---------------
var  hxsd_tools={};
hxsd_tools.changeBig=function(){	
	//---------------放大镜---------------
	var oSpan=$(".main_img span");
	$(".main_img").mousemove(function(ev){
		oSpan.show();
		$(".big-img").show();
		var l=ev.pageX-$(this).offset().left-oSpan.width()/2;
		var t=ev.pageY-$(this).offset().top-oSpan.height()/2;
		
		if(l<0){
			l=0;
		}
		if(l>$(this).width()-oSpan.width()){
			l=$(this).width()-oSpan.width();
		}
		if(t<0){
			t=0;
		}
		if(t>$(this).height()-oSpan.height()){
			t=$(this).height()-oSpan.height();
		}
		
		oSpan.css({"left":l,"top":t});
		$(".big-img img").css({"left":-l*2,"top":-t*2});
	})
	$(".main_img").mouseleave(function(){
		oSpan.hide();
		$(".big-img").hide();
		
	})		
}
//---------------------小图切换-------------------------------
hxsd_tools.changeImg=function(){
	//计算ul的宽度     li的宽度 长度
	var l_w=$('.spec-items li').width()+15;		
	var l_num=$('.spec-items li').size();	
	var u_w=l_w*l_num;

	var n=0;	
    $('.spec-items').width(u_w); 
	$('.spec-list .prevBtn').click(function(){
		n--;
		if(n<0){
			n=0;			
		}
		$('.spec-items').animate({"left":-n*l_w+2});
	});
	$('.spec-list .nextBtn').click(function(){
		n++;
		if(n>=l_num-5){			
			n=l_num-5;
	     console.log(n);			
		}
		$('.spec-items').animate({"left":-n*l_w+2});
	})	
};

hxsd_tools.chooseType=function(){
		var aLi=$('.spec-items li');
		var imgLi=$('.big_img_list li');
		var aType=$('.choose-size .size li');
//		console.log(imgLi);
	//小图	
	  aLi.each(function(i){	  	
	  	i=$(this).index();
	  	$(this).mouseenter(function(){
	  		var _this=$(this);    	
	  		_this.addClass("ac").siblings().removeClass("ac");
	  		imgLi.eq(i).css("display","block").siblings().css("display","none");
           
	  	});	  		  	
	  });
	  aType.each(function(i){
	  	i=$(this).index();	
	  	aType[i].num=0;
	  	$(this).click(function(){
	  		var _this=$(this);
//	  		if(_this.num%2==0){
//	  			var oPrice=$('.price');
//	  			
//	  		}
//	  		
	  		
	  		
	  		var _this=$(this);
	  		_this.addClass("active").siblings().removeClass("active");
	  		imgLi.eq(i).css("display","block").siblings().css("display","none");
	  		aLi.eq(i).addClass("ac").siblings().removeClass("ac");
	  	})
	  	
	  })
	  
};
//------------------增加数量-------------------------
   var arr=[229,159,45,89,76,249,105,110]
   var aBtn=$('.push');
   var inputVal=$("#text").val(); 

    aBtn.eq(0).click(function(){
    	if(inputVal<=0){
    		inputVal=0;
    		$("#text").val(inputVal);
    		alert("亲，很优惠，加入购物车吧！");
    	}else{
    		inputVal--;
    		$("#text").val(inputVal);
    	}    	
    });
    aBtn.eq(1).click(function(){
    	if(inputVal>=7){
    		inputVal=7;
    		$("#text").val(inputVal);
    		alert("亲，限购哦，需要更多请联系客服！");
    	}else{
    		inputVal++;
    		$("#text").val(inputVal);
    	}    	
    });
    //----------------添加购物车----------------------
    $('.btn').click(function(){
    	if(inputVal==0){
    		alert("亲，还没有选中商品，继续寻找！！")
    	}else{
    		alert("已将"+inputVal+"商品加入购物车！！")
    	}
    });
    
    //-------------------导航选项卡------------------------
    hxsd_tools.navTag=function(){

    	var aLi=$('.nav li');
    	var aDiv=$('.cont-list')
    	aLi.each(function(){
    		$(this).click(function(){
    			var _this=$(this);
    			var i=$(this).index();
    			console.log(i)
    			_this.addClass("act").siblings().removeClass("act");
    			aDiv.eq(i).show().siblings('div').hide();    			    			
    		});  		    		    		
    	});
    	
    	
    }
     
$.extend(hxsd_tools);

	

