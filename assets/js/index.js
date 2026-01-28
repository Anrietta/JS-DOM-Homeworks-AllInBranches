
// -------------------------------------------------------------------------------------------------------------------------------


// 18. JS. DOM. Події

// 1. Прописати у html-розмітці кнопку (<button>) з будь-яким селектором (класс, id). 
// За допомогою DOM отримати посилання на цей елемент та навісити на нього обробник події кліку.
//  За кліком кнопка має викликати модальне вікно (alert) з текстом “Привіт тобі, клацальщик!”

const button = document.querySelector('#btn');

button.addEventListener('click', function () {
    alert('Привіт тобі, клацальщик!');
})


// 2. Створити посилання з текстом “клікни, аби з’явилась кнопка”. За натиснення на посилання
//  поряд з ним має з’явитись новий елемент - кнопка.


const linkEl = document.createElement('a');
linkEl.id = 'link';
linkEl.href = '#';
linkEl.textContent = 'клікни, аби з’явилась кнопка';
document.body.append(linkEl);

linkEl.addEventListener('click', function () {
    const funnyBtn = document.querySelector('#funny-btn');

    if (funnyBtn) return;

    const btnEl = document.createElement('button');
    btnEl.id = 'funny-btn';
    btnEl.textContent = 'Funny Button';
    document.body.append(btnEl);

})


// 3. “Лампочка”. У розмітці прописати елемент (article або div), з початковими стилями, які 
// роблять елемент круглим, сірого кольору тла, з темно-сірою рамкою. Також прописати в 
// розмітці кнопку, за натиснення на яку у елемента-лампочки мають змінитись стилі - тло має 
// стати жовтим, рамка - білою.

const bulb = document.querySelector('#bulb');
bulb.dataset.state = 'off';
bulb.id = 'bulb';


function toggleBulbHandler (e) {
    const targetBtn = e.target.closest('#toggle-btn');

    if (!targetBtn) return;

    if(bulb.dataset.state === 'off') {
        bulb.style.border = '2px solid white';
        bulb.style.backgroundColor = 'yellow';
        bulb.dataset.state = 'on' ;
        targetBtn.textContent = 'Turn me off!';

    } else {
        bulb.style.border = '2px solid darkgrey';
        bulb.style.backgroundColor = 'lightgrey';
        bulb.dataset.state = 'off' ;
        targetBtn.textContent = 'Turn me on!';

    }

}

bulb.onclick = toggleBulbHandler;
