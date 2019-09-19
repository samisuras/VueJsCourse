import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar',{
  bind(el,binding,vnode){
    el.style.fontFamily = binding.value;
    if(binding.modifiers['negrilla'])
      el.style.fontWeight = 'bold';
    if(binding.modifiers['italico'])
      el.style.fontStyle = 'Italic';
    if(binding.arg == 'grande')
      el.style.fontSize = '2rem'
    if(binding.arg == 'chico')
      el.style.fontSize = '.1rem'
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
