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