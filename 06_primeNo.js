var isPrime = function(number) {
    var count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        console.log(`The given number is Prime`);
    } else {
        console.log(`Not Prime`);
    }
}

isPrime(17); // Change the argument to check for different numbers
isPrime(4);
