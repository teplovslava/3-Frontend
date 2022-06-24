//Задание 1 
//true-rabbit.
//null-animal.
//undefined, такого свойства больше нет.


//Задание 2
let head = {
    glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


//Задание 3
//rabbit


//Задание 4
let hamster = {
    stomach: [],

    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  