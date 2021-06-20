console.log('hello');
// alert('hello');

//variables

var b="pranitha";
console.log(b);

var num = 45;
console.log(num);

//  var age = prompt('what is your age?');

// document.getElementById('heading').innerHTML = age;

// numbers in javaScript

var num1 = 10;

// increment num1
num1++

// decrement num1

num1--

console.log(num1);

// divide and multiply num1

num1 = num1 % 6;

num1 = num1 / 6;

// num1 = num1 * 5;

console.log(num1);

//  functions

//  create function 

// function fun(){
// //     alert('this is a function!');
// // }

// // //  call function

// fun();

//  data types


let fruits = ['banana','apple','mango','pineapple'];

console.log(fruits[2]);

fruits[0] = 'kiwi';

console.log(fruits);

for (let i=0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}

// array common methods

console.log('to String ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberries'),fruits);
console.log(fruits[4]);
fruits[4] = 'new fruit'; 
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegies = ['spinach',"brocoli",'tomato']

let allGroceries = fruits.concat(vegies);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());

let numbers = [5,10,3,7,15,20,25];

console.log(numbers.sort(function(a,b){ return a-b}));  //assending
console.log(numbers.sort(function(a,b){ return b-a}));  //desending

let emptyArray = new Array();

for( let num=0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);


// Objects in javaScript 

let student = {
    first:'pranitha',
    last:'Alasakani',
    age:20,
    height:180,
    studentInfo : function(){
        return this.first + '\n' + this.last + '\n' + this.age; 
    }
} ;
// console.log(student.first);
// console.log(student.last);
// student.first = 'not pranitha';
// console.log(student.first);
// student.age++;
// console.log(student.age++);
console.log(student.studentInfo());

// conditions control flows (if,else)

// 18-35 is my target

// switch statement  


switch (0) {
    case 0:
        text = 'weekend';
        break
    case 5 :
        text = 'weekend';
        break
    case 6:
        text = 'weekend';
        break

    default:
        text = 'weekday';
}

console.log(text);