console.log('--Задание_1--');
let height = 170
if (height <= 80){console.log('newborn');}
else if(height <= 122){console.log('preschooler');}
else if(height <= 158){console.log('schooler');}
else{console.log('teenager or adult');}

console.log('--Задание_2--');

let arrClothes = ['dress', 'trousers', 'blouse', 'shorts'];
for(let i = 0; i < arrClothes.length; i++){console.log(arrClothes[i])}
console.log('*************************'); 

for (const iterator of arrClothes) {
    console.log(iterator);
    }

console.log('--Задание_3--');

let exerciseIII = {
    arrClothes:['dress', 'trousers', 'blouse', 'shorts'],
    apple: {
        form: 'round',
        collor: 'green',
        size: 'big'
    },
    text: 'Финишное задание'
}
for (const iterator in exerciseIII) {
   console.log(iterator);  
   console.log(exerciseIII[iterator]);  
   if (iterator === 'text') {delete exerciseIII.text   
    };}

console.log(exerciseIII);