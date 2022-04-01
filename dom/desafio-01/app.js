new Vue({
    el: '#desafio',
    data: {
        name: 'Gabriel Batista',
        age: 24,
        img: 'teste.png',
    },
    methods: {

        randomNum(){

            return Math.random();
            
        },

        calcIdade(num){
            
            let idade = num * 3

            return idade;

        }
    }
});