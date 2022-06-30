var weatheryContainer = document.getElementById('weatherContainer')
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="
var submitbtn = document.getElementById("submit-btn");
var locationInput = document.getElementById('location-picker').value
var apiKey = "9d6d726976e0cc201f3a3282e336e374"

//var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}"
//var weatherVerification ="&appid={9d6d726976e0cc201f3a3282e336e374}"

    function fetchWeatherData () { //retrieves user input and attaches it to url as a query string
        var locationInputWeather = document.getElementById('location-picker').value 
        var locationURLWeather = weatherURL.concat(locationInputWeather) + "&Appid=" + apiKey + "&units=imperial"
      fetch(locationURLWeather) // fetches data from API
      .then(res => res.json())
      .then(function (data){
        var forecast = data.main
        var icon = data.weather[0].icon
        var weatherLocationName = document.createElement('p')
          var weatherDate = document.createElement('p')
          var weatherCurrentTemp = document.createElement('p')
          var weatherHumidity = document.createElement('p')
          var weatherMaxTemp = document.createElement('p')
          var weatherMinTemp = document.createElement('p')
          var weatherIcon = document.createElement('img')
          
        weatherLocationName.textContent = data.name
        weatherLocationName.classList.add("weather-name")

          weatherDate.textContent = moment().format("dddd, MMMM Do")
          weatherDate.classList.add("weather-date")
      
          weatherCurrentTemp.textContent = "Current Temp: " + forecast.temp
          weatherCurrentTemp.classList.add("weather-current-temp");
          weatherHumidity.textContent = "Humidity: " + forecast.humidity
          weatherHumidity.classList.add("weather-humidity");
      
          weatherMaxTemp.textContent =  "High: " + forecast.temp_max + "° F"
          weatherMaxTemp.classList.add("weather-max-temp");
      
          weatherMinTemp.textContent = "Low: " + forecast.temp_min + "° F"
          weatherMinTemp.classList.add("weather-min-temp");
      
          var iconURL = "https://openweathermap.org/img/wn/"
          iconimport = iconURL.concat(icon)
          weatherIcon.setAttribute("src" , iconimport+".png")
          weatherIcon.classList.add("weather-icon");
        console.log(data);
        weatheryContainer.append(weatherLocationName, weatherDate, weatherCurrentTemp, weatherHumidity, weatherMaxTemp, weatherMinTemp)
        weatheryContainer.append(weatherIcon)
      
      })
      };
