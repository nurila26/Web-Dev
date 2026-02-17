// 1️⃣ Create an empty object and manipulate properties
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2️⃣ Check for emptiness
function isEmpty(obj) {
  for (let key in obj) {
    return false; 
  }
  return true; 
}

// Example usage:
let schedule = {};
alert(isEmpty(schedule)); 
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); 

// 3️⃣ Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum); 

// 4️⃣ Multiply numeric property values by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

// Example usage:
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);

