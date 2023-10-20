
//////////////detail_size////////////////////////////////////

$(document).ready(function () {
    var originalColor = $(".add").css("background-color");
    $(".number_size").change(function () {
        var select_text = $(this).find("option:selected").text(); // Lấy nội dung của option đã chọn
        $(".title_size").hide();
        $(".option_size").show();
        $("#Contet_size").text(select_text); // Hiển thị nội dung đã chọn trong phần tử khác
        $(".add").css({
            "background": "black",
            "cursor": "pointer"
        });
        $(".add").mouseenter(function () {
            $(this).css("background-color", "#f4f4f4");
        });
        $(".add").mouseleave(function () {
            $(this).css("background-color", "black");
        });
    });
    $(".black").on("click", function () {
        $(".img_white").hide();
        $(".img_black").show();
    });
    ///////////////Detail_img/////////////////////////////////
    $(".black").on("click", function () {
        $(".img_white").hide();
        $(".img_black").show();
    });
    $(".white").on("click", function () {
        $(".img_black").hide();
        $(".img_white").show();
    });
     //Add_to_cart/////////////////////////////////////////////////
     $(".heart_icon").click(function () {
        $(".first").toggle();
        $(".secondy").toggle();
    });

    /////////Detail_evaluate///////////////////////////////////////
    $(".more_less").click(function () {
        $(".more").toggle();
        $(".less").toggle();
    });

    $('.review-teaser__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="product-carousel__arrow product-carousel__arrow-prev slick-arrow" title="Go to Previous" aria-disabled="true" style=""><svg class="icon--chevron-slick " role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--chevron"></use></svg></button>',
        nextArrow: '<button type="button" class="product-carousel__arrow product-carousel__arrow-next slick-arrow" title="Go to Next" aria-disabled="false" style=""><svg class="icon--chevron-slick icon--rotate-h" role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--chevron"></use></svg></button>',
    });

});



