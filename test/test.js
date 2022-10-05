let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== 'function') {
    console.log(`${key} : ${rect[key]}`)
  }
}