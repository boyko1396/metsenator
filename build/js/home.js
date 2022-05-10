$(document).ready(function() {

    const swiper = new Swiper('.home-projects-slider', {
        slidesPerView: 'auto',
        spaceBetween: 23,
        loop: false,
        pagination: {
            el: '.home-projects-pagination'
        },
        navigation: {
            nextEl: ".home-projects-button-next",
            prevEl: ".home-projects-button-prev",
        },

        breakpoints: {

            0: {
                slidesPerView: 'auto',
                loop: false,
                spaceBetween: 8,
                pagination: false,
                navigation: false
            },

            769: {
                spaceBetween: 23
            },

            1181: {
                slidesPerView: 3 
            },

            1281: {
                navigation: {
                    nextEl: ".home-projects-button-next",
                    prevEl: ".home-projects-button-prev",
                },
                pagination: {
                    el: '.home-projects-pagination',
                    type: 'bullets'
                } 
            }
        }
    })
})