function AutoPlay() {

}
AutoPlay.prototype.run = function(player) {
    if(!player.muted){
        player.setmuted = true;
    }
    player.play()
}

export default AutoPlay