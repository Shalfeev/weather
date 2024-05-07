const apiKey = "c27deaa75f9c9c3535b8aaae18466227";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector(".searchBox input");
const searchButton = document.querySelector(".searchBox button");

const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data, "data");

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " км/ч";

  let weatherText;

  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "/img/9025960_sun_icon.png";
    weatherText = "Ясно";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "/img/9045018_rain_heavy_icon.png";
    weatherText = "Дождь";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "/img/9254114_fog_foggy_cold_misty_mist_icon.png";
    weatherText = "Туман";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "/img/8680116_drizzle_line_icon.png";
    weatherText = "Морось";
  } else if (data.weather[0].main == "Thunderstorm") {
    weatherIcon.src = "/img/9035582_thunderstorm_outline_icon.png";
    weatherText = "Гроза";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "/img/1651843_weather_snow_snowflake_winter_icon.png";
    weatherText = "Снег";
  } else if (data.weather[0].main == "Tornado") {
    weatherIcon.src = "/img/9165790_tornado_weather_icon.png";
    weatherText = "Торнадо";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "/img/2849803_cloudy_cloud_weather_multimedia_icon.png";
    weatherText = "Облачно";
  }

  document.querySelector(".weatherText").innerHTML = weatherText;
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
  searchInput.value = "";
});
