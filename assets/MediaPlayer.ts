class MediaPlayer {
    public media: HTMLMediaElement;
    public plugins: Array<any>;
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || new Array()
        this.initPlufins()
    }
    private initPlufins() {
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get getmuted() {
        //         return this.media.muted
        //     },
        //     set setmuted(valor) {
        //         this.media.muted = valor
        //     }
        // }
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    togglePlay() {
        if (this.media.paused) {
            this.media.play()
        } else {
            this.media.pause()
        }
    }
    volumen(valor) {
        this.media.volume = valor / 10
    }
    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted = false
    }
    toggleMute() {
        this.media.muted = !this.media.muted
    }
}
export default MediaPlayer