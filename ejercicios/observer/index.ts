// primero creamos las interfaces
interface Observer {
    update: (data: any) => void;
}

interface Subjet {
    subscribe: (observer: Observer) => void;
    onsubscribe: (observer: Observer) => void;
}

// luego creamos las class
class BitcoinPrice implements Subjet {
    // declaramos el array de tipo observer
    observes: Observer[] = [];

    constructor(){
        const el: HTMLInputElement = document.getElementById("value");
        // cons el event oninput hacesmos que pueda notyficar a todos los observadores 
        el.oninput = () => {
            this.notify(el.value);
        }
    }
    // method for subscribe
    subscribe(observer: Observer){
        this.observes.push(observer);
    }
    // method for onsubscribe
    onsubscribe(observer: Observer){
        let index = this.observes.findIndex(obs => {
            return obs === observer;
        })
        this.observes.splice(index, 1);
    }
    // method for notify
    notify(data: any){
        this.observes.forEach(obs => obs.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement
    constructor(){
        this.el = document.getElementById("price");
    }

    update(data: any){
        this.el.innerText = data;
    }
}


// instance class
const value = new BitcoinPrice()
const display = new PriceDisplay()

// onsubscribe despuies de un timeout
value.subscribe(display)
setTimeout(() => {
    value.onsubscribe(display)
}, 5000)