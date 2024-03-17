
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });

        $(".our-focus-component").each(function(){
            var $this = $(this);
            $this.on("click touch", function(){
                $(".our-focus-component").removeClass("active");
                $this.addClass("active")
            })
        })

        
        
        if ($('.commercial-center-slider-item-wrap.mySwiper').length) {
            var swiper = new Swiper(".commercial-center-slider-item-wrap.mySwiper", {
                speed: 1100,
                loop: true,
                centeredSlides: false,
                slidesPerView: '1',
                spaceBetween: 40,
                effect: "fade",
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: ".right-arrow",
                    prevEl: ".left-arrow"
                }
            })
        }
        
		
	})// End ready function.
    

	

})(jQuery)

