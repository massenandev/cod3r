//usando a api da string
const escola = 'Cod3r'
console.log(escola.charAt(4)) // r
console.log(escola.charAt(5)) // n existe uma quinta letra. logo, ele retorna um valor vazio
console.log(escola.charCodeAt(3)) // valor dentro da tabela unicode / (asken) / (codigo html)
console.log(escola.indexOf('3')) //indice associado ao digito 3

console.log(escola.substr(1)) //a partir do indice 1
console.log(escola.substring(0,3)) // do indice zero ao 3, sem incluir o indice final

console.log('Escola'.concat(escola).concat("!")) // literal é um valor sem armazenar numa variável
console.log(escola.replace(3, 'e')) // substitui o terceiro indice por 'e'

//regex
console.log(escola.replace(/\d/g, 'e')) // substitui todos os digitos por 'e' - g de global
console.log(escola.replace(/\w/g, 'e')) // substitui todos as palavras por 'e'

console.log('Ana, Maria, Pedro'.split(',')) //gera um array com 3 elementos independentes
console.log('Ana, Maria, Pedro'.split(/,/)) //gera um array com 3 elementos independentes usando REGEC

//template strings - ECMA SCRIPT 2015
const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
//não pode quebrar linha usando a concatenação com +
//template string interpola - convrete a variável dentro do próprio texto
const templateString = `
  Olá
  ${nome}!`
  console.log(concatenacao, templateString)

  //expressões
  console.log(`1 + 1 = ${1 +1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei, ${up('cuidado')}!`)
