import { format, fromUnixTime } from 'date-fns';

const search = document.getElementById('search');
const form = document.getElementById('place');
const results = document.getElementById('today');
const resultsContainer = document.getElementById('today-container');
const hours = document.getElementById('hours');
const current = document.getElementById('current');
const name = document.getElementById('name');
const errorMsg = document.getElementById('error');
form.addEventListener('submit', searchWeather);

async function getWeather(city = 'London') {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7003f06aea7006e3e8ea35773171e358&units=metric`,
      { mode: 'cors' },
    );
    const current = await response.json();
    const lon = current.coord.lon;
    const lat = current.coord.lat;

    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=7003f06aea7006e3e8ea35773171e358&units=metric`,
      { mode: 'cors' },
    );
    const onecall = await result.json();
    const data = await onecall.current;

    const hours = [];
    for (let i = 0; i < 12; i++) {
      const hour = onecall.hourly[i];
      hours.push(hour);
    }
    const weather = {
      name: current.name,
      temp: data.temp,
      feels: data.feels_like,
      max: current.main.temp_max,
      min: current.main.temp_min,
      humidity: data.humidity,
      pressure: data.pressure,
      uvi: data.uvi,
      sunrise: data.sunrise,
      sunset: data.sunset,
      pressure: data.pressure,
      visibility: data.visibility,
      wind: data.wind_speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      hours: hours,
      timestamp: data.dt,
      timezone: onecall.timezone_offset,
    };

    console.log(onecall);
    return weather;
  } catch (error) {
    console.log(error);
    current.classList.remove('loader');
    errorMsg.style.display = 'block';
  }
}

async function test() {
  console.log(await getWeather());
}

function displayWeather(data) {
  const time = document.getElementById('time');
  const description = document.getElementById('description');
  const icon = document.getElementById('icon');
  const temp = document.getElementById('temp');
  const high = document.getElementById('hi');
  const low = document.getElementById('lo');
  const feels = document.getElementById('feels');
  // hacky subtraction of an hour, issues with BST?
  const addTimeZone = data.timestamp + data.timezone - 3600;
  const unixTime = fromUnixTime(addTimeZone);
  const currTime = format(new Date(unixTime), 'HH:mm PPPP');

  name.innerHTML = `${data.name}`;
  time.innerHTML = `${currTime}`;
  description.innerHTML = `${data.description}`;
  icon.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png`;
  temp.innerHTML = `Temperature: ${Math.round(data.temp)}&#8451;`;
  high.innerHTML = `High: ${Math.round(data.max)}&#8451;`;
  low.innerHTML = `Low: ${Math.round(data.min)}&#8451;`;
  feels.innerHTML = `Feels Like: ${Math.round(data.feels)}&#8451;`;

  cards(data.hours, data.timezone);
}

function cards(data, tz) {
  hours.innerHTML = '';
  data.forEach((i) => {
    const timezone = i.dt + tz;
    const time = fromUnixTime(timezone);
    const hour = format(new Date(time), 'HH:00');
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.className = 'hourCard';
    div.innerHTML = `${hour} ${Math.round(i.temp)}&#8451;`;
    img.src = `http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`;
    div.appendChild(img);
    hours.appendChild(div);
  });
  console.log(data);
}

async function searchWeather(event) {
  errorMsg.style.display = 'none';
  event.preventDefault();
  try {
    hours.innerHTML = '';
    current.className = 'loader';
    results.style.display = 'none';
    const result = await getWeather(`${search.value}`);
    displayWeather(result);
    current.classList.remove('loader');
    results.style.display = 'flex';
  } catch (error) {
    console.log(error);
  }
}

(async function initialDisplay() {
  let city = 'London';
  hours.innerHTML = '';
  current.className = 'loader';
  results.style.display = 'none';
  if (search.value !== '') {
    city = search.value;
  }
  const weather = await getWeather(`${city}`);
  displayWeather(weather);
  current.classList.remove('loader');
  results.style.display = 'flex';
})();
