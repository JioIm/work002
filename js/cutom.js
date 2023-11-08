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

    $('.main_product_slide').slick({
        slidesToShow: 5,
        arrows: false,
        dots: true
    });

    $('.MainProduct .arrows .left').on('click', function(){
        $('.main_product_slide').slick('slickPrev');
    });
    $('.MainProduct .arrows .right').on('click', function(){
        $('.main_product_slide').slick('slickNext');
    });
})