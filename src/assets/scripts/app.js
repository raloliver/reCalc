const keyCalc = document.querySelectorAll('.keyCalc');
const main = document.querySelector('#main');
var result = '';

window.addEventListener('keydown', function (press) {
    if (press.keyCode >= 96 && press.keyCode <= 111) {
        main.innerHTML += parseInt(press.key);
    }
});

for (var count = 0; count < keyCalc.length; count++) {
    keyCalc[count].addEventListener('click', function () {
        var getNumber = this.innerHTML;
        if (getNumber == "=") {
            result = eval(result);
        } else {
            result = result + getNumber;
        }
        main.innerHTML = result;
    });
};