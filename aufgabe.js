let myString = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.';

            console.log(myString.length);

/////////////////////////////////////


let dummy = 'abohuheigjukloretinbilkmowopfiklomnubuleinigaribei';
let myString = '';
let maxChars = 7;
let minChars = 3;

// Der Start des String soll höchstens das fünft-letzte Zeichen sein
let start = Math.floor(Math.random() * (dummy.length-maxChars));
let numChars = Math.floor(Math.random() * maxChars + minChars);
// Einen String an einen bestehenden String anhängen
myString += dummy.substr(start, numChars);

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

// Ein weiteres "Wort" nehmen und anhängen
start = Math.floor(Math.random() * (dummy.length-maxChars));
numChars = Math.floor(Math.random() * maxChars + minChars);
myString += ` ${dummy.substr(start, numChars)}`;

console.log(myString);


//////////////

let min = 0, max = 50;
let myString = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.';

console.log(myString.substr(min, max));


///////////////////


let myString = 'Hallo Welt!';
        let numChars = 7;
        
        let center = Math.floor(myString.length / 2);
        let min = center - Math.floor(numChars / 2);
        console.log(myString.substr(min, numChars));


/////////////////

let myString = 'Mond und Erde und Mars und Venus gehen rund um die Sonne herum';

let find = 'und', paste = 'oder';

myString = myString.replace(find, paste);

console.log(myString);

//////////////

let myString = 'Mond und Erde und Mars und Venus gehen rund um die Sonne herum';

let find = 'und', paste = 'oder';

myString = myString.replaceAll(find, paste);

console.log(myString);
//////////////////

let myString = 'Mond und Erde und Mars und Venus gehen rund um die Sonne herum';

let find = prompt('Wonach soll gesucht werden?', 'und');
let paste = prompt(`Wodurch soll "${find}" ersetzt werden?`, 'oder');

myString = myString.replaceAll(find, paste);

console.log(myString);

////////////////////

let myString = 'Mond und Erde. Und Mars und, Venus gehen rund um die Sonne herum';

let find = prompt('Wonach soll gesucht werden?', 'und');
let paste = prompt(`Wodurch soll "${find}" ersetzt werden?`, 'oder');


myString = myString.replaceAll(` ${find} `, ` ${paste} `);
myString = myString.replaceAll(` ${find},`, ` ${paste},`);
myString = myString.replaceAll(` ${find}.`, ` ${paste}.`);

find = find[0].toUpperCase() + find.substr(1);
paste = paste[0].toUpperCase() + paste.substr(1);

myString = myString.replaceAll(` ${find} `, ` ${paste} `);
myString = myString.replaceAll(` ${find},`, ` ${paste},`);
myString = myString.replaceAll(` ${find}.`, ` ${paste}.`);

console.log(myString);


