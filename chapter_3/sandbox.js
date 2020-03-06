// for loops

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

//const names = ['shaun', 'mario', 'luigi'];

//for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  //let html = `<div>${names[i]}</div>`;
  //console.log(html);
//}

//-----lesson 20----
//while loops

//let i = 0;

//while(1 < 5) { 
 // console.log('in loop: ', i);
 // i++;
//}

//const names = ['shaun', 'mario', 'luigi'];

//let i = 0;

//while(i< names.length){
 // console.log(names[i]);
 // i++;
//}

//----lesson 21----
// do while loops
//let i = 5;

//do{
 // console.log('val of i is: ' + i);
 // i++;
//} while(i<5);

//----lesson 22----
//if statements
// const age = 25;

// if(age > 20){
//   console.log('You are over 20 years old.');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 4){
//   console.log("That's a lot of ninjas.");
// }

//--- lesson 23---
//else if statements
// const password = 'p@ss';

// if(password.length >= 12){
//   console.log('That password is mighty strong!');
// } else if(password.length >= 8) {
//   console.log('This password is long enough!');
// } else {
//   console.log('This password is not long enough!');
// }

//----lesson 24----
//logical operators - OR || and AND &&

// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//   console.log('That password is mighty strong!');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5) {
//   console.log('This password is strong enough!');
// } else {
//   console.log('This password is not long enough!');
// }

//---Lesson 25-----
//logical NOT (!)

// let user = false;

// if(!user){
//   console.log('You must be logged in to continue!')
// }

//  console.log(!true);
//  console.log(!false);

//----lesson 26----
// break and continue
//Continue hyppää ulos kyseisestä luuppikerrasta, mutta jatkaa seuraavaan luuppiin
//Break lopettaa koko homman juuri kyseiseen komentoon. Eli kaiki mitä haluaa
//ulos kun break kohta saavutetaan pitää olla ennen sitä break komentoa

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++) {

// if(scores[i] === 0){
//   continue;
// }

//  console.log('your score: ', scores[i]);

//  if(scores[i] === 100){
//    console.log('Congrats, you got the top score!');
//    break;
//  }
// }


//----Lesson 27----
//Switch statements
//Switch uses a strict equality === so type and value
// const grade = 'P';

// switch (grade) {
//   case 'A':
//     console.log('You got an A!');
//     break;
//   case 'B':
//     console.log('You got an B!');
//     break;
//   case 'C':
//     console.log('You got an C!');
//     break;
//   case 'D':
//     console.log('You got an D!');
//     break;
//   case 'E':
//     console.log('You got an E!');
//     break;
//   default:
//     console.log('Not a valid grade');
// }

//using if statements

// if (grade === 'A'){

// } else if (grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'E'){

// } else {

// }

//----Lesson 28----
//variables & block {} scope
// let and const, they have block scope(demonstated below)
// var on the other hand has no block scope. It can be defined inside a block code and be accessed somewhere else

//the age below is in the root of the document, has global scope
const age = 30;

//The age below has a local scope that is only inside the code block
if(true){
  const age = 40;
  let name = 'shaun';
  console.log('inside 1st code block: ',  age,  name);

  if(true){
    const age = 50;
    console.log('inside 2nd code block: ', age);
  }
}

console.log('outside code block: ',  age,  name);