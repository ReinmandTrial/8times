const { default: Swiper } = require("swiper");

$(function () {

});
new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.products-row__button',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 5,
});