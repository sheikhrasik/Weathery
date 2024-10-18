const apiKey = "8c1ca8a1fcfe45180a21bfb9313b867c";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.querySelector(".locationInput");
const searchBtn = document.querySelector(".search-icon button");
const weatherImg = document.querySelector(".weather-image");
const temp = document.getElementById("temperature");
const city = document.getElementById("city");
const humid = document.getElementById("humid");
const wind = document.getElementById("wind");


searchBtn.addEventListener("click", function() {
    const location = locationInput.value;
    // console.log(location);
    if (location) {
        fetchWeather(location);
    }
});

async function fetchWeather(location) {
    const url = `${baseUrl}?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);

        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        city.innerHTML = data.name;
        humid.innerHTML = `${data.main.humidity}` + "%";
        wind.innerHTML = `${data.wind.speed}` + " km/h";

        if(data.weather[0].main == "Clear"){
            weatherImg.src = "./images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherImg.src = "./images/clouds.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "./images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherImg.src = "./images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherImg.src = "./images/rain.png";
        }
        else if(data.weatherImg[0].main == "Snow"){
            weatherImg.src = "./images/snow.png";
        }


      } catch (error) {
        console.error("Error fetching weather data: ", error.message);
      }
}