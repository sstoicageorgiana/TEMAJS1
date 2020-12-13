
let maxNrGlobal =  max(11,11)
console.log("3. After comparation the max number is : ", maxNrGlobal);
function max(firstNumber, secondNumber)
{
   let maxNrLocal
   if (firstNumber > secondNumber)
   {
     maxNrLocal =  firstNumber
   }
   else 
   {
     maxNrLocal =  secondNumber
   }
   return maxNrLocal
}