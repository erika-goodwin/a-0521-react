const carMakers = ['ford', 'toyota', 'chevy']

let carsByMake: string[] = []

// carMakers.push(100)
// carsByMake.push(100)

carsByMake = carMakers.map((car: string):string => {
    return car.toUpperCase()
})

console.log(carsByMake);



const importantDates: (Date | string)[] = []
importantDates.push('2021-11-30')
importantDates.push(new Date())
importantDates.push(true)

console.log(importantDates)




