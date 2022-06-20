//Задача 1 (Обязателен ли "else"?)
//Обе функций работают одинаково


//Задача 2 (Перепишите функцию, используя оператор '?' или '||')
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

//второй вариант 
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }



//Задача 3 (Функция min(a, b))
function min (a, b){
    if(a < b) {
        return a;
    }else {
        return b;
    }
}


//Задача 4 (Функция pow(x,n))
let x = prompt('Введите x')
let n = prompt('Введите n')
if (n<1){
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    pow (x, n)
}

function pow (x, n){
    return x**n;
}

