class Rectangle {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }


    calcArea(lat, long) {
        return this.lat * this.long;
    }
}
const myRectangle = new Rectangle(5, 3);
const aux = myRectangle.calcArea();
console.log(aux);


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grade = [];
    }

    addGrades(nota) {
        this.grade.push(nota);
    }

    calcGrades(){
        const soma = this.grade.reduce((acc, nota) => acc + nota, 0);
        return soma/this.grade.length;
    }

    writeGrades(){
        const medium = this.grade.length ? this.calcGrades().toFixed(2) : 0;
        return `Name: ${this.name}, Grade: ${medium}`;
    }

}

const mary = new Student('Mary', 23);
mary.addGrades(2);
mary.addGrades(6);
mary.addGrades(10);
console.log(mary.writeGrades());

class book {
    constructor(title, author, pagenumber) {
        this.title = title;
        this.author = author;
        this.pagenumber = pagenumber;
    }

    updatePageNumber(newPagenumber){
       this.pagenumber = newPagenumber;
    }

    describe() {
        return `Title: ${this.title}, Author: ${this.author}, Page Number ${this.pagenumber}`;
    }
}

const book1 = new book('Title1', 'Jane Austen', 234);
console.log(book1.describe());
book1.updatePageNumber(455);
console.log(book1.describe());



// 1. Definição de Variáveis e Tipos Básicos
// Crie três variáveis: uma string, um número e um booleano. Atribua valores a essas variáveis e exiba seus tipos no console.

const myString = "hellouu";
const aNumber = 42;
const MtBoolen = true;

console.log(`${myString} - its a string \n${aNumber} - its a number \n${MtBoolen} - its a boolen`); 


// 2. Objeto Básico
// Crie um objeto carro com propriedades marca, modelo e ano. Exiba cada uma das propriedades no console.
 class Car {
    constructor( brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
 }

 const car1 = new Car('Toyota', 'Yaris', 2021);
 const car2 = new Car('Toyota', 'Etios', 2018);
 const car3 = new Car('Honda', 'Civic', 2010);
 const car4 = new Car('BYD', 'Dolphin', 2023);
 console.log( car1,`\n`,car2,`\n`,car3,`\n`,car4);


// 3. Atributos de Objeto
// Adicione uma nova propriedade cor ao objeto carro do exercício anterior e defina um valor para ela. Exiba a propriedade cor no console.

car1.color = 'red'
console.log(car1.color); 

car2.color = 'blue'
console.log(car2.color); 


// 4. Atualizando Valores de Atributos
// Atualize o valor da propriedade ano do objeto carro para 2022. Verifique a mudança exibindo o valor atualizado no console.


car1.year= 2022
car2.year=2022
console.log(car1, car2);

// 5. Tipos de Dados e Operações
// Crie uma função que receba dois números e retorne a soma, subtração, multiplicação e divisão desses números. Exiba os resultados no console."

function operation(num1, num2) {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const mult = num1 * num2;
    const div = num1 / num2;

    console.log("Sum: " + sum, `\n`, "Sub: " + sub,`\n`, "Mult: " + mult,`\n`, "Div: " + div);
}
operation(100, 20);
operation(235, 5);
operation(20, 7);