var city = $("#city")
var state = "&by_state=" + stateName
var stateName = $("#stateName")

$("#run-search").on("click", function() {
  var city = $("#city").val()

})

function searchCity() {
  var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + state

    $.ajax({
        url: queryURL,
        method: "GET"
      })
}
// $("#city").attr("placeholder", city)
$("#city").val(localStorage.getItem("#city"))
$("#city").submit(function(event) {
    event.preventDefault()
    console.log($(".city").val())
    let submittedText = $(".city").val()
    localStorage.setItem("city", submittedText)
    
})
console.log()
console.log(queryURL)
// $(".submit").on("click", function() {
//   document.preventDefault()
//     var city = $(this).attr("city-name")
//     var state =$(this).attr("state-name")
//     var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + state

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//         .then(function(response) {
//           console.log(queryURL)
//           console.log(response);
//       })
