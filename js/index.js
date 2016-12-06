var a = Number(prompt('Enter value of "A":'));
var b = Number(prompt('Enter value of "B":'));
var c = Number(prompt('Enter value of "C":'));


function quadEquation(a, b, c) {
   if(b === 0 && c === 0) {
       // some formula
       return 'Equation has one result x=0;';
   } else if (c === 0) {
       //some other formula
       var x2 = -b/a;
       return 'Equation has two results x1=0; and x2=' + x2;
   } else if (b === 0) {
       //
       var test = -c/a;
       if(test > 0) {
           var x3 = Math.sqrt(test);
           return 'Equation has two results x1= -' + x3 + '; and x2= ' + x3;
       } else if (test < 0) {
           return 'Doesn\'t have valid results' ;
       } 
   } else if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a != 0){
       var D = b * b - 4 * a * c;
        if (D > 0){
            // has two results 
            var x1 = (-b - Math.sqrt(D)) / (2 * a);
             x2 = (-b + Math.sqrt(D)) / (2 * a);
             return 'Equation has two results x1= ' + x1 + '; and x2= ' + x2;
        } else if (D === 0){
            //has one result
            x1 = -b / (2 * a);
            return 'Your equation has D=0; so results are x1=x2= ' + x1;
        } else {
            return 'Equation has no Real Results!';
        }
       } else {
           return 'Please enter valid numbers';
       }
}

var result = quadEquation(a, b, c);
document.write(result);