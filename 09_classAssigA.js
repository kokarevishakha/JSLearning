class Vehicle {
  NameOfVehicle;
  YearOfManufacture;
  Color;
  NumberOfDoors;
  VehicleHistory;
  FuelType;

  // constructor
  constructor(
    NameOfVehicle,
    YearOfManufacture,
    Color,
    NumberOfDoors,
    VehicleHistory,
    FuelType
  ) {
    this.NameOfVehicle = NameOfVehicle;
    this.YearOfManufacture = YearOfManufacture;
    this.Color = Color;
    this.NumberOfDoors = NumberOfDoors;
    this.VehicleHistory = VehicleHistory;
    this.FuelType = FuelType;
  }
}

const vehicleFord = new Vehicle(
  "Ford",
  "2018",
  "White",
  "4",
  "If it has been in any accidents, had regular maintenance.",
  "gasoline or diesel"
);

const vehicleToyota = new Vehicle(
  "Toyota",
  "2020",
  "Silver",
  "4",
  "No accidents",
  "Hybrid"
);

const vehicleHonda = new Vehicle(
  "Honda",
  "2020",
  "Blue",
  "4",
  "No accidents, well-maintained.",
  "Gasoline"
);

const vehicleKia = new Vehicle(
  "Kia",
  "2019",
  "Black",
  "4",
  "regular maintenance.",
  "gasoline"
);

const vehicleBMW = new Vehicle(
  "BMW",
  "2020",
  "Blue",
  "4",
  "well-maintained.",
  "gasoline"
);

const arrayOfVehicle = [
  vehicleFord,
  vehicleToyota,
  vehicleHonda,
  vehicleKia,
  vehicleBMW,
];

console.log(
  "-------------------------------Q.1 create the class and also using Array---------------------------------------------"
);

for (const vehicle of arrayOfVehicle) {
  console.log(`Details For ${vehicle.NameOfVehicle} Car :=>`, vehicle);
  console.log(
    `--------------------------------------------------------------------------------------`
  );
}

console.log("===========Traveling of array=============");

for (const element of arrayOfVehicle) {
  console.log(`- Details for ${element.NameOfVehicle} Car:`);
  console.log(`- Name of Vehicle: ${element.NameOfVehicle}`);
  console.log(`- Year of Manufacture: ${element.YearOfManufacture}`);
  console.log(`- Color: ${element.Color}`);
  console.log(`- Number of Doors: ${element.NumberOfDoors}`);
  console.log(`- Vehicle History: ${element.VehicleHistory}`);
  console.log(`- Fuel Type: ${element.FuelType}`);
  console.log(`--------------------------------------`);
}

class College {
  CollegeName;
  Branch;
  City;
  University;

  // constructor
  constructor(CollegeName, Branch, City, University) {
    this.CollegeName = CollegeName;
    this.Branch = Branch;
    this.City = City;
    this.University = University;
  }

  // methods
  display() {
    console.log(
      `Details Of College :=> ${this.CollegeName}, ${this.Branch}, ${this.City}, ${this.University}`
    );
  }
}

console.log(
  "-------------------------------Q.2 using method ---------------------------------------------"
);

const myCollege = new College(
  "SVPM-COE Baramati College",
  "Information Technology",
  "Baramati",
  "Pune University"
);
myCollege.display();

const CollegeOfCOEP = new College(
  "COEP Pune College",
  "Computer Engg",
  "Pune",
  "Pune University"
);
CollegeOfCOEP.display();

const CollegeOfVJTI = new College(
  "VJTI Mumbai College",
  "Mech Engg",
  "Mumbai",
  "Mumbai University"
);
CollegeOfVJTI.display();

const CollegeOfPICT = new College(
  "PICT College",
  "E&TC",
  "Pune",
  "Pune University"
);
CollegeOfPICT.display();

console.log(
  "-------------------------------Q.3 using Function with pass argument---------------------------------------------"
);

function traverseObject(college) {
  for (const key in college) {
    const element = college[key];
    console.log(`${key}: ${element}`);
  }
}

console.log(`---------------SVPM-COE Baramati College------------`);

const myCollege1 = new College(
  "SVPM-COE Baramati College",
  "Information Technology",
  "Baramati",
  "Pune University"
);
traverseObject(myCollege1);

console.log(`---------------COEP Pune College------------`);

const CollegeOfCOEP1 = new College(
  "COEP Pune College",
  "Computer Engg",
  "Pune",
  "Pune University"
);
traverseObject(CollegeOfCOEP1);

console.log(`---------------VJTI Mumbai College------------`);

const CollegeOfVJTI1 = new College(
  "VJTI Mumbai College",
  "Mech Engg",
  "Mumbai",
  "Mumbai University"
);
