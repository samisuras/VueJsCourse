<template>
    <div class="">
        <h1>{{tituloMayusculas()}}</h1>
        <h3>Tareas a hacer: {{numTareas}}</h3>
    </div>
</template>

<script>
import {bus} from './main';

export default {
    props: {
        titulo: {
            type: String,
            required: true,
            default: "tareas"
        }
    },
    data(){
        return {
            numTareas:3
        }
    },
    methods: {
        tituloMayusculas(){
            return this.titulo.toUpperCase();
        }
    },
    created(){
        bus.$on('actualizarContador', (numTareas)=>{
            this.numTareas = numTareas;
        });
    }
}
</script>