function changeCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let searchBox = document.querySelector(".text-box");
  let theCity = searchBox.value;
  let city = theCity[0].toUpperCase() + theCity.slice(1);
  let searchEngine = (cityElement.innerHTML = city);
  console.log(searchEngine);
}

let searchCity = document.querySelector(".search-glass");
searchCity.addEventListener("click", changeCity);
