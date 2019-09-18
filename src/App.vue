<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <Titulo :titulo="titulo"/>
    </div>
  </div>
</template>

<script>

import Titulo from './TituloComponente'

export default {
  components: {
    Titulo
  },
  data(){
    return {
      titulo: '-Lista de tareas-'
    }
  }
}
</script>