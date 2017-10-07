var _ = require('underscore');
require('dotenv').config();
const Item = require('../../db/index').fridgeItems;
const Fridge = require('../../db/index').fridge;
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
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


  checkExipredItems: (name) => {

    return new Promise((resolve, reject) => {
      let batchObject = {};
      let expiringItems = [];
      let fridgesToPilfer =[];
  
      Item.findAll({where: {
        user: name,
      }, raw: true})
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
        if (name) {
          Fridge.findAll({
            where: {
              name,
            },
            raw: true,
          })
          .then((data) => {
            if (data.length > 0) {
              _.each(data, (fridge) => {
                batchObject[fridge.phone] = batchObject[fridge.id]
                delete batchObject[fridge.id]
              });
            }
          })
          .then(() => {
            resolve(batchObject);
          })
          .catch(err => {
            reject(err)
          })
        }
      })
    });

  },

  smsMessage: (req, res, inputphone) => {

    module.exports.checkExipredItems(req.body.user)
    .then((results) => {

      if (Object.keys(results).length === 0 && results.constructor === Object) {
        console.log('====================================')
        console.log('Nothing to send!')
        console.log('====================================')
      }

      _.each(results, (items, phone) => {

        let itemsToSend = [];
        let user = '';
        let message = '';

        _.each(items, (item) => {
          itemsToSend.push(item.name);
          if (user === '') user = item.user;
        })

        message = `Hey there ${user}.  The following items in your Fridge-It are about to expire: \n${itemsToSend.join('\n')}`;
        
        if (itemsToSend.length > 0  && phone.length > 10) {

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

    })
    .then((results) => {
      // if (req) res.send('test worked')
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
      // if (req) res.status(500).send(err)
    })
  
  },

};


