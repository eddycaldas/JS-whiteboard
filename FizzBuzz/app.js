// write a program that prints the numbers from 1 to 100. But for the multiple
// of three print 'Fizz' instead of the number and for the multiple of five prints
// 'Buzz'. For numbers which are multiple of both three and five print "FizzBuzz"

function numbers() {
  for (var i=1; i<=100; i++){
    if( i%3===0 && i%5===0 ){
      console.log('FizzBuzz');
    }
    else if( i%3===0 ){
      console.log( 'Fizz')
    } else if (i%5===0) {
      console.log( 'Buzz')
    } else {
      console.log(i);
    }
  }
}

 numbers()
 
 // in order for the condition to work perfectly, the two conditions must 
 // be at the beggining of the function so it can apply first.