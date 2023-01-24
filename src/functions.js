// Define a function

function sayHi() {
  return "Hi, World";
}

// Call function

sayHi();

// Define a function with parameters

function getSalary(hourlyValue, hoursWorked) {
  return hourlyValue * hoursWorked;
}

// Call a function with arguments

getSalary(15, 7);

// Declarative functions examples

function getName(name) {
  return name;
}

function add(n1, n2) {
  return n1 + n2;
}

// Expressive function

let users = [
  {id:1,name:"teo"},
  {id:2,name:"carl"},
  {id:3,name:"santiago"}
];

const getUsers = function (){
  return users.map( (user) => user.name )
}
