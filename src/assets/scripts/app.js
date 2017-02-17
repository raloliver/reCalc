const keyCalc = document.querySelectorAll('.keyCalc');
const main = document.querySelector('#main');
var result = '';
var clear = false;
var quick = false;
var opers = ['+', '-', '*', '/'];


window.addEventListener('keydown', function (press) {
    if (press.keyCode >= 96 && press.keyCode <= 111) {
        main.innerHTML += parseInt(press.key);
    }
});

for (var count = 0; count < keyCalc.length; count++) {
    keyCalc[count].addEventListener('click', function () {
        var getNumber = this.innerHTML;
        if (clear || result == "0") {
            clear = false;
            result = '';
        }
        if (getNumber == "+" || getNumber == "-" || getNumber == "*" || getNumber == "/") {
            if (quick) {
                quick = false;
                if (opers.indexOf(main.innerHTML.slice(-1)) > -1) {
                    result = result.substring(0, result.length - 1);
                } else {
                    result = eval(result);
                }
            }
            quick = true;
        }
        if (getNumber == "=") {
            result = '';
            if (opers.indexOf(main.innerHTML.slice(-1)) == -1) {
                result = eval(result);
            }
        } else if (getNumber == "C") {
            result = 0;
            clear = true;
        } else if (main.innerHTML.indexOf(".") > -1 && result == ".") {
            result = '';
        } else {
            result = result + getNumber;
        }
        main.innerHTML = result;
    });
};