// 10-- > 5-- > 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }


// New Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Singly Linked List
class LinkedList {
    constructor(value) {
        this.head = { //
            value: value,
            next: null
        };
        this.tail = this.head; //
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    // My insert solution
    insert(index, value) {
        // Check params
        if (index >= this.length) {
            return this.append(value);
        } else if (index === 0) {
            return this.prepend(value);
        } else if (index > 0 && index < this.length) {
            const newNode = new Node(value);
            const leaderNode = this.traverseToIndex(index - 1);
            newNode.next = leaderNode.next;
            leaderNode.next = newNode; // changing not head, but part of it - leaderNode
            this.length++;
            return this;
        }
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let i = 0;
        for (i = 0; i < index; i++) {
            currentNode = currentNode.next; // currentNode = this.head.next;
        }
        return currentNode;
    }

    // insert(index, value) {
    //     // Check params
    //     if (index >= this.length) {
    //         return this.append(value);
    //     }
    //     if (index === 0) {
    //         return this.prepend(value);
    //     }
    //     const newNode = new Node(value);
    //     const leaderNode = this.traverseToIndex(index - 1);
    //     const holdingPointer = leaderNode.next;
    //     leaderNode.next = newNode;
    //     newNode.next = holdingPointer;
    //     this.length++;
    //     return this;
    // }

    // traverseToIndex(index) {
    //     let counter = 0;
    //     let currentNode = this.head;
    //     while (counter !== index) {
    //         currentNode = currentNode.next;
    //         counter++;
    //     }
    //     return currentNode;
    // }

    remove(index) {
        // check params
        if (index === 0) {
            const newNode = this.head.next;
            this.head = newNode;
            this.length--;
            return this;
        }
        let preNode = this.traverseToIndex(index - 1);
        let delNode = preNode.next;
        preNode.next = delNode.next; // preNode.next = afterNode;
        if (index === this.length - 1) {
            this.tail = preNode;
        }
        this.length--;
        return this;
    }

    reverse() {
        if (this.length === 1) {
            return this;
        }
        let firstNode = this.head;
        // this.tail = this.head;
        let secondNode = firstNode.next;
        while (secondNode) {
            const temp = secondNode.next;
            secondNode.next = firstNode;
            // console.log(secondNode.next);
            firstNode = secondNode;
            // console.log(firstNode)
            secondNode = temp;
            // console.log(secondNode)

        }
        this.head.next = null;
        this.tail = this.head;
        this.head = firstNode;
        return this;
    }
}

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
// console.log(myLinkedList.printList());
// console.log(myLinkedList);
// myLinkedList.traverseToIndex(3); // lookup
// myLinkedList.remove(3);
// console.log(myLinkedList);
// myLinkedList.printList();

// Reverse
const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.reverse();
// myLinkedList.printList();