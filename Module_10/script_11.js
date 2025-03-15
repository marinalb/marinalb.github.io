class people {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    getnome() {
        return this._name;
    }
    getidade() {
        return this._age;
    }
    setnome(newName) {
        this._name = newName;
    }
    setidade(newIdade) {
        this._age= newIdade;
    }    
}

const people1 = new people('Mary', 49);
console.log(`Name: ${people1.getnome()}, Age: ${people1.getidade()}`);

people1.setnome('Amy Lee');
people1.setidade(102);
console.log(`Name: ${people1.getnome()}, Age: ${people1.getidade()}`);

class animal {
    sounds() {

    }
}

class dog extends animal {
    sounds() {
        return 'Au au';
    }
}

class cat extends animal {
    sounds() {
        return 'Miau';
    }
}

function makeNoise(animal) {
    console.log(animal.sounds());
}

const dog1 = new dog();
const cat1 = new cat();

makeNoise(dog1);
makeNoise(cat1);