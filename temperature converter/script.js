function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemp = document.getElementById("outputTemp");
  
    // Convert the temperature
    var convertedTemp;
    if (inputUnit === "celsius") {
      if (outputUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9 / 5) + 32;
      } else if (outputUnit === "kelvin") {
        convertedTemp = parseFloat(inputTemp) + 273.15;
      } else {
        convertedTemp = inputTemp;
      }
    } else if (inputUnit === "fahrenheit") {
      if (outputUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5 / 9;
      } else if (outputUnit === "kelvin") {
        convertedTemp = (parseFloat(inputTemp) + 459.67) * 5 / 9;
      } else {
        convertedTemp = inputTemp;
      }
    } else if (inputUnit === "kelvin") {
      if (outputUnit === "celsius") {
        convertedTemp = parseFloat(inputTemp) - 273.15;
      } else if (outputUnit === "fahrenheit") {
        convertedTemp = (parseFloat(inputTemp) * 9 / 5) - 459.67;
      } else {
        convertedTemp = inputTemp;
      }
    }
  
    // Display the converted temperature
    outputTemp.value = convertedTemp.toFixed(2);
  }