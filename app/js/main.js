// const { default: Swiper } = require("swiper");

// $(function () {

// });
new Swiper('.swiper-slide', {
    navigation: {
        nextE: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: auto,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
});
//выбор цвета
$('.page-product__color').on('click', function () {
    var item = $(this).closest('.page-product__color-change-box').find('.page-product__color');
    $(item).each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
})
//выбор цвета конец
//выподалка размеров
$('.page-product__size-header').on('click', function () {
    $(this).next().slideToggle('slow');
})

$('.page-product__size-link').on('click', function () {
    var size = $(this).find('.page-product__size-num').text();
    $(this).closest('.page-product__size-box').find('.page-product__size-title').text('Размер ' + size);
    $(this).closest('.page-product__size-body').slideToggle('slow');
})
//выподалка размеров конец
//burger menu 

//burger menu end