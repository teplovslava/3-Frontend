//Задание 1 (Переведите текст вида border-left-width в borderLeftWidth)
function camelize(str) {
    str.split('-') 
    str.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
    str.join(''); 
    return str;
}


//Задание 2 (Фильтрация по диапазону)
function filterRange(arr, a, b){
    return arr.filter(item=> (item>a && item< b))
}


//Задание 3 (Фильтрация по диапазону "на месте")
function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i];
        if (max < a || max > b) {
          arr.splice(i, 1);
          i--;
        }
      }}
    
let arr = [5, 3, 8, 1];
    
filterRangeInPlace(arr, 1, 4);
alert( arr ); 


//Задание 4 (Сортировать в порядке по убыванию)
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>  b-a)


//Задание 5 (Скопировать и отсортировать массив)
function copySorted(arr) {
    arr.slice();
    arr.sort();
    return arr;
  }


  //Задание 6 (Скопировать и отсортировать массив)
  let calc = new Calculator;
  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }



//Задание 7 (Трансформировать в массив имён)
let names = users.map(item => item.name);



//Задание 8 (Трансформировать в объекты)
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));



//Задание 9 (Отсортировать пользователей по возрасту)
function sortByAge(users){
    users.sort((a,b)=> a.age-b.age)
}


//Задание 10 (Перемешайте массив)
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}



//Задание 11 (Получить средний возраст)

function getAverageAge(users) {
    let sum = 0;
    users.forEach(element => sum+=(element.age))
    let averageAge = sum / users.length
    return averageAge;
}



//Задание 12 (Оставить уникальные элементы массива)
function unique(arr){
    let result = [];

  for (let el of arr) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}

