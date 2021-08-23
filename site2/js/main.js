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
const menuDemo = document.querySelector('.header__link-demo-mobile');
const menuLogin = document.querySelector('.header__link-login-mobile');
const header = document.querySelector('.header');
const menuList = document.querySelector('.menu__list');
if (iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuDemo.classList.toggle('_active');
        menuLogin.classList.toggle('_active');
        header.classList.toggle('_active');
        menuList.classList.toggle('_active');
    });
}

/* 
$(document).ready(function() {
    function checkWidth() {
      var windowWidth = $('body').innerWidth(),
          elem = $(".swiper__item-slider"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                      // страницу для поиска нужного элемента
      if(windowWidth < 1200){
        elem.addClass('slid__active');
      }
      else{
        elem.removeClass('slid__active');
      }
    }
  
    checkWidth(); // проверит при загрузке страницы
  
    $(window).resize(function(){
      checkWidth(); // проверит при изменении размера окна клиента
    });
}); */

//tabs-----------------------------------------
document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
    item.addEventListener('click',function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs-triggers__item').forEach(
            (child) => child.classList.remove('tabs-triggers__item--active')
        );
        document.querySelectorAll('.tabs-content__item').forEach(
            (child) => child.classList.remove('tabs-content__item--active')
        );
        
        item.classList.add('tabs-triggers__item--active');
        document.getElementById(id).classList.add('tabs-content__item--active');
    })
);

$(window).scroll(function(){
    if ($(window).scrollTop() > 65) {
        $('.header').addClass('scroll');
    }
    else {
        $('.header').removeClass('scroll')
    }

});
document.querySelector('.tabs-triggers__item').click();





$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        adaptiveHeight:true,
        variableWidth:true,
        infinite:false,
        dots:false,
        appendArrows:$('.slick__button'),
        mobileFirst: false,
        responsive: [
           {
              breakpoint: 1557,
              settings: {
                slidesToShow:3,
              } 
           },
           {
            breakpoint: 1073,
            settings: {
              slidesToShow:2,
            } 
         },
         {
            breakpoint: 790,
            settings: {
              slidesToShow:1,
            } 
         }
        ]
        
    });
    $('.slid__active').slick({
        slidesToShow:1,
        slidesToScroll:1,
        adaptiveHeight:true,
        variableWidth:true,
        infinite:false,
        dots:false,
        appendArrows:$('.slick__button-slid'),
        /* appendDots:$('.slick__dots') */
        mobileFirst: true,
     responsive: [
        {
           breakpoint: 1200,
           settings: "unslick"
        }
     ]

    });
    

});





//анимация при скролле
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight /animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight /animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }


    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top:rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300);
    
}




  










$(window).scroll(function() {
    
    if ( $(window).width() > 1100 ) {

        var st = $(this).scrollTop() /24;
        var st = st-340
        $(".integrations__item-paralax").css({
            "transform" : "translate3d(0px, " +st  + "%, .01px)",
            "-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
        });
    }

    else{
        var st = $(this).scrollTop() /60;
        var st = st-147
        $(".integrations__item-paralax").css({
            "transform" : "translate3d( " + st  + "%, 0px,.01px)",
            "-webkit-transform" : "translate3d(" + st  + "%, 0px, .01px)"
        }); 
    }
});










      




  
/*  $(window).scroll(function() {

	var st = $(this).scrollTop() /24;
    var st = st-340
	$(".integrations__item-paralax").css({
		"transform" : "translate3d(0px, " +st  + "%, .01px)",
		"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
	});

});


$(window).resize(function() {
    if ( $(window).width() < 768 ) {
      
        
      
      
    }
  }); */












