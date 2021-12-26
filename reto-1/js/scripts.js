function contarOvejas(ovejas) {
  return ovejas.filter((oveja) => oveja.color === 'rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a'));   
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

