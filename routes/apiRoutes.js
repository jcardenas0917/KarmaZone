var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/cars", function(req, res) {
    db.Cars.findAll({}).then(function(dbCars) {
      res.json(dbCars);
    });
  });

  // Create a new example
  app.post("/api/cars", function(req, res) {
    db.Cars.create(req.body).then(function(dbCars) {
      res.json(dbCars);
    });
  });

  // Delete an example by id
  app.delete("/api/cars/:id", function(req, res) {
    db.Cars.destroy({ where: { id: req.params.id } }).then(function(dbCars) {
      res.json(dbCars);
    });
  });
};
