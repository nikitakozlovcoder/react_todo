
export default class Observable {

    constructor() {
        this.listeners = [];
    }
    attach(listener) {
        return this.detach.bind(this, this.listeners.push(listener)-1);
    }
    detach(idx) {
        this.listeners[idx] = null;
    }
    trigger(...args){
        this.listeners.forEach(el=>{
            if (el != null)
                el(...args);
        })
    }
}
