function wrapGifts(gifts) {
  let wrapper = [];
  
  // console.log(gifts);
  const maxWidth = gifts[0].length + 2;  
  // console.log(maxWidth);

  //Base
  wrapper.push('*'.repeat(maxWidth));

  //Gift
  for (let i = 0; i < gifts.length; i++) {
    wrapper.push(`*${gifts[i]}*`);        
  }

  //Fondo
  wrapper.push('*'.repeat(maxWidth));

  return wrapper;
}

// Test Function
console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

//Show results
const result = document.getElementById("result");
result.textContent = wrapGifts(["📷", "⚽️"]);
