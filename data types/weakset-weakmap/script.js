//Задание 1 
let readed = new WeakSet();

readed.add(messages[0]);
readed.add(messages[1]);
alert("Read message 0: " + readed.has(messages[0]));
messages.shift();

//Задание 2 
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));