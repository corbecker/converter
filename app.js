// UI element variables
const inputValueEl = document.querySelector('#inputValue');
const resultValueEl = document.querySelector('#resultValue');
const formulaSelectorEl = document.querySelector('#formula-selector');
const inputTitle = document.getElementById('input-title');
const resultTitle = document.getElementById('result-title');

inputValueEl.addEventListener('keyup', function(e){runFormula(inputValueEl.value, e)}, false);
resultValueEl.addEventListener('keyup', function(e){runFormula(resultValueEl.value, e)}, false);
formulaSelectorEl.addEventListener('change', changeFormula);

function changeFormula(){
  let selectedFormula = formulaSelectorEl.options[formulaSelectorEl.options.selectedIndex].value;
  switch(selectedFormula){
    case 'temperature':
      inputTitle.textContent = 'Fahrenheit';
      resultTitle.textContent = 'Celsius';
      break;
    case 'time':
      inputTitle.textContent = 'Seconds';
      resultTitle.textContent = 'Minutes';
      break;
    default:
  }
}

function runFormula(value, e) {
  let selectedFormula = formulaSelectorEl.options[formulaSelectorEl.options.selectedIndex].value;
  switch(selectedFormula){
    case 'temperature':
      convertTemperature(value, e);
      break;
    case 'time':
      secondsToMinutes(value, e)
      break;
    default:
  }
}

function convertTemperature(temp, e) {
  let x;
  if(e.target.id === 'inputValue'){
    //convert fehrenheit to celsius
    x = (inputValueEl.value - 32) * 5 / 9;
    resultValueEl.value = x.toFixed(2);
  }else{
    //convert celsius to fahrenheit
    x = resultValueEl.value * 9 / 5 + 32;
    inputValueEl.value = x.toFixed(2);
  }
}

function secondsToMinutes(time, e) {
  let x;
  if(e.target.id === 'inputValue'){
    //convert seconds to minutes
    x = inputValueEl.value / 60;
    resultValueEl.value = x.toFixed(2);
  }else{
    //convert minutes to seconds
    x = resultValueEl.value * 60;
    inputValueEl.value = x.toFixed(2);
  }
}
