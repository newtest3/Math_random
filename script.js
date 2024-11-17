let random = document.querySelector('.random');
let valueKey = document.querySelector('.valueKey');
let answerKey = document.querySelector('.answerKey');
let deleteValue = document.querySelector('.deleteValue');
let preloader = document.querySelector('.preloader');
let changeSymbols = document.querySelector('.changeSymbols');

let symbols = 'C?!tYdZ93U4%v1lIO5Bo2PnLTqEpRmD@^#(JSMHz08&uKkAQ*X7hyNfVc$)r:xWeGjbFgiw6|/as';

// let symbols = '9EB4F5827C61A30D';



changeSymbols.addEventListener('click', ()=>{
    if(changeSymbols.textContent == 'Change Motorola') {
        symbols = '9EB4F5827C61A30D';
        changeSymbols.textContent = 'Change Symbols';
        // console.log(symbols);
    } else if(changeSymbols.textContent == 'Change Symbols') {
        symbols = 'C?!tYdZ93U4%v1lIO5Bo2PnLTqEpRmD@^#(JSMHz08&uKkAQ*X7hyNfVc$)r:xWeGjbFgiw6|/as';
        changeSymbols.textContent = 'Change Motorola';
        // console.log(symbols);
    }
    
});


let arr = [];
let arrRandom;

valueKey.addEventListener('mousedown', ()=>{
    answerKey.textContent = '';
    arr = [];
    clearInterval(arrRandom);
});

deleteValue.addEventListener('click', ()=>{
    answerKey.textContent = '';
    arr = [];
    clearInterval(arrRandom);
});

random.addEventListener('click', ()=>{
    if(!isNaN(valueKey.value) && valueKey.value <= 300) {
        answerKey.textContent = '';
        arr = [];
        let numEnd = valueKey.value;
       
        // console.log(valueKey.value);
            arrRandom = setInterval(()=>{
            let date = new Date();
                let num = date.getMilliseconds();
                
            setTimeout(()=>{
                
                    arr.push(symbols[Math.round((num/1000)*((symbols.length-1)-0)+0)]);
                // console.log(symbols[Math.round((num/1000)*((symbols.length-1)-0)+0)]);
                // console.log(Math.round((num*num*num)/10**6));
                
                
            },111);
            if(arr.length != valueKey){
                preloader.style.display = 'block';
            }
            
            if(arr.length == numEnd) {
                preloader.style.display = 'none';
                // answerKey.textContent = arr.join('');
                // console.log(arr);
    
            let shuffleSymbols = [];
            for (let i = arr.length - 1; i>-1; i--) {
                shuffleSymbols.push(arr.splice(randomTest(num, 0,arr.length - 1), 1).join(`'`));
            }       
            answerKey.textContent = shuffleSymbols.join('');
            
            // console.log(shuffleSymbols);
           
            clearInterval(arrRandom);
            }
        },689);
    } else if (isNaN(valueKey.value)) {
        alert('Ну йо-ма-йо, кількість символів вимірюється в числах!!!!!');
    }
   
});





// ----- Рандомне перемішання масиву ------------------




// ========================================================


//-------- Функція рандомних чисел -------------------------------
function randomTest (num, min, max) {
    result = Math.round((num/1000)*((max-min)+min));
    return result;
}

//=================================================================

