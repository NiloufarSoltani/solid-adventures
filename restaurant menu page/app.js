const foods = [
    {
        image: 'img/butterlmilkPancakes.jpg',
        type: 'breakfast',
        title: 'Butterlmilk Pancakes',
        price: '$15.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est.'
    },
    {
        image: 'img/dinnerDouble.jpg',
        type: 'lunch',
        title: 'Dinner Double',
        price: '$13.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        image: 'img/godzillaMilkshacke.jpg',
        type: 'shake',
        title: 'Godzilla Milkshacke',
        price: '$6.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est, exercitationem laboriosam '
    },
    {
        image: 'img/mangoMilkshake.jpg',
        type: 'shake',
        title: 'Mango Milkshake',
        price: '$13.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est.'
    },
    {
        image: 'img/baconOverflow.png',
        type: 'lunch',
        title: 'Bacon Overflow',
        price: '$8.99',
        description: '\'Lorem ipsum dolor sit amet.'
    },
    {
        image: 'img/countryDelight.jpg',
        type: 'breakfast',
        title: 'Country Delight',
        price: '$20.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },
    {
        image: 'img/oreoDream.jpg',
        type: 'breakfast',
        title: 'Oreo Dream',
        price: '$18.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est.'
    },
    {
        image: 'img/americanClassic.jpg',
        type: 'lunch',
        title: 'American Classic',
        price: '$12.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        image: 'img/greenTea.jpg',
        type: 'breakfast',
        title: 'Green Tea',
        price: '$2.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        image: 'img/coldCereal.jpg',
        type: 'breakfast',
        title: 'Cold Cereal',
        price: '$8.99',
        description: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est.'
    },
]

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
function allItems() {
    ulItems.innerHTML = '';
    chooseItems(foods);
}

chooseBreakfast.addEventListener('click', () => {
    ulItems.innerHTML = '';
    let items = foods.filter(item => item.type === 'breakfast');
    chooseItems(items);
});

chooseLunch.addEventListener('click', () => {
    ulItems.innerHTML = '';
    let items = foods.filter(item => item.type === 'lunch');
    chooseItems(items);
});

chooseShake.addEventListener('click', shake)

function shake() {
    ulItems.innerHTML = '';
    let items = foods.filter(item => item.type === 'shake');
    chooseItems(items);
}

window.addEventListener('DOMContentLoaded', allItems)




