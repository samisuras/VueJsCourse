<template>
    <ul>
        <template v-for="(tarea,i) in tareas">
            <div class="card">
                <div class="card-body" >
                    <span class="" v-bind:class="{terminada: tarea.terminada}">
                        {{tarea.texto}}
                    </span>
                    
                    <div class="derecha" style="display: inline;">
                        <button class="btn btn-success" v-on:click="cambiar(i)" ><i class="fas fa-check"></i></button>
                        <button class="btn btn-danger" v-on:click="eliminar(i); borrarTarea()"> <i class="fas fa-times"></i> </button>
                    </div>
                </div>
            </div>
        </template>
    </ul>
</template>

<script>
export default {
    props: ['tareas','borrarTarea'],
    methods: {
        eliminar: function(i){
            this.tareas.splice(i,1);
        },
        cambiar: function(i){
            this.tareas[i].terminada = !this.tareas[i].terminada;
        }
    }
}
</script>

<style scoped>
    .derecha{
        align-items: right;
        float: right;
    }
    .terminada{
        color: grey;
        text-decoration: line-through;
    }
</style>