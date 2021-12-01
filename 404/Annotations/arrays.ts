const carMarkers = ['ford', 'toyota', 'chevy']

let carsByMake: string[] = []

// const car = carMarkers[0]

// carMarkers.push(100)
// carsByMake.push(100)

carsByMake = carsByMake.map((car:string):string=>{
    return car.toUpperCase
})
// carsByMake.map((car):string=>{
//     let c = car.toUpperCase
//     console.log(c);
//     return c
// })

console.log(carsByMake);



const dates = [ new Date(), new Date()]

const importantDates: (Date | string)[] = []
importantDates.push('2021-11-30')
importantDates.push(new Date())
importantDates.push(true)

console.log(importantDates)