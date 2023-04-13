const form = document.getElementById('rectangle');

function equationAreaRectangle(event) {
  event.preventDefault();

  const result = document.getElementById('result');

  const lengthInput = document.getElementById('length');
  const entredLength = lengthInput.value.trim();

  const widthInput = document.getElementById('width');
  const entredWidth = widthInput.value.trim();

  if (entredLength.length === 0 || entredLength <= 0) {
    result.textContent = "يبدو أنه تم إدخال قيم غير مقبولة، يرجى إعادة إدخال أرقام حقيقية!";
    return;
  }

  if (entredWidth.length === 0 || entredWidth <= 0) {
    result.textContent = "يبدو أنه تم إدخال قيم غير مقبولة، يرجى إعادة إدخال أرقام حقيقية!";
    return;
  }

  const rectangle = {
    length: entredLength,
    width: entredWidth
  };

  result.innerHTML = (rectangle.length * rectangle.width) + "سم" + '<sup>2</sup>';

}

form.addEventListener('submit', equationAreaRectangle);