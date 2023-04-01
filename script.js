// console.log('Hello world');

// function jav(){
    // confirm('This is webspiders')
// }

//const
//let
//var


// string data type
// var name = 'Mayowa'
// console.log(name);

// number data type
// var age = 90
// console.log(age);

// boolean data type
// var isGenderMale = true
// console.log(isGenderMale);

// null data type
// var favoriteColor = null
// console.log(favoriteColor);

// undefined data type
// var student;
// console.log(student);

// num--
//console.log(num )

// var a = 5
// var b = 7
// a += b
// console.log(a) // print 12


// let age = 20
// let name = 'james bond'

// let info = 'My name is ' + name + ' I am ' + age + ' old.'

// let info = `My name is $(name), I am $(age) years old.`

// console.log(info);

// function remote(c){
//     if(typeof c==='number'){
//         console.log(c + 'is a number');
//     }

// }
// remote(10)

// function remote(c){
// if( typeof c === 'boolean'){
//     return(c  + ' is a boolean');
// }
// else{
//     return("oops, that's not a boolean")
// }
// }

// console.log(remote("false")); 

// function remote(c = 5){
//     if( typeof c === 'boolean'){
//         console.log(c  + ' is a boolean');
//     }
//     else if( typeof c === 'string'){
//         console.log(c + 'is a string');
//     }
//     else if( typeof c === 'number'){
//         console.log(c + 'is a number');
//     }
//     else if( typeof c === 'null'){
//         console.log(c + 'is a null');
//     }
//     else{
//         console.log("oops, that's not a valid data type")
//     }
//     }
//     remote()

// function desk(code){
//     switch(code){
//         case 1:
//             console.log('red');
//             break;
//         case 2:
//             console.log('Yellow');
//             break;
//         case "x":
//             console.log('Green');
//             break;
//         default:
//              console.log('Unknown code');
//         }
// }
// desk("x")

// var numbers =[19,65,1,2,6,1,9,9,2,1];

// var sum = 0;
// var i = 0;
// while(i<numbers.length){
//     sum +=numbers[i];
//     console.log(numbers[i]);
//     i+=1;
// }
// console.log('The loop was executed' +i+ 'times'); 

// console.log(sum)

// var numbers =[19,65,1,2,6,1,9,9,2,1];

// var sum = 15;
// var i = 0;
// do {
//     sum += numbers[0];
//     i+=1;
    
// }while(i<numbers.length)
// console.log(sum);


// 
// var gimil = {
//     name: "gimil",
//     race: "dwarf",
//     weapon: "axe",
//     greet: function() {
//         return `Hi, my name is ${this.name}!`;
//     },
// };
// gimil.weapon = "cutlass"
// gimil.race = "black"
// gimil [ 'age'] = 100
// console.log(gimil);

// The formular to convert from celcius to fahrenheitis the temperature in celcius times 9/5 plus 32,
// you are given a variable celcius representing a temperature in celcius.
// use the variable fahrenheit already defined and assign it the fahrenheit
// temperature equivalent to the given celcius temperature.
// use the formular mentioned above to help convert the celcius temperature to fahrenheit.

//  function convert(celcius) {
//     let fahrenheit = celcius * (9/5) + 32
//     console.log(fahrenheit);
// }
// convert(30);


// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5))

// function factorise(num) {
//     let product = 1;
//     for (let i = 1; i <= num; i++) {
//         product *=i;
//     }
// console.log(product);
// }
// factorise(5)

// function revStr(str) {
//     let revs = "";
//     for (let i = str.length - 5; i >=0; i--) {
//          revs += str[i];
//     }
    
//     console.log(revs);
// }
// revStr("webspiders")

// function longestword(str) {
//     const words = str.split(" ");   
//     if (words.length == 1) {
//         return words[0].length;
//     }
//     // console.log(words.length)

//     return Math.max(
//         words[0].length,
//         longestword(words.slice(1).join(" "))
//     );
// }
// console.log(longestword("The quick brown fox jumped over the lazy dog")); 

// function checkAlphabet(arr) {
//     const test = arr[1].toLowerCase();
//     const target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//         if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
// }
// console.log(checkAlphabet(['jesus', 'usy']));

function check(bool) {
    
    
}
  



 