let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array of objects
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// classes
class Car {

}
let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// when to use annotations
// 1) Function that returns type 'any'
const json = '{"x": 10, "y": 20}';
const coords = JSON.parse(json);
console.log(coords); // {x: 10, y: 20};
