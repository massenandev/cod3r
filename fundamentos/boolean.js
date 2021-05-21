let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //false
console.log(!!isAtivo) //vai mostrar se o isAtivo é true ou false

console.log('os tipos que se comportam como verdadeiros: ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //string com um espaço
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos: ')
console.log(!!0) //zero resolve para falso
console.log(!!'') //string vazia
console.log(!!NaN)
console.log(!!undefined)
console.log(!!null)
console.log(!!(isAtivo = false))

console.log('pra finalizar: ')
//esse converte pra verdadeiro ou falso, dependendo do contexto
console.log(!!('' || null || 0 || 'epa')) // retorna o único valor verdadeiro que ele encontrou

let nome = ''
//caso não esteja válido, use 'tal' como valor padrão
console.log(nome || 'Desconhecido') //desconhecido pq o nome deu false
