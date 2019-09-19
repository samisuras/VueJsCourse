<template>
  <div class="container">
    <div class="jumbotron">
      <span v-decorar:grande.negrilla.italico="{familia: 'helvetica',color: 'red'}">Aprende Vue.Js facilmente</span>
      <hr>
      <span v-decorar-local:chico.negrilla="{familia: 'sans serif',color: 'blue'}">Aprende Angular.Js facilmente</span>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'decorar-local': {
      bind(el,binding,vnode){
        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;
        if(binding.modifiers['negrilla'])
          el.style.fontWeight = 'bold';
        if(binding.modifiers['italico'])
          el.style.fontStyle = 'Italic';
        if(binding.arg == 'grande')
          el.style.fontSize = '2rem'
        if(binding.arg == 'chico')
          el.style.fontSize = '.1rem'
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
