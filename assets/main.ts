import MediaPlayer from "./MediaPlayer"
import AutoPlay from "../plugins/AutoPlay"
import AutoPause from "../plugins/AutoPause"


const video = document.querySelector('video')
const btnPlay: HTMLElement = document.querySelector('#btnPlay')
const btnMute: HTMLElement = document.querySelector('#btnMute')
const sonido: HTMLInputElement = document.getElementById('sonido')

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