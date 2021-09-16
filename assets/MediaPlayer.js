function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || new Array()
    this.initPlufins() 
}
MediaPlayer.prototype.initPlufins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get getmuted(){
            return this.media.muted
        },
        set setmuted(valor){
            this.media.muted = valor;
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(player)
    })
}
MediaPlayer.prototype.play = function() {
    this.media.play()
}
MediaPlayer.prototype.pause = function() {
    this.media.pause()
}
MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
        this.media.play()
    } else {
        this.media.pause()
    }
}
MediaPlayer.prototype.volumen = function(valor){
    this.media.volume = valor/10
}
MediaPlayer.prototype.mute = function(){
    this.media.muted = true
}
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false
}
MediaPlayer.prototype.toggleMute = function() {
    console.log(this.media.muted)
    this.media.muted = !this.media.muted
}
export default MediaPlayer