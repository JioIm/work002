$(function (){
    $('.VisualSlide').slick({
        arrows: false,
        autoplay: true,
        dots: false,
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