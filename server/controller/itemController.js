const Item = require('../../db/index').fridgeItems;
require('dotenv').config();
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
var schedule = require('node-schedule');

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


  checkExipredItems: (req, res) => {
    Item.findAll()
    .then((data) => {
      batchObject = {};
      expiringItems = data.filter((item) => {
        return (new Date(item.expiry)) - new Date() < 259200000;
      });
      expiringItems.forEach((item) => {
        console.log('====================================')
        console.log(item)
        console.log('====================================')
        if (item.fridgeId in batchObject) {
          batchObject[item.fridgeId].push(item);
        } else {
          batchObject[item.fridgeId] = [item];
        }
      })
      res.send(batchObject);
    })
    .catch(err => {
      res.status(500).send(err); 
    })
  }
  


};



// smsMessage: (req, res) => {

//   console.log('====================================')
//   console.log('expiry', req.body.expiry)
//   console.log('====================================')
//   console.log('====================================')
//   console.log('date created', req.body.created)
//   console.log('====================================')

//   Item.findAll()
//   // client.messages.create({ 
//   //   to: req.body.phone, 
//   //   from: "+14243466219", 
//   //   body: "We spiderman now.", 
//   // }, function(err, message) { 
//   //   if (err) {
//   //     console.log('====================================')
//   //     console.log('error => ', err);
//   //     console.log('====================================')
//   //   }
//   //   let startTime = new Date(Date.now() + 5000);
//   //   let endTime = new Date(startTime.getTime() + 5000);
//   // })
//   .then((data) => {
//     res.send({id: req.params.id});
//   })
//   .catch(err => {
//     res.status(500).send(err);
//   })
//   ;
// }

