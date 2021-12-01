interface Reportable { summary(): string}
// (2) BEFORE SHARING ONE BY TWO
// interface Vehicle {name: string; year: number; broken: boolean}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary() { return `Name: ${this.name}`}
}

const drink = { 
    color: 'brown',
    carbonated: true,
    summary(){return `Is this drink carbonated?  ---> ${this.carbonated}`}
}

const printSummary = (item) => {

    console.log(item.summary());
}


// (2) BEFORE SHARING ONE BY TWO
// const printVehicle = (vehicle: Vehicle) => {
//     // console.log(`
//     //     Name: ${vehicle.name},
//     //     Year: ${vehicle.year},
//     //     Broken: ${vehicle.broken},
//     // `);

//     console.log(vehicle.summary());
// }


//(1) BEFORE INTERFACE
// const printVehicle = (vehicle:{name: string; year: number; broken: boolean}) => {
//     console.log(`
//         Name: ${vehicle.name},
//         Year: ${vehicle.year},
//         Broken: ${vehicle.broken},
//     `);
// }

// printVehicle(oldCivic)
printSummary(oldCivic)
printSummary(drink)