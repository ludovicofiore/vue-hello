// creo variabile per vue
const { createApp } = Vue;

// invoco la funzione
createApp({
    data() {
        return {
            message: "ciao, sono un titolo"
        }
    }
}).mount("#title");