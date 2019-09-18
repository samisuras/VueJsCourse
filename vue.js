new Vue({
    el: '#vm',
    data: {
        x:0,
        y:0,
        contador:0
    },
    methods: {
        mostrarUbicacion: function (e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        sumar: function(aumento){
            this.contador+=aumento;
        }
    },
})