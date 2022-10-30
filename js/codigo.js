const video = document.getElementById("video");
const barra = document.getElementById("barra");
const barra1 = document.getElementById("barra-1")

// DIV PADRE DE TODOS LOS BOTONES
const ControlesParaDesactivar = document.getElementById("ControlesParaDesactivar")

//  PARTE DE LOS BOTONES
const configuracion = document.getElementById("boton-configuracion");
const saltar = document.getElementById("boton-saltar");
const play = document.getElementById("boton-play");
const pausar = document.getElementById("boton-pausar");
const saltar2 = document.getElementById("boton-saltar2");
const mute = document.getElementById("boton-volumen-mute");
const cuarto = document.getElementById("boton-volumen-cuarto");
const medio = document.getElementById("boton-volumen-medio");
const alto = document.getElementById("boton-volumen-alto");

// PARTE DE LAS BARRAS DEL VIDEO
const BarraProgreso = document.getElementById("barra-progreso");
const Progreso = document.getElementById("progreso");

const BarraProgreso1 = document.getElementById("barra-progreso-1");
const ProgresoArea = document.getElementById("progreso-area");

// PARTE DEL TIEMPO DEL VIDEO
const ProgresoAreaTiempo = document.getElementById("progreso-area-tiempo");

// PARTE DEL DESACTIVAR Y ACTIVAR EVENTOS DEL STOP Y PLAY
const ContainerElementosControles = document.getElementById("container-elementos-controles")


// PARTE DEL MENU DE CONFIGURACION //
const velocidad = document.getElementById("velocidad");
const velc1 = document.getElementById("velocidad-1");
const velc2 = document.getElementById("velocidad-2");
const velc3 = document.getElementById("velocidad-3");
const velc4 = document.getElementById("velocidad-4");
const velc5 = document.getElementById("velocidad-5");
const velc6 = document.getElementById("velocidad-6");
const velc7 = document.getElementById("velocidad-7");
const velc8 = document.getElementById("velocidad-8");

// ADELANTAR Y +
const left = document.getElementById("left");
const right = document.getElementById("right");

// EVENTOS PARA EL VIDEO //
function segundos(seconds) {

    var d = new Date(seconds * 1000);
    var minuto = (d.getMinutes() < 9) ? "0" + d.getMinutes() : d.getMinutes();
    var segundo = (d.getSeconds() < 9) ? "0" + d.getSeconds() : d.getSeconds();

    return `${minuto}:${segundo}`
};

function update() {

    let ProgresoDeBarra = (100 * video.currentTime) / video.duration;

    Progreso.value = `${ProgresoDeBarra}`;
    BarraProgreso.style.width = `${ProgresoDeBarra}%`;

    ProgresoAreaTiempo.innerHTML = `${segundos(video.currentTime)} / ${segundos(video.duration)}`;

};

function PrenderApagar() {
    if (!barra1.classList.contains("desactivar")) {
        return barra1.classList.add("desactivar");
    } else return barra1.classList.remove("desactivar");
}

function seguir_barra(e) {

    let barrita = barra.clientWidth + 2;
    video.currentTime = (e.offsetX / barrita) * video.duration;

};

// PARTE DE LOS AJUSTES //
configuracion.addEventListener("click", function () {

    return velocidad.classList.toggle("activar");
});

velc1.addEventListener("click", function () {
    if (velc2.classList.contains("activo")) velc2.classList.remove("activo")
    if (velc3.classList.contains("activo")) velc3.classList.remove("activo")
    if (velc4.classList.contains("activo")) velc4.classList.remove("activo")
    if (velc5.classList.contains("activo")) velc5.classList.remove("activo")
    if (velc6.classList.contains("activo")) velc6.classList.remove("activo")
    if (velc7.classList.contains("activo")) velc7.classList.remove("activo")
    if (velc8.classList.contains("activo")) velc8.classList.remove("activo")

    video.playbackRate = 0.25
    return velc1.classList.add("activo")
});

