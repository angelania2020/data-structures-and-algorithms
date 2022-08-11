class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) { // private, very fast O(1)
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) { // O(1)
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) { // O(1) without collisions or O(n)
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() { // looping throught the whole hash table
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }

    // keys() { // if collisions
    //     const keysArray = [];
    //     for (let i = 0; i < this.data.length; i++) {
    //         if (this.data[i]) {
    //             for (let j = 0; j < this.data[i].length; j++) {
    //                 if (this.data[i][j]) {
    //                     keysArray.push(this.data[i][j][0]);
    //                 }
    //             }
    //         }
    //     }
    //     return keysArray;
    // }

    values() {
        const valuesArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                valuesArray.push(this.data[i][0][1]);
            }
        }
        return valuesArray;
    }

    // values() { // if collisions
    //     const valuesArray = [];
    //     for (let i = 0; i < this.data.length; i++) {
    //         if (this.data[i]) {
    //             for (let j = 0; j < this.data[i].length; j++) {
    //                 if (this.data[i][j]) {
    //                     valuesArray.push(this.data[i][j][1]);
    //                 }
    //             }
    //         }
    //     }
    //     return valuesArray;
    // }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 100);
myHashTable.set('oranges', 2);
myHashTable.set('apples', 3);
console.log(myHashTable.get('apples'));
console.log(myHashTable);
console.log(myHashTable.keys());
console.log(myHashTable.values());