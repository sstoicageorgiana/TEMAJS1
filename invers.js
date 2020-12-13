
let inversNUM = invers(123456);

console.log("8. The invers numbers is: ", inversNUM);
function invers(num) {
var out = '';
if(typeof num === 'number') {
num = '' + num + '';
}

for(var i = num.length; i >= 0; i--) {
out += num.charAt(i);

}

out = parseInt(out);
return out;
  
}

