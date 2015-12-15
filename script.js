$(document).ready(function(){
	console.log("Sript included!");

	console.log($("td ol li").length);



	var anothercount=0;

	$("#DirectionButton").click(function(){
		anothercount++;
		if(anothercount===$("td ol li").length+1){
			$("td ol li p").css("color","black");
			anothercount=1;
		};
		$("td ol li:nth-child("+anothercount+") p").css("color","blue");
		$("html,body").animate({
			scrollTop:$('td ol li:nth-child('+anothercount+')').offset().top},500);
	});



	$("ol li").click(function(){
		var number=$(this).index();
		console.log(number);
		$("#"+(number+1)).toggle("slow");
	});




	


});



