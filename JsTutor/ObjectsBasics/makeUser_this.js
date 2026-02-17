function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();


function makeUserCorrect() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user2 = makeUserCorrect();
alert(user2.ref().name); 
