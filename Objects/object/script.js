//Задание 1 (Привет, object)
let user = {};
user.name ="John";
user.surname ="Smith";
user.name ="Pete";
delete user.name;


//Задание 2 (Проверка на пустоту)
let schedule = {};

alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) );

function isEmpty(object){
for(let key in object){
    return false;
}
return true;
}


//Задание 3 (Объекты-константы?)
//Будет работать,так как const не запрещает изменять элементы внутри объктов


//Задание 4 (Сумма свойств объекта)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function objectSum(object){
    let sum = 0;
    for(let key in object){
       sum+= Number(object[key])
    }
    return sum;
}

objectSum(salaries)


//Задание 5 (Умножаем все числовые свойства на 2)
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(objectName){
    for(let key in objectName){
        if(objectName[key].typeof == "number"){
            objectName[key]=objectName[key]*2 
        }
    }
}

multiplyNumeric(menu)
