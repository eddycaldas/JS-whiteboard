
var num = [0,1];
// console.log(num[0]);
// console.log(num[1]);
// console.log(num.length);

function getNumber(){
  var prev1 = 1;
  var prev2 = 0;
  var newNumber;
  
  
  var prev1 = num[num.length-1];
  var prev2 = num[num.length-2];
  var newNumber = prev1 + prev2;
  num.push(newNumber);
  return num;
}

getNumber(10);