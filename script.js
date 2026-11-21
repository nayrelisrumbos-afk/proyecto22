const { createApp } = Vue;

createApp({
    // Variables del juego y las 10 preguntas
    data() {
        return {
            iniciado: false,  
            indice: 0,        
            puntaje: 0,       
            seleccion: "",    
            
            preguntas: [
                { 
                    pregunta: "¿A qué grupo de animales pertenecen las tortugas?", 
                    opciones: ["Anfibios", "Reptiles", "Mamíferos"], 
                    correcta: "Reptiles" 
                },
                { 
                    pregunta: "¿El caparazón de una tortuga es una parte separada de su cuerpo?", 
                    opciones: ["Sí, se puede quitar", "No, es parte de su esqueleto", "Solo en las tortugas bebés"], 
                    correcta: "No, es parte de su esqueleto" 
                },
                { 
                    pregunta: "¿De qué depende el sexo de las crías de tortuga cuando están en el huevo?", 
                    opciones: ["De la temperatura de la arena", "Del tamaño del huevo", "De la comida de la mamá"], 
                    correcta: "De la temperatura de la arena" 
                },
                { 
                    pregunta: "¿Las tortugas tienen dientes?", 
                    opciones: ["Sí, tienen muchos dientes", "No, tienen un pico fuerte", "Solo cuando son adultas"], 
                    correcta: "No, tienen un pico fuerte" 
                },
                { 
                    pregunta: "¿Cuál es la tortuga más grande del mundo?", 
                    opciones: ["Tortuga verde", "Tortuga carey", "Tortuga laúd"], 
                    correcta: "Tortuga laúd" 
                },
                { 
                    pregunta: "¿Por qué las tortugas marinas confunden el plástico con comida?", 
                    opciones: ["Porque brilla mucho", "Porque se parece a las medusas", "Porque huele a pescado"], 
                    correcta: "Porque se parece a las medusas" 
                },
                { 
                    pregunta: "¿Cuántos años llevan las tortugas habitando la Tierra?", 
                    opciones: ["50 mil años", "Más de 200 millones de años", "1 millón de años"], 
                    correcta: "Más de 200 millones de años" 
                },
                { 
                    pregunta: "¿Las tortugas marinas pueden meter su cabeza dentro del caparazón?", 
                    opciones: ["Sí, cuando tienen miedo", "No, no pueden", "Solo las hembras"], 
                    correcta: "No, no pueden" 
                },
                { 
                    pregunta: "¿Qué comen principalmente las tortugas verdes cuando son adultas?", 
                    opciones: ["Peces pequeños", "Plantas y algas", "Insectos"], 
                    correcta: "Plantas y algas" 
                },
                { 
                    pregunta: "¿Quién es Chukinuni?", 
                    opciones: ["Un tipo de caparazón", "La tortuga de Nayrelis", "Un parque nacional"], 
                    correcta: "La tortuga de Nayrelis" 
                }
            ]
        }
    },
    
    methods: {
        // Cuando el usuario hace clic en una opción
        responder(opcion) {
            if (this.seleccion !== "") return; // Si ya respondió, no hace nada
            
            this.seleccion = opcion; 
            
            if (opcion === this.preguntas[this.indice].correcta) {
                this.puntaje++;
            }
        },
        
        // Cuando el usuario le da a "Siguiente"
        siguiente() {
            this.indice++;       
            this.seleccion = ""; 
        },
        
        // Cuando el usuario le da a "Jugar otra vez"
        reiniciar() {
            this.iniciado = false; // Vuelve al inicio
            this.indice = 0;      
            this.puntaje = 0;     
            this.seleccion = "";  
        }
    }
}).mount("#app");