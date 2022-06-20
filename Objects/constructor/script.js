//Задание 1 
let obj = {};
function A() { return obj; }
function B() { return obj; }
alert( new A() == new B() ); 

//задание 2
function Calculator() {

    this.read = function() {
      this.a = +prompt('Введите число');
      this.b = +prompt('Введите число');
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );



//задание 3
function Accumulator(startingValue){
    this.value = startingValue
    this.read = function() {
        this.value += +prompt('Введите число');
      };
}

let accumulator = new Accumulator(1); 
accumulator.read(); 
accumulator.read(); 
alert(accumulator.value);