
const townEvents = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townEvents)
  .then((response) => response.json())
  .then((jsObject) => {
    let title = document.getElementById("title").innerText;
    let section = document.getElementById("events");
    const towns = jsObject["towns"];
    for (let i = 0; i < towns.length; ++i)
    {
      if (towns[i].name == title)
      {
        for (let j = 0; j < towns[i].events.length; ++j)
        {
          let li = document.createElement('li');
          li.innerHTML = towns[i].events[j];
          li.classList = "eventLi";
          section.appendChild(li);
        }
        
      }
    }
    
    });