// v1 = []
// v1[0] = 3.4
// v1[10] = "abc"
// console.log(v1.length)
// console.log(v1)

// //inicializando na criação
// v2 = [2, "abc", true]
// console.log(v2)

// //iterando
// for (let i = 0; i<v2.length; i++){
//     console.log(v2[i])
// }

// //métodos utilitários dos vetores
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// //filter
// const apenasComA = nomes.filter((n) => n.startsWith("A"))
// console.log(apenasComA)

// //map
// const res = nomes.map((nome) => nome.charAt(0))
// console.log(res)

// //every
// const todosComecamComA = nomes.every((n) => n.startsWith("A"))
// console.log(todosComecamComA)

// //reduce
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac+v)
// console.log(soma)

// //criando funções
// function hello(){
//     console.log("oi")
// }
// hello()

// function hello(nome){
//     console.log("oi, " + nome)
// }
// hello('Lucas')

// function soma(a, b){
//     return a+b
// }
// const res = soma(2, 3)

// console.log(res)
// console.log(soma(2,2))
// console.log(hello('Pedro'))

// //funções anônimas
// const dobro = function(n){
//     return n*2
// }
// const res = dobro(4)
// console.log(res)

// //valor defaul para parametro
// const triplo = function(n=5){
//     return 3*n
// }
// console.log(triplo)
// console.log(triplo(10))

// //arrow functions
// const hello = () => console.log("HELLO")
// hello()

// const dobro = valor => valor*2
// console.log(dobro(10))

// const triplo = valor => {
//     return valor*3
// }
// console.log(triplo(10))

// const ehPar = n => {
//     return n % 2 === 0
// }
// console.log(ehPar(10))

//closures
/* Uma função pode ser atribuída a uma variável */
let umaFuncao = function(){
    console.log('Fui armazenada a uma variavel')
}
umaFuncao()

/* f recebe uma função como parâmetro e, por isso é uma função de alta orde,
    por devolver uma função , g também é de alta ordem */
function f(funcao){
    //chamada da função
    //note como a tipagem dinâmica tem seu preço
    funcao()
}

function g(){
    function outraFuncao(){
        console.log('Fui criada por g')
    }
    return outraFuncao;
}

//f pode ser chamada assim
f(function(){
    console.log('Estou sendo passada para f')
})

//g pode ser chamada assim
const gResult = g()
gResult()

//e assim também
g()() //o primeiro () chama a função g e o segundo () chama a função dentro dele

//outros testes
/* f chama g, que somente devolve uma função;
    nada é exibido */
f(g)

/* f chama a função devolvido por g;
    "fui criada por g" é exibida */
f(g())