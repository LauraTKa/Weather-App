let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let h4 = document.querySelector("h4");

if (hours < 12) {
  h4.innerHTML = `${day}, ${date} ${month}, ${hours}:${minutes}am`;
} else {
  h4.innerHTML = `${day}, ${date} ${month}, ${hours}:${minutes}pm`;
}

function showCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}

let formInput = document.querySelector("#input-field");
formInput.addEventListener("submit", showCity);

function displayFahrenheit(event) {
  event.preventDefault();

  let currentDegree = document.querySelector("current");
  currentDegree.innerHTML = "85°C";
}

let clickFahrenheit = document.querySelector("fahren");
clickFahrenheit.addEventListener("click", displayFahrenheit);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let message = `${temperature}°C`;
  let currentTemp = document.querySelector("current");
  currentTemp.innerHTML = message;
}

let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);
