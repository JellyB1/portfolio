$(document).ready(function(){
	
	
	$("a").on("click", function(e) {
		if (this.hash !== "") {
			e.preventDefault();

			const hash = this.hash;

			$("html, body").stop().animate({
				scrollTop: $(hash).offset().top - 75 
			} , 800);

		}
	})
})