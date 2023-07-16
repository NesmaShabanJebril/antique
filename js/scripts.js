
	$('#carousel-example').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('#carousel-example  .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#carousel-example .carousel-item').eq(i).appendTo('#carousel-example  .carousel-inner');
	            }
	            else {
	                $('#carousel-example .carousel-item').eq(0).appendTo('#carousel-example  .carousel-inner');
	            }
	        }
	    }
	});
	
	$('#carousel-new').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('#carousel-new  .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#carousel-new .carousel-item').eq(i).appendTo('#carousel-new  .carousel-inner');
	            }
	            else {
	                $('#carousel-new .carousel-item').eq(0).appendTo('#carousel-new  .carousel-inner');
	            }
	        }
	    }
	});
	$('#carousel-seller').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('#carousel-seller  .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#carousel-seller .carousel-item').eq(i).appendTo('#carousel-seller  .carousel-inner');
	            }
	            else {
	                $('#carousel-seller .carousel-item').eq(0).appendTo('#carousel-seller  .carousel-inner');
	            }
	        }
	    }
	});
	$('#carousel-all').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('#carousel-all  .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#carousel-all .carousel-item').eq(i).appendTo('#carousel-all  .carousel-inner');
	            }
	            else {
	                $('#carousel-all .carousel-item').eq(0).appendTo('#carousel-all  .carousel-inner');
	            }
	        }
	    }
	});