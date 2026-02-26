
// -------------------------------------------------------------------------------------------------------------------------------


// 16. JS. Структури даних


// 16.1 - Написати клас для реалізації структури даних Зв’язаний Список 
// (LinkedList) (за прикладом ментора у відео-записах) та виконати на його 
// основі наступну задачу:
// - реалізувати у класа метод deleteItem(data), який приймає певне значення data 
// і видаляє зі зв’язаного списка перший знайдений елемент з такими даними.
// - реалізувати метод addNthElement(data, position), який приймає значення data 
// і порядковий номер елемента position, після якого він має вставити новий вузел 
// списку з такими самими даними


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     appendItem(data) {

//         const newNode = new Node(data);

//         if (this.size === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     // appendItem(data) {
//     //     const newNode = new Node(data);
//     //     if (this.size === 0) {
//     //         this.head = newNode;
//     //     } else {
//     //         let curr = this.head;
//     //         while (curr.next) {
//     //             curr = curr.next;
//     //         }
//     //         curr.next = newNode;
//     //     }
//     //     this.size++;
//     // }

//     deleteItem(data) {
//         if (this.size === 0) return;

//         if (this.head.data === data) {
//             this.head = this.head.next;
//             return;
//         }

//         let curr = this.head;
//         while(curr.next && curr.next.data !== data) {
//             curr = curr.next;
//         }
        
//         if(curr.next) {
//             curr.next = curr.next.next
//         }
//         this.size--;
//     }

//     addNthItem(data, position = null) {

//         if(position === null || position < 0 || position > this.size) return;

//         const newNode = new Node(data);

//         if (position === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//             this.size++
//             return;
//         }

//         let current = this.head;
//         let index = 0;

//         while(current && index < position) {
//             current = current.next;
//             index++;
//         }

//         if (current) {
//             newNode.next = current.next;
//             current.next = newNode;
//             this.size++;
//         }

//     }

//     clearList() {
//         this.head = null;
//         this.size = 0;
//     }

//     printList() {
//         let curr = this.head;
//         let list = 'START -> ';

//         while(curr) {
//             list += curr.data + ' -> ';
//             curr = curr.next;
//         }

//         console.log(this.size === 0 ?'The List is empty': list + 'END.');

//     }
// }

// const newList = new LinkedList();

// newList.appendItem(1);
// newList.appendItem(2);
// newList.appendItem(3);

// newList.printList();

// newList.addNthItem(4, 0);
// newList.printList();
// newList.addNthItem(5, 1);
// newList.printList();
// newList.addNthItem(6, 6);
// newList.printList();

// newList.addNthItem(18);
// newList.printList();

// newList.appendItem(6)
// newList.printList();

// newList.deleteItem(1);
// newList.printList();

// newList.clearList();
// newList.printList();









// 16.2 2. Написати клас для реалізації власної структури даних, яка представляє 
// собою колекцію елементів, нумеровану на кшталт “*1*”, “*2*” і т.д.
// (Екземпляр цього класу - об’єкт вигляду
//     {
//       *1*: ‘first value’,
//       *2*: ‘second value’,
//       *3*: ‘third value’
//     })

// приймаю value і додаю в обєкт, ключі зроблю пронумеровані автоматично (використаю лічильник або size)
// доступ до ключів через obj["*1*"]


class MyDataStructure {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    // метод для генерації нумер ключів
    generateKeys() {;

        return `*${this.size + 1}*`;
    }

    // метод щоб згенерувати нову нумерацію (після видалення елемента щоб не лишалось дірок в номерах 
    // і щоб додавання нового елемента не затирало існуючий номерок) - після видалення елем #2 з 3 наявних,
    //  якщо я додаю новий елем то його порядковий номер буде 3(this.size + 1), а ключ №3 існує вже - 
    // то value просто перезаписується в цю пару (ще й лічильник збільшується)
    // щоб цього не було, я перенумерую всі елементи після кожного видалення)))
    regenerateNumeration() {
        const arrayFromStorage = Object.values(this.storage);
        this.storage = {};
        this.size = 0;
        arrayFromStorage.forEach(item => this.addItem(item));

    }

    // метод додавання нового елем
    addItem(value) {
        let index = this.generateKeys();

        if (!index || !value) return;

        this.storage[index] = value;
        this.size++;

    }

    //метод видалення елем(за знач)
    deleteItem(value) {
        if (this.size === 0) return;

        let keyToDelete = Object.keys(this.storage).find(key => this.storage[key] === value);

        if (!keyToDelete) return;

        delete this.storage[keyToDelete];
        this.size--;

        this.regenerateNumeration();
    }

    // метод щоб вивести обєкт
    printStorage() {
        console.log(this.storage);
    }

    // метод для очищення всього обєкта
    clearStorage() {
        this.storage = {};
        this.size = 0;
    }
}

const myStorage = new MyDataStructure();

myStorage.addItem('first value');
myStorage.addItem('second value');
myStorage.addItem('third value');
myStorage.printStorage();

myStorage.deleteItem('nonexistent value');
myStorage.deleteItem('second value');
myStorage.printStorage();

myStorage.addItem('fourth value')
myStorage.addItem('fifth value')

myStorage.printStorage();

myStorage.clearStorage();
myStorage.printStorage();