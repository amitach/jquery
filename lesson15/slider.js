(function($){
	var sliderUL = $("div.slider").css("overflow","hidden").children("ul");
	var imgs = sliderUL.find("img");
	var imgWidth = imgs.width();
	var imgsLen = imgs.length;
	var current = 1;
	var totalImgsWidth = imgsLen * imgWidth;
	$("#slider-nav").show().find("button").on('click', function () {
		var loc = imgWidth;
		var direction = $(this).data("dir");
		(direction === "next" ) ? ++current : --current;

		if(current === 0){
			current = imgsLen;
			loc = totalImgsWidth - imgWidth;
			direction = "next";
		}else if( ( current - 1 ) === imgsLen ){
			current = 1;
			loc = 0;
		}
		console.log("current: " + current);
		transition( sliderUL, loc , direction );
	});

	function transition( container, loc, direction ) {
		var unit;
		if ( direction && loc !== 0){
			unit = ( direction === "next" ) ? "-=" : "+=" ;
		}
		console.log("unit: "+ unit + ", direction: "+ direction + ", loc: "  + loc );
		container.animate({
			'margin-left': unit ? (unit + loc ): loc
		})
	}
})(jQuery);	