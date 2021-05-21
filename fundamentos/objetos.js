//obj é uma coleção pares chave e valor, inclusive podendo ter um outro obj dentro dele
const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 4889.90
//usando notação colchete com espaço - evitar usar
prod1['Desconto progressivo'] = 0.4
console.log(prod1)

//declaração usando notação literal
const prod2 = {
  nome: 'Camisa polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}
console.log(prod2)