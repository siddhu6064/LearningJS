function showweatherDetails(event) {
      event.preventDefault();
}

 const city = document.getElementById('city').value;
      const apiKey = 'ee5fbbb2afa2ae76c6aa1319b0447956'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ee5fbbb2afa2ae76c6aa1319b0447956}&units=metric`;

 fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })


    document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

 .catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });