// <!-- 10.	O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) 
//                      si verifica daca x exista in array (rezultatul este true/false)
//                      <br> -->
var arr = [1,2,3,4,5];
let y = 2
let bool =  contains(arr,y);

switch(bool) {
    case true:
      console.log("10. the number "+y  +" is found in the given array");
      break;
    case false:
      console.log("10. the number "+y  +" is NOT  found in the given array");
      break;
    
  }

function contains(array, elem)
{
     var len = array.length;
     for(var i = 0 ; i < len;i++)
     {
         if(array[i] === elem){return true;}
     }
     return false;
 } 