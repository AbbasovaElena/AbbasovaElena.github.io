console.log('--Задание_1--');

let fanc = (a, b) =>{
    if (b === undefined){console.log(a * a)}
    else {console.log(a * b)}
}
fanc(2, 9)
console.log('--Задание_2--');

let number = [
    9, 
    19,
    29,
    39,
    49
]
console.log(number);

number.push(59) 
console.log(number);

number.pop();
console.log(number);

number.unshift(1);
console.log(number);

number.shift();
console.log(number);

let clothes = [
    'dress',
    'shorts',
    'trousers',
    'skirt'
]
console.log(number.concat(clothes));

number.forEach(function(item){console.log(item * item);}) 

number.reverse();
console.log(number);

console.log(number.splice(1, 3));