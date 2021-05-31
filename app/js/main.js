$($('.page-main__container').find('.products-row__container')).each(function(){
    new Swiper('.swiper-container', {
    // навигация, кнопки
    navigation: {
        nextEl: '.products-row__button_next',
        prevEl: '.products-row__button_prev',
    },
    // модификации 
    grabCursor: true, //  курсор-рука
    autoHeight: true, // автовысота
    slidesPerView: 'auto', //кол-во показываемых слайдов
    watchOverflow: true, //если слайдов мало, - слайдер отключается
    spaceBetween: 20, // отступы между слайдами
    loop: true, // бесконечный слайдер
    slideToClickedSlide: false,
});
})
// new Swiper('.swiper-container', {
//     // навигация, кнопки
//     navigation: {
//         nextEl: '.products-row__button_next',
//         prevEl: '.products-row__button_prev',
//     },
//     // модификации 
//     grabCursor: true, //  курсор-рука
//     autoHeight: true, // автовысота
//     slidesPerView: 'auto', //кол-во показываемых слайдов
//     watchOverflow: true, //если слайдов мало, - слайдер отключается
//     spaceBetween: 20, // отступы между слайдами
//     loop: true, // бесконечный слайдер
//     slideToClickedSlide: false,
// });
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
$('.btn-burger').on('click',function(){
    $(this).toggleClass('icon-burger');
    $(this).toggleClass('icon-close');
    $('.header').toggleClass('open');
    if($(this).hasClass('icon-close')){
        $('.burger').show();

    }else{
        $('.burger').hide();
    }
})
//burger menu end\

//регистрация попап
$('.btn-reg').on('click',function(){
    $('.page-main').removeClass('login-open');
    $('.page-login').hide();
    $('.page-reg').show();
    
})
$('.reg__form>.close').on('click',function(){
    $(this).closest('.page-reg').hide();
})
//регистрация попап конец
//Войти попап 
$('.btn-login').on('click',function(){ 
    $('.page-main').addClass('login-open');
    $('.page-reg').hide();
    $('.page-login').show();
    $('.burger').hide();
    $('.btn-burger').removeClass('icon-close').addClass('icon-burger');
    $('.header').removeClass('open');
})
// Войти попап конец 