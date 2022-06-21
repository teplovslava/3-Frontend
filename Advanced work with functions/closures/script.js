//Задание 1
//вывод -0,1 


//Задание 2 
//Будет работать


//Задание 3
//выведет ошибку т.к. функция внутри if


//Задание 4
function sum(a) {

    return function(b) {
      return a + b; 
    };
  
  }


//Задание 5
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }


function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }



//Задание 6
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  users.sort(byField('name'));
  users.forEach(user => alert(user.name)); 
  
  users.sort(byField('age'));
  users.forEach(user => alert(user.name));


//Задание 7
function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
  
  
    }
  
    return shooters;
  }
  