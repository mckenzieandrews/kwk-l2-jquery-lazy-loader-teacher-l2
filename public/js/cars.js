"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3;

//changed carsJSON to cars 

function formatCars(JSONcars) {
  var html = "<div class=\"row\">";
  $.each(cars, function(index, JSONcar) {
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + JSONcar.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + JSONcar.Model + "</p>";
    html += "<p><strong>Year:</strong> " + JSONcar.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"
  return html;
}

//changed carsJSON to cars 
function addCarsToDOM(JSONcars) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var carsHTML = formatCars(JSONcars);
  $("#cars").append(carsHTML);
  
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
    var url = baseUrl + pageNumber + "/3";
  pageNumber += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars);
    },
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
  });
}