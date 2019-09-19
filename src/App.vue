<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <Titulo :titulo="titulo"/>
      <NuevaTarea :tareas="tareas"/>
      <listaTareas :tareas="tareas"/>
    </div>
  </div>
</template>

<script>

import Titulo from './TituloComponente';
import NuevaTarea from './nuevaTarea';
import listaTareas from './listaTareas';

export default {
  components: {
    Titulo,
    NuevaTarea,
    listaTareas
  },
  data(){
    return {
      titulo: '-Lista de tareas-',
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
        }
      ]
    }
  }
}
</script>