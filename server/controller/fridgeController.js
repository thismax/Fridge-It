const Fridge = require('../../db/index').fridge;

//functions to add fridges, get fridges, and delete fridges from the database using promises

module.exports = {
  addFridge: (req, res) => {
    Fridge.create({
      users: req.body.users,
      name: req.body.name
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },

  getFridge: (req, res) => {
    Fridge.findAll({
      where: {name: req.params.name}
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },
  
  deleteFridge: (req, res) => {
    Fridge.destroy({
      where: {id: req.params.fridgeId}
    })
    .then(() => {
      res.send('fridge successfully deleted');
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
};