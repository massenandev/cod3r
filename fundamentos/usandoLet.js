var numero = 1
{
  //let tem escopo de bloco
  let numero = 2
  console.log('dentro: ', numero)
}
//var tem escopo global
console.log('fora: ', numero)

//escopo mais abrangente
let resultado = 'resultado'
{
  //aqui tem escopo mais restrito (de bloco). logo, tem preferência
  let resultado2 = 'resultado de dentro'
  console.log('dentro: ', resultado)
}
console.log('fora: ', resultado)

// var tem dois escopos: global e de função
// let tem três escopos: global, de função e de bloco - este escopo a mais faz toda a diferença