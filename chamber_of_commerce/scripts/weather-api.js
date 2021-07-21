

const today = new Date();
const day_var = today.getDay();
const days = new Array(7);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
let currentDay = days[day_var];
let forecastDay = day_var;

  function populateForecastDay(j, jsObject)
  {
      const forecastID = "forecast-" + j;
      let title = document.createElement("h3");
      title.innerHTML = days[forecastDay];
      if (forecastDay == 6) {
        forecastDay = 1;
      }
      else
      {
          forecastDay++;
      }
     
      imgSection = document.getElementById(forecastID + "-img");
      let iconCode = jsObject.weather[0].icon;
      let iconPath = "http://openweathermap.org/img/w/" + iconCode + ".png";
      img = document.createElement('img');
      img.src = iconPath;
      imgSection.appendChild(title);
      imgSection.appendChild(img);
      weatherHigh = document.getElementById(forecastID + "-high");
      weatherHigh.innerHTML = jsObject.temp.max;
  }

  let j = 1;

  let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly&appid=e86101f673aa05c3dbdbcfb18e2504ae&units=imperial";
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    for (let i = 0; i < 3; ++i)
    {
        populateForecastDay(j, jsObject["daily"][i]);
        ++j;
    }
    });

