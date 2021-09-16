// inportation from module and autoplay
import MediaPlayer from "./module.js";
import AutoPlay from "./autoPlay.js";
// declaration of const
const btnPlay = document.querySelector("#btnPlay");
const btnMute = document.querySelector("#btnMute");
const sonido = document.querySelector("#sonido");
const movie = document.querySelector("#movie");
const estilos = document.querySelector(".btn::after");
const container = document.querySelector("#container");

const valor = 0.25
// intersecter obsever
let observer = new IntersectionObserver(handler, {
    threshold: valor
});

observer.observe(container)

function handler(entries) {
    const entry = entries[0]
    // console.log(entry)
    const visible = entry.intersectionRatio >= valor
    if(visible) {
        movie.classList.remove("wien")
    } else {
        movie.classList.add("wien")
    }
}
// creation de objets
let player = new MediaPlayer({el: movie, plugins: [new AutoPlay()]});

btnPlay.onclick = () => {
    player.toggle(btnPlay);
};
btnMute.onclick = () => {
    player.mute();
};
sonido.oninput = () => {
    player.volumen(sonido.value);
};

// const video = document.querySelector("video")
document.addEventListener("visibilitychange", () => {
    const isVisible = document.visibilityState
    if(isVisible === "hidden"){
    movie.volume = 0.2
} else {
    movie.volume = 1
}
})

// algoritmo que reduce al musia de youtube
// const video = document.querySelector("video")
// document.addEventListener("visibilitychange", () => {
//     const isVisible = document.visibilityState
//     if(isVisible === "hidden"){
//     video.volume = 0.2
// } else {
//     video.volume = 0.9
// }
// })