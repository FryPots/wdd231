import { apiFetch } from "./apifetch.mjs";
import { setParent, appendIcon, appendText } from "./createcards.mjs";

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=19.053&lon=-98.21&units=metric&appid=890c1042d2c64f5602af10cd2ebe81fa';

const data = await apiFetch(url);

const currentDay = data.list[0];
const currentWeather = currentDay.weather;

const container = document.getElementById("weather-container");
const forecastCard = document.getElementById("forecast-container");

function createCard(container, weather, classList = "") {
    container.classList = classList;

    setParent(container);

    appendIcon(
        `https://openweathermap.org/img/w/${weather[0].icon}.png`,
        "Weather icon",
        weather[0].description
    );
}

createCard(container, currentWeather);
appendText(data.list[0].main.temp);

for (let i = 1; i < 4; i++) {
    const wrapper = document.createElement("li");
    const day = data.list[i * 8];

    createCard(wrapper, day.weather);

    forecastCard.appendChild(wrapper);
}