
<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <div slot="titulo">
          <h3>Cambiar contrasena</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
              <label for="correo">Correo Electronico</label>
              <input type="email" class="form-control" id="correo"
              placeholder="Escribe tu correo">
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary" >Cambiar Contrasena</button>
        </div>
      </mostrarFormulario>
    </div>
  </div>
</template>

<script>
import mostrarFormulario from './mostrarFormulario';

export default {
  components: {
    mostrarFormulario
  },
  data () {
      return{}
  }
}
</script>

<style scoped>
  h3{
    color: red;
  }
</style>