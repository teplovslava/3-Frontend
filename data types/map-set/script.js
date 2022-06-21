//Задание 1 ()
function unique(arr) {
    return Array.from(new Set(arr));
  }


//Задание 2 (Отфильтруйте анаграммы)
function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join(""); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
alert( aclean(arr) );


//задание 3 (Перебираемые ключи)
let keys = Array.from(map.keys());
