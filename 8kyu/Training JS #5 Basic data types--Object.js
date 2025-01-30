// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."


// Задача
// Даю вам функцию,animal принимающую 1 параметр:obj вот так:

// {name:"dog",legs:4,color:"white"}
// и верните строку, подобную этой:

// "This white dog has 4 legs."

let obj = {
    name: "dog",
    legs: 4,
    color: "white"
};


function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }

animal(obj);
console.log(animal(obj));