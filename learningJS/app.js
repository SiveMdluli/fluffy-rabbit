function sumPrimes(num) {
  
    //[STEP 1]An array to store all numbers from 0 - 'num'
    var arr=[];
    
    //[STEP 2]A variable to store the sum of all primes numbers
    var total = 0;
  
    /*[STEP 3] Loops 'num' number of times and 'pushes' all
      numbers from 0 to 'num' into the array 'arr' */
    for(var j = 1; j <= num; j++){
     arr.push(j); 
    }
    
   //[STEP 4.1] loop through the array 'arr' to test each number for prime
   for(var i = 0; i < arr.length; i++) {
     /*[STEP 4.2] pass each number from the 
       array 'arr' into the 'isPrime' function (defined below)
       to check if it is a prime number.
       (Go to isPrime function below for next step) */
     if(isPrime(arr[i]) == true){
     
       //[STEP 6] If 'true' the number is added to total
       total+= arr[i];
     }
    }
    
    /*[Step 7] After loop is complete, return 'total' 
      which stores the sum of all the primes number until 'num' */
    return total;
      }
  
  //[STEP 5] returns true or false if the number is prime or not.
  function isPrime(value) {
      for(var i = 2; i < value; i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }
  
  sumPrimes(10);
  
  
  