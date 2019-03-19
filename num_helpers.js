// Function that loops through numbers from 0 to 100 and outputs the tyoe of number and uses other functions.


// Main function that calls all the helper functions
const main = (m) => {
  // loop to check the numbers and assign them the types
  for (num = 0; num<=m+1; num++) {
    // Array to store the types of numbers
    var finalArray = [];
//check if the numbers are prime numbers and assign it the type
    if (primeNumber(num) == true) {
      finalArray.push("prime")
    }
    //check if the numbers are multiples of 15 and assign it the type
    if(fizzbuzz(num) == true){
      finalArray.push("FizzBuzz")
    }
    // check if numbers are multiples of 3 and assign it the type
    if(fizz(num) == true){
      finalArray.push("Fizz")
    }
    // check if numbers are multiples of 5 and assign it the type
    if(buzz(num) == true){
      finalArray.push("Buzz")
    }
    // check if numbers are odd or even and assitgn it the type
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


}
// Fizzbuzz function
const fizzbuzz = (n) =>{
// check for multiples of 15 and number is greater or equal to 1
  if(n%15==0 && n>=1){
    return true
  }
  else{
    return false
  }

}
// Fizz function
const fizz = (n) =>{
//check for multiples of 3 and number is greater or equal to 1
  if(n%3 == 0 && n>=1){
    return true;
  }
  else{
    return false
  }

}
// Buzz function
const buzz = (n) =>{
  //check for multiples of 5 and number is greater or equal to 1
  if(n%5 == 0 && n>=1){
    return true;
  }
  else{
    return false
  }
}


// call the main function
main(100);
