

class Vehicle{
    protected drive(): void{
        console.log('Vroooom');
    }

    protected honk(): void{
        console.log('Beeep!');
    }
}

class Train extends Vehicle{

    constructor(public wheels: number, public color: string){
        super()
        // this.wheels = wheels
        // this.color = color
    }
    
    honk(): void {
        console.log('Choo choo');
        
    }
}

const train = new Train(10, 'white')
train.honk()
console.log(train.wheels, train.color);




