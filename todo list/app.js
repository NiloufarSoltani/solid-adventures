let initial = document.querySelector('#initial-goods');
let addBtn = document.querySelector('#add-btn');
let changeBtn = document.querySelector('#edit-btn');
let container = document.querySelector('#item-container');
let clearItems = document.querySelector('#clear-items');
let notification = document.getElementById('notification');
let itemList = localStorage.length ? localStorage.getItem('myList').split(',') : [];

const addItem = function (item) {
    if (!item) {
        alert('Item name is required!');
        return;
    };

    itemList.push(item);
    initial.value = '';

    showNotification('A new item added!', 'primary');
    render();
}

const editItem = function (itemIndex, newValue) {
    if (newValue) {
        itemList[itemIndex] = newValue;
    } else {
        alert('Item name is required!')
    }

    addBtn.style.display = 'inline';
    changeBtn.style.display = 'none';
    initial.value = '';
    initial.removeAttribute('data-id');

    showNotification('An item changed!', 'primary');
    render();
}

const deleteItem = function (itemIndex) {
    itemList.splice(itemIndex, 1);

    showNotification('An item deleted!', 'danger');
    render();
}

function createItem(initialItem, index) {
    item = document.createElement('li');
    item.className = 'item';
    item.innerText = initialItem;

    let buttonBox = document.createElement('div');
    buttonBox.className = 'buttonBox';

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
        changeBtn.style.display = 'inline';
    });

    buttonBox.append(editBtn, deleteBtn);
    item.append(buttonBox);
    container.append(item);
}

function clearAll() {
    itemList.length = 0;

    showNotification('All items deleted!', 'danger');
    render();
}

function showNotification(message, type) {
    if (type == 'danger') {
        notification.style.backgroundColor = '#edc5c5';
    } else {
        notification.style.backgroundColor = '#bccfbc';
    }
    notification.innerText = message;
    setTimeout(function () {
        notification.style.background = 'none';
        notification.innerText = '';
        console.log('k')
    }, 1500);
}

const render = function () {
    container.innerHTML = '';
    localStorage.setItem('myList', itemList);
    itemList.map((item, index) => {
        createItem(item, index);
    });
}

render();

clearItems.addEventListener('click', clearAll);
addBtn.addEventListener('click', () => addItem(initial.value));
changeBtn.addEventListener('click', () => editItem(initial.dataset.id, initial.value));
initial.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (initial.dataset.id) {
            editItem(initial.dataset.id, initial.value);
        } else {
            addItem(initial.value);
        }
    }
});