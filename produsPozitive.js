// <!-- 14.	O functie "produsPozitive" care primeste un array
//                      si returneaza produsul numerelor pozitive intr-un array primit ca parametru
//                      <br> -->

var array = [ 4, 5, -2, 3];

let prodPoz = produsPozitive(array);   
console.log("14. Produs of positive elements in the array: ",prodPoz);
function produsPozitive(array)
{
    let prod = 1;
    for (let i = 0; i < array.length; i += 1) {
        let val = array[i];
        if (val > 0)
        {
            prod *= array[i];
        } 
    }
    return prod
}

