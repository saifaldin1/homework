const result = document.getElementById('result');

class Validator {
  static REQUIRED = 'REQUIRED';

  static validate(value, flag) {
    if (flag === this.REQUIRED) {
      if(value <= 0 || value.length === 0)
        return true;
      else return false;
    }
  }
}

class Rectangle {
  constructor($length, $width) {
    this.length = $length;
    this.width = $width;
    this.area = this.length * this.width;
  }

  getResult() {
    result.innerHTML = this.area + "سم" + '<sup>2</sup>';
  }
}

class equationAreaRectangle {
  constructor() {
    this.form = document.getElementById('rectangle');
    this.length = document.getElementById('length');
    this.width = document.getElementById('width');

    this.form.addEventListener('submit', this.signupHandler.bind(this));
  }

  signupHandler(event) {
    event.preventDefault();
    const enteredLength = this.length.value.trim();
    const enteredWidth = this.width.value.trim();

    if (
      Validator.validate(enteredLength, Validator.REQUIRED) ||
      Validator.validate(enteredWidth, Validator.REQUIRED)
    ) {
      result.textContent = "يبدو أنه تم إدخال قيم غير مقبولة، يرجى إعادة إدخال أرقام حقيقية!";
      return;
    }

    const newRectangle = new Rectangle(enteredLength, enteredWidth);
    newRectangle.getResult();
  }
}

new equationAreaRectangle();