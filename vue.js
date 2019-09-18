new Vue({
    el: '#vm',
    data: {
        contador: 0
    },
    methods: {
        sumarUno: function(){
            this.contador ++;
        },
        restarUno: function(){
            this.contador--;
        }
    },
})