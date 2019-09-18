Vue.component('titulo', {
    template: '<h1 align="center">{{titulo}}</h1>',
    data: function(){
        return {titulo: 'Lista de tareas'}
    }
})

new Vue({
    el: '#app',
    data: {
        
        tareas: [
            {
                texto: 'Aprender Vue.js',
                terminada: false
            },
            {
                texto: 'Aprender Angular.js',
                terminada: false
            },
            {
                texto: 'Aprender React.js',
                terminada: false
            },
        ],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function() {
            this.tareas.push({texto: this.nuevaTarea,terminada:false});
            console.log(this.tareas)
        },
        eliminar: function(i){
            this.tareas.splice(i,1);
        },
        cambiar: function(i){
            this.tareas[i].terminada = !this.tareas[i].terminada;
        }
    }
})