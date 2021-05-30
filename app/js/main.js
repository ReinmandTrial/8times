const { default: Swiper } = require("swiper");

$(function () {

});
new Swiper('.container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 5,
});