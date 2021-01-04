// JavaScript Document

$(function(){
        
 menu(); 
 cityclick();
// tabs();
})

function menu(){
	$(".sub_list ul.sub_menu li dl").each(function(){
		$(this).children("dd:last").addClass("last");			   
    });
	
	$(".sub_list ul.sub_menu li").hover(function(){
							$(this).css("z-index","999999999")
						   var Index = $(".sub_list ul.sub_menu li").index(this);					
							 $(this).addClass("add_a_hover");
							    $(".sub_list ul.sub_menu li").eq(Index).children("dl").has("dd").show();										

$(this).find("dl").width()>93?$(this).find("dl").width(165):"";	

							
							 //   $(".sub_list ul.sub_menu li").eq(Index).find("a").addClass("red");
												 },
										  function(){
										$(this).css("z-index","1");
										if($(this).children("dl").is(":visible")){
											
											$(this).children("dl").hide();
											 									//$(this).find("a").removeClass("red");										
										}	  $(this).removeClass("add_a_hover");									  
	 });
	
}

function tabs(){
	  $(".tabs ul li:first").addClass("meov");
	  $(".SiteNavigation .infoList:first").show();
      $(".tabs ul li").mouseover(function(){
			var index=	$(".tabs ul li").index(this);
			$(".tabs ul li").removeClass("meov").eq(index).addClass("meov");
		    $(".SiteNavigation .infoList").hide().eq(index).show();						  
										 
	  });	
	
	

}

function cityclick(){
	var len=$(".infoList li a").length;
	$(".infoList li a").each(function(){
		var x= $(this).attr("href");
		var y=x.substring(0,7);
		if(y!="http://")
		{
			$(this).css({"color":"#666","text-decoration":"none"});
			$(this).removeAttr("href");
		}
	});
 
}

