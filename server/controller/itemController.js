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
      let itemsToSend = [];
      let user = '';
      let message = '';

      _.each(results, (items, phone) => {

        _.each(items, (item) => {
          itemsToSend.push(item.name);
          if (user === '') user = item.user;
        })

        message = `Hey there ${user}.  The following items in your Fridge-It are about to expire: \n${itemsToSend.join('\n')}`;
        
        if (itemsToSend.length > 0) {
          
          client.messages.create({ 
            to: phone, 
            from: "+14243466219", 
            body: message, 
          }, function(err, message) { 
            if (err) {
              console.log('====================================')
              console.log('error => ', err);
              console.log('====================================')
            }
          })

        }

      })

      res.send('messages sent');

    })
    .catch((err) => {
      res.status(500).send('did not work', err);
    })
  
  },

};


