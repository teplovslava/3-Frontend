//Задание 1
document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.lastElementChild


//Задание 2
//Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
//Нет. Неверно. Потому что elem.children[0] – потомок-элемент. 
//Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.


//Задание 3
let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }