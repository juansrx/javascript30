const endpointURL = 'https://dummyjson.com/recipes';

let data = [];

const v = fetch(endpointURL)
    .then(result => result.json())
    .then(json => { data = json.recipes; console.log(data) });

/**
 * 
 * @param {*} word 
 * @returns 
 */
const filterByWord = (word) => {

    const regexp = new RegExp(word, 'gi');
    return data.filter((w) => regexp.test(w.cuisine) ||
        regexp.test(w.name) ||
        w.ingredients.some(ingredient => regexp.test(ingredient)));
};

/**
 * 
 * @param {*} recipe 
 * @returns 
 */
const generateRecipeHTML = (recipe) => {

    return `<li class="recipeItem">
        <h3 class="name">
            ${recipe.name}
        </h3>
        <div class="cuisine">
            ${recipe.cuisine}
        <div/>
        <div class="ingredients">
            ${recipe.ingredients.map(ingredient =>'<span>' + ingredient + '</span>')}
        </div>
    <li/>`;
};


const displayMatchesList = function () {

    const matchesHTML = filterByWord(this.value).map(
        recipe => generateRecipeHTML(recipe)
    );

    console.log(matchesHTML);

    document.querySelector('#recipeList').innerHTML = matchesHTML;
};

document.querySelector('#queryField').addEventListener('change', displayMatchesList);
document.querySelector('#queryField').addEventListener('keyup', displayMatchesList);







