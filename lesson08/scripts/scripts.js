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


if (currentDate.getDay() != 5)
{
    document.getElementById("fridayAnnouncement").classList.add("not-friday");
}
else
{
    document.getElementById("fridayAnnouncement").classList.remove("not-friday");
}


for (i = 1; i <= 5; ++i)
{
    forecast = document.getElementById("day" + i);
    forecast.innerText = weekday[currentDate.getDay() + i - 1];
}



WebFont.load({
  google: {
    families: [
       'Montserrat'
    ]
  }
});