var APIKey = "&appid=e3ef58b786bc1cbed4ae1585e495bb1b";

console.log(dayjs())

today = dayjs().format('MMM DD')
console.log(today)

$("#searchBtn").on("click", function () {
    var citySearch = $("#citySearch").val();
    $("#citySearch").val("");
    console.log(citySearch)
    var stateSearch = $("#stateSearch").val();
    $("#stateSearch").val("");
    console.log(stateSearch)

    getWeather(citySearch)
    searchCity(citySearch, stateSearch)
})


function getWeather(citySearch) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + APIKey;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
        $('#cityWeather').empty();
        // City Name, Weather Icon, Temperature, Humidity, Wind Speed, UV Index
  
        var cityName = $("<div>");
        cityName.addClass("h1").text(response.name)
        $("#cityWeather").append(cityName)
  
        var weatherIcon = $("<img>");
        weatherIcon.attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
        $("#cityWeather").append(weatherIcon)
        console.log(weatherIcon)
  
        var cityTemp = $("<div>");
        console.log((response.main.temp - 273.15) * 1.80 + 32)
        cityTemp.text("Temperature: " + (Math.floor((response.main.temp - 273.15) * 1.80 + 32)) + "F" )
        $("#cityWeather").append(cityTemp)
  
        var humidityValue = $("<div>");
        humidityValue.text("Humidity: " + response.main.humidity + " %")
        $("#cityWeather").append(humidityValue)
  
        var windSpeed = $("<div>");
        windSpeed.text("Wind Speed: " + response.wind.speed + "mph")
        $("#cityWeather").append(windSpeed)

        var today = $("<div>");
        today.text(dayjs().format('MMM DD'))
        $("#cityWeather").append(today)

        var time = dayjs().format('hh mm A')
        $("#cityWeather").append(time)
      })
  }

function searchCity(citySearch, stateSearch) {
    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + citySearch + "&by_state=" + stateSearch
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            $('#beerFinder').empty();

            for (var i = 0; i < response.length; i++) {
                beerList(response[i].name, response[i].street, response[i].city, response[i].state, response[i].website_url, response[i].phone)
                console.log(response.length)
            }
        })
}

function beerList(name, street, city, state, website_url, phone) {
    var breweryName = $("<div>");
    breweryName.addClass("card").text("Name: " + name)
    $("#beerFinder").append(breweryName)

    var streetName = $("<div>");
    streetName.text(street)
    $("#beerFinder").append(streetName)

    var breweryCity = $("<div>");
    breweryCity.text(city)
    $("#beerFinder").append(breweryCity)

    var breweryState = $("<div>");
    breweryState.text(state)
    $("#beerFinder").append(breweryState)

    var breweryURL = $("<div>");
    breweryURL.text(website_url)
    $("#beerFinder").append(breweryURL)

    var breweryPhone = $("<div>");
    breweryPhone.text("Phone Number: " + phone)
    $("#beerFinder").append(breweryPhone)

}

