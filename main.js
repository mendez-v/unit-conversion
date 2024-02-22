const $ = selector => document.getElementById(selector);

const numberInpt = $("number-inpt"),
      convertBtn = $("convert-btn"),
      conversionBody = $("conversion-body"),
      meterToFeet = $("meterToFeet"),
      literToGallon = $("literToGallon"),
      massToPound = $("massToPound")

const unit = {
  meter: 3.28084,
  feet: 0.3048,
  liter: 0.264172,
  gallon: 3.78541,
  kilo: 2.20462,
  pound: 0.453592
}

numberInpt.addEventListener('input', () => {
  if (numberInpt.value > 999) {
      numberInpt.value = numberInpt.value.slice(0, 3);
  } else if (numberInpt.value < 1) {
    alert(`The number must be greater than zero`)
    numberInpt.value = ""
    numberInpt.focus()
  }
});

let inputValue = 0

/* UNFACTORED
convertBtn.addEventListener("click", () => {
  inputValue = numberInpt.value
  convert(inputValue)
})

function convert(input) {
  let result1 = (unit.meter * input).toFixed(3)
  let result2 = (unit.feet * input).toFixed(3)
  let result3 = (unit.liter * input).toFixed(3)
  let result4 = (unit.gallon * input).toFixed(3)
  let result5 = (unit.kilo * input).toFixed(3)
  let result6 = (unit.pound * input).toFixed(3)
  meterToFeet.textContent = `${inputValue} meters = ${result1} feet | ${inputValue} feet = ${result2} meters`
  literToGallon.textContent = `${inputValue} liters = ${result3} gallons | ${inputValue} gallons = ${result4} liters`
  massToPound.textContent = `${inputValue} kilos = ${result5} pounds | ${inputValue} pounds = ${result6} kilos`
}
*/

convertBtn.addEventListener("click", () => {
  let inputValue = numberInpt.value
  let results = convert(inputValue)
  render(results, inputValue)

  numberInpt.value = ""
  numberInpt.focus()
})

function convert(input) {
  return {
    meterToFeet: (unit.meter * input).toFixed(3),
    feetToMeter: (unit.feet * input).toFixed(3),
    literToGallon: (unit.liter * input).toFixed(3),
    gallonToLiter: (unit.gallon * input).toFixed(3),
    kiloToPound: (unit.kilo * input).toFixed(3),
    poundToKilo: (unit.pound * input).toFixed(3)
  }
}


function render(results, inputValue) {
  meterToFeet.innerHTML = `<span class="accent">${inputValue}</span> meters = <span class="accent">${results.meterToFeet}</span> feet | <span class="accent">${inputValue}</span> feet = <span class="accent">${results.feetToMeter}</span> meters`
  literToGallon.innerHTML = `<span class="accent">${inputValue}</span> liters = <span class="accent">${results.literToGallon}</span> gallons | <span class="accent">${inputValue}</span> gallons = <span class="accent">${results.gallonToLiter}</span> liters`
  massToPound.innerHTML = `<span class="accent">${inputValue}</span> kilos = <span class="accent">${results.kiloToPound}</span> pounds | <span class="accent">${inputValue}</span> pounds = <span class="accent">${results.poundToKilo}</span> kilos`
}