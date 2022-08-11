let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhhh!')
    }
}

console.log(user.age); // O(1)
user.spell = 'abra kadabra'; // O(1)
console.log(user);
user.scream(); // O(1)
delete user.spell;
console.log(user)
