console.log(
  "=================================If-Else-Part=============================="
);

var displayDay = function (dayNum) {
  if (dayNum == 1) {
    console.log(`Monday`);
  } else if (dayNum == 2) {
    console.log(`Tuesday`);
  } else if (dayNum == 3) {
    console.log(`Wednesday`);
  } else if (dayNum == 4) {
    console.log(`Thursday`);
  } else if (dayNum == 5) {
    console.log(`Friday`);
  } else if (dayNum == 6) {
    console.log(`Saturday`);
  } else if (dayNum == 7) {
    console.log(`Sunday`);
  } else {
    console.log(`Invalid Value : ${dayNum}`);
  }
};

displayDay(2);
displayDay(3);
displayDay(9);
displayDay(null);
displayDay(undefined);
displayDay(5);

console.log(
  "=================================SWitch Case=============================="
);
var value = function (week) {
  switch (week) {
    case 1:
      console.log(`If Case is 1 then display should be  : Monday`);
      break;

    case 2:
      console.log(`If Case is 2 then display should be  : Tuesday`);
      break;

    case 3:
      console.log("If Case is 3 then display should be  : Wednesday");
      break;

    case 4:
      console.log(`If Case is 4 then display should be  : Thursday`);
      break;

    case 5:
      console.log(`If Case is 5 then display should be  : Friday`);
      break;

    case 6:
      console.log(`If Case is 6 then display should be  : saturday`);
      break;

    case 7:
      console.log(`If Case is 7 then display should be  : Sunday`);
      break;
    default:
      console.log(`Invalid Value : ${week}`);
      break;
  }
};
value(1);
value(undefined);
value(null);
value("end");
value(5);
