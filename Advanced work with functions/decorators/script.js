//Задание 1
function spy(func) {
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
    }
    wrapper.calls = [];  
    return wrapper;
  }

//Задание 2
function delay(x, time) {
    return function() {
      setTimeout(() => x.apply(this, arguments), time);
    };
  }
  let f1000 = delay(alert, 1000);

//Задание 3
function debounce(x, time) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      x.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, time);
    };
  
  }

//Задание 4
function throttle(func, time) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, time);
    }
  
    return wrapper;
  }