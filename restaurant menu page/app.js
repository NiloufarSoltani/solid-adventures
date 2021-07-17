async function getFoods() {
    let response = await fetch('foods.json'),
        foods = await response.json();
    return foods;
}

let ulItems = document.querySelector('#items');

function chooseItems(items) {
    for (let item of items) {
        let img = document.createElement('img');
        img.className = 'foodPic';
        img.src = item.image;

        let name = document.createElement('h4');
        name.className = 'foodName'
        name.innerText = item.title;

        let price = document.createElement('span');
        price.className = 'foodPrice';
        price.innerText = item.price;

        let title = document.createElement('div');
        title.className = 'title';
        title.append(name, price);

        let description = document.createElement('small');
        description.className = 'foodDes';
        description.innerText = item.description;

        let content = document.createElement('div');
        content.className = 'content';
        content.append(title, description);

        let listItem = document.createElement('li');
        listItem.append(img, content);

        ulItems.append(listItem);
    }
}

let chooseAll = document.querySelector(".all");
let chooseBreakfast = document.querySelector(".breakfast");
let chooseLunch = document.querySelector(".lunch");
let chooseShake = document.querySelector(".shake");

chooseAll.addEventListener('click', allItems);

async function allItems() {
    ulItems.innerHTML = '';
    let foods = await getFoods();

    chooseItems(foods);
}

chooseBreakfast.addEventListener('click', async () => {
    ulItems.innerHTML = '';

    let foods = await getFoods();
    let items = foods.filter(item => item.type === 'breakfast');
    chooseItems(items);
});

chooseLunch.addEventListener('click', async () => {
    ulItems.innerHTML = '';

    let foods = await getFoods();
    let items = foods.filter(item => item.type === 'lunch');
    chooseItems(items);
});

chooseShake.addEventListener('click', shake)

async function shake() {
    ulItems.innerHTML = '';
    let foods = await getFoods();
    let items = foods.filter(item => item.type === 'shake');
    chooseItems(items);
}

window.addEventListener('DOMContentLoaded', allItems)




