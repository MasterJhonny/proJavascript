interface Observer {
    update: (data: any) => void;
}

interface Subjet {
    subscribe: (observer: Observer ) => void
    onsubscribe: (observer: Observer ) => void
}

class BitcoinPrice implements Subjet {
    observers: Observer[] = new Array();

    constructor(){
        const el: HTMLInputElement = document.getElementById('value');
        el.addEventListener('input', () => { // puede funcionar el evento change too
            this.notify(el.value);
        })
    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    onsubscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => obs  === observer);
        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}


class PriceDisplay implements Observer {

    private el: HTMLElement;

    constructor() {
        this.el = document.getElementById("price");   
    }

    update(data: any) {
        this.el.innerText = data; 
    }
}


const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => {
    value.onsubscribe(display);
}, 3000)