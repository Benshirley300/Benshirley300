
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
data = data[0];
const cardSection = document.getElementById("business-directory");
for (let i = 0; i < 7; ++i)
{
    let businessCard = document.createElement("div");
    let bTitle = document.createElement("h3");
    bTitle.innerHTML = "Business Name: " + data["companies"][i]["name"];
    let bDesc = document.createElement("p");
    bDesc.innerHTML = "Who We Are: " + data["companies"][i]["description"];
    let bPhone = document.createElement("p");
    bPhone.innerHTML = "Phone Number: " + data["companies"][i]["phone"];
    let bAddress = document.createElement("p");
    bAddress.innerHTML = "Address: " + data["companies"][i]["address"];
    let bWebsite = document.createElement("p");
    bWebsite.innerHTML = "Website: " + data["companies"][i]["website"];
    businessCard.appendChild(bTitle);
    businessCard.appendChild(bAddress);
    businessCard.appendChild(bDesc);
    businessCard.appendChild(bPhone);
    businessCard.appendChild(bWebsite);
    cardSection.appendChild(businessCard);
}
let variable = 1;
function toggleDisplay()
{
    document.getElementById("business-directory").classList.toggle("grid");
    let dButton = document.getElementById("button1");
    variable++;
    if (variable % 2 == 0)
    {
        dButton.innerHTML = "&#9868;";
    }
    else
    {
        dButton.innerHTML = "&#9871;";
    }
}