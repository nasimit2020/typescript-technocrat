{
  // abstraction : 1. interface, 2. abstract

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //for object
  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2000,
  //   };

  //for class
  //real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am testing`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.test();

  // abstract class
  //idea
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am testing`);
    }
  }

  class ToyotaCar extends Vehicle2 {
    startEngine(): void {
      console.log("I am start Engine");
    }
    stopEngine(): void {
      console.log("I am stoped engine");
    }
    move(): void {
      console.log("I am moving car");
    }
  }

  //   const hondaCar = new Vehicle2();
  //   hondaCar.

  //
}
