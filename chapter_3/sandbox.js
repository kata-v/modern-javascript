//Section 4
//Lesson 30
//Good practise to first write the function and call it only after that.

//function declaration. Can be hoisted up. Functions can be declared even after calling them.
// function greet () {
//   console.log('hello there!');

// }

//function expression. Cannot be hoisted. Has to be defined in the code before calling it.
// const speak = function() {
//   console.log('Good day!');
// };

// greet();
// greet();
// greet();
// greet();

// speak();
// speak();
// speak();
// speak();

//********Lesson 31********
//arguments & parameters

// const speak = function(name = 'Shangela', time = 'night'){
//   console.log(`Good ${time} ${name}`);

//   };

// speak();  
// speak('Sauron');
// speak('Bob', 'morning');

//*****Lesson 32*******
//Returning values

// const calcArea = function(radius){
  // let area = 3.14 * radius**2;
  // return area;
//   return 3.14 *radius**2;
// };

// const thing = calcArea(5);
// console.log('thing');

//*******Lesson 33******
//regular function

// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

//arrow function


// const calcArea = (radius) => {
//   return 3.14 * radius**2;
// };

//or when one parameter then the () can go. Also when only one line returned, it can all be on one line and without the return.
// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log('Area is:', area);

// const greet = function(){
//   return 'hello, world';
// };

// const greet =() => 'hello, world';

// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total+= products[i] + products[i] * tax;
//   }
//   return total;
// }

// const bill = (products, bill) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total+= products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill([10,15,30], 0.2));

//******Lesson 34 ******
// const newName = 'Bob';
//function

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

//method

// let resultTwo = newName.toUpperCase();
// console.log(resultTwo);


//*****Lesson 35****
//callbacks & foreach

// const myFunc = (callbackFunc) => {
//   //do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(value => {
//   //do something
//   console.log(value);
// });

// let people = ['Bob', 'Shangela', 'Trixie', 'Alyssa', 'April'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach((person, index) => {
//   console.log(index, person);
// });

// people.forEach(logPerson);

//*****Lesson 36*****
//get a reference for the 'ul'

const ul = document.querySelector('.people');

const people = ['Bob', 'Shangela', 'Trixie', 'Alyssa', 'April'];

let html=``;

people.forEach(person => {
  //create an html template
  html += `<li style="color:purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;