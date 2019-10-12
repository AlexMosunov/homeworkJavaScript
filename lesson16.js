
//task 1

const rectangle = {
    width: 10,
    height: 15,
    getSquare: function() { return this.width * this.height }
}
console.log(rectangle.getSquare())

//task 2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() { return this.price },
    getPriceWithDiscount: function() { return this.price - (this.price * parseFloat(this.discount) * 0.01)}
}

console.log(price.getPriceWithDiscount());

//task 3

const object = {
    height: 10,
    incrByOne: function() { return this.height + 1}
}

console.log(object.incrByOne());

// task4

const objectCalculator = {
    value: 1,
    double() { this.value *= 2; return this},
    plusOne() {this.value += 1; return this },
    square() { this.value *= this.value; return this}
}


objectCalculator.double().plusOne().square().double().square();
console.log(objectCalculator.value);





//task new 1
const object1 = {
    price: 10,
    quantity: 100,
    costOfAll() { return this.price * this.quantity}
}

console.log(object1.costOfAll());

//task new 2
const object2 = {
    price: 50,
    quantity: 3
}

console.log(object1.costOfAll.call(object2));


// task new 3

let sizes = {width: 5, height: 10};
getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes));



//task new 4


let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined



















