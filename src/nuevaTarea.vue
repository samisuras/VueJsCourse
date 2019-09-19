<template>
    <div class="input-group mb-3">
    <input type="text" class="form-control" 
    v-on:keyup.enter="agregarTarea" 
    v-model="nuevaTarea" placeholder="Hacer ejercicio">
    <div class="input-group-append">
        <span v-on:click="agregarTarea"  class="input-group-text btn btn-primary bg-primary text-light" 
        id="basic-addon2">Agregar Tarea</span>
        </div>
    </div>
</template>

<script>
import {bus} from './main';

export default {
    props: [
        'tareas',
        'actualizarContador'
    ],
    data(){
        return{
            nuevaTarea: ''
        }
    },
    methods: {
        agregarTarea: function() {
            this.tareas.push({
                texto: this.nuevaTarea,
                terminada:false
            });
            // this.actualizarContador();
            bus.$emit('actualizarContador',this.tareas.length);
        }
    },
    created(){
        bus.$emit('actualizarContador',this.tareas.length);
    }
}
</script>