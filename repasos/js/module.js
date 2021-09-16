function MediaPlayer(config) {
    this.video = config.el;
    this.plugins = config.plugins || new Array();
    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    })
}
MediaPlayer.prototype.Play = function() {
    this.video.play();
}
MediaPlayer.prototype.toggle = function (item) {
    if (this.video.paused) {
        this.video.play();
        item.classList.toggle("true");
        setTimeout(() => {
            item.classList.toggle("true");
        }, 150);
    } else {
        this.video.pause();
        item.classList.toggle("false");
        setTimeout(() => {
            item.classList.toggle("false");
        }, 150);
    }
};

MediaPlayer.prototype.volumen = function (valor) {
    this.video.volume = valor / 10;
};

MediaPlayer.prototype.mute = function () {
    if (this.video.muted) {
        this.video.muted = false;
    } else {
        this.video.muted = true;
    }
};

export default MediaPlayer