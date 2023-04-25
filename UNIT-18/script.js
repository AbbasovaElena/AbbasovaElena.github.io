let height = 170
if (height <= 80){console.log('newborn');}
else if(height <= 122){console.log('preschooler');}
else if(height <= 158){console.log('schooler');}
else{console.log('teenager or adult');}

let arrClothes = ['dress', 'trousers', 'blouse', 'shorts'];
for(let i = 0; i < arrClothes.length; i++){console.log(arrClothes[i])}
console.log('*************************'); 

for (const iterator of arrClothes) {
    console.log(iterator);
}