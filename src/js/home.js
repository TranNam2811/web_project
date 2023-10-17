function toggleHeart(event) {
    var heartIcon = event.target;

    if (heartIcon.classList.contains("far")) {
        heartIcon.classList.remove("far");
        heartIcon.classList.add("fa");
    } else {
        heartIcon.classList.remove("fa");
        heartIcon.classList.add("far");
    }
}

var heartIcons = document.querySelectorAll(".tim");

heartIcons.forEach(function (heartIcon) {
    heartIcon.addEventListener("click", toggleHeart);
});


$('.list-new-arrival').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<button class="slick-prev">Previous</button>', // Thêm nút "Previous"
    nextArrow: '<button class="slick-next">Next</button>',     // Thêm nút "Next"
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
            breakpoint: 800,
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