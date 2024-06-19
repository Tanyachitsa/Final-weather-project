function updateWeather(response) {
  let tempElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let skyElement = response.data.condition.description;
  let sky = skyElement[0].toUpperCase() + skyElement.slice(1);
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = sky;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);

  getForecastData(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes}`;
}

function cityWeather(city) {
  let apiKey = "24e8b867od685a3be0f6dd1ca9tbaf14";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function changeCity(event) {
  event.preventDefault();
  let searchBox = document.querySelector(".text-box");

  cityWeather(searchBox.value);
}
function getForecastData(city) {
  let apiKey = "24e8b867od685a3be0f6dd1ca9tbaf14";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let theDays = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
  forecastHtml = "";

  theDays.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="weather-forecast-day">
     <div class="Day">${day}</div>
            <h6 class="icon">⛈</h6>
            <span class="temperatures">
              <span class="minimum-temp"><p>19° </span> |
                <span class="maximum-temp">
              <strong>14°</strong></p>
              </span>
            </span>
            </div>`;
  });

  let forecastElement = document.querySelector("#weather-forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchCity = document.querySelector(".search-glass");
searchCity.addEventListener("click", changeCity);

cityWeather("London");
