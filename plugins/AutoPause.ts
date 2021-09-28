import MediaPlayer from "../assets/MediaPlayer";
class AutoPause {
    private threshold: number;
    player: MediaPlayer;
    constructor(){
        this.threshold = 0.01;
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilities = this.handlerVisibilities.bind(this)
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });

        observer.observe(player.media)

        document.addEventListener('visibilitychange', this.handlerVisibilities)
    }
    private handlerIntersection(entries: IntersectionObserverEntry[] ) {
        const entry = entries[0];
        const visibility = entry.intersectionRatio >= this.threshold;
        if(visibility){
            this.player.play()
            // this.player.media.classList.remove('wien')
        } else {
            this.player.pause()
            // this.player.media.classList.add('wien')
        }
    }
    private handlerVisibilities(){
        // console.log(document.visibilityState)
        const isVisible = document.visibilityState
        if(isVisible === 'visible') {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause;