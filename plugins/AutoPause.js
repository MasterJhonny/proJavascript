class AutoPause {
    constructor(){
        this.threshot = 0.01
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilities = this.handlerVisibilities.bind(this)
    }
    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshot: this.threshot
        });

        observer.observe(player.media)

        document.addEventListener('visibilitychange', this.handlerVisibilities)
    }
    handlerIntersection(entries) {
        const entry = entries[0]
        const visibility = entry.intersectionRatio >= this.threshot
        // console.log(entry.isIntersecting)
        if(visibility){
            this.player.play()
            // this.player.media.classList.remove('wien')
        } else {
            this.player.pause()
            // this.player.media.classList.add('wien')
        }
    }
    handlerVisibilities(){
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