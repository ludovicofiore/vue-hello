// creo variabile per vue
const { createApp } = Vue;

// invoco la funzione 
createApp({
    data() {
        return {
            // titolo
            message: "ciao, sono un titolo",

            // immagine
            source: "https://picsum.photos/200/300"
        }
    }
}).mount("#container");

