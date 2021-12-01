//Example of Generic with class

class ArrayOfNumbers {
    constructor(public collection: number[]) {} //[1,2,3]

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {} // ['a','b','c']
    
    get(index: number): string{
        return this.collection[index]
    }
}

class ArrayofAnything<T> {
    constructor(public collection: T[]){}

    get(index: number): T {
        return this.collection[index]
    }
}

const arr1 = new ArrayOfNumbers([1,2,3])
const arr2 = new ArrayOfStrings(['a', 'b', 'c'])

console.log(arr1.get(0));
console.log(arr2.get(0));

const arr3 = new ArrayofAnything<number>([4,5,6])
const arr4 = new ArrayofAnything(['test','hello','bye'])
console.log(arr3.get(0));
console.log(arr4.get(1));




// Example of Generic with functions

function printString(arr: string[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]):void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}


printString(['a', 'b', 'c'])
printNumbers([1, 2, 3])
printAnything<string>(['john', 'james', 'joseph'])
printAnything<number>([1242546,76853,23424])