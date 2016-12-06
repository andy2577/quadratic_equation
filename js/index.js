var a = Number(prompt('Enter value of "A":'));
var b = Number(prompt('Enter value of "B":'));
var c = Number(prompt('Enter value of "C":'));


function quadEquation(a, b, c) {
   if(b === 0 && c === 0) {
       // some formula
       return 'Equation has one result x=0';
   } else if (c === 0) {
       //some other formula
       var x2 = -b/a;
       return 'Equation has two results x1=0 and x2=' + x2;
   } else if (b === 0) {
       //
       var test = -c/a;
       if(test > 0) {
           return 'Has two results';
       } else if (test < 0) {
           return 'Doesn\'t have valid results' ;
       }
   }
}

var result = quadEquation(a, b, c);
document.write(result);