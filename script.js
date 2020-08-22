var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + state
var city = ("#city")
var stateSearch = "&by_state=" + stateName
var stateName = ("#state")

$(".submit").on("click", function() {
    var brewery = $(this).attr("city", "state")
    $.ajax({
        url: queryURL,
        method: "GET"
      });
        $(".container").submit(function() {
          

      })
    
})

  