let minNrGlobal =  min(5,2)
console.log("3. After comparation the min number is : ", minNrGlobal);
function min(firstNumber, secondNumber)
{
   let minNrLocal
   if (firstNumber < secondNumber)
   {
    minNrLocal =  firstNumber
   }
   else 
   {
    minNrLocal =  secondNumber
   }
   return minNrLocal
}