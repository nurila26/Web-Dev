// Function camelize: converts dash-separated words to camelCase
function camelize(str) {
  return str
    .split('-') 
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join(''); 

// Test examples
alert(camelize("background-color")); 
alert(camelize("list-style-image")); 
alert(camelize("-webkit-transition")); }
