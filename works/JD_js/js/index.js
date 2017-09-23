$.fn.extend({
	//---------------轮播图----------------------------
	imgTab:function(opt){
		var def={
			"autoPlay":true,
			"time":800
		}
		var new_opt=$.extend(def,opt);
		this.each(function(){
			var timer=null;
			var m=0;
			var _this=$(this);
			var aBtn=_this.find('ol li');
			var imgLi=_this.find('ul li');				
            aBtn.click(function(){
            	var n=$(this).index();
            	m=n;
            	$(this).addClass('active').siblings().removeClass('active');            	
            	imgLi.eq(n).show().siblings().hide();
            });
            
            if(new_opt.autoPlay){
            	function run(){
                   timer=setInterval(function(){
                   	  m++;
                   	  if(m==aBtn.length){
                   	  	m=0;
                   	  }
                   	imgLi.eq(m).show().siblings().hide();
                   	aBtn.eq(m).addClass('active').siblings().removeClass('active');
                   },new_opt.time);
            	}
            	
            	run();
            	_this.hover(
            		function(){
            			clearInterval(timer);
            		},
            		function(){
            			run();
            		}
            		);
            }		                            
			return this;
		});			
	},
	//----------------------二级菜单-------------------------
	secondMenu:function(){
		this.each(function(){
			var aLi=$(this).find(".list li");	
			var aPopup=$(this).find(".popup");
			var aSection=$(this).find(".popup .section");
		function dal_li_ac(){//清除所有li上的ac
			for(var i=0;i<aLi.length;i++){
				aLi.eq(i).removeClass("ac");
			}	
		};			
			aLi.each(function(i){
				var _this=$(this);
				 i=$(this).index();				 
				$(this).mouseenter(function(){					
					aPopup.show();
					dal_li_ac();					 
					_this.addClass("ac");
					n=i;
					//获取自定义属性
					var show_id=_this.attr("data-index");					
					aSection.eq(n).show().siblings().hide();
					//鼠标移入显示相对应的内容
					var a=$("#cate_item"+show_id+"");
					$("#cate_item"+show_id+"").show();
				});
				$(this).mouseleave(function(){
					aPopup.hide();
//					_this.addClass()
					dal_li_ac();
				});	
			   aPopup.mouseenter(function(){
					$(this).show();
					aLi.eq(n).addClass("ac").siblings().removeClass("ac");
					
			    });
			  aPopup.mouseleave(function(){
					$(this).hide();
					dal_li_ac();	
				});
				
			});
			return this;
		});
	},
	//----------------------12格交互----------------------------
	jiaoHu:function(){
		this.each(function(){
			var onOff=true;
			var timer;
			$('.top').hover(
				function(){
					if(onOff){
						timer=setInterval(function(){
							$(".icon .pop").animate({"top":30},200);
							$(".icon .top").animate({"top":-40},200);
						},500);
			          $(".dialog").eq($(this).index()).show().siblings().hide();//显示对应的对话框内容												
					}
				},
				function(){
					onOff=true;
					clearInterval(timer);					

				});													
			$('.close').click(function(){
				$(".icon .pop").animate({"top":208},200);
				$(".icon .top").animate({"top":0},200);
	   });
	   return this;
	});
	},
	
	//--------------------左侧导航--------------------------------
	leftNav:function(){
		this.each(function(){  //left_nav div			console.log(this)
			
			 	   //当楼层到达某个位置时 旁边的导航出现相应的楼层
 	  var aLi=$(this).find('.nav_e li'); 
	  var aBox = $('.page3').children('.floor');
 	  var arr=[];
      for(var i=0;i<aBox.length;i++){
      	var obj={};
      	obj.name=i;
      	obj.offsettop=aBox.eq(i).offset().top;
      	arr.push(obj);  
      }        
 	   $(window).scroll(function(){
 	   	    var last_arr=[];
 	   	    var s_t=$(window).scrollTop();//滚动条距顶部的距离	 
 	        var w_t=aBox.offset().top;//文档的高度	             	        
 	        var s_h=$(window).height();
 	        var h=w_t-s_t;//div相对于屏幕顶部的高度 	 	        
 	        if(s_t>200){
		       $('.nav_e').show();		       
			}
			if(s_t==0){
		       $('.nav_e').hide();				
			}	        
 	        for(var j=0;j<aBox.length;j++){
 	        	if(arr[j].offsettop<s_t+400){
 	        		last_arr.push(arr[j].name);
 	        	}
 	        } 	       	        
 	        var lastIndex=last_arr.length-1;//最后一个索引值 	        
 	        aLi.removeClass('ac');
   	        last_arr.length==0?aLi.eq(0).addClass('ac') : aLi.eq(lastIndex).addClass('ac'); 	        
 	  });	   	  
 	  	   aLi.click(function(){  	  	   	
 	  	 	$('body,html').animate({"scrollTop":arr[$(this).index()].offsettop},800) 	  	     	  		
 	  	 });
			return this;						
		});
	},
	
	
//-------------------------------楼层导航切换---------------------------------------
floorNav:function(){ 	
	this.each(function(){       		
		var aLi=$(this).find('.f_top li');		
        var aDiv=$(this).find('.f_mid .content');
	 aLi.each(function(){	 	
	 	$(this).click(function(){
	 		$(this).addClass('active').siblings().removeClass('active');
            aDiv.eq($(this).index()).show().siblings('.content').hide()	 		
	 	})
	 })
		return this;				
	})
}
		
});
//-------------------------返回顶部--------------------------------
var hxsd={};
hxsd.backTop=function(){            	       
    var bkTop=$(".backtop");
     bkTop.click(function(){
				$('html,body').animate({"scrollTop":0},2000);
			})              
          }
//-----------------留言滚动-----------------------------------------
hxsd.newList=function(){
	var innerHtml=$('.m_con').html();
	var a=$('.m_con').html(innerHtml+innerHtml+innerHtml+innerHtml+innerHtml);		  	
	var li_h=$('.m_con li').height();
	var timer;
	var i=0;
	autoRun();	
	$('.m_scoll').mouseenter(function(){
		clearInterval(timer);
	})
	
	$('.m_scoll').mouseleave(function(){
		autoRun();
	})		
	function autoRun(){
		timer=setInterval(function(){			
			i++;
		  $('.m_con').animate({"top":-li_h*i+"px"})		  
		  if(i>=$('.m_con li').length/2){		  	
		  	    i=0;
		  	    $('.m_con').animate({"top":0},0)
		  }						
	},200)
	}
};



$.extend(hxsd);
