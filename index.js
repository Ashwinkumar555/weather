async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // 🔁 Replace with your OpenWeatherMap API key
  const resultBox = document.getElementById("result");

  if (!city) {
    resultBox.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = data.main.temp;
    const desc = data.weather[0].description;

    resultBox.innerHTML = `
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${desc}</p>
    `;
  } catch (error) {
    resultBox.innerHTML = "City not found. Try again.";
  }
}
