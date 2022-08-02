// reference type

[] === []; // false
[1] === [1]; // false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // false
object1.value = 15;
object2.value; //15
object3.value; //10

// context vs scope

// new scope is created
function b() {
    let a = 4;
    console.log(a);
}
b();

// console.log(this === window) // {}, but in browser Window object

function c() {
    console.log(this); // in browser still Window object
}
c();

const object4 = {
    a: function () {
        console.log(this) // now it's this object4
    }
}
object4.a();

// instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`) // Use this!
    }
}

class Wizard extends Player {
    constructor(name, type) {
        // console.log('wizard', this); // error, need to run super() to access 'this'
        super(name, type); // Player constructor is run
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}!!!`)
    }
}

const wizard1 = new Wizard('Shelly', 'healer');
const wizard2 = new Wizard('Shawn', 'dark magic');