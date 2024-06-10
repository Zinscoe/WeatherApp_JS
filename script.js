// this function gets the HTML element by the 'getWeather' id in the index.html file and then adds and event listener that starts the function when the button is clicked.
document.getElementById('getWeather').addEventListener('click', function() {
    //city gets the value property of the 'city' id from the html file
    const city = document.getElementById('city').value;
    //this gets my api key from the api URL below
    const apiKey = '43fae31a87fdaf6960c1d4fb7bca7071';
    //this gets the api's url
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    //fetch funcion fetches data from the apiURL
    fetch(apiURL)
        //then it assigns the response data to a json object
        .then(response => response.json())
        /* follows with data being assigned to an if statement that checks
        if the data.cod is strictly equal to 200. If so, then it assigns the id of 'weatherDiv'
        from the HTML page to a weatherDiv variable. Then the innerHTML property of that variable is changed
        to the HTML elements with JS variables interpolated with the appropriate properties of the data variable */
        .then(data => {
            if (data.cod === 200) {
                const weatherDiv = document.getElementById('weather');
                weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} degrees Celsius</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>`;
            } else { //this runs an else block in case the if statement doesn't pull a city
                alert('City not found!');
            }
        })
        // this catches an error in case the data isn't able to be fetched at the time.
        .catch(error => {
            console.error('Error fetching the weather data requested.', error);
            alert('Error fetching requested weather data. Please try again later.');
        });
});
