const Item = require('../../db/index').fridgeItems;
require('dotenv').config();
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

//functions to add items, get items, and delete items from the database using promises

module.exports = {

  getAllItems: (req, res) => {
    Item.findAll({
      where: {fridgeId: req.params.fridgeId}
    })
    .then((data) => {
      res.send(data); 
    })
    .catch(err => {
      res.status(500).send(err); 
    });
  },

  addItem: (req, res) => {
    Item.create({
      name: req.body.name,
      quantity: req.body.quantity,
      type: req.body.type,
      fridgeId: req.body.fridgeId,
      user: req.body.user,
      expiry: req.body.expiry,
    })
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    }); 
  },

  updateItem: (req, res) => {
    Item.update({
      name: req.body.name,
      quantity: req.body.quantity,
      type: req.body.type
    },
    { where: {id: req.params.id},
      returning: true,
    })
    .then((data) => {
      res.status(202).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },
  
  deleteItem: (req, res) => {
    Item.destroy({
      where: {id: req.params.id}
    })
    .then((data) => {
      res.send({id: req.params.id});
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },

  smsMessage: (req, res) => {
    client.messages.create({ 
      to: "+18054283372", 
      from: "+14243466219", 
      body: "We spiderman now.", 
    }, function(err, message) { 
      if (err) {
        console.log('====================================')
        console.log('error => ', err);
        console.log('====================================')
      }
    });
  }

};



