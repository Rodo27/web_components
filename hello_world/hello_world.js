class Hello_World extends HTMLElement {

    constructor(){
        super()
        this.name = 'World'
        this.surname = ""
    }

    // component attributes
    
    static get observedAttributes(){
        return ['name', 'surname']
    }

    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {

        if (oldValue === newValue) return;
        this[ property ] = newValue;
    
    }
  


    //connect component

    connectedCallback(){
        this.innerHTML = `<h1>Hello ${this.name}</h1><h2>${this.surname}</h2>`
    }
}

customElements.define('hello-world', Hello_World)
