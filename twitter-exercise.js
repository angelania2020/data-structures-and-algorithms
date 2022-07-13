// find 1st, find nth
const array = ['hi', 'my', 'teddy'];
// The oldest tweet:
array[0]; // O(1)
// The most recent tweet:
array[array.length - 1]; // O(1)
// A total of O(2) operation

const twitterArray = [{
    tweet: 'hi',
    date: 2012
},
{
    tweet: 'my',
    date: 2014
},
{
    tweet: 'teddy',
    date: 2018
}];
// O(n^2) - Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops


// Big O depends on a languge. We need to know how the method work on this string:
'helloworld'.length // Result: 10. Big 0(1)
// In JS the length is a property of an object 