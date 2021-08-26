$(function(){

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  });


    $('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 0,
        autoplay :true
    },

});

 $('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  asNavFor: '.heroes__slider-text',
  prevArrow:'<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
  nextArrow:'<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows:false,
      }
    },
  ]
});
$('.heroes__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-img',
  fade: true,
  arrows:false,
});

});



//меню бургер==================================
"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iphone|ipad|ipod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
        
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0) {
       for (let index = 0; index < menuArrows.length; index++) {
           const menuArrow = menuArrows[index];
           menuArrow.addEventListener("click", function(e) {
            menuArrow.parentElement.classList.toggle('_active');
           });
        
       }
    }

}   else{
    document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLogoContainer = document.querySelector('.menu-logo__container');
if (iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuLogoContainer.classList.toggle('_active');
    });
}



