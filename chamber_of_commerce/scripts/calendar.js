const today = new Date();
const day_var = today.getDay();
const day_num = today.getDate();
const days = new Array(7);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
let currentDay = days[day_var];
let startDay = 4;
let forecastDay = 4;
let calendarDay = day_num;

const calendar = document.getElementById("calendar");
for (let i = 0; i < startDay; ++i)
{
    daySection = document.createElement("div");
    calendar.appendChild(daySection);
}
for (let i = 1; i <= 31; ++i)
{
    
    daySection = document.createElement("div");
    dayNum = document.createElement("h5");
    dayNum.innerHTML = i;
    daySection.appendChild(dayNum);
    ++calendarDay;
    ++forecastDay;
    if (forecastDay == 7)
    {
        forecastDay = 0;
        let farmersMarket = document.createElement("p");
        farmersMarket.innerHTML = "Farmers' Market in Old Town";
        daySection.appendChild(farmersMarket);
    }
    if (i == 22)
    {
        let science = document.createElement("p");
        science.innerHTML = "Super Summer Science";
        daySection.appendChild(science);
    }
    if (i == 30) {
        let rodeo = document.createElement("p");
        rodeo.innerHTML = "Pocatello Rodeo";
        daySection.appendChild(rodeo);
    }

    
    calendar.appendChild(daySection);
}