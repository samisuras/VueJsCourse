<template>
    <div class="">
        <h1>{{tituloMayusculas()}}</h1>
        <h3>Tareas a hacer</h3>
    </div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            required: true,
            default: "tareas"
        }
    },
    methods: {
        tituloMayusculas(){
            return this.titulo.toUpperCase();
        }
    }
}
</script>