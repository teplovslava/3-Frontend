//Задание 1
for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    title = title.trim();
    let count = li.getElementsByTagName('li').length;
    alert(title + ': ' + count);
}


//Задание 3
//вывод - BODY


//4
//document – объект класса HTMLDocument


