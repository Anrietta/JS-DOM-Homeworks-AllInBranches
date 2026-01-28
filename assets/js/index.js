// 17. JS. DOM. Створення DOM-елементів

// 1. За допомогою DOM створити елемент section. Встановити у нього атрибут id зі 
// значенням “root”. Всередину цього елемента прописати довільний рядок тексту. 
// Встановити колір тексту для елемента. Відобразити елемент, зробивши його 
// дочірнім до <body>


const sectionEl = document.createElement('section');
sectionEl.id = 'root';
sectionEl.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
sectionEl.style.color = 'red';
document.body.append(sectionEl);



// 2. За допомогою DOM отримати посилання на існуючий на сторінці елемент (div або section,
// який заздалегідь має існувати в розмітці і містити якийсь тексту) та змінити йому 
// колір тла на фіолетовий, а колір тексту на білий.

const container = document.querySelector('.container');
container.style.backgroundColor = 'violet';
container.style.color = 'white';



// 3. За допомогою prompt отримати у користувача його ім’я, після чого створити і відобразити
// на сторінці елемент <h1>, який містить текст “Вітаю, (введене користувачем ім’я)”


const userName = prompt('Enter your name', '').trim();
function createElement(userName, defaultName = 'Гість') {

    const headerEl = document.createElement('h1');
    
    !userName ? headerEl.textContent = `Вітаю, ${defaultName}` : headerEl.textContent = `Вітаю, ${userName}`;

    document.body.prepend(headerEl);

    return headerEl;
}

createElement(userName);

