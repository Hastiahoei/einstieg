let numOutputs = 8;

const output = index => {
    console.log(`Hallo Welt (${index + 1} von ${numOutputs})`);
}

for (let i = 0; i < numOutputs; i++) {
    output(i);
}




let numOutputs = 8;

const output = index => {
    console.log(`Hallo Welt (${index + 1} von ${numOutputs})`);
}


const init = () => {
    for (let i = 0; i < numOutputs; i++) {
        output(i);
    }
}

init();





const isPrime = value => {
    if (value == 1 || value == 0) return false;

    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i == 0) return false;
    }
    return true;
}

const init = () => {
    let zahl1 = Number(prompt('Zahl 1?'));
    let zahl2 = Number(prompt('Zahl 2?'));

    for (let i = zahl1; i <= zahl2; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }

}

init();





const isPrime = value => {
    console.time();
    for (let i = 2; i <= Math.sqrt(value); i++) {
       
        if (value % i == 0) return false;
    }
    console.timeEnd();
    return true;
}

const init = () => {
    let zahl = Number(prompt('Zahl?'));

    if (isPrime(zahl)) {
        console.log(`${zahl} ist prim`);
    } else {
        console.log(`${zahl} ist nicht prim`);
    }
}

init();



const isDivisible = (num, divisor) => (num % divisor == 0);



const init = () => {
    let zahl = prompt('Zahl?');
    let divisor = prompt('Divisor?', 3);

    if (isDivisible(zahl, divisor)) {
        console.log(`${zahl} ist durch ${divisor} teilbar`);
    } else {
        console.log(`${zahl} ist nicht durch ${divisor} teilbar`);
    };
}

init();

