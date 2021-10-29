interface Observer {
    update: (value: any) => void;
}

interface Subjet {
    subcribe: (observer: Observer) => void;
    onsubcribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subjet {
    observers: Observer[];
    constructor() {
        this.observers = new Array();
        let el: HTMLinputElement = document.getElementById('value');
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }

    subscribe(observer: Observer){
        this.observers.push(observer);
    }

    onsubcribe(observer: Observer){
        const index = this.observers.findIndex(obv => obv === observer);
        this.observers.splice(index, 1);
    }

    notify(data: any){
        this.observers.forEach(obv => obv.update(data));
    }
}

class DisplayPrice implements Observer {
    el: HTMLElement;
    constructor() {
        this.el = document.getElementById("price");
    }

    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new DisplayPrice();

value.subscribe(display);

setTimeout(() => {
    value.onsubcribe(display);
}, 4000);