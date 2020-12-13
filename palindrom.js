// <!-- 15.	O functie "palindrom" care primeste un string 
// si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false)
// <br> -->

let z= 121;
let varBool = palindrom(z); 

switch(varBool) 
{
    case false:
        console.log("15. The input isNOt a palindrom : " , z);
    break;
    case true :
        console.log("15. The input is a palindrom : " , z);
    break;
}

function palindrom(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }