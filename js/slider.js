document.addEventListener("DOMContentLoaded", function() {}, false);

window.addEventListener(
    "load",
    function() {
        slider_kv.init();
        setInterval(myTimer, 2000);

        function myTimer() {
            $(".animate_gorup,.character_group").css("opacity", 1);
        }
    },
    false
);

var slider_kv = {
    init: function() {
        let space = 15;
        let speed = 1000;
        let delay = 5500 - speed;
        let is_slideChange = false;
        var kvInner = document.getElementById("kv");

        if (UA.device == "other") {
            space = 30;
        }

        const pagination = document.getElementsByClassName("swiper-pagination");
        const nextEl = document.getElementsByClassName("swiper-button-next");
        const prevEl = document.getElementsByClassName("swiper-button-prev");

        const tensuifukushijigyokai = new Swiper(".kv .swiper-container", {
            direction: "horizontal",
            slidesPerView: "auto",
            loop: true,
            speed: speed,
            spaceBetween: space,
            centeredSlides: true,
            touchMoveStopPropagation: false,
            virtualTranslate: false,

            autoplay: {
                delay: delay,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },

            pagination: {
                el: pagination,
                clickable: true,
            },

            on: {
                init: function() {
                    this.el.classList.add("init");
                },

                slideChange: function() {
                    kvInner.classList.add("slideChanges");
                },

                transitionStart: function() {
                    kvInner.classList.add("transitionStart");
                    kvInner.classList.remove("transitionEnd");
                },

                transitionEnd: function() {
                    kvInner.classList.add("transitionEnd");
                    kvInner.classList.remove("touch");
                    kvInner.classList.remove("slideChanges");
                    kvInner.classList.remove("transitionStart");
                    kvInner.classList.remove("touchMove");
                },

                touchStart: function() {
                    kvInner.classList.add("touch");
                },

                touchEnd: function() {
                    kvInner.classList.remove("touch");
                },

                sliderMove: function() {
                    kvInner.classList.add("touch");
                    kvInner.classList.add("touchMove");
                },
            },
        });

        if (UA.browser == "msie") {
            const bgi = kvInner.getElementsByClassName("kv_bg_inner");
            for (let i = 0; i < bgi.length; i++) {
                let src = bgi[i]
                    .getElementsByTagName("img")[0]
                    .getAttribute("src");
                bgi[i].style.backgroundImage = "url(" + src + ")";
            }
        }
    },
};
