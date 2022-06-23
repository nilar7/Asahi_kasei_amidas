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
     $('.section-top-keyvisual').animate({'opacity':'1'},500);
});
