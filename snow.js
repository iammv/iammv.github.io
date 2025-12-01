
var embedimSnow = document.getElementById("embedim--snow");

if (!embedimSnow) {

    let embRand2 = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let embRandColor2 = function() {
        var items = [
            "radial-gradient(circle at top left,#dcf2fd,#60b4f2)",
            "#dbf2fd",
            "#d8f8ff",
            "#b8ddfa"
        ];
        return items[Math.floor(Math.random() * items.length)];
    };

    var embRand = embRand2,
        embRandColor = embRandColor2;

    var embCSS = `
        .embedim-snow {
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            margin-top: -10px;
        }
    `;

    var embHTML = "";

    for (let i = 1; i < 200; i++) {

        embHTML += `<i class="embedim-snow"></i>`;

        var rndX = embRand2(0, 1e6) * 1e-4;
        var rndO = embRand2(-1e5, 1e5) * 1e-4;
        var rndT = (embRand2(3, 8) * 10).toFixed(2);
        var rndS = (embRand2(0, 1e4) * 1e-4).toFixed(2);
        var rndOpacity = (embRand2(1, 1e4) * 1e-4).toFixed(2);
        var animTime = embRand2(10, 30);
        var animDelay = -embRand2(0, 30);

        embCSS += `
            .embedim-snow:nth-child(${i}) {
                background: ${embRandColor()};
                opacity: ${rndOpacity};
                transform: translate(${rndX.toFixed(2)}vw, -10px) scale(${rndS});
                animation: fall-${i} ${animTime}s ${animDelay}s linear infinite;
            }
            @keyframes fall-${i} {
                ${rndT}% {
                    transform: translate(${(rndX + rndO).toFixed(2)}vw, ${rndT}vh) scale(${rndS});
                }
                to {
                    transform: translate(${(rndX + rndO / 2).toFixed(2)}vw, 105vh) scale(${rndS});
                }
            }
        `;
    }

    embedimSnow = document.createElement("div");
    embedimSnow.id = "embedim--snow";

    embedimSnow.innerHTML = `
        <style>
            #embedim--snow {
                position: absolute; /* scrolls with page now */
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 9999999;
                pointer-events: none;
            }
            ${embCSS}
        </style>
        ${embHTML}
    `;

    document.body.appendChild(embedimSnow);
}
