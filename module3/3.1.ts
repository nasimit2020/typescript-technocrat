{
  // OOP --> class

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard vi", "dog", "Ghaw Ghaw");
  const cat = new Animal("Peshan vi", "cat", "meaw meaw");

  cat.makeSound();
  dog;

  //
}
