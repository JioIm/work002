$(function (){
   $(window).on('scroll', function (){
         const scrollHeight = $(window).scrollTop();
         if(scrollHeight > 0) {
         $('.Header').addClass('on')
         }else {
         $('.Header').removeClass('on')
         }
    })
    $('.VisualSlide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    // $('.main_product_slide').slick({
    //     slidesToShow: 6,
    //     arrows: false,
    //     dots: false
    // });

    $('.left_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slide',
    });
    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 6,
    });

    $('.MainProduct .inner .arrows .left').on('click', function(){
        $('.left_slide').slick('slickPrev');
    });
    $('.MainProduct .arrows .right').on('click', function(){
        $('.left_slide').slick('slickNext');
    });
})