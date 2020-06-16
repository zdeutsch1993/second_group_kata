const mainElement = document.querySelector('main');
const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
  456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const kata1heading = document.createElement('h1')
kata1heading.append('Kata 1');
mainElement.append(kata1heading)

let array1 = []
let kata1 = 1
const limit = 20
while (kata1 <= limit){
    array1.push(kata1)
    kata1 += 1
}
mainElement.append(array1)

const kata2heading = document.createElement('h1')
kata2heading.append('Kata 2');
mainElement.append(kata2heading)

let array2 = []
let kata2 = 2
const limit2 = 20
while (kata2 <= limit2){
    array2.push(kata2)
    kata2 += 2
}
mainElement.append(array2)

const kata3heading = document.createElement('h1')
kata3heading.append('Kata 3');
mainElement.append(kata3heading)

let array3 = []
let kata3 = 1
const limit3 = 19
while (kata3 <= limit3){
    array3.push(kata3)
    kata3 += 2
}
mainElement.append(array3)

const kata4heading = document.createElement('h1')
kata4heading.append('Kata 4');
mainElement.append(kata4heading)

let array4 = []
let kata4 = 5
const limit4 = 100
while (kata4 <= limit4){
    array4.push(kata4)
    kata4 += 5
}
mainElement.append(array4)

const kata5heading = document.createElement('h1')
kata5heading.append('Kata 5');
mainElement.append(kata5heading)

let array5 = []
let kata5 = 1
const limit5 = 100
while (kata5 <= limit5){
    const isSquare = Number.isInteger(Math.sqrt(kata5));
    if (isSquare){
    array5.push(kata5)
    }
    kata5 += 1
}
mainElement.append(array5)

const kata6heading = document.createElement('h1')
kata6heading.append('Kata 6');
mainElement.append(kata6heading)

let array6 = []
let kata6 = 20
const limit6 = 1
while (kata6 >= limit6){
    array6.push(kata6)
    kata6 -= 1
}
mainElement.append(array6)


const kata7heading = document.createElement('h1')
kata7heading.append('Kata 7');
mainElement.append(kata7heading)

let array7 = []
let kata7 = 20
const limit7 = 2
while (kata7 >= limit7){
    array7.push(kata7)
    kata7 -= 2
}
mainElement.append(array7)

const kata8heading = document.createElement('h1')
kata8heading.append('Kata 8');
mainElement.append(kata8heading)

let array8 = []
let kata8 = 19
const limit8 = 1
while (kata8 >= limit8){
    array8.push(kata8)
    kata8 -= 2
}
mainElement.append(array8)

const kata9heading = document.createElement('h1')
kata9heading.append('Kata 9');
mainElement.append(kata9heading)

let array9 = []
let kata9 = 100
const limit9 = 5
while (kata9 >= limit9){
    array9.push(kata9)
    kata9 -= 5
}
mainElement.append(array9)

const kata10heading = document.createElement('h1')
kata10heading.append('Kata 10');
mainElement.append(kata10heading)

let array10 = []
let kata10 = 100
const limit10 = 1
while (kata10 >= limit10){
    const isSquare = Number.isInteger(Math.sqrt(kata10));
    if (isSquare){
    array10.push(kata10)
    }
    kata10 -= 1
}
mainElement.append(array10)


const kata11heading = document.createElement('h1')
kata11heading.append('Kata 11');
mainElement.append(kata11heading)

mainElement.append(sampleArray)


const kata12heading = document.createElement('h1')
kata12heading.append('Kata 12');
mainElement.append(kata12heading)

let array12 = []
for (let kata12 = 0; kata12 < sampleArray.length; kata12 += 1) {
    let currentNumber = sampleArray[kata12]
    if (currentNumber % 2 === 0){
        array12.push(currentNumber)
    }
}
mainElement.append(array12)

const kata13heading = document.createElement('h1')
kata13heading.append('Kata 13');
mainElement.append(kata13heading)

let odds = sampleArray.filter(n => n % 2)

mainElement.append(odds)

const kata14heading = document.createElement('h1')
kata14heading.append('Kata 14');
mainElement.append(kata14heading)

let square = sampleArray.map(x => Math.pow(x, 2));


mainElement.append(square)


const kata15heading = document.createElement('h1')
kata15heading.append('Kata 15');
mainElement.append(kata15heading)

let sum15 = array1.reduce(function(a, b){
    return a + b;
}, 0);
mainElement.append(sum15)


const kata16heading = document.createElement('h1')
kata16heading.append('Kata 16');
mainElement.append(kata16heading)

let sum16 = sampleArray.reduce(function(a, b){
    return a + b;
}, 0);
mainElement.append(sum16)

const kata17heading = document.createElement('h1')
kata17heading.append('Kata 17');
mainElement.append(kata17heading)

let lowestValue = Math.min.apply(null, sampleArray)

mainElement.append(lowestValue)


const kata18heading = document.createElement('h1')
kata18heading.append('Kata 18');
mainElement.append(kata18heading)

let highestValue = Math.max.apply(null, sampleArray)

mainElement.append(highestValue)