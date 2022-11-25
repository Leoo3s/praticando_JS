const number = [1, 2, 3, 4, 5, 6, 7, 8]


function seekEvenNumber(valor) {
    if (valor % 2 == 0) {
        return valor;
    }
}

var numbersPairs =number.filter(seekEvenNumber);
console.log(numbersPairs)


function seekOddNumber(valor) {
    if (valor % 2 == 1) {
        return valor;
    }
}

var oodNumbers =number.filter(seekOddNumber);
console.log(oodNumbers)

var human =  [{name: "John Doe", age: 22}, {name: "Doe Jhon", age: 17}]

function over18(valor) {
    if (valor.age >= 18) {
        return valor.name;
    }
}

var over18YearsOld =human.filter(over18)
console.log(over18YearsOld)