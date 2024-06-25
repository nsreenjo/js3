function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Alice')

sayHello('Bob')

///// task 1

const square = function (x) { return Math.pow(x, 2) }

console.log(square(2))

console.log(square(5))

/////// task 2

const multiply = (x, y) => { return x * y }

console.log(multiply(2, 3))

console.log(multiply(4, 5))

///// task 3

const car = {
    make: "toyota",
    model: "camry",
    year: 2025,
    color: "red",
    getCarInfo: function () {
        var info = this.make + ' ' + this.model + ' ' + this.year + ' ' + this.color;
        return info;
    }
};

console.log(car.getCarInfo())


////// task 4

const colors = ["white", "green", "blue", "red", "black"];

const printColors = function (e) {


    for (let i = 0; i < e.length; i++) {
        console.log(e[i])
    }
}

printColors(colors)


////// task 5


function getStringLength(x) {

    return x.length

}

console.log(getStringLength('hello'))

console.log(getStringLength('school'))

///// task 6


function getUpperCase(x) {

    return x.toUpperCase()
}

console.log(getUpperCase('welcome to orange'))


///// task 7

function stringToArray(a) {

    let y = a.split(' ')
    return y
}

console.log(stringToArray('hello world'))


console.log(stringToArray("I'm a web developer"))