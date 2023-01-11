const key = "7c700bf88c31e11e0f504dd7ed530ecf";
let searchBox = document.querySelector(".search-box");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let highLow = document.querySelector(".high-low");
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

//adding event for input
searchBox.addEventListener("keydown", searchCity);

function searchCity(event) {
  if (event.key === "Enter") {
    console.log(event.target.value);
    //getResponse
    getResponse(event.target.value);
  }
}

//call API:
function getResponse(cityName) {
  //&units=metric to pass into celcius degree
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      showResult(data);
    });
}

//show result function
function showResult(data) {
  let today = new Date();

  city.textContent = `${data.name}, ${data.sys.country}`;
  weather.textContent = `${data.weather[0].main}`;
  temperature.textContent = `${Math.round(data.main.temp)}˚C`;
  highLow.textContent = `${data.main.temp_min}˚C / ${data.main.temp_max}˚C `;
  date.textContent = today.toLocaleDateString("en-GB", options);
}
