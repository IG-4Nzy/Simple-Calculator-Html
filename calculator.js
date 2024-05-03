var result = document.getElementById('result');
result = '0';
var newResult = '';
var op = '';
var op2 = '';
var firstNum = '';
var secondNum = '';
var length = '';


function calculate(value) {
    if (value == '1' || value == '2' || value == '3' || value == '4' || value == '5' || value == '6' || value == '7' || value == '8' || value == '9' || value == '0') {
        if (result != '0') {
            if (op2 == '') {
                newResult = result += value;
                document.getElementById('result').value = newResult;
            } else {
                console.log('result = ' + result);
                newResult = result + value;
                op = op2;
                op2 = '';
                document.getElementById('result').value = newResult;
                result = newResult;
            }

        } else {
            newResult = value;
            result = newResult;
            document.getElementById('result').value = newResult;
        }
    } else if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%' || value == 'x') {
        console.log('num1 = ' + firstNum);
        console.log('num2 = ' + secondNum);
        length = result.length;
        console.log('op = ' + op);
        console.log('op2 = ' + op2);
        console.log('length = ' + length);
        console.log('result = ' + result);
        if (length > 1) {
            if (result.substring(length - 1) == '+') {
                console.log('err');
            } else if (op != '' || op2 != '') {
                op2 = value;
                var lengthOfResult = result.length;
                var lengthOfFirstNum = firstNum.length;
                secondNum = result.substring(lengthOfFirstNum + 1, lengthOfResult);
                makeCalculation(firstNum, secondNum);
            } else {
                op = value;
                firstNum = result;
                newResult = result += value;
                document.getElementById('result').value = newResult;

            }
        } else if (result == '0') {
            newResult = value;
            result = newResult;
            document.getElementById('result').value = newResult;
        } else {
            op = value;
            firstNum = result;
            newResult = result += value;
            document.getElementById('result').value = newResult;
        }
    } else if (value == '+/-') {
        op = value;
        makeCalculation()
    }
    else if (value == 'ac') {
        result = '';
        newResult = '0';
        op = '';
        op2 = '';
        firstNum = '';
        secondNum = '';
        document.getElementById('result').value = newResult;
    } else if (value == '=') {
        if (op != '') {
            var lengthOfResult = result.length;
            var lengthOfFirstNum = firstNum.length;
            secondNum = result.substring(lengthOfFirstNum + 1, lengthOfResult);
            console.log('first number = ' + firstNum);
            console.log('second number = ' + secondNum);
            console.log('result = ' + result);
            makeCalculation(firstNum, secondNum);
        }
    }
}


function makeCalculation(a, b) {
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    switch (op) {
        case '+':
            newResult = num1 + num2;
            firstNum = newResult.toString();
            secondNum = '';
            result = newResult.toString();
            newResult = newResult + op2;
            result = newResult;
            document.getElementById('result').value = newResult;
            op = '';
            break;
        case 'x':
            newResult = num1 * num2;
            firstNum = newResult.toString();
            secondNum = '';
            result = newResult.toString();
            newResult = newResult + op2;
            result = newResult;
            document.getElementById('result').value = newResult;
            op = '';
            break;
        case '/':
            newResult = num1 / num2;
            firstNum = newResult.toString();
            secondNum = '';
            result = newResult.toString();
            newResult = newResult + op2;
            result = newResult;
            document.getElementById('result').value = newResult;
            op = '';
            break;
        case '-':
            newResult = num1 - num2;
            firstNum = newResult.toString();
            secondNum = '';
            result = newResult.toString();
            newResult = newResult + op2;
            result = newResult;
            document.getElementById('result').value = newResult;
            op = '';
            break;
        case '%':
            newResult = num1 % num2;
            firstNum = newResult.toString();
            secondNum = '';
            result = newResult.toString();
            newResult = newResult + op2;
            result = newResult;
            document.getElementById('result').value = newResult;
            op = '';
            break;
        case '+/-':
            newResult = parseInt(result);
            console.log(newResult);
            newResult = -newResult;
            result = newResult.toString();
            result = newResult;
            document.getElementById('result').value = newResult;
            op = '';
            break;
    }
}