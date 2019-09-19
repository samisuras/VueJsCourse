import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar',{
  bind(el,binding,vnode){
    el.style.fontFamily = binding.value;
    if(binding.modifiers['negrilla'])
      el.style.fontWeight = 'bold';
    if(binding.modifiers['italico'])
      el.style.fontStyle = 'Italic';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
