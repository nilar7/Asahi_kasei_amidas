var waves = new SineWaves({
    el: document.getElementById("OL-waves"),

    speed: 2,

    ease: "SineInOut",

    wavesWidth: "100%",

    waves: [
        {
            timeModifier: 1.3,
            lineWidth: 3.5,
            amplitude: 120,
            wavelength: 100,
        },
    ],

    // Called on window resize
    resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);

        gradient.addColorStop(0, "rgba(238, 133, 58, 0.75)");
        gradient.addColorStop(0.5, "rgba(49, 177, 235, 0.75)");
        gradient.addColorStop(1, "rgba(248, 197, 37, 0.2");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
            this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
    },
});

var waves = new SineWaves({
    el: document.getElementById("OR-waves"),

    speed: 2,

    ease: "SineInOut",

    wavesWidth: "90%",

    waves: [
        {
            timeModifier: 1.3,
            lineWidth: 3.5,
            amplitude: 70,
            wavelength: -100,
        },
    ],

    // Called on window resize
    resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, "rgba(94, 194, 240, 0.1)");
        gradient.addColorStop(0.5, "rgba(253, 244, 211, 0.75)");
        gradient.addColorStop(1, "rgba(249, 206, 68, 1");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
            this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
    },
});

var waves = new SineWaves({
    el: document.getElementById("TL-waves"),

    speed: 2,

    ease: "SineInOut",

    wavesWidth: "100%",

    waves: [
        {
            timeModifier: 1.3,
            lineWidth: 3.5,
            amplitude: 120,
            wavelength: 100,
        },
    ],

    // Called on window resize
    resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);

        gradient.addColorStop(0, "rgba(238, 133, 58, 0.75)");
        gradient.addColorStop(0.5, "rgba(49, 177, 235, 0.75)");
        gradient.addColorStop(1, "rgba(248, 197, 37, 0.2");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
            this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
    },
});

var waves = new SineWaves({
    el: document.getElementById("TR-waves"),

    speed: 2,

    ease: "SineInOut",

    wavesWidth: "90%",

    waves: [
        {
            timeModifier: 1.3,
            lineWidth: 3.5,
            amplitude: 70,
            wavelength: -100,
        },
    ],

    // Called on window resize
    resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, "rgba(94, 194, 240, 0.1)");
        gradient.addColorStop(0.5, "rgba(253, 244, 211, 0.75)");
        gradient.addColorStop(1, "rgba(249, 206, 68, 1");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
            this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
    },
});

var waves = new SineWaves({
    el: document.getElementById("TRL-waves"),

    speed: 2,

    ease: "SineInOut",

    wavesWidth: "100%",

    waves: [
        {
            timeModifier: 1.3,
            lineWidth: 3.5,
            amplitude: 120,
            wavelength: 100,
        },
    ],

    // Called on window resize
    resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);

        gradient.addColorStop(0, "rgba(238, 133, 58, 0.75)");
        gradient.addColorStop(0.5, "rgba(49, 177, 235, 0.75)");
        gradient.addColorStop(1, "rgba(248, 197, 37, 0.2");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
            this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
    },
});

var waves = new SineWaves({
    el: document.getElementById("TRR-waves"),

    speed: 2,

    ease: "SineInOut",

    wavesWidth: "90%",

    waves: [
        {
            timeModifier: 1.3,
            lineWidth: 3.5,
            amplitude: 70,
            wavelength: -100,
        },
    ],

    // Called on window resize
    resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, "rgba(94, 194, 240, 0.1)");
        gradient.addColorStop(0.5, "rgba(253, 244, 211, 0.75)");
        gradient.addColorStop(1, "rgba(249, 206, 68, 1");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
            this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
    },
});

$(document).ready(function() {
    var images = ["img_02.png", "img_03.png", "img_01.png"],
        index = 0, // starting index
        maxImages = images.length - 1;
    var timer = setInterval(function() {
        var currentImage = images[index];
        index = index == maxImages ? 0 : ++index;
        // console.log(currentImage);
        $(".section-top-keyvisual .animate_gorup").removeClass("active");
        if (currentImage == "img_02.png") {
            $(".section-top-keyvisual .animate_gorup.two").addClass("active");
        } else if (currentImage == "img_03.png") {
            $(".section-top-keyvisual .animate_gorup.three").addClass("active");
        } else {
            $(".section-top-keyvisual .animate_gorup.one").addClass("active");
        }

        $(".m_img img").fadeOut(500, function() {
            $(".m_img img").attr("src", "../img/top/" + currentImage);
            $(".m_img img").fadeIn(500);
        });
    }, 5500);
});
