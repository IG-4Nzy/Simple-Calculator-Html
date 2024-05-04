var result = document.getElementById('result');
result = '0';
var newResult = '';
var op = '';
var op2 = '';
var firstNum = '';
var secondNum = '';
var length = '';

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("ac");
    var timer;
    var heldDown = false;
    var width = window.innerWidth

    button.addEventListener('touchstart', function (event) {
        if (width >= 300 && width < 1024) {
            startHold();
        }
    });
    button.addEventListener('touchend', function (event) {
        if (width >= 300 && width < 1024) {
            endHold();
        }
    });

    button.addEventListener('mousedown', function (event) {
        if (width >= 1024) {
            startHold();
        }
    });

    button.addEventListener('mouseup', function (event) {
        if (width >= 1024) {
            endHold();
        }
    });




    function startHold() {
        timer = setTimeout(function () {
            heldDown = true;
            allclear();
        }, 200);
    };

    function endHold() {
        if (!heldDown) {
            clear();
        }
        clearTimeout(timer);
        heldDown = false;
    };
});
function calculate(value) {
    if (value == '1' || value == '2' || value == '3' || value == '4' || value == '5' || value == '6' || value == '7' || value == '8' || value == '9' || value == '0') {
        if (result != '0') {
            if (op2 == '') {
                newResult = result += value;
                document.getElementById('result').value = newResult;
            } else {
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
    } else if (value == '+' || value == '-' || value == 'x' || value == '/' || value == '%') {
        result = result.toString();
        length = result.length;
        if (length >= 1) {
            if (length > 1) {
                if (result.substring(length - 1) == '+' || result.substring(length - 1) == '-' || result.substring(length - 1) == 'x' || result.substring(length - 1) == '/' || result.substring(length - 1) == '%' || result.substring(length - 1) == '.') {
                    console.log('err');
                } else if (op != '' || op2 != '') {
                    op2 = value;
                    var lengthOfResult = result.length;
                    firstNum = firstNum.toString();
                    var lengthOfFirstNum = firstNum.length;
                    secondNum = result.substring(lengthOfFirstNum + 1, lengthOfResult);
                    makeCalculation(firstNum, secondNum);
                } else {
                    op = value;
                    firstNum = result;
                    newResult = result += value;
                    document.getElementById('result').value = newResult;

                }
            } else if (length == 1) {
                if (result.substring(length - 1) == '+' || result.substring(length - 1) == '-' || result.substring(length - 1) == 'x' || result.substring(length - 1) == '/' || result.substring(length - 1) == '%' || result.substring(length - 1) == '.') {
                    console.log('err');
                }
                else if (result == '0') {
                    if (value == '.') {
                        newResult = value;
                        result = newResult;
                        document.getElementById('result').value = newResult;
                    } else {
                        console.log('err');
                    }

                } else {
                    op = value;
                    firstNum = result;
                    newResult = result += value;
                    document.getElementById('result').value = newResult;
                }
            }
        }

    } else if (value == '+/-') {
        op = value;
        makeCalculation()
        op = '';
    }

    else if (value == '.') {
        length = result.length;
        if (result.substring(length - 1) == '.') {
            console.log('err');
        } else {
            dec = true;
            newResult = result + value;
            result = newResult;
            document.getElementById('result').value = newResult;
        }

    } else if (value == '=') {
        if (op != '') {
            firstNum = firstNum.toString();
            var lengthOfResult = result.length;
            var lengthOfFirstNum = firstNum.length;
            secondNum = result.substring(lengthOfFirstNum + 1, lengthOfResult);
            makeCalculation(firstNum, secondNum);
        }
    }
}


function makeCalculation(a, b) {
    result = result.toString();
    if (result.includes('.')) {
        var num1 = parseFloat(a);
        var num2 = parseFloat(b);
    } else {
        var num1 = parseInt(a);
        var num2 = parseInt(b);
    }

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
            if (firstNum.includes('.')) {
                rounded = newResult.toFixed(2);
                newResult = rounded;
            }
            firstNum = newResult.toString();
            secondNum = '';
            result = firstNum;
            newResult = newResult + op2;
            result = newResult;
            document.getElementById('result').value = newResult;
            op = '';
            break;
        case '/':
            newResult = num1 / num2;
            var rounded = newResult.toFixed(2);
            newResult = rounded;
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
            newResult = -newResult;
            result = newResult.toString();
            result = newResult;
            document.getElementById('result').value = newResult;
            break;
    }
}


function allclear() {
    op = '';
    newResult = '0';
    op2 = '';
    firstNum = '';
    secondNum = '';
    result = '0';
    document.getElementById('result').value = newResult;
}
function clear() {
    result = document.getElementById('result').value;
    length = result.length;
    if (length > 1) {
        string = result[length - 1];
        var length = result.length;
        if (string == '+' || string == '-' || string == 'x' || string == '/' || string == '%') {
            op = '';
            op2 = '';
        }
        newResult = result.substring(0, length - 1);
        document.getElementById('result').value = newResult;
        result = newResult;
    } else if (length == 1) {
        op = '';
        newResult = '0';
        op2 = '';
        firstNum = '';
        secondNum = '';
        result = '0';
        document.getElementById('result').value = newResult;
    }
}