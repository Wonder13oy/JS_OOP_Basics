const Person = require("./Person.js");

let chef = new Person("Che", 26);
let plumber = new Person("Jacob", 34);
let dev = new Person("Wandile", 20);

const arr = [chef, plumber, dev];

for(var i = 0; i < 2; i++)
{
    chef.saySomething();
    setTimeout(() => {
        plumber.saySomething();
    }, 1000);
    setTimeout(() => {
        dev.saySomething();
    }, 2000)
}

// for(var i = 0; i < 2; i++)
// {
//     for(var j = 0; j < arr.length; j++)
//     {
//         arr[j].saySomething();
//     }
// }