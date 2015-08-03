/*tab栏的切换*/
$(function(){
	$('#top .topR li').click(function(){
		$(this).addClass('current').siblings().removeClass();
		$('#topB .topBR ul li').eq($(this).index()).addClass('current').siblings().removeClass();
	})
})
