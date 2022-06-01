console.log("krushna");

const weatherapi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  burl: "https://api.openweathermap.org/data/2.5/weather",
};

//event on Keypress
// const searchInputBox = document.getElementById("input-Box");
// searchInputBox.addEventListener("keypress", (e) => {
//   if (e.keyCode == 13) {
//     getWeatherReport(searchInputBox.value);
//   }
// });

//Events On Click

const searchInputBox = document.getElementById("input-Box");
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  getWeatherReport(searchInputBox.value);
});

function getWeatherReport(city) {
  fetch(`${weatherapi.burl}?q=${city}&appid=${weatherapi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

function showWeatherReport(weather) {
  console.log(weather);
  if (!weather.name) {
    alert("plz Entered Correct city name");
  }
  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temp = document.getElementById("temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
  let minmax = document.getElementById("minmax");
  minmax.innerHTML = `${Math.round(
    weather.main.temp_max
  )}&deg;C(max) & ${Math.round(weather.main.temp_min)}&deg;C(min)`;

  let weatherInfo = document.getElementById("weather");
  weatherInfo.innerHTML = `${weather.weather[0].main}`;

  if (weatherInfo.textContent == "Clouds") {
    document.body.style.backgroundImage = "url('images/cloud.jpg')";
  } else if (weatherInfo.textContent == "Clear") {
    document.body.style.backgroundImage = "url('images/clear.jpg')";
  } else if (weatherInfo.textContent == "Rain") {
    document.body.style.backgroundImage = "url('images/rain.jpg')";
  } else if (weatherInfo.textContent == "Sunny") {
    document.body.style.backgroundImage = "url('images/sunny.jpg')";
  } else if (weatherInfo.textContent == "Snow") {
    document.body.style.backgroundImage = "url('images/snow.jpg')";
  } else if (weatherInfo.textContent == "Smoke") {
    document.body.style.backgroundImage = "url('images/smoke.jpg')";
  } else if (weatherInfo.textContent == "Haze") {
    document.body.style.backgroundImage = "url('images/haze.jpg')";
  } else if (weatherInfo.textContent == "Stormy") {
    document.body.style.backgroundImage = "url('images/stormy.jpg')";
  }

  let d = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let day = days[d.getDay()];

  let datemonthyear = document.getElementById("date");

  // datemonthyear.innerHTML = date + "/" + month + "/" + year;
  datemonthyear.innerHTML = `${date}/${month}/${year}(${day})`;
}
