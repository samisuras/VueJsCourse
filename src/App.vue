<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <div slot="titulo">
          <h3>Iniciar Sesion</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
              <label for="correo">Correo Electronico</label>
              <input type="email" class="form-control" id="correo"
              placeholder="Escribe tu correo">
          </div>
          <div class="form-group">
              <label for="clave">Contrasena</label>
              <input type="password" class="form-control" id="clave"
              placeholder="Escribe tu contrasena">
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary" >Iniciar Sesion</button>
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
  }
}
</script>

<style>

</style>
