<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <Titulo :titulo="titulo"/>
      
      <!-- $event es el segundo parametro pasado en el emit -->
      <NuevaTarea :tareas="tareas" 
      :actualizarContador="actualizarContador"/>
      <listaTareas :tareas="tareas"
      :borrarTarea="borrarTarea"/>
    </div>
  </div>
</template>

<script>

import Titulo from './TituloComponente';
import NuevaTarea from './nuevaTarea';
import listaTareas from './listaTareas';
import VueResource from 'vue-resource';

export default {
  components: {
    Titulo,
    NuevaTarea,
    listaTareas
  },
  data(){
    return {
      titulo: '-Lista de tareas-',
      tareas: []
    }
  },
  methods: {
    actualizarContador(){
        this.numTareas++;
    },
    borrarTarea(){
      this.numTareas--;
    }
  },
  created(){
    this.$http.get('tareas.json')
    .then(res=>{
      return res.json();
    })
    .then(resJson => {
      for(let id in resJson){
        let tarea = {
          id: id,
          texto: resJson[id].texto,
          terminada: resJson[id].terminada
        }
        this.tareas.push(tarea);
      }
    })
    .catch(err=>{
      alert(err);
    })
  }
}
</script>