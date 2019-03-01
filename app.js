// UI element variables
const inputValueEl = document.querySelector('#inputValue');
const resultValueEl = document.querySelector('#resultValue');
const formulaSelectorEl = document.querySelector('#formula-selector');
const selectedFormula = formulaSelectorEl.options[formulaSelectorEl.selectedIndex].value;

inputValueEl.addEventListener('keyup', function(e){selectFormula(inputValueEl.value, e)}, false);
resultValueEl.addEventListener('keyup', function(e){selectFormula(resultValueEl.value, e)}, false);

function selectFormula(value, e) {
  switch(selectedFormula){
    case 'temperature':
      convertTemperature(value, e);
      break;
    case 'time':
      console.log("time");
      break;
    default:
  }
}

function convertTemperature(temp, e) {
  let x;
  if(e.target.id === 'inputValue'){
    //convert fehrenheit to celsius
    x = (inputValueEl.value - 32) * 5 / 9;
    resultValueEl.value = Math.round(x);
  }else{
    //convert celsius to fahrenheit
    x = resultValueEl.value * 9 / 5 + 32;
    inputValueEl.value = Math.round(x);
  }
}