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
console.log(fruit.split(" "))

let fruits = "Apple, banana, mango"
console.log(fruits.split(","))