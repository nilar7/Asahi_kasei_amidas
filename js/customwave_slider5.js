var wavetype = {
    leftwave: ["OL-waves", "TL-waves", "TRL-waves"],
    rightwave: ["OR-waves", "TR-waves", "TRR-waves"],
};
var lwave = [];
var rwave = [];
for (let i of wavetype.leftwave) {
    var leftwave = new SineWaves({
        el: document.getElementById(i),

        speed: 2,

        ease: "SineInOut",

        wavesWidth: "90%",

        waves: [
            {
                timeModifier: 1.3,
                lineWidth: 3.5,
                amplitude: 70,
                wavelength: 100,
            },
        ],

        // Called on window resize
        resizeEvent: function() {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0, "rgba(253, 244, 211, 0.75)");
            gradient.addColorStop(0.4, "rgba(101, 195, 236, 1");

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
    lwave.push(leftwave);
}

for (let i of wavetype.rightwave) {
    var rightwave = new SineWaves({
        el: document.getElementById(i),

        speed: 2,

        ease: "SineInOut",

        wavesWidth: "90%",

        waves: [
            {
                timeModifier: 1.8,
                lineWidth: 3.5,
                amplitude: 70,//1000
                wavelength: -100,
            },
        ],

        // Called on window resize
        resizeEvent: function() {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            // gradient.addColorStop(0, "rgba(238, 133, 58, 0.75)");
            // gradient.addColorStop(0.5, "rgba(49, 177, 235, 0.75)");
            // gradient.addColorStop(1, "rgba(248, 197, 37, 0.6");
            
            gradient.addColorStop(0.2, "rgba(245, 172, 29, 1)");
            gradient.addColorStop(0.4, "rgba(38, 166, 189, 1)");
            gradient.addColorStop(0.3, "rgba(160, 179,78,1)");
            gradient.addColorStop(0.2, "rgba(245, 172, 29, 1)");
            gradient.addColorStop(0, "rgba(234, 103, 37, 1)");


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
    rwave.push(rightwave);
}

$(window).resize(function() {
    Linewidth();
});

function Linewidth() {
    var wavetype = lwave.concat(rwave);
    if ($(window).width() < 768) {
        wavetype.map(function(wave) {
            wave.waves[0].lineWidth = 1.8;
        });
    } else {
        wavetype.map(function(wave) {
            wave.waves[0].lineWidth = 3.5;
        });
    }
}
Linewidth();



    $(document).ready(function() {
        $('.m_img.one,.animate_gorup.one').removeClass('active');
        $('.m_img.one,.animate_gorup.one').addClass('factive');
     $('.section-top-keyvisual').animate({'opacity':'1'},500);
     setTimeout(() => {
        $('.m_img.one,.animate_gorup.one').addClass('active');
        $('.m_img.one,.animate_gorup.one').removeClass('factive');
      }, 8000);
     // $(".keyvisual-image").animate({transform: "scale(1)"}, 9000, 'linear');

     // $(".keyvisual-image").addClass("slide-animation");
     // setTimeout(() => {
     //    $(".keyvisual-image").removeClass("slide-animation");
     //    // alert(1);
     //  }, 9000);

    //  $(".js-keyvisual-top").on('beforeChange', function() {
    //     $(".section-top-keyvisual .animate_gorup,.section-top-keyvisual .m_img").removeClass("active");
        
    //     var dataId = $('.slick-current').attr("data-slick-index");    
    //     if(dataId == 0){
    //         $(".section-top-keyvisual .animate_gorup.one,.section-top-keyvisual .m_img.one").addClass("active");
            
    //     }
    //     if(dataId == 1){
    //         $(".section-top-keyvisual .animate_gorup.two,.section-top-keyvisual .m_img.two").addClass("active");
           
    //     }
    //     if(dataId == 2){
    //         $(".section-top-keyvisual .animate_gorup.three,.section-top-keyvisual .m_img.three").addClass("active");
            
    //     }
    // });


    // var images = ["img_02.png", "img_03.png", "img_01.png"],
    //     index = 0, // starting index
    //     maxImages = images.length - 1;
    // var timer = setInterval(function() {
    //     var currentImage = images[index];
    //     index = index == maxImages ? 0 : ++index;
    //     //console.log(currentImage);
    //     $(".section-top-keyvisual .animate_gorup").removeClass("active");
    //     $(".section-top-keyvisual .m_img").removeClass("active");
    //     if (currentImage == "img_02.png") {
    //         $(".section-top-keyvisual .animate_gorup.two").addClass("active");
    //         $(".section-top-keyvisual .m_img.two").addClass("active");
    //     } else if (currentImage == "img_03.png") {
    //         $(".section-top-keyvisual .animate_gorup.three").addClass("active");
    //         $(".section-top-keyvisual .m_img.three").addClass("active");
    //     } else {
    //         $(".section-top-keyvisual .animate_gorup.one").addClass("active");
    //         $(".section-top-keyvisual .m_img.one").addClass("active");
    //     }

    //     // $(".m_img img").fadeOut(900, function() {
    //     //     $(".m_img img").attr("src", "../img/top/" + currentImage);
    //     //     $(".m_img img").fadeIn(900);
    //     // });
    // }, 7000);



});
