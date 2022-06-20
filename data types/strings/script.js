//Задание 1 (Сделать первый символ заглавным)
function ucFirst(str){
    if (!str) return str;
   return str[0].toUpperCase() + str.slice(1)
}


//Задание 2 (Проверка на спам)
function checkSpam(str){
    newStr = str.toLowerCase()
    if(newStr.indexOf('viagra')>=0 || newStr.indexOf('xxx')>=0){
        return true;
}else {
    return false;
}
}



//Задание 3 (Усечение строки)
function truncate(str, maxlength){
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}


//Задание 4 (Выделить число)
function extractCurrencyValue(str) {
    return Number(str.slice(1));
  }