import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "../plugins/AutoPlay.js"
import AutoPause from "../plugins/AutoPause.js"


const video = document.querySelector('video')
const btnPlay = document.querySelector('#btnPlay')
const btnMute = document.querySelector('#btnMute')
const sonido = document.getElementById('sonido')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] })

btnPlay.onclick = () => {
    player.togglePlay()
}
btnMute.onclick = () => {
    player.toggleMute()
}
sonido.oninput = () => {
    player.volumen(sonido.value)
} 


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(err => console.error(err));
}