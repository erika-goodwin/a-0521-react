//When to use annotations

// 1) Function that return the 'any' type
const json = '{"x":10, "y":20}'
const coords: {x:number ; y:number} = JSON.parse(json)
console.log(coords);

// 2) When we declare a variable on one line and initialize later
const colors = ['red', 'green', 'blue']
let foundColor:boolean

for(let i=0; i<colors.length;i++){
    if(colors[i] === 'green'){
        foundColor = true
    }
}
console.log(foundColor);

// 3) Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let isAboveZero: boolean | number = false

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        isAboveZero = true
    }else{
        isAboveZero = numbers[i]
    }
}

console.log(isAboveZero);
