
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=19.053&lon=-98.21&appid=890c1042d2c64f5602af10cd2ebe81fa'

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
    }
  } catch (error) {
      console.log(error);
  }
}

const forecast = () => {
    
}