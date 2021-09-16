function AutoPlay () {
    
}
AutoPlay.prototype.run = function(video){
    video.mute()
    video.Play()
}

export default AutoPlay