interface Vehicle { 
    name: string; 
    year: number; 
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary() { return `Name: ${this.name}`}
}

const printVehicle = (vehicle: Vehicle) => {
    // console.log(`
    //     Name: ${vehicle.name}
    //     Year: ${vehicle.year}
    //     Broken: ${vehicle.broken}
    // `);
    console.log(vehicle.summary());
}

printVehicle(oldCivic)