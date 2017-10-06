var _ = require('underscore');
require('dotenv').config();
const Item = require('../../db/index').fridgeItems;
const Fridge = require('../../db/index').fridge;
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
var schedule = require('node-schedule');
var Promise = require('bluebird');


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


  checkExipredItems: () => {

    return new Promise((resolve, reject) => {
      let batchObject = {};
      let expiringItems = [];
      let fridgesToPilfer =[];
  
      Item.findAll({raw: true})
      .then((data) => {
        expiringItems = data.filter((item) => {
          return (new Date(item.expiry)) - new Date() < 259200000;
        });
      })
      .then((data) => {
        _.each(expiringItems, (item) => {
          if (item.fridgeId in batchObject) {
            batchObject[item.fridgeId].push(item);
          } else {
            batchObject[item.fridgeId] = [item];
          }
        })
        _.each(batchObject, (batch, fridgeId) => {
          fridgesToPilfer.push(fridgeId);
        })
      })
      .then((data) => {
        Fridge.findAll({
          where: {
            id: fridgesToPilfer,
          },
          raw: true,
        })
        .then((data) => {
          batchObject[data[0].phone] = batchObject[data[0].id];
          delete batchObject[data[0].id];
          resolve(batchObject);
        })
      })
      .catch(err => {
        reject(err)
      })
        
    });

  },

  smsMessage: (req, res) => {

    module.exports.checkExipredItems()
    .then((results) => {
      let messages
      _.each(results, (item, phone))
      res.send('yoyoyo');
    })
    .catch((err) => {
      console.log('====================================')
      console.log('results => ', err)
      console.log('====================================')
      res.status(500).send({});
    })

  
    // client.messages.create({ 
    //   to: req.body.phone, 
    //   from: "+14243466219", 
    //   body: "We spiderman now.", 
    // }, function(err, message) { 
    //   if (err) {
    //     console.log('====================================')
    //     console.log('error => ', err);
    //     console.log('====================================')
    //   }
    //   let startTime = new Date(Date.now() + 5000);
    //   let endTime = new Date(startTime.getTime() + 5000);
    // })
  
  },

};


