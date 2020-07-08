class Vehicle {
  constructor(public color: string) {}
  public drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super('red');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('orange');

vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

const myCar = new Car(4, 'blue');

myCar.drive();
myCar.honk();
