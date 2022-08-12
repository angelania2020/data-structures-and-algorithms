// New Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

// Singly Linked List
class LinkedList {
    constructor(value) {
        this.head = { //
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head; //
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
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
            newNode.previous = leaderNode;
            newNode.next = leaderNode.next;
            leaderNode.next.previous = newNode;
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

    remove(index) {
        // check params
        if (index === 0) {
            const newNode = this.head.next;
            newNode.previous = null;
            this.head = newNode;
            this.length--;
            return this;
        }
        let preNode = this.traverseToIndex(index - 1);
        let delNode = preNode.next;
        let aftNode = delNode.next;
        if (aftNode) {
            aftNode.previous = preNode;
        }
        preNode.next = aftNode;
        if (index === this.length - 1) {
            this.tail = preNode;
        }
        this.length--;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
console.log(myLinkedList);
myLinkedList.traverseToIndex(3); // lookup
myLinkedList.remove(4);
myLinkedList.printList();
console.log(myLinkedList);