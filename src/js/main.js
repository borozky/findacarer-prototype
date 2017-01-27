function dismissWelcomeMessage(callback){
    $(".dashboard-welcome").remove();
    if( typeof callback === 'function' ){
        callback();
    }
}

$(function(){
    $("#LinkUploadNewPhoto").on("click", function(e){
        e.preventDefault();
        $("#InputUploadNewPhoto:hidden").trigger("click");
    });
    
    // owl carousel 2 for home page on mobile only (<768px)
    // http://owlcarousel2.github.io/OwlCarousel2/demos/basic.html
    var owl = $('.owl-carousel'),
        owlOptions = {
            loop:false,
            margin:0,
            nav:false,
            dots: true,
            smartSpeed: 400,
            responsive:{
                0:{
                    items:1
                },
                768: {
                    items: 4,
                    dots: false,
                }
            }
        };

    if ( $(window).width() < 768 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });


    
    
});

