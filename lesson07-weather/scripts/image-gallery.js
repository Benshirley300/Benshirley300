//lazy loading for all images
const imagesToLoad = document.querySelectorAll("[data-src]");
console.log(imagesToLoad);
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -300px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
    console.log(image);
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        console.log(items);
        items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

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

WebFont.load({
    google: {
      families: [
         'Montserrat'
      ]
    }
  });