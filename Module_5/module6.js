//Strings

let phrase = 'Smells Like Teen Spirit';

console.log(phrase.length + "\n" + phrase.toLowerCase() + "\n" + phrase.toUpperCase());
console.log("New Phrase: " + phrase.replace("Spirit", "Ice Cream"));

let auxReplace = 'Old';

console.log(`Smells Like ${auxReplace}`);

//Boolen
let num = 10;
let string = "String"
console.log(num ==  string);

//for
for (i=0; i< phrase.length; i++){
    console.log("(FOR) Result's: " + i);
}
console.log("\n");

//do-while
let aux = 0;
do {
    console.log("(DO/WHILE) Result's: " + aux);
    aux++;

}while (aux < (phrase.length/4));

console.log("\n");

//while
let cont = 0;

while (cont < (phrase.length/2)){
    console.log("(WHILE) Result's: " + cont);
    cont++;
}

//Function
let a = 12;
let b = 4;

function calcPitagoras() {
    let c = 0;
    return c = Math.sqrt((a*a)+ (b*b));
}

console.log("\nPythagoras' Theorem:" + calcPitagoras());

//Objects
let book = 
{
    name: "Happy Potter",
    year: "1997",
    author: "J.K Rowling",
} 

console.log("\n");
console.log(book.name);

book["pages"] = "208";

console.log(book.pages);
console.log(book.author);
console.log(book);
