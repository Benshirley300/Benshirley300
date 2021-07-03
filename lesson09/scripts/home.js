function toggleMenu()
{
    document.getElementById("mainNav").classList.toggle("hidden");
}

let currentDate = new Date();


var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let dayofWeek = weekday[currentDate.getDay()];
let dayOfMonth = currentDate.getDate();

var monthName= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let month = monthName[currentDate.getMonth()];
let currentYear = currentDate.getFullYear();
console.log(currentYear);
document.getElementById('currentYear').innerHTML = dayofWeek + ", " + dayOfMonth + " " + month + " " + currentYear;

let div = document.getElementById('town-summaries');
function populateSection(town, passClass)
{
    let section = document.createElement('div');
    section.classList.add(passClass);
    let img = document.createElement('img');
    img.setAttribute('src', "images/home-page/" + passClass + ".jpg");
    section.appendChild(img);
    let h1 = document.createElement('h1');
    h1.textContent = town.name;
    section.appendChild(h1);
    let h2 = document.createElement('h2');
    h2.textContent = town.motto;
    section.appendChild(h2);
    let p1 = document.createElement('p');
    p1.textContent = "Year Founded: " + town.yearFounded;
    section.appendChild(p1);
    let p2 = document.createElement('p');
    p2.textContent = "Population: " + town.currentPopulation;
    section.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = "Average Rainfall: " + town.averageRainfall;
    section.appendChild(p3);
    div.appendChild(section);
}

const url = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns']
    
    for (let i = 0; i < towns.length; ++i)
    {
        
        if (towns[i].name == 'Soda Springs')
        {
            populateSection(towns[i], "soda-springs");
        }
        else if (towns[i].name == 'Preston')
        {
            populateSection(towns[i], "preston");
        }
        if (towns[i].name == 'Fish Haven')
        {
            populateSection(towns[i], "fish-haven");
        }
    }
  });