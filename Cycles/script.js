//Задача 1 (Последнее значение цикла)
//выведет- 3, потом 2 , потом 1


//Задача 2 (Какие значения выведет цикл while?)
//1 выведет от 1 до 4
//2 выведет от 1 до 5 


//Задача 3 (Какие значения выведет цикл for?)
//1 выведет от 0 до 4
//2 выведет от 0 до 4 


//Задача 4 (Выведите чётные числа)
for(i = 2; i < 10; i++){
    if (i % 2 ==0){
        alert(i);
    }
}


//Задача 5 (Замените for на while)
let i = 0 
while(i < 3){
    alert( `number ${i}!` );
    i++;
}


//Задача 6 (Повторять цикл, пока ввод неверен)
let result
do {
    result = prompt("Введите число!")
  } while (result < 100 && result);



//Задача 7 (Вывести простые числа)
let result = prompt("Введите число ")
for(x=2; x < result; x++){
    if(x%1==0 && x / x == 1 && ( x/2==1  || x/3==1 || x/5==1) ||(x % 2!= 0 && x % 3!= 0 && x % 5!= 0 )){
        alert(x)
    }else{
        continue;
    }
}