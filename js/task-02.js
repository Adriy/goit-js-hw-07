const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
    
];


const ingredientsEl = document.querySelector('#ingredients');
const addEl = (array) => array.map(element => {
  const itemEl = document.createElement('li')
  itemEl.textContent = element
  return itemEl
});

ingredientsEl.append(...addEl(ingredients))