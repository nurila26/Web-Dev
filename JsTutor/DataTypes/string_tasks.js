// --- 1. Uppercase the first character ---
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("john"));

// --- 2. Check for spam ---
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx')); 
alert(checkSpam("innocent rabbit")); 

function truncate(str, maxlength) {
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}
alert(truncate("What I'd like to tell on this topic is:", 20)); 
alert(truncate("Hi everyone!", 20)); 


function extractCurrencyValue(str) {
  return +str.slice(1);
}
alert(extractCurrencyValue('$120') === 120); 
