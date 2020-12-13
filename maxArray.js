// <!-- 11.	O functie "maxArray" care primeste un array si returneaza valoarea maxima 
// (ar trebui sa functioneze si pentru numere si pentru stringuri)
// <br> -->


var array1 = [1,2,3,4,5];

let maxOfArray = arrayMax(array1)

console.log("11. The maximum value from the array is : ", maxOfArray);
  function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };