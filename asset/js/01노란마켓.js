// ------------------헤더영역

$(document).ready(function () {
    let $btn1 = $(".hambuger-btn");
    let $kvMenu = $(".header-nav");
    let $removeBtn1 = $(".close-btn");

    $btn1.on("click", function () {
        $kvMenu.addClass("on");
        $btn1.addClass("hide");
        $removeBtn1.addClass("show");
    });

    $removeBtn1.on("click", function () {
        $kvMenu.removeClass("on");
        $btn1.removeClass("hide");
        $removeBtn1.removeClass("show");
    });
});


// -----------kv 슬라이드 효과

let swiper = new Swiper(".visual-swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: true
});

// ------------sec02 슬라이드 효과

$(document).ready(function () {
    let swiper2 = new Swiper(".swiper2", {
        wrapperClass: "swiper-wrapper2",
        slideClass: "swiper-slide2",
        slidesPerView: 3,
        watchSlidesProgress: true,
    });

    swiper2.on("slideChange", function () {
        let $progressbar = $(".swiper-pagination2-fill");
        let totalSlides = swiper2.slides.length;
        let currentIndex = swiper2.activeIndex;


        let barWidth = 200;
        let fillWidth = 2;
        let maxMove = barWidth - fillWidth;

        // 슬라이드 개수 기준으로 등분 이동
        let moveX = (currentIndex / (totalSlides - 0.5)) * maxMove;

        $progressbar.stop().animate({ left: moveX + "px" }, 300);

    });





    //-------------------------sec04 슬라이드 효과

    let swiper3 = new Swiper('.swiper3', {
        slidesPerView: 4,
        direction: getDirection(),
        wrapperClass: 'swiper-wrapper3',
        slideClass: 'swiper-slide3',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        on: {
            resize: function () {
                swiper3.changeDirection(getDirection());
            },
            loop: true,
        },
    });

    function getDirection() {
        // var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
    }

    //    ----------------SEC04 버튼
    $(".swiper-button-next, .swiper-button-prev")
        .on("click", function () {
            let btn04 = $(this);

            btn04.css("color", "#ffc800");
            setTimeout(function () {
                $(btn04).css("color", "#717071");
            }, 100);
        });


    // ----------------sec05 슬라이드 효과


    let swiper4 = new Swiper(".swiper4", {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        speed: 2000,
        loopAdditionalSlides: 2,
        observer: true,
        observeParents: true,
        mousewheel: false,
        simulateTouch: false,
        pauseOnMouseEnter: false,
        allowTouchMove: false,
        grabCursor: false,

        wrapperClass: "swiper-wrapper4",
        slideClass: "swiper-slide4",
    });
});



