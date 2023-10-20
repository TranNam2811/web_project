$(document).ready(function () {
    $('.refinement__link').click(function(){
    $(this).toggleClass('checked');
    });

    var favorite = false;
    $('.favorite-action').click(function(){
        favorite = !favorite;
        $('.favorite-action__add').toggle();
        $('.favorite-action__remove').toggle();

        if(favorite){
            $('.favorite-success__item').animate({
                opacity: 1
            },500,'linear').delay(500); 
            $('.favorite-success__item').animate({
                opacity: 0
            },500,'linear');
        }
    });

    var filter = false;
    $('.plp-actions__toggle-refine').click(function(){
        filter = !filter;
        $(this).toggleClass('set--refinements-active');
        $('.plp-actions__container').toggleClass('set--refinements-active');
        $('.plp-refinements-container').toggleClass('set--refinements-active');
        if(filter){
            $('.plp-actions__toggle-refine__text').text('Show Filters');
        }else{
            $('.plp-actions__toggle-refine__text').text('Hide Filters');
        }
    })

    $(window).scroll(function() {
        if ($(window).scrollTop() > $('.nav-main-title-shoes').offset().top){
            $('.plp-actions-control').css('top','60px');
            $('.plp-actions-control').addClass("active-fixed");
            //$('.plp-content').addClass('plp-content--sticky');
        }else {
            $('.plp-actions-control').css('top','unset');
            $('.plp-actions-control').removeClass("active-fixed");
            //$('.plp-content').removeClass('plp-content--sticky');
        }
    });

   //function updateMenuHeight() {
   //    var windowHeight = $(window).height();
   //    var refinementsHeight = windowHeight - $('.plp-content').offset().top;
   //    $('.plp-content').css('--filter-nav-height',refinementsHeight);
   //    $('.plp-refinements-container').css('height',refinementsHeight);
   //}

   //var footerHeight; // Biến để lưu chiều dài thanh footer
   //var footerVisible = false; // Biến để kiểm tra xem thanh footer đã xuất hiện chưa

   //// Hàm để cập nhật chiều dài thanh footer
   //function updateFooterHeight() {
   //    if (!footerVisible) {
   //        // Kiểm tra xem thanh footer đã xuất hiện hay chưa
   //        var footerOffset = $('.footer').offset().top;
   //        var windowHeight = $(window).height();
   //        if (footerOffset <= windowHeight) {
   //            // Thanh footer đã xuất hiện
   //            footerHeight = windowHeight - footerOffset;
   //            footerVisible = true;
   //        }
   //    }
   //    $('.plp-content--sticky .plp-refinements-container.set--refinements-active').css('bottom',footerHeight);
   //}


   //// Gọi hàm cập nhật ban đầu
   //updateFooterHeight();
   //// Gọi hàm cập nhật khi tải trang và khi thay đổi kích thước cửa sổ
   //updateMenuHeight();
   //$(window).on('resize', function () {
   //    updateMenuHeight();
   //    updateFooterHeight();
   //});
   //
   //// Gọi hàm cập nhật khi cuộn trang
   //$(window).on('scroll', function () {
   //    updateMenuHeight();
   //    updateFooterHeight();
   //});


    $('.swatch swatch--tile').click(function(){
        $(this).addClass('selected');
       // $(this).siblings().removeClass('selected');
    })




});

