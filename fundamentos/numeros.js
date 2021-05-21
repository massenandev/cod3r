const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)

console.log(media.toFixed(2)) // limita a duas casas decimais, mas não transforma o valor de media
console.log(media.toString())
//converte em binário
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number) //função

//alguns cuidados com number
console.log(7/0) //infinity - js retorna esse tipo
console.log("10"/2) //pega o valor da string, converte e faz a operação. para float, usa o ponto. Ex: 10.2
console.log("Show"*2) // NaN
console.log(0.1 + 0.7) //imprecições com ponto flutuante - se fosse sempre preciso, teria lentidão muito maior. É a especificação do i3e que gera essa imprecisão
console.log((10.345).toFixed(2)) //duas casas decimais

//objeto Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) //raio ao quadrado

console.log(area)
console.log(typeof Math) //objeto
console.log("3" + 2) //resultado vai ser 32
console.log("3" - 2) //resultado 1, porque o - não faz sentido no 'mundo' da string

