$(document).ready(function () {

    $('.header-news-slide').slick({
        prevArrow: '<button class="custom-prev slick-arrow" id="custom-prev"><svg class="scope-custom-icon" role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--arrow-left" ></use></svg></button>',
        nextArrow: '<button class="custom-next slick-arrow" id="custom-next"><svg class="scope-custom-icon" role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--arrow-right" ></use></svg></buttom>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
// --------------------------------- hover--------------------------------

    $('.row-scope-top').hover(function(){
        $('.pause_play-icon').css('opacity','1');
        $('.custom-prev').css('opacity','1');
        $('.custom-next').css('opacity','1');
    }, function(){
        $('.pause_play-icon').css('opacity','0');
        $('.custom-prev').css('opacity','0');
        $('.custom-next').css('opacity','0');
    });


    $('.help-icon').hover(function(){
        $('.login-icon>a').css('opacity','.5');
    }, function(){
        $('.login-icon>a').css('opacity','1');
    });
    $('.login-icon').hover(function(){
        $('.help-icon>button').css('opacity','.5');
    }, function(){
        $('.help-icon>button').css('opacity','1');
    });
    
    $('.menu-item').hover(function(){
        $(this).siblings().children('button').css('--underline-width',$('.menu-item>button').width());
        $(this).siblings().children('button').css('color','#767676');
    }, function(){
        $(this).siblings().children('button').css('color','#000');
    });

                // ------------------sale-----------------
    // $('.hover-menu-list-item').hover(function(){
    //     $(this).siblings().children('a').css('color','#767676');
    // }, function(){
    //     $(this).siblings().children('a').css('color','#000');
    // });
// ----------------------------------play pause-----------------------------------------
    $('.pause').click(function () {
        $('.header-news-slide').slick('slickSetOption', 'autoplay', false, true);
        $('.pause').toggle();
        $('.play').toggle();
    });
    $('.play').click(function () {
        $('.header-news-slide').slick('slickSetOption', 'autoplay', true, true);
        $('.pause').toggle();
        $('.play').toggle();
    });
// -------------------------------------------------------------------------
    $(window).scroll(function() {
        if ($(window).scrollTop() > $('.scope-header').offset().top) {
            $('.header').addClass("active-fixed");

        } else {
            $('.header').removeClass("active-fixed");
        }


    });    

    $('#icon-close').hide();
    $('#icon-un_tim').hide();
    var scoll = true;
    $('.header-search__toggle').click(function () {
        $(this).toggleClass('set--search-shown');
        if($('.header').css('position') == 'relative'){
            $('.header-search__scrollable-col').css('height','calc(100vh - 115.55px)')
        }else if($('.header').css('position') == 'fixed'){
            $('.header-search__scrollable-col').css('height','calc(100vh - 60px)')
        }
        $('.header-search__dropdown').slideToggle();
        if(scoll){
            $('body').css('overflow', 'hidden');
        }else{
            $('body').css('overflow', 'auto');
        }
        scoll = !scoll;
    });
    $('.header-favorites__link').click(function () {
        $(this).toggleClass('favorited');
    });
// -----------------------------------------------------------------------
    var isMoved = false;
    $('.bt-help').click(function () {       
        if (!isMoved) {
            $('.help-list').fadeToggle(0)
            .animate({
                top: '100%',
            },200); 
        }else{
            $('.help-list').animate({
                top: '0',
            },100)
            .fadeToggle();
        }
        isMoved = !isMoved;
    });
// ---------------------------login---------------------------------------------------
    $('.bt-login').click(function(){
        $('.login').css('display','flex');
        $('body').css('overflow', 'hidden');
    });  

    $('.bt-close-login').click(function(){
        $('.login').hide();
        $('body').css('overflow', 'auto');
    });

    $('.bt-tab').click(function(){
        $(this).css('color','#000');
        $(this).css('border-bottom','.125rem solid #000');
        $(this).siblings('button').css('color','#9b9b9b');
        $(this).siblings('button').css('border-bottom','0');
        $('.signin-tab').toggle();
        $('.signup-tab').toggle();
    });
    $('.signin-link').click(function(){
        $('.bt-tab-signin').css('color','#000');
        $('.bt-tab-signin').css('border-bottom','.125rem solid #000');
        $('.bt-tab-signup').css('color','#9b9b9b');
        $('.bt-tab-signup').css('border-bottom','0');
        $('.signin-tab').toggle();
        $('.signup-tab').toggle();
    });
    $('.signup-link').click(function(){
        $('.bt-tab-signup').css('color','#000');
        $('.bt-tab-signup').css('border-bottom','.125rem solid #000');
        $('.bt-tab-signin').css('color','#9b9b9b');
        $('.bt-tab-signin').css('border-bottom','0');
        $('.signin-tab').toggle();
        $('.signup-tab').toggle();
    });

    $('.input-text').focus(function(){
        $(this).siblings('.field__label').css({top:'-.55rem',transform:'scale(.85714)'})
    })
    var hover_signin = false;
    var hover_next = false;
    $('.input-text').blur(function(){
        if(!$(this).val()){
            $(this).siblings('.field__label').css({top:'.625rem',transform:'scale(1)'}).addClass('active-error');
            $(this).siblings('.error').css('opacity','1');
        }else{
            $(this).siblings('.error').css('opacity','0');
        }
        if($('#dwfrm_login_username').val() && $('#dwfrm_login_password').val()){
            $('#dwfrm_login_login').css({backgroundColor:'#000',borderColor:'#000',color:'#fff',cursor: 'pointer'});
            hover_signin = true;
        }else{
            $('#dwfrm_login_login').css({backgroundColor:'#f4f4f4',borderColor:'#f4f4f4',color:'#9b9b9b',cursor: 'not-allowed'});
            hover_signin = false;
        }
        if($('#dwfrm_login_username-signup').val()){
            $('#dwfrm_login_next').css({backgroundColor:'#000',borderColor:'#000',color:'#fff',cursor: 'pointer'});
            hover_next = true;
        }else{
            $('#dwfrm_login_next').css({backgroundColor:'#f4f4f4',borderColor:'#f4f4f4',color:'#9b9b9b',cursor: 'not-allowed'});
            hover_next = false;
        }
    })
    $('#dwfrm_login_login').hover(function(){
        if(hover){
            $(this).css({backgroundColor:'#fff',borderColor:'#000',color:'#000'});
        }else{
            $(this).css({backgroundColor:'#f4f4f4',borderColor:'#f4f4f4',color:'#9b9b9b'});
        }
    },function(){
        if(hover){
            $(this).css({backgroundColor:'#000',borderColor:'#000',color:'#fff'});
        }else{
            $(this).css({backgroundColor:'#f4f4f4',borderColor:'#f4f4f4',color:'#9b9b9b'});
        }
    })
    $('#dwfrm_login_next').hover(function(){
        if(hover_next){
            $(this).css({backgroundColor:'#fff',borderColor:'#000',color:'#000'});
        }else{
            $(this).css({backgroundColor:'#f4f4f4',borderColor:'#f4f4f4',color:'#9b9b9b'});
        }
    },function(){
        if(hover_next){
            $(this).css({backgroundColor:'#000',borderColor:'#000',color:'#fff'});
        }else{
            $(this).css({backgroundColor:'#f4f4f4',borderColor:'#f4f4f4',color:'#9b9b9b'});
        }
    })

    $('.field__label-checkbox').click(function(){
        $(this).toggleClass('active');
    });
    // ========================================shoes========================================
    





    // =======================================main==================================

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
    
    $('.list-best-seller').slick({
        dots: true,
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

    $('.list-new-arrival').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<button type="button" class="product-carousel__arrow product-carousel__arrow-prev slick-arrow" title="Go to Previous" aria-disabled="true" style=""><svg class="icon--chevron-slick " role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--chevron"></use></svg></button>',
        nextArrow: '<button type="button" class="product-carousel__arrow product-carousel__arrow-next slick-arrow" title="Go to Next" aria-disabled="false" style=""><svg class="icon--chevron-slick icon--rotate-h" role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--chevron"></use></svg></button>',
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
    // $('.product-carousel__arrow').click(function(){
    //     $(this).addClass('slick-disabled');
    //     $(this).siblings('button').removeClass('slick-disabled');
    // });

// =======================footer================================

    $(".abc").hide();
    jQuery(".title_shopping").click(function () {
        jQuery(this).find(".abc").slideToggle();
        console.log($(".title_shopping").attr("id"));
    })

    $(".title_img").click(function() {
        const plus_minus = $(this).find("img");
        const img_src = plus_minus.eq(0).attr("src");
        plus_minus.eq(0).attr("src", plus_minus.eq(1).attr("src"));
        plus_minus.eq(1).attr("src", img_src);
    });


















































});