//Задание 1
let {name, years: age, isAdmin = false} = user;


//Задание 2 
function topSalary(salaries) {
    let max = 0;
    let salName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        salName = name;
      }
    }
  
    return salName;
  }