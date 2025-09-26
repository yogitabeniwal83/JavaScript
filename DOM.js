console.log("hello");
alert("hello !");

console.dir(window);            // object ko print krane ke liye consloe.dir ka use krte h ye browser dwara create hota h


// GET ELEMENT BY ID

let button = document.getElementById("myId");   // h1
console.dir(button);



// GET ELEMENT BY CLASS 

let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);



// GET ELEMENT BY TAG

let parahs = document.getElementsByTagName("P");
console.dir(parahs);



// GET ELEMENT BY QUERY SELECTOR

let firstElements = document.querySelector("p");   // 1st element
console.dir(firstElements);

let allElements = document.querySelectorAll("p");   // all element
console.dir(allElements);


 
let firstEl = document.querySelector(".myClass");   // 1st element
console.dir(firstEl);

let allEl = document.querySelectorAll(".myClass");   // all element
console.dir(allEl);



let firstElement = document.querySelector("#myId");   // 1st element
console.dir(firstElement);





let div = document.querySelector("div");
console.dir(div);

let heading = document.querySelector("h1");
console.dir(heading);