const REQUIRED = 'REQUIRED';
const result = document.getElementById('result');

function getRectangleInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function validate(value, flag) {
  if (flag === REQUIRED) {
      if(value <= 0 || value.length === 0)
        return true;
      else return false;
  }
}

function createRectangle(length, width) {
  if (validate(length, REQUIRED) || validate(width, REQUIRED)) {
    throw new Error(
      "يبدو أنه تم إدخال قيم غير مقبولة، يرجى إعادة إدخال أرقام حقيقية!"
    );
  }
  return {
    length: length,
    width: width,
    area: length * width
  };
}

function getResult(rectangle) {
  result.innerHTML = rectangle.area + "سم" + '<sup>2</sup>';
}

function equationAreaRectangle(event) {
  event.preventDefault();

  const entredLength = getRectangleInput('length');
  const entredWidth = getRectangleInput('width');

  try {
    const newRectangle = createRectangle(entredLength, entredWidth);

    getResult(newRectangle);
  } catch (err) {
    result.textContent = err.message;
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('rectangle', equationAreaRectangle);