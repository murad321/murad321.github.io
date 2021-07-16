$(function(){

  $('.top__slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      fade: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false
          }
        },
      ]
  });

  $('.reviews__slider').slick({
    arrows:false,
    dots:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow:3,
        }
      }, 
      {
        breakpoint: 840,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow:1,
        }
      },
    ]
  });


});

/* ***************************************** */
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
if (iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
