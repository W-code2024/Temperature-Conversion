const CelsiusToFahrenheit = document.getElementById(`CelsiusToFahrenheit`);
const FahrenheitToCelsius = document.getElementById(`FahrenheitToCelsius`);

function hasDecimal(num) {
    if(num % 1 != 0){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById(`ConvertButton`).onclick = function() {
    console.log(`Convert Button Clicked!`);
    let input = Number(document.getElementById(`UserInput`).value);
    console.log(`User input: ${input}`);

    if (input && (CelsiusToFahrenheit.checked || FahrenheitToCelsius.checked)) {
        console.log(`condition met!`);
        if (CelsiusToFahrenheit.checked) {
            let result = (input * 9 / 5) + 32; // equarion:(1°C × 9/5) + 32 = 33.8°F
            if(hasDecimal(result) === true) {
                let howManyDecimalPlaces = window.prompt(`How many decimal places would you like to round to?`);
                result = result.toFixed(howManyDecimalPlaces);
                document.getElementById(`Output`).textContent = `${input}°C = ${result}°F`;
            }
            else{
                result = result;
                document.getElementById(`Output`).textContent = `${input}°C = ${result}°F`;
            }
            
        }

        else if (FahrenheitToCelsius.checked) {
            let result = (input - 32) * 5 / 9; // equarion:(1°F − 32) × 5/9 = -17.22°C
            if(hasDecimal(result) === true) {
                let howManyDecimalPlaces = window.prompt(`How many decimal places would you like to round to?`);
                result = result.toFixed(howManyDecimalPlaces);
                document.getElementById(`Output`).textContent = `${input}°F = ${result}°C`;
            }
        }
    }
    else{
        console.log(`condition not met!`);
        document.getElementById(`Output`).textContent = `Please enter a value and select a radio button`;
    }
}