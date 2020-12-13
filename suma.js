
let param =3 ;
let sum = suma(param);
console.log("5. The sum of first N numbers is: ", sum);
function suma(param)
{   let s = 0
    for ( let i=1; i<=param; i++)
    {
        s = s+i
    }
    return s;
}