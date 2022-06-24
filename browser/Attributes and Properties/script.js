//Задание 1
let elem = document.querySelector('[data-widget-name]');
alert(elem.dataset.widgetName);

//Задание 2
let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; 

  if (!href.includes('://')) continue; 

  if (href.startsWith('http://internal.com')) continue; 

  link.style.color = 'orange';
}
