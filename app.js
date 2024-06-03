document
  .getElementById("weather-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    getWeather(city);
  });

function getWeather(city) {
  const apiKey = "a979077ef694951616c581ca04a9dd94"; // Paste your api key here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        document.getElementById("weather-result").innerHTML =
          "City not found ! (Check your city name)";
      } else {
        const weatherData = `
                  <h2 style="">${data.name}, ${data.sys.country}</h2>
                  <p>Temperature: ${data.main.temp}°C</p>
                  <p>Weather condition: ${data.weather[0].description}</p>
                  <p>Humidity: ${data.main.humidity}%</p>
                  <p>Wind speed: ${data.wind.speed} m/s</p>
              `;
        document.getElementById("weather-result").innerHTML = weatherData;
      }
    })
    .catch((error) => {
      document.getElementById("weather-result").innerHTML = "Error";
    });
}
