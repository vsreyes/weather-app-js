const api = {
  key: '5d5942f2aa17133a61eff25f6afd2d4a',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=$(query)&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json;
    })
    .then(displayResults);
}

function displayResults(weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `$(weather.name), ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .city');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
}
