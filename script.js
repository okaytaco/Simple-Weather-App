document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "YOUR_API_KEY_HERE"; 

document.getElementById("get-weather").addEventListener("click", () => {
  const city = document.getElementById("city-input").value.trim();
  if (!city) return alert("Please enter a city name.");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      document.getElementById("location").textContent = data.name + ", " + data.sys.country;
      document.getElementById("temperature").textContent = data.main.temp + "°C";
      document.getElementById("condition").textContent = data.weather[0].main;
      document.getElementById("humidity").textContent = data.main.humidity + "%";
    })
    .catch(err => {
      alert("Error: " + err.message);
    });
});

})
