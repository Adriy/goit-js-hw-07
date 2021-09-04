const numberOfCategories = document.querySelectorAll('.item')
console.log(`В списке ${numberOfCategories.length} категории.`);

const categoriesEl = document.querySelectorAll('#categories>li');
categoriesEl.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}
    Количество элементов: ${elem.lastElementChild.children.length}`)
})


