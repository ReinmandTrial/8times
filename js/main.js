$(document).ready(function(){
  
  $('.responsive').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

let mains = [ ...document.querySelectorAll(".header_mb") ];
mains.forEach(main => {
    let btn = main.querySelector(".header_mb_btn"),
         btns = main.querySelector(".header_mb_btns");
         search = main.querySelector(".header_mb_search");
         toggle = main.querySelector(".header_mb_toggle");
    btn.addEventListener("click", () => btns.classList.toggle("d-none"));
    btn.addEventListener("click", () => toggle.classList.toggle("border-bottom"));
    btn.addEventListener("click", () => search.classList.toggle("d-none"));
});
// popup
$('.popup-exit').on('click',function(){
  $(this).closest('.popup').removeClass('open');
})

$('.btn-entrance').on('click',function(){
  $('.entrance').addClass('open');
  $('.toggler').prop('checked',false);
  $('.main, .catalog, .2sec').addClass('d-none');
});

$('.btn-registrations').on('click',function(){
  $('.registrations').addClass('open');
  $('.toggler').prop('checked',false);
});

//popup end
// Выбор цвета 
$('.product-color__body').on('click',function(){
  var btn = $(this);
  var items = btn.closest('.product-color').find('.product-color__body');
  $(items).each(function(){
    $(this).removeClass('active');
  });
  btn.addClass('active');
})
//Конец выбора цвета
//select
  $('.select-header').on('click',function(){
    $(this).next().slideToggle('slow');
    $(this).toggleClass('open');
  });
  $('.select-item').on('click',function(){
    var select = $(this).closest('.select');
    var headerText = select.find('.select-header__title');
    var razmer = $(this).find('.select-item__size').text();
    $(this).closest('.select-body').slideToggle('slow');
    headerText.text('Размер ' + razmer);
    select.find('.select-header').removeClass('open')
    
  })
//end select

//описание продукта
$('.product-info__header').on('click',function(){
  $(this).next().slideToggle('slow');
  $(this).toggleClass('open');
})
//конец описания продукта 
// slider-dost
$('.slider-dots__item').on('click',function(){
  var items = $(this).closest('.slider-dots').find('.slider-dots__item');
  $(items).each(function(){
    $(this).removeClass('active');
  })
  $(this).addClass('active');
})
//slider-dots end