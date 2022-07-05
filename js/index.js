// var age = prompt('How old are you?');

// document.getElementById("form").innerHTML = age;

document.getElementById("name").addEventListener("click", function myName(){
    var name = prompt('What is your name?');

    document.getElementById("name").innerHTML = name;
    
})




// document.getElementById("form").addEventListener("mouseover", function alert(){
//    var age =  prompt('How old are you?')

//    document.getElementById("form").innerHTML = age;
// })


document.getElementById("date").addEventListener("click", displayDate);
function displayDate(){
    document.getElementById("date").innerHTML = Date()
};


// function greetings(){
//   return   prompt("What is your name");
// }

// greetings()

function area(a){
    const pi = 3.142
    return area = a * pi;
}

console.log(area(10));

function greeting(name){
//    return `Hello ${name}`
console.log(`Hello ${name}`)

}
greeting("Ayobami")
// console.log(greeting("Samson"))

//while loop

// num = 0;
// while (num < 10) {
//     num++
//     console.log(num)
// }


let num = " ";
for( i=0; i < 5; i++){
    num = num +  " The number is " + " " + i
}
console.log(num)


for(i = 0; i < 3; i++){
    console.log(`The line is ${i}`)
}


// slice, replace

let fruit = "pineapple";

console.log(fruit.slice(1, 7));
console.log(fruit.replace("in", "ea"));
console.log(fruit.indexOf("a"));
console.log(fruit.charAt(3));
console.log(fruit.split(" ")) //split by characters

let fruits = "Apple, banana, mango"
console.log(fruits.split(",")) //split by a comma

//Array

let team = ["Mendy", "James", "Silva", "Rudiger", "Azpi"]
for(let i = 0; i < team.length; i++){
    console.log(team[i])
}

console.log(team.toString())
console.log(team.join("-")) //joinned by any character

//Array concatenation

let teamA = ["Mendy", "James", "Silva", "Rudiger", "Azpi"];
let teamB = ["Ramsdale", "Gabriel", "White", "Elneny"]
let allTeam = teamA.concat(teamB);
console.log(allTeam);
console.log(allTeam.slice(1, 6))
console.log(allTeam.reverse())

// console.log(teamA + " " + teamB)

//Sorting of numbers in Array
console.log(allTeam.sort())  //sort in alphabetical order
let data = [2, 23, 43, 45,25, 1, 65, 7, 1, 10, 2, 1, 16, 8, 4, 5, 89, 25, 8, 25]
console.log(data.sort()) //put same figures together
console.log(data.sort(function(a, b){return a-b})) //sort in ascending order 
console.log(data.sort(function(a, b){return b-a})) //sort in descending order

let newArr = [];
for(let i = 0; i < 10; i++){
    newArr.push(i);
    // newArr += i
}
console.log(newArr)

//object

let student = {
    first: "Raf",
    last : "Rang",
    age: 120,
    height : 100,

    studentInfo : function(){
        return "Age is = " + this.age + "\n" + "Height is = " + this.height
    }
}
console.log(student.studentInfo())

console.log(student["first"])
console.log(student.last)


//conditionals, controls

let age = 105 // you can also write  "prompt("How old are you")";

if(age >=18 && age <=35){
    console.log("Target Audience")
} else{
    console.log("Not Target Audience")
}

//switch statement
var day =  0 //prompt("Enter day of the week")
switch (day){
    case 0:
       result = "Weekend";
        break;
        case 5:
            result = "weekend";
            break;
            case 6:
                result = "weekend";
                break;
                default:
                    result = "weekday";
}
console.log(`It's ${result}`)

let weekDay = document.getElementById("week")

weekDay.addEventListener("click", () => {
    var day =  prompt("Enter day of the week")
switch (day){
    case 0:
       weekDay.innerHTML = "Weekend";
        break;
        case 5:
            weekDay.innerHTML = "weekend";
            break;
            case 6:
                weekDay.innerHTML = "weekend";
                break;
                default:
                    weekDay.innerHTML = "weekday";
}
})



//This example finds the element with id="main", and then finds all <p> elements inside "main":
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = `Hello ${y[0].innerHTML}`


//function to print score
let myScore = document.getElementById("score")

myScore.addEventListener("click", () => {
  let grade =  prompt("Enter your score here")
  if(grade === ""){
    alert(" Please enter your score")
  } else{
    myScore.innerHTML = `My score is ${grade}`
  }
  
})

const myForm = document.getElementById("form1")

  let text = " ";
  for (i = 0; i < myForm.length; i++){
    text += `${myForm.elements[i].value} <br>`
    // text += myForm.elements[i].value + "<br>";
  }

  document.getElementById("form2").innerHTML = text;

  document.getElementById("count").innerHTML = `Today's date is: ${Date()}`

  let date = Date();
  console.log(date)