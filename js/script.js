const video = document.getElementById("video");
const barra = document.getElementById("barra");


function secondsToString(seconds) {

    var d = new Date(seconds * 1000);
    var minuto = (d.getMinutes() < 9) ? "0" + d.getMinutes() : d.getMinutes();
    var segundo = (d.getSeconds() < 9) ? "0" + d.getSeconds() : d.getSeconds();

    return `${minuto}:${segundo}`
};

function update() {

    let barra1 = (100 * video.currentTime) / video.duration;

    document.getElementById("progreso").value = `${barra1}`;
    document.getElementById("barra-progreso").style.width = `${barra1}%`;

    document.querySelector(".progressAreaTime").innerHTML = `${secondsToString(video.currentTime)} / ${secondsToString(video.duration)}`;

};

function seguir_barra(e) {

    let pros = document.getElementById("barra").clientWidth + 2;
    video.currentTime = (e.offsetX / pros) * video.duration;

};

video.addEventListener("click", function () {
    if (video.paused) {

        document.getElementById("button-1").classList.add("none-2")
        document.getElementById("button-1-1").classList.add("none-3")
        return video.play();
    } else {
        document.getElementById("button-1").classList.remove("none-2")
        document.getElementById("button-1-1").classList.remove("none-3")
        return video.pause();
    }
});

barra.addEventListener("click", function (e) {

    video.currentTime = Math.floor(video.duration * ((100 * e.offsetX) / 100 / document.getElementById(`progreso`).offsetWidth))
});

document.getElementById("button-1").addEventListener("click", function () {

    document.getElementById("button-1").classList.add("none-2")
    document.getElementById("button-1-1").classList.add("none-3")
    return video.play();
});

document.getElementById("button-1-1").addEventListener("click", function () {

    document.getElementById("button-1").classList.remove("none-2")
    document.getElementById("button-1-1").classList.remove("none-3")
    return video.pause();
});

document.getElementById("button-2").addEventListener("click", function () {
    video.currentTime += 5;

    document.getElementById("right").classList.add("none-3")
    setTimeout(function () {
        document.getElementById("right").classList.remove("none-3")
    }, 500)

});

document.getElementById("button-2-1").addEventListener("click", function () {
    video.currentTime -= 5;

    document.getElementById("left").classList.add("none-3")
    setTimeout(function () {
        document.getElementById("left").classList.remove("none-3")

    }, 500)
});

document.getElementById("barra-1").addEventListener("click", function () {

    let volumen = document.querySelector(".progress-area").value;

    //console.log(volumen)
    // console.log(Math.floor(volumen * 1) / 100)


    video.volume = Math.floor(volumen * 1) / 100;

    document.getElementById("barra-progreso-1").style.width = `${volumen}%`;

    if (video.volume >= 1) {

        document.getElementById("button-3").style.display = "inline";
        document.getElementById("button-3-1").classList.remove("none-3")
        document.getElementById("button-3-2").classList.remove("none-3")
        document.getElementById("button-3-3").classList.remove("none-3")

    } else if (video.volume == 0) {

        document.getElementById("button-3").style.display = "none";
        document.getElementById("button-3-1").classList.remove("none-3")
        document.getElementById("button-3-2").classList.add("none-3")
        document.getElementById("button-3-3").classList.remove("none-3")

    } else if (video.volume <= 0.3) {

        document.getElementById("button-3").style.display = "none";
        document.getElementById("button-3-1").classList.remove("none-3")
        document.getElementById("button-3-2").classList.remove("none-3")
        document.getElementById("button-3-3").classList.add("none-3")

    } else if (video.volume <= 0.6) {

        document.getElementById("button-3").style.display = "none";
        document.getElementById("button-3-1").classList.add("none-3")
        document.getElementById("button-3-2").classList.remove("none-3")
        document.getElementById("button-3-3").classList.remove("none-3")

    }


});

// document.getElementById("button-5").addEventListener("click", function () {

//     if (video.requestFullscreen) {

//         // document.querySelector(".container-2").classList.add("fullscreen")
//         video.requestFullscreen();

//     }

//     else if (video.webkitRequestFullscreen) {

//         elem.webkitRequestFullscreen();

//     } else if (video.msRequestFullscreen) {

//         video.msRequestFullscreen();
//     }
// });

document.getElementById("barra").addEventListener("pointerdown", (e) => {

    document.getElementById("barra").setPointerCapture(e.pointerId);

    document.getElementById("barra").addEventListener("pointermove", seguir_barra);

    document.getElementById("barra").addEventListener("pointerup", () => {

        document.getElementById("barra").removeEventListener("pointermove", seguir_barra);

    })

});

document.getElementById("button-4").addEventListener("click", function () {
    let velocidad = document.querySelector(".velocidad");

    if (!velocidad.classList.contains("none-2")) {

        velocidad.classList.add("none-2");

    } else {
        velocidad.classList.remove("none-2");
    }

});


let uno = document.querySelector("#velocidad-1")
let segundo = document.querySelector("#velocidad-2")
let tercero = document.querySelector("#velocidad-3")
let cuarto = document.querySelector("#velocidad-4")
let quinto = document.querySelector("#velocidad-5")
let sexto = document.querySelector("#velocidad-6")
let septimo = document.querySelector("#velocidad-7")
let noveno = document.querySelector("#velocidad-8")

