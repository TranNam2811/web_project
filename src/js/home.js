$(document).ready(function () {
    $('.list-best-seller').slick({
        dots: true,
        prevArrow: '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});

// sildeshow of best seller - greatest hots *******************
