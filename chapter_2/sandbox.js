/*alert('hello, world');
console.log(1);
console.log(2);*/

console.log('hello, world');
let email = 'katariina.e.vuorinen@gmail.com';

let firstName = 'Bob'
let lastName  = 'von Bob'

let fullName = firstName + ' '+ lastName;
console.log(fullName);

console.log(fullName[1]);

//lenght on stringin property. Se kertoo siis pituuden. Sama kuin ihmisellä on pituus.
console.log(fullName.length);


//method ja function tarkoittaa samaa. Method on vain tiettyyn objektiin liittyviä functioita.
//string methods

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result, fullName);

let index = email.indexOf('@');

console.log(index);

let lastN = email.lastIndexOf('n');

console.log(lastN);

//Tässä argumentit on mistä se lähtee leikkaamaan ja mihin lopettaa.
let emailSlice = email.slice(0,10);

console.log(emailSlice);

//Tässä argumentit on mistä se lähtee leikkaamaan ja kuinka monta. 
let emailSubstr = email.substr(0, 10);

console.log(emailSubstr);


let emailReplace = email.replace('k', 'c');

console.log(emailReplace);
//vanha tapa oli kirjoittaa muuttujat var taakse. 
//Nykyään on let ja const. Const ei voi muuttua myöhemmin.
//Vanhat selaimet ei välttämättä tue let ja const. 

//Nuo kaksi viivaa aloittaa yhden rivin kommentin.
/* Ja tämä / +* aloittaa monen rivin kommentin ja *+/ lopettaa sen.
let age = 25;
let year = 2020;
console.log(age, year); */

age = 30;

console.log(age);

const points = 100;

console.log(points);



