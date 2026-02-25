
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


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    appendItem(data) {

        const newNode = new Node(data);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // appendItem(data) {
    //     const newNode = new Node(data);
    //     if (this.size === 0) {
    //         this.head = newNode;
    //     } else {
    //         let curr = this.head;
    //         while (curr.next) {
    //             curr = curr.next;
    //         }
    //         curr.next = newNode;
    //     }
    //     this.size++;
    // }

    deleteItem(data) {
        if (this.size === 0) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        while(curr.next && curr.next.data !== data) {
            curr = curr.next;
        }
        
        if(curr.next) {
            curr.next = curr.next.next
        }
        this.size--;
    }

    addNthItem(data, position = null) {

        if(position === null || position < 0 || position > this.size) return;

        const newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++
            return;
        }

        let current = this.head;
        let index = 0;

        while(current && index < position) {
            current = current.next;
            index++;
        }

        if (current) {
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }

    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    printList() {
        let curr = this.head;
        let list = 'START -> ';

        while(curr) {
            list += curr.data + ' -> ';
            curr = curr.next;
        }

        console.log(this.size === 0 ?'The List is empty': list + 'END.');

    }
}

const newList = new LinkedList();

newList.appendItem(1);
newList.appendItem(2);
newList.appendItem(3);

newList.printList();

newList.addNthItem(4, 0);
newList.printList();
newList.addNthItem(5, 1);
newList.printList();
newList.addNthItem(6, 6);
newList.printList();

newList.addNthItem(18);
newList.printList();

newList.appendItem(6)
newList.printList();

newList.deleteItem(1);
newList.printList();

newList.clearList();
newList.printList();



