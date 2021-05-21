// estruturas unidimensionais, forma de agrupar multiplos valores de forma indexada
// 0,1,2,3,4,5, ...
//Em js, ele é heterogêneo (fracamente tipado) e não tem tamanho fixo

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
//em qualquer outra linguagem, daria erro, mas aqui não gera erro. Somente diz que é undefined
console.log(valores[4])
//pode-se adicionar o indice 4 e passa a ter esse elemento
valores[4] = 10
console.log(valores)
//array heterogeneo - desorganizado
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
//pega o ultimo valor do array e retorna
console.log(valores.pop())
//<1 empty item>
delete valores[0]
console.log(valores)

console.log(typeof valores)
