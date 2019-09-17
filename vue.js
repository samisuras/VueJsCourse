var app = new Vue({
    el: '#vue',
    data: {
        mensaje: 'Aprende Vue.Js facilmente',
        src: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        mostrarMensaje: function(){
            return this.mensaje;
        }
    },
    beforeCreate: function(){
        console.log('LLamando beforeCreate');
    },
    created: function(){
        console.log('LLmando create');
    },
    beforeMount: function(){
        console.log('LLamando beforeMount');
    },
    mounted: function(){
        console.log('LLamando mounted');
    },
    beforeUpdated: function(){
        console.log('LLamando beforeUpdated');
    },
    updated: function(){
        console.log('LLamando updated');
    },
    beforeDestroy: function(){
        console.log('LLamando beforeDestroy');
    },
    destroy: function(){
        console.log('LLamando destroy');
    }
});