const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.NAME, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  port: process.env.RDS_PORT,
  dialect: 'postgres',
});

const Fridge = sequelize.define('fridge', {
  users: {
    type: Sequelize.ARRAY({type: Sequelize.STRING})
  },
  name: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  time: {
    type: Sequelize.STRING
  },
});

const FridgeItems = sequelize.define('fridgeItem', {
  name: {
    type: Sequelize.STRING,
    model: 'fridge',
    key: 'id',
  },
  quantity: {
    type: Sequelize.INTEGER,
    model: 'fridge',
    key: 'id',
  },
  type: {
    type: Sequelize.STRING,
    model: 'fridge',
    key: 'id',
  },
  user: {
    type: Sequelize.STRING,
    model: 'fridge',
    key: 'id',
  },
  expiry: {
    type: Sequelize.STRING,
    model: 'fridge',
    key: 'id',
  },
  fridgeId:{
    type: Sequelize.INTEGER,
    model: 'fridge',
    key: 'id',
  }
});

const MessageInfo = sequelize.define('messageInfo', {
  messageText: {
    type: Sequelize.STRING,
    model: 'fridge',
    key: 'id',
  },
  like: {
    type: Sequelize.ARRAY({type: Sequelize.STRING}),
    model: 'fridge',
    key: 'id',
  },
  user: {
    type: Sequelize.STRING,
    model: 'fridge',
    key: 'id',
  },
  fridgeId:{
    type: Sequelize.INTEGER,
    model: 'fridge',
    key: 'id',
  }
});

module.exports.fridge = Fridge;
module.exports.fridgeItems = FridgeItems;
module.exports.messageInfo = MessageInfo;