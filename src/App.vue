<template>
  <div class="container">
    <div class="jumbotron">
      <span>
        {{mensaje | suspensivos | mayusculas }}
      </span>
      <hr>
      <span>
        {{temperatura | aFahrenheit}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mensaje: 'Aprende Vuejs facilmente',
      temperatura: 35
    }
  },
  filters: {
    mayusculas(mensaje){
      return mensaje.toUpperCase();
    },
    aFahrenheit(temperatura){
      return (9/5 * temperatura) + 32 + ' F';
    }
  }
}
</script>

<style>
</style>
