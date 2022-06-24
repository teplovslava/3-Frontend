//Задание 1
let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
      value() { // значение -- это функция
        return Object.keys(this).join();
      }
    }
  });

  
  //Задание 2
  //rabbit
  //все остальные - undefined