interface Reportable { 
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary() { return `Name: ${this.name}`}
}

const drink = {
    color: 'brown',
    carbonated: true,
    summary() { return `Is this drink carbonated? --> ${this.carbonated}`}
}

const printSummary = (item: Reportable) => {
    console.log(item.summary());
}

printSummary(oldCivic)
printSummary(drink)