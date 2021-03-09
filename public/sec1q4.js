const colorPicker = document.getElementById('colorPicker');
console.log('hi', colorPicker)
// const getRandomRGB = () => {
//   const r = Math.floor(Math.random() * Math.floor(255));
//   const g = Math.floor(Math.random() * Math.floor(255));
//   const b = Math.floor(Math.random() * Math.floor(255));
//   return `rgb(${r},${g},${b})`;
// };

// const colorPicker = document.getElementById('colorPicker');
// console.log('hi')

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return '#' + componentToHex(Number(r)) + componentToHex(Number(g)) + componentToHex(Number(b))
// }

// for (let i = 0; i < 10000; ++i) {
//   const btn = document.createElement('button');
//   const rgb = getRandomRGB();
//   btn.id = rgb;
//   btn.textContent = rgb;
//   btn.style.backgroundColor = rgb;
//   btn.addEventListener('click', (e) => {
//     console.log('e', e.target.innerHTML)
//     const regex = /([0-9])\w+/g;
//     const found = e.target.innerHTML.match(regex);

//     console.log('found', found, rgbToHex(found[0], found[1], found[2]))
//     const answerdiv = document.getElementById("answerBox")
//     answerdiv.innerHTML = rgbToHex(found[0], found[1], found[2])
//     console.log('answerdiv', answerdiv)
//   })
//   colorPicker.appendChild(btn);
// }