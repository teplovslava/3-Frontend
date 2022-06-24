//Задание 1 
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    alert("Hello!");
  }

//Задание 2
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    alert( a + b );
  }
  