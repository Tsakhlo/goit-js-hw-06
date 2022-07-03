const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = [];
ingredients.forEach(item => {
  const itemList = document.createElement('li');
  itemList.textContent = item;
  itemList.classList.add('item');
  items.push(itemList);
})

document.querySelector('#ingredients').append(...items);