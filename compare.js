
let returnedStatamentForCompare = compare(5,2)
console.log("2. After comparation we have:", returnedStatamentForCompare);

function compare(fistNumber, secondNumber)
{
    if ( fistNumber < secondNumber)
        return -1
    else if (fistNumber > secondNumber)
        return 1
    else if (fistNumber === secondNumber)
        return 0
}