var data = {
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
}

Vue.component('titulo', {
    template: '<h1 align="center">{{titulo}}</h1>',
    data: function(){
        return {titulo: 'Lista de tareas'}
    }
})

Vue.component('nueva-tarea', {
    template: `<div class="input-group mb-3">
    <input type="text" class="form-control" v-on:keyup.enter="agregarTarea" v-model="nuevaTarea" placeholder="Hacer ejercicio">
    <div class="input-group-append">
        <span v-on:click="agregarTarea"  class="input-group-text btn btn-primary bg-primary text-light" id="basic-addon2">Agregar Tarea</span>
        </div>
    </div>`,
    data: function(){
        return data;
    },
    methods: {
        agregarTarea: function() {
            this.tareas.push({texto: this.nuevaTarea,terminada:false});
            console.log(this.tareas)
        }
    }
})

new Vue({
    el: '#app',
    data: data,
    methods: {
        eliminar: function(i){
            this.tareas.splice(i,1);
        },
        cambiar: function(i){
            this.tareas[i].terminada = !this.tareas[i].terminada;
        }
    }
})