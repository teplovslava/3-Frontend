class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = "FormatError";
    }
  }
  
let err = new FormatError("ошибка форматирования");