//Задание 1 (Проверка синтаксиса)
//Будет ошибка


//Задание 2 (Объясните значение "this")
//1 и  2  работают обычно
//3 и 4 выведет undefined


//Задание 3 (Использование "this" в литерале объекта)
//вывод - ошибка


//Задание 4 (Создайте калькулятор)
let calculator = {
    read() {
        this.x = +prompt('Введите 1 число');
        this.y = +prompt('Введите 2 число');
      },
    sum(){
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
      }
  };

  calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//задание 5 (Цепь вызовов)
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep(); // 1