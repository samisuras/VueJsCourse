<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary"
      @click="componenteSeleccionado = 'iniciarSesion'">
        Iniciar Sesion
      </button>
      <button class="btn btn-primary"
      @click="componenteSeleccionado = 'cambiarClave'">
        Cambiar Clave
      </button>
      
      <component :is="componenteSeleccionado">

      </component>
    </div>
  </div>
</template>

<script>
import mostrarFormulario from './mostrarFormulario';
import cambiarClave from './cambiarClave';
import iniciarSesion from './iniciarSesion';
export default {
  components: {
    mostrarFormulario,
    cambiarClave,
    iniciarSesion
  },
  data () {
    return{
      componenteSeleccionado: 'iniciarSesion'
    }
  }
}
</script>

<style scoped>
  h3{
    color: red;
  }
</style>