velc2.addEventListener("click", function () {
    if (velc1.classList.contains("activo")) velc1.classList.remove("activo")
    if (velc3.classList.contains("activo")) velc3.classList.remove("activo")
    if (velc4.classList.contains("activo")) velc4.classList.remove("activo")
    if (velc5.classList.contains("activo")) velc5.classList.remove("activo")
    if (velc6.classList.contains("activo")) velc6.classList.remove("activo")
    if (velc7.classList.contains("activo")) velc7.classList.remove("activo")
    if (velc8.classList.contains("activo")) velc8.classList.remove("activo")

    video.playbackRate = 0.5
    return velc2.classList.add("activo")
});

velc3.addEventListener("click", function () {
    if (velc1.classList.contains("activo")) velc1.classList.remove("activo")
    if (velc2.classList.contains("activo")) velc2.classList.remove("activo")
    if (velc4.classList.contains("activo")) velc4.classList.remove("activo")
    if (velc5.classList.contains("activo")) velc5.classList.remove("activo")
    if (velc6.classList.contains("activo")) velc6.classList.remove("activo")
    if (velc7.classList.contains("activo")) velc7.classList.remove("activo")
    if (velc8.classList.contains("activo")) velc8.classList.remove("activo")

    video.playbackRate = 0.75
    return velc3.classList.add("activo")
});

velc4.addEventListener("click", function () {
    if (velc1.classList.contains("activo")) velc1.classList.remove("activo")
    if (velc2.classList.contains("activo")) velc2.classList.remove("activo")
    if (velc3.classList.contains("activo")) velc3.classList.remove("activo")
    if (velc5.classList.contains("activo")) velc5.classList.remove("activo")
    if (velc6.classList.contains("activo")) velc6.classList.remove("activo")
    if (velc7.classList.contains("activo")) velc7.classList.remove("activo")
    if (velc8.classList.contains("activo")) velc8.classList.remove("activo")

    video.playbackRate = 1
    return velc4.classList.add("activo")
});

velc5.addEventListener("click", function () {
    if (velc1.classList.contains("activo")) velc1.classList.remove("activo")
    if (velc2.classList.contains("activo")) velc2.classList.remove("activo")
    if (velc3.classList.contains("activo")) velc3.classList.remove("activo")
    if (velc4.classList.contains("activo")) velc4.classList.remove("activo")
    if (velc6.classList.contains("activo")) velc6.classList.remove("activo")
    if (velc7.classList.contains("activo")) velc7.classList.remove("activo")
    if (velc8.classList.contains("activo")) velc8.classList.remove("activo")

    video.playbackRate = 1.25
    return velc5.classList.add("activo")
});

velc6.addEventListener("click", function () {
    if (velc1.classList.contains("activo")) velc1.classList.remove("activo")
    if (velc2.classList.contains("activo")) velc2.classList.remove("activo")
    if (velc3.classList.contains("activo")) velc3.classList.remove("activo")
    if (velc4.classList.contains("activo")) velc4.classList.remove("activo")
    if (velc5.classList.contains("activo")) velc5.classList.remove("activo")
    if (velc7.classList.contains("activo")) velc7.classList.remove("activo")
    if (velc8.classList.contains("activo")) velc8.classList.remove("activo")

    video.playbackRate = 1.5
    return velc6.classList.add("activo")
});

velc7.addEventListener("click", function () {
    if (velc1.classList.contains("activo")) velc1.classList.remove("activo")
    if (velc2.classList.contains("activo")) velc2.classList.remove("activo")
    if (velc3.classList.contains("activo")) velc3.classList.remove("activo")
    if (velc4.classList.contains("activo")) velc4.classList.remove("activo")
    if (velc5.classList.contains("activo")) velc5.classList.remove("activo")
    if (velc6.classList.contains("activo")) velc6.classList.remove("activo")
    if (velc8.classList.contains("activo")) velc8.classList.remove("activo")

    video.playbackRate = 1.75
    return velc7.classList.add("activo")
});

