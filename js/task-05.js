const inputEl = document.getElementById("name-input");
const nameOutputEl = document.getElementById("name-output")

inputEl.addEventListener('input', (e) => {
    let value = inputEl.value;
    if (value === '') {
        nameOutputEl = "незнакомец"
    } else {
        nameOutputEl.textContent = value;
    };
});
