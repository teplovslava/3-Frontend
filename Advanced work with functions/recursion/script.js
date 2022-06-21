//Задание 1
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

//рекурсия
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }

//арифм прогрессия
function sumTo(n) {
    return n * (n - 1) / 2;
  }


//Задание2
function factorial(n){
    return (n==1)? 1: n*factorial(n-1)
}

//Задание 3 
function fib(n){
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}



//Задание 4
function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  
  }
//рекурсия 
function printList(list) {

    alert(list.value); // выводим текущий элемент
  
    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }
  
  }



//Задание 5
function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }

//рекурсия
function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  }