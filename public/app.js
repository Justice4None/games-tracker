$("#title-sort").on("click", function () {
  $("tbody").empty();
  $("th").removeClass("activity");
  $("#library-title").addClass("active");
  $.getJSON("/title", function (data) {
    displayResults(data);
  });
});

$("#dev-sort").on("click", function () {
  $("tbody").empty();
  $("th").removeClass("activity");
  $("#library-dev").addClass("active");
  $.getJSON("/dev", function (data) {
    displayResults(data);
  });
});

$("#pub-sort").on("click", function () {
  $("tbody").empty();
  $("th").removeClass("activity");
  $("#library-pub").addClass("active");
  $.getJSON("/pub", function (data) {
    displayResults(data);
  });
});

$("#release-sort").on("click", function () {
  $("tbody").empty();
  $("th").removeClass("activity");
  $("#library-release").addClass("active");
  $.getJSON("/release", function (data) {
    displayResults(data);
  });
});

$("#genre-sort").on("click", function () {
  $("tbody").empty();
  $("th").removeClass("activity");
  $("#library-genre").addClass("active");
  $.getJSON("/genre", function (data) {
    displayResults(data);
  });
});

$("#critic-sort").on("click", function () {
  $("tbody").empty();
  $("th").removeClass("activity");
  $("#library-critic").addClass("active");
  $.getJSON("/critic", function (data) {
    displayResults(data);
  });
});

$("#user-sort").on("click", function () {
  $("tbody").empty();
  $("th").removeClass("activity");
  $("#library-user").addClass("active");
  $.getJSON("/user", function (data) {
    displayResults(data);
  });
});

function displayResults(data) {
  for (var i = 0; i < data.length; i++) {
    $("#results tbody").append("<tr><td>" + data[i].title + "</td>" + "<td>" + data[i].dev + "</td>" + "<td>" + data[i].pub + "</td>" + "<td>" + data[i].release + "</td>" + "<td>" + data[i].genre + "</td>" + "<td>" + data[i].criticRating + "</td>" + "<td>" + data[i].userRating + "</td></tr>");
  }
}

$.getJSON("/all", function (data) {
  displayResults(data);
});
