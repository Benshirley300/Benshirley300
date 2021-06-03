let temp = document.getElementById("temp").textContent;
let wind = document.getElementById("wind").textContent;
let windChill = document.getElementById("windchill");
let windChillContainer = document.getElementById("summary6");
value = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
value = Math.round(value);
windChill.textContent = value;
if (temp < 50 && wind > 3)
{
    value = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    value = Math.round(value);
    windChill.textContent = value;
}
else{
    windChillContainer.textContent = "N/A";
}