const express = require("express");
const request = require("request");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const API_KEY = "63140a9c3d4edc9c4f065b52bcfbafe1"; // Replace with your OpenWeatherMap API key

//sample weather data
const city = "London"; // You can change this to any city you want to fetch weather data for
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&&my-weather-key=f812949fa14354966e7a159af90f3c34`;

// EJS setup
app.use('/public', express.static('public'));// linking to public directory to access static files like CSS, images, etc.
// app.use(express.static(__dirname + "public")); 
app.set('views', './src/views'); // linking to views directory for EJS templates
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Weather App! Please provide a city name in the URL."
  );
});
app.get("/getWeather", (req, res) => {
  request(weatherUrl, (error, response, body) => {
    if (error) {
      console.error("Error fetching weather data:", error);
    } else {
      const output = JSON.parse(body);
    //   res.send(output);
      res.render('weatherApp', { output, title: "Weather App" });
    }
  });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
