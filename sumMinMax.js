// <!-- 12.	O functie "sumMinMax" care primeste un array de numere si
//                      returneaza suma dintre valoare maxima si valoare minima
//                      <br> -->


var array1 = [1,2,3,4,5,10];
sumMinMax();

function sumMinMax()
{
  let max = arrayMax(array1);
  let min = arrayMin(array1);
  let sumOfMinandMax = max+min;

  console.log("12. "+sumOfMinandMax);
}

function arrayMin(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };
  
  function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };

 