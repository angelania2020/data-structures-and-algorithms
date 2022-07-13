const boxes = new Array(10).fill('box');

//ES5
// function compressAllBoxes(boxes) {
//     boxes.forEach(function (item) {
//         console.log(item);
//     })
// }

//ES6
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}


compressAllBoxes(boxes);