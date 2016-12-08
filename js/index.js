var a = Number(prompt('Enter value of "A":'));
var b = Number(prompt('Enter value of "B":'));
var c = Number(prompt('Enter value of "C":'));

var B = (b > 0) ? '+' + b : b;
var C = (c > 0) ? '+' + c : c;
var equation = a + 'x<sup>2</sup>' + B + 'x' + C + '=0';

var result = quadEquation(a, b, c);
document.write(equation + '<br>' + result);

function quadEquation(a, b, c) {
    if (b === 0 && c === 0) {
        // some formula
        return 'Equation has one result x=0;';
    }
    else if (c === 0) {
        //some other formula
        var x2 = -b / a;
        return 'Equation has two results x<sub>1</sub>=0; and x<sub>2</sub>=' + x2;
    }
    else if (b === 0) {
        //
        var test = -c / a;
        if (test > 0) {
            var x3 = Math.sqrt(test);
            return 'Equation has two results x<sub>1</sub>= -' + x3 + '; and x<sub>2</sub>= ' + x3;
        }
        else if (test < 0) {
            return 'Doesn\'t have valid results';
        }
    }
    else if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a != 0) {
        var D = b * b - 4 * a * c;
        if (D > 0) {
            // has two results 
            var x1 = (-b - Math.sqrt(D)) / (2 * a);
            x2 = (-b + Math.sqrt(D)) / (2 * a);
            return 'Equation has two results x<sub>1</sub>= ' + round(x1, 2) + '; and x<sub>2</sub>= ' + round(x2, 2);
        }
        else if (D === 0) {
            //has one result
            x1 = -b / (2 * a);
            return 'Your equation has D=0; so results are x<sub>1</sub>=x<sub>2</sub>= ' + x1;
        }
        else {
            return 'Equation has no Real Results!';
        }
    }
    else {
        return 'Please enter valid numbers';
    }
}

//Round off function by http://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
