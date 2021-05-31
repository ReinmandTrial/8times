
new Swiper('.swiper-container', {
    // навигация, кнопки
    navigation: {
        nextEl: '.products-slider__button_next',
        prevEl: '.products-slider__button_prev',
    },
    // модификации 
    grabCursor: true, //  курсор-рука
    autoHeight: true, // автовысота
    slidesPerView: 'auto', //кол-во показываемых слайдов
    watchOverflow: true, //если слайдов мало, - слайдер отключается
    spaceBetween: 20, // отступы между слайдами
    loop: true, // бесконечный слайдер
    slideToClickedSlide: false,
    breakpoints: {
        0: {
            spaceBetween: 4,
        },
        768: {
            spaceBetween: 20,
            slidesPerView: '4',
        },
        1200: {
            slidesPerView: '5',
        },
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

//burger menu end\

//регистрация попап
$('.btn-reg').on('click', function () {
    $('.page-reg').fadeIn();
})
$('.reg__form>.close').on('click', function () {
    $(this).closest('.page-reg').fadeOut();
})
//регистрация попап конец