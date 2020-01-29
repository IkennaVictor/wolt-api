const Restaurant = require('../models/restaurant');

// Fetch one restaurant record
exports.getRecord = (req, res) => {
  Restaurant.findOne({
    _id: req.params.id
  }).then(
    (restaurant) => {
      res.status(200).json(restaurant);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// Fetch all restaurant records
exports.getAll = (req, res, next) => {
  Restaurant.find().then(
      (restaurants) => {
          res.status(200).json(restaurants);
      }
  ).catch(
      (error) => {
          res.status(400).json({
              error: error
          });
      }
  );
};

// Create a new restaurant record
exports.createRecord = (req, res, next) => {
  const data = req.body;
  const restaurant = new Restaurant(data);
  restaurant.save().then(
    () => {
      res.status(201).json({
        message: 'Restaurant created successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// Update existing restaurant record
exports.updateRecord = (req, res) => {
  let data = new Restaurant({ _id: req.params._id })
  data = req.body;
  
  Restaurant.findOneAndUpdate({_id: req.params.id}, data).then(
    () => {
      res.status(200).json({
        message: 'Restaurant updated successfully!',
        data
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// Delete restaurant record
  exports.deleteRecord = (req, res) => {
    Restaurant.findOne({_id: req.params.id}).then(
      () => {
          Restaurant.deleteOne({_id: req.params.id}).then(
            () => {
              res.status(200).json({
                message: 'Restaurant Deleted!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
      }
    );
  };
