// numbers

//let radius = 10;
//let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

 //console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
//let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

//let result = 'the blog has ' + likes + ' likes.';
//console.log(result);

//-----Lesson 12----

//template strings or template literals
//const title = 'Best reads of 2019';
//const author = 'Mario';
//const likes = 30;


//concetation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
//console.log(result)

//template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);


//creating html templates
//let html = `<h2> ${title}</h2>
//<p>By ${author}</p>
//<span>This blog has ${likes} likes </span>
//`;

//Tää ainoastaan näyttää sen consolissa tägeineen kaikkineen. 
//Miten käytetään sisällön tuotantoon näytetään myöhemmin.
//console.log(html);





//-----Lesson 13-----

//let ninjas = ['shaun', 'ryu', 'chun-li'];

//ninjas[1] = 'ken';

//console.log(ninjas[1])

//let ages = [20,25,30,35];
//console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20];
//console.log(random);

//console.log(ninjas.length);


//array methods
//let result = ninjas.join('-');
//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
//let result = ninjas.push('ken');
//result = ninjas.pop();

//console.log(result);


//----Lesson 14----- Null ja undefined. Undefined tulee automaattisesti.
// Null pitää itse määrittää

//let age = null;

//console.log(age, age + 3, `the age is ${age}`)


//----Lesson 15-----
//booleans and comparisons
//console.log(true, false, "true", "false");

//let email = 'someOne@gmail.com';

//let names = ['mario', 'luigi', 'toad']
//let result = email.includes('@');
//let result = names.includes('luigi')
//console.log(result);

//let age = 25;

//console.log(age == 25);
//console.log(age == 30);
//console.log(age != 30);

//console.log(age > 20);
//console.log(age < 20);
//console.log(age <= 25);
//console.log(age >= 25);

//let name ='shaun';

//pienet kirjaimet ovat "isompia" kuin isot kirjaimet.
//Myöhemmin aakkosissa tuleva kirjain on isompi kuin aikaisempi.
//esim c on isompi kuin a ja isompi kuin C.

//console.log(name == 'shaun');
//console.log(name == 'Shaun');
//console.log(name > 'crystal');
//console.log(name > 'Shaun');
//console.log(name > 'Crystal');

//-----Lesson 16-----

//loose comparison(different types can still be equal)

//let age = 25;

//console.log(age == 25);
//console.log(age == '25');
//console.log(age != 25);
//console.log(age != '25');

//strict comparison (different types cannot be equal)

//console.log(age === 25);
//console.log(age === '25');
//console.log(age !== 25);
//console.log(age !== '25');


//-----Lesson 17-----

//type conversion

let score = '100';

//score =Number(score)

//console.log(score + 1);

//console.log(typeof score);

//let result = Number('hello');

//let result = String(50);

/*There are truthy and falsy values in JS. 100 is a truthy value.
So some values become true and some false when converted to Boolean.
0 is falsy. Positive and negative numbers are truthy, 0 falsy.
Strings are truthy.
*/
//let result = Boolean (100);
//let result = Boolean ('0');
let result = Boolean ('');

console.log(result, typeof result);
