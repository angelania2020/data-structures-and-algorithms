const strings = ['a', 'b', 'c', 'd'];
// 32-bit system:
// 1 item - 4 bytes
// 4 items * 4 shelves (of 8 bits) = 16 bytes of storage

strings[2]; // O(1)

// push (adding to the end)
strings.push('e'); // O(1) operation

// pop (remove last item)
strings.pop();

// unshift - looping, changing the indexes
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien') // O(n)

console.log(strings) // O(1)

// C++ has static arrays
int a[20];
int b[5] { 1, 2, 3, 4, 5 };
// Copy entire array and create space for it and new items

