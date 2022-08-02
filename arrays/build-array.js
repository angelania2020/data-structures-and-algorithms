class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}; // an object
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray); // MyArray { length: 0, data: {} }
console.log(newArray.get(0)); // undefined
newArray.push('hi');
console.log(newArray); // MyArray { length: 1, data: { '0': 'hi' } }
newArray.pop();
console.log(newArray); // MyArray { length: 0, data: {} }
newArray.push('hi');
newArray.push('Good');
newArray.push('morning');
console.log(newArray); // MyArray { length: 3, data: { '0': 'hi', '1': 'Good', '2': 'morning' } }
newArray.delete(1);
console.log(newArray); // MyArray { length: 2, data: { '0': 'hi', '1': 'morning' } }