function updateWeather(response) {
  let tempElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  tempElement.innerHTML = Math.round(temperature);
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

let searchCity = document.querySelector(".search-glass");
searchCity.addEventListener("click", changeCity);

cityWeather("London");
