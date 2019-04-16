module.exports = class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saySomething() {
        console.log(`My name is ${this.name} and I am ${this.age} years old!`);
    }
}