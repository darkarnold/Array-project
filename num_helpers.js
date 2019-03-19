// Function that loops through numbers from 0 to 100 and outputs the tyoe of number and uses other functions.


// Main function that calls all the helper functions
const main = (m) => {
  // loop to check the numbers and assign them the types
  for (num = 0; num < m+1; num++) {
    // Array to store the types of numbers
    var finalArray = [];

    if (primeNumber(num) == true) {
      finalArray.push("prime")
    }
    if (even_sort(num) == true) {
      finalArray.push("even")
    } else {
      finalArray.push("odd")

    }
    console.log(num, finalArray);
  };

}



// Function to check even and odd
const even_sort = (x) => {

  // check if the number is even or odd

  if (x % 2 === 0) {

    return true;


  } else {

    return false;
  }



}




// prime number function

const primeNumber = (n) => {

  var notPrime = false;
  // loop through the number passed to the function and check for its divisor
  for (var i = 2; i <= n; i++) {
    // check for the divisor and if the divisor is not equal the number
    if (n % i === 0 && i !== n && n !== 1) {

      // if the  number  is not prime the value of notPrime evaluates to true
      notPrime = true;

    }
  }


  if (notPrime === false && n > 1) {
    // returns prime numbers
    return true;

  } else {
    return false;

  }

  //}
  //return primes;
}


// Array to store values from the fizzbuzzer function
var fizzer = [];
// FizzBuzz function

const fizzbuzzer = number => {
  // loop through the numbers
  //for(let num =1; num<=number; num++){

  // checks if a number is a multiple of 15
  if (num % 15 === 0) {
    fizzer.push(num + " FizzBuzz ");
  }
  //check if number is am ultiple of 3
  else if (num % 3 === 0) {
    fizzer.push(num + " Fizz ");
  }
  //check if number is a multiple of 5
  else if (num % 5 === 0) {
    fizzer.push(num + " Buzz ");
  } else {

    fizzer.push(num);

  }

return fizzer;
}



main(13);
