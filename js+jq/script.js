$(document).ready(function() {
    $(".header__burger__menu").click(function() {
        $(".header__burger__menu,.menu__list__items__wrapper,.menu__list__items").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

swiper = new Swiper('.swiper', {
    
    autoplay: {
        delay: 0,
    },

    freeMode: true,
    speed: 5000,
    loop: true,
    slidesPerView: 2,

    breakpoints: {
        375: {
            slidesPerView: 2.5,
        },
        550: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4.5,
        },
    },
});

swiper = new Swiper('.swiper__II', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,

    breakpoints: {
        320: {
            centeredSlides: true,
            slidesPerView: 1,
        },
        768: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        1024: {
            centeredSlides: true,
            slidesPerView: 3,
        },
    },
});

swiper = new Swiper('.swiper__III', {

    pagination: {
        el: '.swiper-pagination',
        
        type: 'bullets',
        clickable: true,
    },

    loop: true,
    spaceBetween: 20,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
    
});

$(document).ready(function() {
    $('.block__nine__subtitle').click(function(event) {
        if($('.block__nine__items').hasClass('__one')) {
           $('.block__nine__subtitle').not($(this)).removeClass('active');
           $('.block__nine__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function() {
    $(".block__nine__more__questions").click(function() {
        $(".block__nine__item.__hide").toggleClass("__active");
    });
});

document.querySelector(".block__nine__more__questions").addEventListener("click", toggleText);
function toggleText() {
    var x = document.querySelector(".block__nine__more__questions");
    if (x.innerHTML==="Less Questions") {
        x.innerHTML="More Questions";
    } else {
        x.innerHTML="Less Questions";
    }
}

$(document).ready(function() {
    $('.top__developers__title, .top__requests__title').click(function(event) {
        if (document.documentElement.clientWidth < 769) {
            $(this).toggleClass('active').next().slideToggle(300);
        }
    });
});