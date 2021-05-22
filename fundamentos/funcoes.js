//js é totalmente baseado em funções
//obj em js é uma função
console.log(typeof Object)

//criar uma class é um artificio de sintaxe de, internamente, construir uma função
class Produto {}
console.log(typeof Produto)


//uma função é um verbo, uma ação baseada numa sentença de código
//função -> recebe alguns dados -> instruções -> retorna dados

// função sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2,3) //5
//nesse caso, o segundo parametro será undefined
//logom seria 2 + undefined
imprimirSoma(2) //Nan
//quando é colocado mais parametros, o js ignora o resto e faz a operação somente com os dois primeiros (os usados)
imprimirSoma(2,3,4,5,6,7)//5
//também é possível chamar somente a função, sem seus parâmetros
//a operação seria undefined + undefined. logo, o resultado:
imprimirSoma() //NaN

//em js, não há o formalismo de outras linguagens de ter que passar os parâmetros certinhos para a chamada da função

//função com retorno
//b será zero por padrão, caso não seja passado na chamada da função
function soma2(a, b = 0){
  return a + b
}
//chama a função dentro do console.log porque n imprime nada no console porque essa função tá retornando um valor
console.log(soma2(2,3)) //5
console.log(soma2(2))//2
console.log(soma2())//NaN

//armazenando função em uma variável-const. Nem toda linguagem é capaz disso
const imprimirSoma2 = function (a, b) {
  console.log(a + b)
} 
imprimirSoma2(2, 3)

//armazenando uma função arrow em uma variável - forma reduzida de construir uma função
const soma = (a, b) => {
  return a + b
}
console.log(soma(2, 3))

//retorno implicito
//função que executa somente uma sentença de código. logo, o resultado dessa sentença de código será retornado
//caso não retorne nada, será undefined
const subtracao = (a,b) => a-b //desconforto pra quem não conhece
console.log(subtracao(2,3)) //-1

const imprimir2 = a => console.log('Passou aqui')
