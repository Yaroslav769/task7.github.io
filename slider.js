$(document).ready(function() {
    $(".image-slider").slick({
        arrows: true,  
        dots: true,               
        infinite: true,            
        slidesToShow: 3,          
        slidesToScroll: 3,          
        responsive: [
            {
                breakpoint: 768,  
                settings: {
                    slidesToShow: 1,   
                    slidesToScroll: 1  
                }
            }
        ]
    });
});