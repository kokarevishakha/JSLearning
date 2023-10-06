console.log(
  `================================= * Assignment For Array   * ======================`
);
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Display Array Element :=> ${arrayFruits} `);
// Log the first element
console.log(`First Element:=> ${arrayFruits[0]}`);

// Log the last element
console.log(`Last Element:=> ${arrayFruits[arrayFruits.length - 1]}`);

console.log(
  `-------------------------------Q.2--------------------------------------------`
);
arrayFruits.unshift("Papaya");
console.log(`Add The Element "Papaya" Before Banana :=> ${arrayFruits}`);

console.log(
  `-------------------------------Q.3--------------------------------------------`
);

var removedElements = arrayFruits.splice(4, 1);
console.log(`Remove "Mango" from the array :=> ${arrayFruits}`);

console.log(
  `-------------------------------Q.4--------------------------------------------`
);

let arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arrayFruit.push("Pineapple"); // Add "Pineapple" to the end of the array
console.log(
  `Add Element or Insert an Element "Pineapple" at Last Position :=> ${arrayFruit}`
);

console.log(
  `-------------------------------Q.5--------------------------------------------`
);
let arrayFruit1 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given The Array :=> ${arrayFruit1}`);
arrayFruit1.splice(4, 0, "Dragon Fruit");
console.log(`Insert an Element :=> ${arrayFruit1}`);

console.log(
  `-------------------------------Q.6--------------------------------------------`
);
let arrayFruit2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given The Array :=> ${arrayFruit2}`);

arrayFruit2.splice(1, 1, "Kiwi"); // Remove 1 element starting from index 1 and add "Kiwi" in its place
console.log(`Replace an Element :=> ${arrayFruit2}`);

console.log(
  `-------------------------------Q.7--------------------------------------------`
);
var arrayFruit3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given The Array :=> ${arrayFruit3}`);
for (let i = 0; i <= arrayFruit3.length - 1; i++) {
  const element = arrayFruit3[i];
  console.log(`Index: ${i}  value: ${element}`);
}

console.log(
  `-------------------------------Q.8--------------------------------------------`
);
var arrayFruit3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given The Array :=> ${arrayFruit3}`);
var lastThreeElements = arrayFruit3.slice(-3);

console.log(`Last three elements: ${lastThreeElements}`);
