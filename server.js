var express = require("express");
var mongojs = require("mongojs");

var app = express();

app.use(express.static("public"));

var databaseUrl = "gamesdb";
var collections = ["library"];

var db = mongojs(databaseUrl, collections);

db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Routes
app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/all", function (req, res) {
  db.library.find({}, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/title", function (req, res) {
  db.library.find().sort({ title: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/dev", function (req, res) {
  db.critters.find().sort({ dev: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/pub", function (req, res) {
  db.critters.find().sort({ pub: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    };
  });
});

app.get("/release", function (req, res) {
  db.critters.find().sort({ release: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    };
  });
});

app.get("/genre", function (req, res) {
  db.critters.find().sort({ genre: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    };
  });
});

app.get("/critic", function (req, res) {
  db.critters.find().sort({ criticRating: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    };
  });
});

app.get("/user", function (req, res) {
  db.critters.find().sort({ userRating: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    };
  });
});

app.listen(3000, function () {
  console.log("App running on port 3000!");
});
