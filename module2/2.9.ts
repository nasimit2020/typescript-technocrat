{
  //Conditional Type

  type a1 = number;
  type b1 = string;

  type X = a1 extends null ? true : false; // conditional type

  type Y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  // car ase kina / bike ase kina / ship ase kina / tractor ase kina
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasCar = CheckVehicle<"car">;
  //
}
