// Function that loops through numbers from 0 to 100 and outputs the tyoe of number and uses other functions.
// funnction outputs the count of the different type of numbers


// Main function that calls all the helper functions
const main = (m) => {

  var countOdd = 0;  // variable to store count of odd numbers
  var countEven = 0; // variable to store count of even numbers
  var countPrime = 0; // variable to store count of prime numbers
  var countFizz =0;  // variable to store count of multiples of  3
  var countBuzz =0;  // variable to store count of multiple of 5
  var countFizzBuzz =0; // variable to store count of multiples of 3 and 5 (multiples of 15)
  // loop to check the numbers and assign them the types
  for (num = 0; num<=m+1; num++) {


    // Array to store the types of numbers
    var finalArray = [];
//check if the numbers are prime numbers and assign it the type
    if (primeNumber(num) == true) {
      finalArray.push("prime")
      countPrime++;
    }
    //check if the numbers are multiples of 15 and assign it the type
    if(fizzbuzz(num) == true){
      finalArray.push("FizzBuzz")
      countFizzBuzz++;
    }
    // check if numbers are multiples of 3 and assign it the type
    if(fizz(num) == true){
      finalArray.push("Fizz")
      countFizz++;
    }
    // check if numbers are multiples of 5 and assign it the type
    if(buzz(num) == true){
      finalArray.push("Buzz")
      countBuzz++;
    }
    // check if numbers are odd or even and assitgn it the type
    if (even_sort(num) == true) {

      finalArray.push("even")
      countEven++;
    } else {
      finalArray.push("odd")
      countOdd++;


    }

// prints the numbers and their types
    console.log(num, finalArray);
  };
  // prints the number count for the different types
console.log("\n Number Count: " + "\n Odd Numbers: " +countOdd + "\n Even numbers :" +countEven + "\n Prime Numbers: " +countPrime + "\n Multiples of 3 : " +  countFizz + "\n Multiples of 5: " +countBuzz + "\n Multiples of both 3 and 5 (15) : "+countFizzBuzz);
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
main(10);
