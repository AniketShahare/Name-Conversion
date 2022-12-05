let camel = document.getElementById("camel-case");
let pascal = document.getElementById("pascal-case");
let snake = document.getElementById("snake-case");
let screamingSnake = document.getElementById("screaming-snake-case");
let kebab = document.getElementById("kebab-case");
let screamingKebab = document.getElementById("screaming-kebab-case");

const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", input);

// Input Function 
function input() {
let text = document.getElementById("text").value;

camel.innerText = camelCase(text);
pascal.innerText = pascalCase(text);
snake.innerText = snakeCase(text);
screamingSnake.innerText = screamingSnakeCase(text);
kebab.innerText = kebabCase(text);
screamingKebab.innerText = screamingKebabCase(text);
}


// Camel Case Function 
function camelCase(s) {
   let str = s.toLowerCase();
   let words = str.split(" ");
   let finalstr = '';
   for(let i = 0; i < words.length; i++){
         if (i === 0) {
               finalstr += words[i].toLowerCase();
         } else {
            finalstr += words[i][0].toUpperCase() +words[i].substring(1);
         }
   }
   return finalstr;
}


// Pascal Case Function 
function pascalCase(s) {
    let str = s.toLowerCase();
    let words = str.split(" ");
    let finalstr = '';
    for(let i = 0; i< words.length; i++){
        finalstr += words[i][0].toUpperCase()+words[i].substring(1);
    }
    return finalstr;
} 


// Snake Case Function 
function snakeCase(s){
    let str = s.toLowerCase();
    let finalstr = str.replaceAll(" ","_");
    return finalstr;
}


// Screaming Snake Case Function 
function screamingSnakeCase(s){
    let str = s.toUpperCase();
    let finalstr = str.replaceAll(" ","_");
    return finalstr;
}


// Kebab Case Function 
function kebabCase(s) {
    let str = s.toLowerCase();
    let finalstr = str.replaceAll(" ","-");
    return finalstr;
}


// Screaming Kebab Case Function 
function screamingKebabCase(s){
    let str = s.toUpperCase();
    let finalstr = str.replaceAll(" ","-");
    return finalstr;
}




