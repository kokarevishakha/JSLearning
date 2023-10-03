console.log(
  `========================================== * Assignment On Leap Year * ========================================`
);
var leapYear = function (year) {
  var result = +year;
  if (year == null || isNaN(result)) {
    console.log(`given year ${year} is "  Invalid Data  "`);
  } else {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`Given year ${year} is "  Leap Year  "`);
    } else {
      console.log(`Given year ${year} is "  Not Leap Year  "`);
    }
  }
  console.log(
    `---------------------------------------------------------------`
  );
};
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
console.log(
  `=========================================== END =================================================`
);
