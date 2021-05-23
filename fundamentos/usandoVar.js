//usando var
{
  {
    {
      var sera = 'Será?'
    }
  }
}
//a variavel var, dentro de um bloco de código que não seja uma função, 
//fica visível pra todos que estejam fora daquele bloco
//uma variável definida com var só tem dois escopos póssíveis: dentro da função e globalmente
console.log(sera)

function teste(){
  var local = 123
  //somente consegue acessar dentro da função
  console.log(local)
}
teste()
// console.log(local) - local não está definido. o escopo dela é somente dentro da função
// todas as variáveis globais podem ser sobrescritas porque todas as variáveis vão parar no mesmo lugar (dentro de global)
// quando é criada uma variável e ela vai pro escopo global, tem a vantagem de acessar de qualquer parte
// mas tem a desvantagem de poder sobrescrevê-la e gerar um problema
// FUJA DO ESCOPO GLOBAL

//outros exemplos com var
var numero = 1
{
  var numero = 2
  console.log('dentro: ', numero)
}
//uma sobrescreveu a outra
console.log('fora: ', numero)

