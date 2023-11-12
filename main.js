const formEl = document.getElementById("form-el")
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

const unit = {
  meter: 3.28084,
  feet: 0.3048,
  liter: 0.264172,
  gallon: 3.78541,
  kilogram: 2.20462,
  pound: 0.453592
}

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault()
  formEl.reset()
  btnEl.setAttribute("disabled", "")
})
inputEl.addEventListener("input", () => {
  btnEl.removeAttribute("disabled")
})

btnEl.addEventListener("click", () => {
  let inputValue = inputEl.value
  if (inputValue > 0) {
    conversion(inputValue)
  } else {
    alert(`Enter value greater than 0 🤔`)
    inputEl.value = ""
  }
})

function conversion(inputValue) {
  let meterResult = (unit.meter * inputValue).toFixed(3)
  let feetResult = (unit.feet * inputValue).toFixed(3)

  let literResult = (unit.liter * inputValue).toFixed(3)
  let gallonResult = (unit.gallon * inputValue).toFixed(3)

  let kilosResult = (unit.kilogram * inputValue).toFixed(3)
  let poundResult = (unit.pound * inputValue).toFixed(3)

  lengthResult.textContent = `${inputValue} meters = ${meterResult} feet | ${inputValue} feet = ${feetResult} meters`

  volumeResult.textContent = `${inputValue} liters = ${literResult} gallons | ${inputValue} gallons = ${gallonResult} liters`

  massResult.textContent = `${inputValue} kilos = ${kilosResult} pounds | ${inputValue} pounds = ${poundResult} kilos`
}