uno.addEventListener("click", function () {

    if(segundo.classList.contains("active")) segundo.classList.remove("active")
    if(tercero.classList.contains("active")) tercero.classList.remove("active")
    if(cuarto.classList.contains("active")) cuarto.classList.remove("active")
    if(quinto.classList.contains("active")) quinto.classList.remove("active")
    if(sexto.classList.contains("active")) sexto.classList.remove("active")
    if(septimo.classList.contains("active")) septimo.classList.remove("active")
    if(noveno.classList.contains("active")) noveno.classList.remove("active")

    if(!uno.classList.contains("active")) {

        video.playbackRate = 0.25
        uno.classList.add("active")
    } else return;

});

segundo.addEventListener("click", function () {

    if(uno.classList.contains("active")) uno.classList.remove("active")
    if(tercero.classList.contains("active")) tercero.classList.remove("active")
    if(cuarto.classList.contains("active")) cuarto.classList.remove("active")
    if(quinto.classList.contains("active")) quinto.classList.remove("active")
    if(sexto.classList.contains("active")) sexto.classList.remove("active")
    if(septimo.classList.contains("active")) septimo.classList.remove("active")
    if(noveno.classList.contains("active")) noveno.classList.remove("active")

    if(!segundo.classList.contains("active")) {

        video.playbackRate = 0.5
        segundo.classList.add("active")
    } else return;

});

tercero.addEventListener("click", function () {

    if(uno.classList.contains("active")) uno.classList.remove("active")
    if(segundo.classList.contains("active")) segundo.classList.remove("active")
    if(cuarto.classList.contains("active")) cuarto.classList.remove("active")
    if(quinto.classList.contains("active")) quinto.classList.remove("active")
    if(sexto.classList.contains("active")) sexto.classList.remove("active")
    if(septimo.classList.contains("active")) septimo.classList.remove("active")
    if(noveno.classList.contains("active")) noveno.classList.remove("active")

    if(!tercero.classList.contains("active")) {

        video.playbackRate = 0.75
        tercero.classList.add("active")
    } else return;

});

cuarto.addEventListener("click", function () {

    if(uno.classList.contains("active")) uno.classList.remove("active")
    if(segundo.classList.contains("active")) segundo.classList.remove("active")
    if(tercero.classList.contains("active")) tercero.classList.remove("active")
    if(quinto.classList.contains("active")) quinto.classList.remove("active")
    if(sexto.classList.contains("active")) sexto.classList.remove("active")
    if(septimo.classList.contains("active")) septimo.classList.remove("active")
    if(noveno.classList.contains("active")) noveno.classList.remove("active")

    if(!cuarto.classList.contains("active")) {

        video.playbackRate = 1
        cuarto.classList.add("active")
    } else return;
});

quinto.addEventListener("click", function () {

    if(uno.classList.contains("active")) uno.classList.remove("active")
    if(segundo.classList.contains("active")) segundo.classList.remove("active")
    if(tercero.classList.contains("active")) tercero.classList.remove("active")
    if(cuarto.classList.contains("active")) cuarto.classList.remove("active")
    if(sexto.classList.contains("active")) sexto.classList.remove("active")
    if(septimo.classList.contains("active")) septimo.classList.remove("active")
    if(noveno.classList.contains("active")) noveno.classList.remove("active")

    if(!quinto.classList.contains("active")) {

        video.playbackRate = 1.25
        quinto.classList.add("active")
    } else return;

});

sexto.addEventListener("click", function () {

    if(uno.classList.contains("active")) uno.classList.remove("active")
    if(segundo.classList.contains("active")) segundo.classList.remove("active")
    if(tercero.classList.contains("active")) tercero.classList.remove("active")
    if(cuarto.classList.contains("active")) cuarto.classList.remove("active")
    if(quinto.classList.contains("active")) quinto.classList.remove("active")
    if(septimo.classList.contains("active")) septimo.classList.remove("active")
    if(noveno.classList.contains("active")) noveno.classList.remove("active")

    if(!sexto.classList.contains("active")) {

        video.playbackRate = 1.5
        sexto.classList.add("active")
    } else return;
    
});

septimo.addEventListener("click", function () {

    if(uno.classList.contains("active")) uno.classList.remove("active")
    if(segundo.classList.contains("active")) segundo.classList.remove("active")
    if(tercero.classList.contains("active")) tercero.classList.remove("active")
    if(cuarto.classList.contains("active")) cuarto.classList.remove("active")
    if(quinto.classList.contains("active")) quinto.classList.remove("active")
    if(sexto.classList.contains("active")) sexto.classList.remove("active")
    if(noveno.classList.contains("active")) noveno.classList.remove("active")

    if(!septimo.classList.contains("active")) {

        video.playbackRate = 1.75
        septimo.classList.add("active")
    } else return;
    
});

noveno.addEventListener("click", function () {

    if(uno.classList.contains("active")) uno.classList.remove("active")
    if(segundo.classList.contains("active")) segundo.classList.remove("active")
    if(tercero.classList.contains("active")) tercero.classList.remove("active")
    if(cuarto.classList.contains("active")) cuarto.classList.remove("active")
    if(quinto.classList.contains("active")) quinto.classList.remove("active")
    if(sexto.classList.contains("active")) sexto.classList.remove("active")
    if(septimo.classList.contains("active")) septimo.classList.remove("active")

    if(!noveno.classList.contains("active")) {

        video.playbackRate = 2
        noveno.classList.add("active")
    } else return;
});
