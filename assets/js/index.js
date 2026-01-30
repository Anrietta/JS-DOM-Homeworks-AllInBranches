
// -------------------------------------------------------------------------------------------------------------------------------


// 19. JS. DOM. TodoList

// Завдання: написати додаток “список справ”

// Необхідний функціонал - форма вводу і кнопка, за натиснення на яку записаний 
// у форму текст відображається елементом списку).

// Опціональний функціонал (завдання з зірочкою): кожен елемент має кнопку “видалення”,
//  за натиснення на яку елемент списку видаляється і зникає.

// Ця задача потребує мислення в першу чергу про дані (інформацію від користувача, яка має 
//     десь зберігатись), і вже в другу чергу - про елементи, які рендеряться на екран. 
//     Спробуйте в першу чергу спиратись на дані, а потім синхронізовувати їх і елементи на екрані.

// Стилістично оформити власним за смаком.


const saveBtn = document.querySelector('.save-btn');
const inputContent = document.querySelector('#input');


saveBtn.addEventListener('click', function () {
    
    if(!inputContent || !inputContent.value.trim()) {
        alert('Поле для вводу не може бути пустим!');
        inputContent.value = '';
        inputContent.focus();
        return;
    }
    
    const listItemEl = createlistItem(inputContent.value);
    listEl.prepend(listItemEl);
})

const listEl = document.createElement('ol');
listEl.id = 'task-list';
document.body.append(listEl);

function listClickListener (e) {
    const targetDeleteBtn = e.target.closest('.delete-btn');
    const targetItem = e.target.closest('.list-item');
    const targetItemText = targetItem.querySelector('.item-text')
    
    if (!targetItem) return;
    
    if (targetDeleteBtn) {
        targetItem.remove();
        inputContent.focus();
        return;
    }
    
    targetItemText.classList.toggle('done');
    
}

listEl.addEventListener('click', listClickListener);


function createlistItem (contentText) {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('list-item');
    listEl.prepend(listItemEl);

    const itemContentWrapper = document.createElement('div');
    itemContentWrapper.classList.add('content-wrapper');
    listItemEl.append(itemContentWrapper);


    const itemTextEl = document.createElement('span');
    itemTextEl.classList.add('item-text');
    itemTextEl.textContent = contentText;


    const deleteBtn = createDeleteBtn();
    itemContentWrapper.append(itemTextEl, deleteBtn);

    inputContent.value = '';
    inputContent.focus();
    
    return listItemEl;

}


function createDeleteBtn() {
    const deleteBtnEl = document.createElement('button');
    deleteBtnEl.classList.add('delete-btn');
    deleteBtnEl.textContent = 'Видалити';

    return deleteBtnEl;
}

