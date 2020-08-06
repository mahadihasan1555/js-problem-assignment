// Problem-1 (convert from feet to mile)

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var carMile = feetToMile(100);
console.log(carMile); 
var bikeMile = feetToMile(1999);
console.log(bikeMile); 
var jetMile = feetToMile(1000000);
console.log(jetMile); 

// Problem-2 (wood calculator)

// Problem-3 (brick calculator)

// Problem-4 (find smallest array)

var myArray = [ "mahadi", "mahadi hasan", "tamim khan", "sahid", "sahid hasan santo", "ashik", "nahid tonoy"];

function tinyFriend(arr){
  var small = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i].length < small.length){
      small = arr[i];
    }
  }
  return small;
}
console.log(tinyFriend(myArray));


