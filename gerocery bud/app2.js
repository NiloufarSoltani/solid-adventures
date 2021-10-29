let initial = document.querySelector('#initial-goods');
let addBtn = document.querySelector('#add-btn');
let changeBtn = document.querySelector('#edit-btn');
let container = document.querySelector('#item-container');
let clearItems = document.querySelector('#clear-items');
let itemList = [];

const addItem = function (item) {
    if (!item) {
        alert('Item name is required!');
        return;
    };

    itemList.push(item);
    initial.value = '';

    render();
}

const editItem = function (itemIndex, newValue) {
    itemList[itemIndex] = newValue;

    addBtn.style.display = 'block';
    changeBtn.style.display = 'none';
    initial.value = '';
    initial.removeAttribute('data-id');

    render();
}

const deleteItem = function (itemIndex) {
    itemList.splice(itemIndex, 1);
    render();
}

function createItem(initialItem, index) {
    item = document.createElement('li');
    item.className = 'item';
    item.innerText = initialItem;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteItem';
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteItem(index);
    });

    let editBtn = document.createElement('button');
    editBtn.className = 'editItem';
    editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        initial.value = itemList[index];
        initial.setAttribute('data-id', index);
        initial.focus();

        addBtn.style.display = 'none';
        changeBtn.style.display = 'block';
    });

    item.append(editBtn, deleteBtn);

    container.append(item);
}

function clearAll() {
    itemList.length = 0;
    render();
}

const render = function () {
    container.innerHTML = '';

    let newItems = itemList.map((item, index) => {
        createItem(item, index);
    });
}

clearItems.addEventListener('click', clearAll);
addBtn.addEventListener('click', () => addItem(initial.value));
changeBtn.addEventListener('click', () => editItem(initial.dataset.id, initial.value));
initial.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        if(initial.dataset.id) {
            editItem(initial.dataset.id, initial.value);
        } else {
            addItem(initial.value);
        }
    }
});
