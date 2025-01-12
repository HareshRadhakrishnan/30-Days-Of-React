import countries from "./countries.js";
import webTechs from "./web_techs.js";
const emptyArray = [];
const fiveElementsArray = Array(5).fill(0);
const ArrayLenght = fiveElementsArray.length;
console.log(fiveElementsArray);
console.log("Array Lenght: ",ArrayLenght);
console.log("fist item: ", fiveElementsArray[0]);
console.log("last item: " ,fiveElementsArray[ArrayLenght-1]);
console.log("middle item: ", fiveElementsArray[Math.floor(ArrayLenght/2)]);


const mixedDataTypes =[1, "hello", true, [0,2,"hffhdsjf"], {name: "John", age: 23}];
const itCompanies =[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("IT companies: ",itCompanies);
console.log("number of companies: ",itCompanies.length);
console.log("first company: ",itCompanies[0]);
console.log("last company: ",itCompanies[itCompanies.length-1]);
console.log("middle company: ",itCompanies[Math.floor(itCompanies.length/2)]);
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.slice(0,itCompanies.length-1).join(", "), "and", itCompanies[itCompanies.length-1], "are big IT companies");

itCompanies.includes("Google") ? console.log("Google is a big IT company") : console.log("Google is not a big IT company");
function checkCompany(company){
    if( itCompanies.includes(company)){
     return company
    }else{
     return "Company not found"
    }
 }

console.log(checkCompany("google"));

// Filter out companies which have more than one 'o' without the filter method

for (let i = 0; i < itCompanies.length; i++) {
    if(itCompanies[i].toLowerCase().split("o").length-1 > 1){
        console.log(itCompanies[i]);
    }
}
// Sort the array using sort() method
console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.slice(3,itCompanies.length));

console.log(itCompanies.slice(0,itCompanies.length-3));
console.log(itCompanies)
itCompanies.splice(Math.floor(itCompanies.length/2)-1,Math.floor(itCompanies.length/2)-1)
console.log("removed middle item: ",itCompanies);

itCompanies.shift(0);
console.log("removed first item: ",itCompanies);

itCompanies.pop();
console.log("removed last item: ",itCompanies);

itCompanies.length = 0;
console.log("removed all items: ",itCompanies);

// Level 2  

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split("").filter((letter) => letter !== ("," && ".")).join("").split(" ");
console.log(words);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.includes("Meat")?null: shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.includes("Sugar")?null: shoppingCart.push("Sugar");
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Honey"),1);
console.log(shoppingCart);

shoppingCart[shoppingCart.indexOf("Tea") ] =  'Green Tea'
console.log(shoppingCart)

countries.includes("Ethiopia")?console.log('ETHIOPIA'): countries.push("Ethiopia")

webTechs.includes("Sass")? console.log( 'Sass is a CSS preprocess'): webTechs.push("Sass") && console.log(webTechs)


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log("Fullstack Array: ",fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log("lowest Age: ", ages[0] )
console.log("highest Age: ", ages[ages.length-1] )
const medianAge = ages.slice(Math.floor(ages.length/2)-1,Math.floor(ages.length/2))[0]/2
console.log("Median Age: ", medianAge)
 let averageAge = 0
 ages.map((age,index)=>{

    averageAge += age
    index === ages.length-1? averageAge = averageAge/ages.length:null
 })
console.log(ages,averageAge)
console.log(countries)

console.log("first 10 Countries: ", countries.slice(0,10))
console.log('middle contry: ', countries.slice(Math.floor(countries.length/2)-1,Math.floor(countries.length/2)))




/* let userAge = prompt("Enter your Age? ")
if(userAge>=18){
    console.log("You are old enough to drive.")
}else if(userAge<18){
    console.log(`You are left with ${18-userAge} years to drive.`)
}else{
    console.log("Invalid Entry")
}

const myAge = 22
let yourAge = prompt("Enter Your Age? ")
if(yourAge>100){
    console.log("Are you immortal?")
}else if(yourAge>myAge){
    console.log(`You are ${yourAge-myAge} years older than me.`)
}else if(yourAge<myAge){
    console.log(`You are ${myAge-yourAge} years younger than me.`)
}else{
    console.log(`invalid value`)
} */

// let userNumber = prompt("Enter a Number: ")

// !userNumber%2 ?console.log(`${userNumber} is an even number`):console.log(`${userNumber} is an iodd number`)

 const score = 70

 if(score>80 && score<100){
    console.log("you got an A")
 }else if(score>70){
    console.log("you got a B")
 }else if(score>60  ){
    console.log("you got a C")
 }else if(score>50){
    console.log("you got a D")
 }else if(score){
    console.log("you got a F")
 }else {
    console.log("invalid score")
 }

 const day = "Sunday"

 const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const weekendDays = ["saturday", "sunday"];

if(weekdays.includes(day.toLowerCase())){
    console.log(`${day} is a weekday`)
}else if(weekendDays.includes(day.toLowerCase())){
    console.log(`${day} is a weekend`)
}


const months = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];

const inputMonth = "december"

if(inputMonth.toLowerCase()==="february"){
    console.log("February has 28 days.")
} else{
    (months.indexOf(inputMonth.toLowerCase())+1)%2 ? console.log(`${inputMonth} has 31 days.`):console.log(`${inputMonth} has 30 days.`)
    }