velc8.addEventListener("click", function () {
    if (velc1.classList.contains("activo")) velc1.classList.remove("activo")
    if (velc2.classList.contains("activo")) velc2.classList.remove("activo")
    if (velc3.classList.contains("activo")) velc3.classList.remove("activo")
    if (velc4.classList.contains("activo")) velc4.classList.remove("activo")
    if (velc5.classList.contains("activo")) velc5.classList.remove("activo")
    if (velc6.classList.contains("activo")) velc6.classList.remove("activo")
    if (velc7.classList.contains("activo")) velc7.classList.remove("activo")

    video.playbackRate = 2
    return velc8.classList.add("activo")
});


// PARTE DEL VIDEO PAUSAR //
video.addEventListener("click", function () {

    if (video.paused) {

        if (!play.classList.contains("desactivar")) {
            play.classList.add("desactivar")
            pausar.classList.add("activar")
            barra.classList.add("desactivar")
            ContainerElementosControles.classList.add("desactivar")
            return video.play();
        } else return;

    } else {

        if (pausar.classList.contains("desactivar")) {
            play.classList.remove("desactivar")
            pausar.classList.remove("activar")
            barra.classList.remove("desactivar")
            ContainerElementosControles.classList.remove("desactivar")
            return video.pause();
        } else return;
    }
});

// PARTE DE LOS BOTONES - ATRASAR Y ADELANTAR //
const ContainerMedioControles = document.getElementById("container-medio-controles");

saltar.addEventListener("click", function () {

    left.classList.remove("desactivar-2")
    ContainerMedioControles.classList.remove("desactivar")
    setTimeout(function () {
        left.classList.add("desactivar-2")
        ContainerMedioControles.classList.add("desactivar")
    }, 500)
    return video.currentTime -= 5;

});

saltar2.addEventListener("click", function () {

    right.classList.remove("desactivar-2")
    ContainerMedioControles.classList.remove("desactivar")
    setTimeout(function () {
        right.classList.add("desactivar-2")
        ContainerMedioControles.classList.add("desactivar")
    }, 500)
    return video.currentTime += 5;
});
// PARTE DE LOS BOTONES DE PAUSAR //
play.addEventListener("click", function () {

    play.classList.add("desactivar")
    pausar.classList.add("activar")
    barra.classList.add("desactivar")
    ContainerElementosControles.classList.add("desactivar")
    return video.play();
});

pausar.addEventListener("click", function () {

    play.classList.remove("desactivar")
    pausar.classList.remove("activar")
    barra.classList.remove("desactivar")
    ContainerElementosControles.classList.remove("desactivar")
    return video.pause();
});

// PARTE DEL VOLUMEN //
alto.addEventListener("click", PrenderApagar);
medio.addEventListener("click", PrenderApagar);
cuarto.addEventListener("click", PrenderApagar);
mute.addEventListener("click", PrenderApagar);

// PARTE BARRA DEL VOLUM //
barra1.addEventListener("click", function () {

    let volumen = ProgresoArea.value;

    video.volume = Math.floor(volumen * 1) / 100;
    BarraProgreso1.style.width = `${volumen}%`
    // console.log(video.volume = Math.floor(volumen * 1) / 100)


    if (video.volume == 1) {

        alto.classList.remove("desactivar")

        mute.classList.remove("activar")
        cuarto.classList.remove("activar")
        medio.classList.remove("activar")

    } else if (video.volume == 0) {

        mute.classList.add("activar")

        cuarto.classList.remove("activar")
        medio.classList.remove("activar")
        alto.classList.add("desactivar")

    } else if (video.volume <= 0.3) {

        cuarto.classList.add("activar")

        mute.classList.remove("activar")
        medio.classList.remove("activar")
        alto.classList.remove("activar")
        alto.classList.add("desactivar")

    } else if (video.volume <= 0.6) {

        medio.classList.add("activar")

        cuarto.classList.remove("activar")
        mute.classList.remove("activar")
        alto.classList.add("desactivar")

    } else if (video.volume <= 0.99) {

        alto.classList.remove("desactivar")

        mute.classList.remove("activar")
        cuarto.classList.remove("activar")
        medio.classList.remove("activar")

    }
});

