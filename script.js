let random = document.querySelector('.random');
let valueKey = document.querySelector('.valueKey');
let answerKey = document.querySelector('.answerKey');
let deleteValue = document.querySelector('.deleteValue');
let preloader = document.querySelector('.preloader');
let changeSymbols = document.querySelector('.changeSymbols');

let symbols = 'C?!tYdZ93U4%v1lIO5Bo2PnLTqEpRmD@^#(JSMHz08&uKkAQ*X7hyNfVc$)r:xWeGjbFgiw6|/as';

// let symbols = '9EB4F5827C61A30D';

changeSymbols.addEventListener('click', () => {
    if (changeSymbols.textContent == 'Change Motorola') {
        symbols = '9EB4F5827C61A30D';
        changeSymbols.textContent = 'Change Symbols';
        // console.log(symbols);
    } else if (changeSymbols.textContent == 'Change Symbols') {
        symbols = 'C?!tYdZ93U4%v1lIO5Bo2PnLTqEpRmD@^#(JSMHz08&uKkAQ*X7hyNfVc$)r:xWeGjbFgiw6|/as';
        changeSymbols.textContent = 'Change Motorola';
        // console.log(symbols);
    }

});


let arr = [];
let arrRandom;

valueKey.addEventListener('mousedown', () => {
    answerKey.textContent = '';
    arr = [];
});

deleteValue.addEventListener('click', () => {
    answerKey.textContent = '';
    arr = [];
});

random.addEventListener('click', () => {

    arr = [];
    if (!isNaN(valueKey.value) && valueKey.value <= 300) {
        
        for (let i = 1; i <= valueKey.value; i++) {
            arr.push(symbols[randomTest(0, symbols.length - 1)]);
        }
       
        answerKey.textContent = arr.join('');

    } else if (isNaN(valueKey.value)) {
        alert('Ну йо-ма-йо, кількість символів вимірюється в числах!!!!!');
    }
});





// ----- Рандомне перемішання масиву ------------------




// ========================================================


//-------- Функція рандомних чисел -------------------------------
function randomTest(min, max) {
    result = Math.round(Math.random() * ((max - min) + min));
    return result;
}

//=================================================================

