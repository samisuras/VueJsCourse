<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <Titulo :titulo="titulo"/>
      {{numTareas}}
      <!-- $event es el segundo parametro pasado en el emit -->
      <NuevaTarea :tareas="tareas" 
      :actualizarContador="actualizarContador"/>
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
      numTareas: 3,
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
  },
  methods: {
    actualizarContador(){
        this.numTareas++;
    }
  }
}
</script>