// PARTE BARRA DEL VIDEO /7
barra.addEventListener("click", function (e) {
    video.currentTime = Math.floor(video.duration * ((100 * e.offsetX) / 100 / Progreso.offsetWidth))
});

barra.addEventListener("pointerdown", (e) => {

    barra.setPointerCapture(e.pointerId);
    barra.addEventListener("pointermove", seguir_barra);
    barra.addEventListener("pointerup", () => {
        barra.removeEventListener("pointermove", seguir_barra);
    });
});

// PARTE DE APRETAR TECLAS

const ContainerVideo = document.getElementById("container-video")

document.addEventListener("keydown", function (i) {

    let key = i.keyCode
    // FLECHA PARA LA DERECHA
    if (key == 39) {
        right.classList.remove("desactivar-2")
        ContainerMedioControles.classList.remove("desactivar")
        setTimeout(function () {
            right.classList.add("desactivar-2")
            ContainerMedioControles.classList.add("desactivar")
        }, 500)
        return video.currentTime += 5;
    }
    // FLECHA PARA LA IZQUIERDA
    if (key == 37) {
        left.classList.remove("desactivar-2")
        ContainerMedioControles.classList.remove("desactivar")
        setTimeout(function () {
            left.classList.add("desactivar-2")
            ContainerMedioControles.classList.add("desactivar")
        }, 500)
        return video.currentTime -= 5;
    }
    // ESPACIO
    if (key == 32) {


        if (video.paused) {

            if (!play.classList.contains("desactivar")) {

                play.classList.add("desactivar")
                pausar.classList.add("activar")

                barra.classList.add("desactivar")
                ContainerElementosControles.classList.add("desactivar")
                return video.play();

            }

        } else {

            if (pausar.classList.contains("desactivar")) {

                play.classList.remove("desactivar")
                pausar.classList.remove("activar")

                barra.classList.remove("desactivar")
                ContainerElementosControles.classList.remove("desactivar")
                return video.pause();
            }
        }
    }
    //NUMERO 0
    if (key == 48) {
        video.currentTime = 0
    }
    // NUMERO 1
    if (key == 49) {
        video.currentTime = video.duration / 8
    }
    // NUMERO 2
    if (key == 50) {
        video.currentTime = video.duration / 5
    }
    // NUMERO 3
    if (key == 51) {
        video.currentTime = video.duration / 3
    }
    // NUMERO 4
    if (key == 52) {
        video.currentTime = video.duration / 2.1
    }
    // NUMERO 5
    if (key == 53) {
        video.currentTime = video.duration / 1.9
    }
    // NUMERO 6
    if (key == 54) {
        video.currentTime = video.duration / 1.7
    }
    // NUMERO 7
    if (key == 55) {
        video.currentTime = video.duration / 1.5
    }
    // NUMERO 8
    if (key == 56) {
        video.currentTime = video.duration / 1.3
    }
    // NUMERO 9
    if (key == 57) {
        video.currentTime = video.duration / 1.1
    }
    // LETRA F PARA AGRANDAR LOS ELEMENTOS 
    if (key == 70) {


        if (!ContainerVideo.classList.contains("fullpantallaCompleta")) {
            return ContainerVideo.requestFullscreen();
        } else {
            return document.exitFullscreen();
        }
    }
});

