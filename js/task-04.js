const decBtn = document.querySelector("[data-action='decrement']")
const decInc = document.querySelector("[data-action='increment']")

const counterValue = document.getElementById('value')

function getCounter() {
    let value = 0
    function decrement() {
        return value -= 1
    }
    function increment() {
        return value += 1
    }

    return {decrement, increment}
}
const c = getCounter()
console.log(c)

decBtn.addEventListener('click', () => {
    let result = c.decrement()
    counterValue.textContent = result
})

decInc.addEventListener('click', () => {
    let result = c.increment()
    counterValue.textContent = result
})

