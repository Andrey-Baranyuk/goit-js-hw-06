const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector("ul#ingredients");

const addIngredient = ingredients.map( option => {
       const createingredient = document.createElement("li");
       createingredient.textContent = option;
       return createingredient;
});
console.log(addIngredient);
allIngredients.append(...addIngredient);