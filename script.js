document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '43fae31a87fdaf6960c1d4fb7bca7071';
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDiv = document.getElementById('weather');
                weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} degrees Celsius</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data requested.', error);
            alert('Error fetching requested weather data. Please try again later.');
        });
});
