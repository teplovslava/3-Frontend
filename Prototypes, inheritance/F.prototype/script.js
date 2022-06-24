//Задание 1
//true
//false
//true 
//undefined



//Задание 2
function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');