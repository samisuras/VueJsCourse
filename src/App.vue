<template>
  <div class="container">
    <div class="jumbotron">
      <span>
        {{mensaje | mayusculas }}
      </span>
      <hr>
      <span>
        {{mensaje}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mensaje: 'Aprende Vuejs facilmente'
    }
  },
  filters: {
    mayusculas(mensaje){
      return mensaje.toUpperCase();
    }
  }
}
</script>

<style>
</style>
