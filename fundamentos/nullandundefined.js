//atribuição por valor e atribuição por referência
const a = { name: ' Teste' }
console.log(a)

//o que, de fato, a var 'a' armazena? ela tem um endereço no qual esse objeto tá localizao
//existe um endereço apontando pra o objeto. ao fazer essa atribuição, eles vao apontar pro mesmo lugar
const b = a
b.name = 'Opa'
//a constante a mudou porque os endereços na memória são os mesmos
//essa é uma atribuição por referência
console.log(a)

//atribuição por valor
let c = 3 //tipo primitivo
let d = c //d recebeu o VALOR de c
//a variavel d recebeu o valor de c
d++
//o valor de d será 4 e não 3.
// quando se trabalha com tipos primitivos, faz-se uma copia por valor. os valores de c e d são independentes
//nesse caso, não apontam pro mesmo lugar na memória. eles têm um mesmo valor numérico
console.log(d)

//conceito de null: n existe referencia na memória

//undefined: var q n foi inicializada.não faz sentido atribuir um valor undefined pra alguma var que já foi inicializada
let valor //var não inicializada. o valor dela, por padrão, é undefined
console.log(valor)

//não tem valor e não tem nenhum endereço que aponte pra algum local de memória
valor = null
console.log(valor)
//console.log(valor.toString()) da erro - o nulo não tem nenhuma referência pro toString

const produto = {}
console.log(produto.preco) //não da erro, vai dar undefined, porque o que tá definido é o produto e não o preço
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined. deixe que a linguagem o faça
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)