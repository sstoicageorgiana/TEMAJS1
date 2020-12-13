// 9.	O functie "produsImpare" care primeste 1 parametru si 
// returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945)<br>
console.log("produs", produsImpare(5));

function produsImpare(n)
{
  let prod = 1; 
  let m=1;
  let contor =0; 
  while (contor<n )
  {
      prod = prod *m;
      m= m+2;
      contor++;
  }
  return prod;
}
