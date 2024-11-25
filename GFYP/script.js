const apiKey = '08f3f16a0c3d1bcd760d6a05d5375b71';  // Replace with your OpenWeatherMap API key

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather('Choma');  // Default city on page load
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ZM&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = city;
            document.getElementById('temp').textContent = data.main.temp;
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('wind-speed').textContent = data.wind.speed;
            document.getElementById('condition').textContent = data.weather[0].description;

            // Fetch the weather icon
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.getElementById('weather-icon').src = iconUrl;
            document.getElementById('weather-icon').alt = data.weather[0].description;

            // Fetch 5-day forecast
            fetchFiveDayForecast(city);
        })
        .catch(error => {
            console.error('error fetching the 5-day forecast:',error);
        });}
    
