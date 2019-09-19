import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar',{
  bind(el,binding,vnode){
    el.style.fontFamily = 'times new roman'
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
