const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    slidesPerView: 2,
    // spaceBetween: 300,
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.castom-button-next',
        prevEl: '.castom-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    slidesPerView: 4,
    breakpoints: {
        // when window width is >= 320px
        1030: {
            slidesPerView: 4,
        },
        620: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        }
    }
});