document.addEventListener("fullscreenchange", function () {

    if (!ContainerVideo.classList.contains("fullpantallaCompleta")) {

        video.classList.add("fullpantalla");
        barra.classList.add("barraFullPantalla");
        ContainerVideo.classList.add("fullpantallaCompleta");
        configuracion.classList.add("boton-pantallaCompleta");
        velocidad.classList.add("velocidad-pantallaCompleta");
        ContainerMedioControles.classList.add("container-medio-controlesFullPantalla");
        ContainerElementosControles.classList.add("container-elementos-controlesFullPantalla");

    } else if (ContainerVideo.classList.contains("fullpantallaCompleta")) {

        video.classList.remove("fullpantalla");
        barra.classList.remove("barraFullPantalla");
        ContainerVideo.classList.remove("fullpantallaCompleta");
        configuracion.classList.remove("boton-pantallaCompleta");
        velocidad.classList.remove("velocidad-pantallaCompleta");
        ContainerMedioControles.classList.remove("container-medio-controlesFullPantalla");
        ContainerElementosControles.classList.remove("container-elementos-controlesFullPantalla");
    }
});


// PARTE DE LLAMAR VIDEO

const CardVideo1 = document.getElementById("CardVideo1")
const CardVideo2 = document.getElementById("CardVideo2")
const CardVideo3 = document.getElementById("CardVideo3")
const CardVideo4 = document.getElementById("CardVideo4")
const CardVideo5 = document.getElementById("CardVideo5")


CardVideo1.addEventListener("click", function () {

    video.src = "./video/LSD - Genius ft. Sia, Diplo, Labrinth.mp4"
    CardVideo1.classList.add("activo")

    CardVideo2.classList.remove("activo")
    CardVideo3.classList.remove("activo")
    CardVideo4.classList.remove("activo")
    CardVideo5.classList.remove("activo")

    video.play();
    play.classList.add("desactivar")
    pausar.classList.add("activar")
    barra.classList.add("desactivar")
    ContainerElementosControles.classList.add("desactivar")

});

CardVideo2.addEventListener("click", function () {


    video.src = "./video/Imagine Dragons - Sharks (Official Lyric Video).mp4"
    CardVideo2.classList.add("activo")

    CardVideo1.classList.remove("activo")
    CardVideo3.classList.remove("activo")
    CardVideo4.classList.remove("activo")
    CardVideo5.classList.remove("activo")

    video.play();
    play.classList.add("desactivar")
    pausar.classList.add("activar")
    barra.classList.add("desactivar")
    ContainerElementosControles.classList.add("desactivar")
});

CardVideo3.addEventListener("click", function(){

    video.src = "./video/AJR - World's Smallest Violin (Official Video).mp4"
    CardVideo3.classList.add("activo")

    CardVideo1.classList.remove("activo")
    CardVideo2.classList.remove("activo")
    CardVideo4.classList.remove("activo")
    CardVideo5.classList.remove("activo")

    video.play();
    play.classList.add("desactivar")
    pausar.classList.add("activar")
    barra.classList.add("desactivar")
    ContainerElementosControles.classList.add("desactivar")

});

CardVideo4.addEventListener("click", function(){

    video.src = "./video/Lukas Graham - 7 Years [Official Music Video].mp4"
    CardVideo4.classList.add("activo")

    CardVideo1.classList.remove("activo")
    CardVideo2.classList.remove("activo")
    CardVideo3.classList.remove("activo")
    CardVideo5.classList.remove("activo")

    video.play();
    play.classList.add("desactivar")
    pausar.classList.add("activar")
    barra.classList.add("desactivar")
    ContainerElementosControles.classList.add("desactivar")

});

CardVideo5.addEventListener("click", function(){

    video.src = "./video/Play Date - AMV - 「Anime MV].mp4"
    CardVideo5.classList.add("activo")

    CardVideo1.classList.remove("activo")
    CardVideo2.classList.remove("activo")
    CardVideo3.classList.remove("activo")
    CardVideo4.classList.remove("activo")

    video.play();
    play.classList.add("desactivar")
    pausar.classList.add("activar")
    barra.classList.add("desactivar")
    ContainerElementosControles.classList.add("desactivar")

});
