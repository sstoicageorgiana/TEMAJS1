 
 let numberGiven = 8;
 let ifPrim = prim(numberGiven);
 switch(ifPrim)
 {
    case true:
        console.log("6. " + numberGiven + " Is a prim number.");
        break;
    case false:
        console.log("6. " + numberGiven + " Is not a prim number.");
        break;
 }


function prim(number)
{
    if(number < 2) 
        return false;
    if(number === 2) 
        return true;
    for(var i = 2; i < number; i++)
     {
        if(number % i === 0) 
            return false;
    }
    return true;
}