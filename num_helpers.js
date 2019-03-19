// Function that loops through numbers from 0 to 100 and outputs the tyoe of number and uses other functions.




// Array to store boolean values of odd and even numbers
var evens = []
// Function to check even and odd
const even_sort = (x) => {
// check if the number is even or oodd
 for(var even = 2; even <= x; even++){
// For even numbers the boolean value of true is pushed to the evens array
   if(even%2 ===0){

     evens.push(true);


}
// For odd numbers the boolean value of false is pushed to the evens array
else {

 evens.push(false);
}

 }
 return evens;
}



// Array to store boolean values of prime numbers and non-prime numbers
var primes = [];
// prime number function

const primeNumber = (n) =>
{
  for (var num = 1; num <= n; num++) {

    var notPrime = false;
    // loop through the number passed to the function and check for its divisor
    for (var i = 2; i <= num; i++) {
      // check for the divisor and if the divisor is not equal the number
        if (num%i===0 && i!==num && num!==1) {

        // if the  number  is not prime the value of notPrime evaluates to true
            notPrime = true;

        }
        }


    if (notPrime === false && num !==1) {
      // adds the boolean value of true to the primes array if number is a prime number.
      primes.push(true);

}
  else{
          primes.push(false);

    }

  }
  return primes;
}
 var y = primeNumber(10);
 console.log(y);


// Array to store values from the fizzbuzzer function
var fizzer = [];
// FizzBuzz function
  const fizzbuzzer = number => {
// loop through the numbers
    for(let num =1; num<=number; num++){

      // checks if a number is a multiple 
      if (num % 15 === 0){
        fizzer.push( num + " FizzBuzz ");
      }
      else if (num % 3 === 0){
         fizzer.push( num + " Fizz ");
       }
      else if (num % 5 === 0 )
      {
        fizzer.push( num + " Buzz ");
      }
      else{

      fizzer.push(num);

    }


  }
  return fizzer;
  }


// Main function that calls all the helper functions
  const main = (m) =>{

  var store3 = fizzbuzzer(m)
  var store = primeNumber(m);
  var store2 = even_sort(m);

  var intermediateArray = [];

  var finalArray = [];
  var i = 0;
  while(i < m.length){
        store[i] ==true ?intermediateArray.push("prime"):intermediateArray.push("notPrime");


    i++;
  return intermediateArray;
  }
  //return intermediateArray;
  //console.log(n + "prime");

}
var finalMain = main(10);





console.log(finalMain);
