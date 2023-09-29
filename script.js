// Oppgave 1. Function Even/Odd

const checkEvenOrOdd = (number) => {
  return number % 2 === 0 ? " Even" : "Odd";
};

console.log(checkEvenOrOdd(10));

//Oppgave 2. userTitle "Mr" or "Mrs"

//const userTitle = () => {
// userMale= true
// userMale = false
//userMale === true ?
//console.log("Mr") :
//console.log("Mrs") ;
//return userMale}
//userTitle()

const userMale = false ? "Mr" : "Mrs";
console.log(userMale);

//Oppgave 3.

let userName = "Desiree";

let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
console.log(hours);
console.log(minutes);
console.log(today);
let day = today.getDay();
console.log(day);

let greeting = 5;

if (today >= 6 && today < 12) {
  console.log("God Morning");
} else if (today > +12 && today < 18) {
  console.log("Good Afternoon");
} else today >= 18 && today < 24;
console.log("Good evening");

let hilsen = greeting;

console.log(hilsen);

let daylist = [
  "Søndag",
  "Mandag",
  "Tirsdag",
  "Onsdag ",
  "Torsdag",
  "Fredag",
  "Lørdag",
];
console.log(
  userName + " idag er det: " + daylist[day] + " og klokka er:" + today
);

let setning =
  userName + " idag er det, " + daylist[day] + " klokka er " + today;
console.log(setning);

// const element= document.getElementById("setning");
//document.getElementById("setning").textContent=
//"setning"+ textContent;

//Jeg må ha hjelp til denne, for noe er det som gjør at jeg ikke klarer å få dette ut på siden..

//Oppgave 4.

let d = 36;
let v = 38;

let sum = d + v;

console.log(sum);

//Oppgave 5.
const userAge = 10; 
const userNick ="Fredrik";
if (userAge >= 18 && userNick ==!"");{
  console.log(`Du kan bli med ${userNick} , du er ${userAge}!`);
} else if (userAge <= 17 && userNick !=="");{
  console.log(`Du kan komme tilbake når du er gammel nok ${userNick}!`); 
} 
  

//const drink = (userAge >= 18 ? "øl" : "Brus" ; userNick ;) console.log(drink);
