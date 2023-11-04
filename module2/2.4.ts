{
  // interface - generic
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Nasim",
    computer: {
      brand: "HP",
      model: "x2546",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw44",
      display: "OLET",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    hartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const rechDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Reza",
    computer: {
      brand: "Apple",
      model: "x2548",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "dad6",
      hartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "150cc",
    },
  };

  //
}
