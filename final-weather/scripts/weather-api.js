

const today = new Date();
const y = today.getDay();
const days = new Array(7);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
let currentDay = days[y];
let forecastDay = y;


  function populateForecastDay(j, jsObject)
  {
      const forecastID = "forecast-" + j;
      imgSection = document.getElementById(forecastID + "-img");
      let iconCode = jsObject.weather[0].icon;
      let iconPath = "http://openweathermap.org/img/w/" + iconCode + ".png";
      img = document.createElement('img');
      img.src = iconPath;
      imgSection.appendChild(img);
      weatherHigh = document.getElementById(forecastID + "-high");
      weatherHigh.innerHTML = jsObject.main.temp;
  }

  let j = 1;

  let apiURL = "";
    if (document.getElementById("title").textContent == "Preston")
    {
        apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e86101f673aa05c3dbdbcfb18e2504ae&units=imperial";
    }
    else if (document.getElementById("title").textContent == "Soda Springs")
    {
        apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=e86101f673aa05c3dbdbcfb18e2504ae&units=imperial";
    }
    else if (document.getElementById("title").textContent == "Fish Haven")
    {
        apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=e86101f673aa05c3dbdbcfb18e2504ae&units=imperial";
    }
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    for (let i = 0; i < 40; ++i)
    {
        if (jsObject.list[i].dt_txt.includes("18:00:00"))
        {
            populateForecastDay(j, jsObject.list[i]);
            ++j;
        }
    }
    });


let currentWeatherURL = "";
if (document.getElementById("title").textContent == "Preston")
    {
        currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e86101f673aa05c3dbdbcfb18e2504ae&units=imperial";
    }
    else if (document.getElementById("title").textContent == "Soda Springs")
    {
        currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=e86101f673aa05c3dbdbcfb18e2504ae&units=imperial";
    }
    else if (document.getElementById("title").textContent == "Fish Haven")
    {
        currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=e86101f673aa05c3dbdbcfb18e2504ae&units=imperial";
    }
fetch(currentWeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    let section = document.getElementById("summary2");
    section.innerHTML = jsObject.weather[0].main;

    section = document.getElementById("temp");
    section.textContent = jsObject.main.temp_max;

    section = document.getElementById("summary8");
    section.innerHTML = jsObject.main.humidity;

    section = document.getElementById("wind");
    section.textContent = jsObject.wind.speed;


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
    });
