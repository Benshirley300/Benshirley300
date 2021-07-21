



let image = 1;
function switchLeft() {
  img = document.getElementById("main-image");
  if (image == 1)
  {
    img.src = "images/pic-5.jpg";
    image = 5;
  }
  else
  {
    image = image - 1;
    img.src = "images/pic-" + image + ".jpg";
  }
}

function switchRight() {
  img = document.getElementById("main-image");
  if (image == 5)
  {
    img.src = "images/pic-1.jpg";
    image = 1;
  }
  else
  {
    image = image + 1;
    img.src = "images/pic-" + image + ".jpg";
  }
}


let data = [{
  "companies" : {
      0 : {
          "name" : "Gate City Fine Arts",
          "address" : "315 W Center Pocatello, ID 83204",
          "phone" : "208-380-3166",
          "description" : "A fine art gallery located in the historic Kane Building in Old Town Pocatello, Idaho.",
          "website" : "http://www.gatecityfinearts.com"
      },
      1 : {
          "name" : "Hirning Buick GMC",
          "address" : "509 Yellowstone Ave Pocatello, ID 83201",
          "phone" : "866-720-9580",
          "description" : "Hirning Buick GMC is your Southeast Idaho new or used auto dealership in Pocatello serving Idaho Falls, Blackfoot, Rexburd, American Falls, Twin Falls as well as Soda Springs. Proudly known as your House of Good Service!",
          "website" : "http://www.hirningauto.com"
      },
      2 : {
          "name" : "Bank of Idaho",
          "address" : "2300 Viaduct Caporatti Drive Pocatello, ID 83201",
          "phone" : "208-232-1700",
          "description" : "Headquartered in Idaho Falls with branches in Pocatello, St. Anthony, Ashton and Island Park, Bank of Idaho is locally owned. We are what many would consider a hometown bank, and we are proud of that too.",
          "website" : "http://www.bankofidaho.com"
      },
      3 : {
          "name" : "Bargain Tire",
          "address" : "4534 Yellowstone Ave Chubbuck, ID 83202",
          "phone" : "208-238-2300",
          "description" : "At Bargain Tire, we pride ourselves on making sure that you always get the lowest price on tires EVERY day. We guarantee the lowest price in writing!",
          "website" : "http://www.bargaintire.net"
      },
      4 : {
          "name" : "Pocatello Elks Lodge 674",
          "address" : "410 S Main St. Pocatello, ID 83204",
          "phone" : "208-232-2400",
          "description" : "Our charitable goals are Veterans, Youth, and Americanism. We have a lounge and social activities for members. To be an Elk you must be 21+yrs old, believe in a Supreme Being, and pay your dues.",
          "website" : "http://www.pocatelloelks.org"
      },
      5 : {
          "name" : "Carpets Plus",
          "address" : "525 S Main St Pocatello, ID 83204",
          "phone" : "208-478-1411",
          "description" : "Carpets Plus can accomodate all of your flooring needs. We carry a wide array of flooring and installation supplies.",
          "website" : "http://www.carpetspluscolortile.com"
      },
      6 : {
          "name" : "Bannock Development Corporation",
          "address" : "1651 Alvin Ricken Dr Pocatello, ID 83201",
          "phone" : "208-233-3500",
          "description" : "We offer help in gathering demographic information, to site selction, to starting production here! Please call or email us for more information!",
          "website" : "http://www.bannockdevelopment.org"
      }
  }

}];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

companies = data[0]["companies"];
console.log(companies[0]);

function populateCompany(indexNum)
{
  let div = document.getElementById("local-companies");
  let card = document.createElement("div");
  let companyName = document.createElement("h2");
  companyName.innerHTML = companies[indexNum]["name"];
  let aboutUs = document.createElement("p");
  aboutUs.innerHTML = "About Us:";
  let companyDescription = document.createElement("p");
  companyDescription.innerHTML = companies[indexNum]["description"];
  let companyPhone = document.createElement("p");
  companyPhone.innerHTML = "Contact Us: " + companies[indexNum]["phone"];
  card.appendChild(companyName);
  card.appendChild(aboutUs);
  card.appendChild(companyDescription);
  card.appendChild(companyPhone);
  div.appendChild(card);
}



let x = getRandomInt(7);
let y = 0;
let z = 0;
if (x <= 4)
{
  y = x + 1;
  z = x + 2;
}
else 
{
  y = x - 1;
  z = x - 2;
}
populateCompany(x);
populateCompany(y);
populateCompany(z);
