// --- Sum of two numbers ---
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert(a + b);

// --- Correct rounding for 6.35 ---
alert(Math.round(6.35 * 10) / 10); // 6.4

// --- Function to read a number from user ---
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}
alert(`Read: ${readNumber()}`);

// --- Demonstration of floating point issue ---
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i);
}

// --- Random floating-point number from min to max ---
function random(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// --- Random integer from min to max inclusive ---
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
