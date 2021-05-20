function toggleMenu()
{
    document.getElementById("mainNav").classList.toggle("hidden");
}

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);
document.getElementById('current-year').innerHTML = currentYear;