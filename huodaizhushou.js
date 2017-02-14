function sh_ye(){
	// 三个页面翻动效果
	var i=0;
	$(".btn_r").click(function(){
		if(i==2){
			i=-1;
			$(".main").css("left","0")
		}
		i++;
		$(".main").stop().animate({left:-1000*i+"px"},1000);
		$(".di ul").find("li").removeClass("active");
		$(".di ul").find("li").eq(i).addClass("active");
	});

	$(".btn_l").click(function(){
		if(i==0){
			i=3;
			$(".main").css("left","-2000px");
		}
		i--;
		$(".di ul").find("li").removeClass("active");
		$(".di ul").find("li").eq(i).addClass("active");
		$(".main").stop().animate({left:-1000*i+"px"},1000);	
	});

	var k = true;
	var a = true;
	$(document).on("mousewheel DOMMouseScroll", function (e) {
	
   		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
	    if (delta > 0) {
	    	if(k){
	    		// 向上滚
	    		setTimeout(function(){
	    			if(i==0){
						i=3;
						$(".main").css("left","-2000px");
					}
					i--;
					$(".di ul").find("li").removeClass("active");
					$(".di ul").find("li").eq(i).addClass("active");
					$(".main").stop().animate({left:-1000*i+"px"},1000);
					k=true;
	    		},300)
		        k = false;
		    }
	    	
			
	    } else if (delta < 0) {
	    	if(a){
	    		// 向下滚
	    		setTimeout(function(){
	    			if(i==2){
					i=-1;
					$(".main").css("left","0")
				}
				i++;
				$(".main").stop().animate({left:-1000*i+"px"},1000);
				$(".di ul").find("li").removeClass("active");
				$(".di ul").find("li").eq(i).addClass("active");
				a = true;
				},300);
				a = false;
	    	}
	        
			
	    }
	});

	$(".di ul").find("li").click(function(){
		var i = $(this).index();
		$(".main").stop().animate({left:-1000*i+"px"},1000);
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});	

	$(".pic_c").mouseover(function(){
		$(this).children(".shade").stop().animate({top:"-82"},200);
	}).mouseout(function(){
		$(this).children(".shade").stop().animate({top:"0"},600);
	})
	
}
