// <!-- 13.	O functie "hasDuplicates" care primeste un array 
// si returneaza daca exista duplicate intr-un array primit ca parametru (true/false)
// <br> -->


var arrayforExample = [1,2,2,3,4,5,10];
arrayExpected = [];

let j = 0;
arrayExpected = hasDuplicates(arrayforExample);

console.log("13. Value expected", arrayExpected);

function hasDuplicates(array) {
    let value = []
  
    for (let i = 0; i < array.length; i++) {
      let val = array[i]
      if (value.indexOf(val) !== -1) {
        var arr = [true];
        return arr[0];
      }
      value.push(val)
    }
    var arr = [false];
    return arr[0];
  }