new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlerta(){

            alert('Exibindo alerta!');

        },

        armazenaValor(e){

            console.log(e);
            this.valor = e.target.value;

        }
    }
})