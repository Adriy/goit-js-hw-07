const inputEl = document.getElementById('validation-input');

inputEl.addEventListener(
  `blur`,

  function checksInputValue(event) {
    const lengthValue = this.dataset.length;
    if (event.currentTarget.value.length === Number(lengthValue)) {
      inputEl.classList = 'valid';
    } else {
      inputEl.classList = 'invalid';
    }
  },
);
