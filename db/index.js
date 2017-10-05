const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL);

const Fridge = sequelize.define('fridge', {
  users: {
    type: Sequelize.ARRAY({type: Sequelize.STRING})
  },
  name: {
    type: Sequelize.STRING
  }
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
  }
});

// Foreign Keys
FridgeItems.belongsTo(Fridge, {allowNull: true, onDelete: 'CASCADE'});
Fridge.hasMany(FridgeItems, {allowNull: true, onDelete: 'CASCADE'});

MessageInfo.belongsTo(Fridge, {allowNull: true, onDelete: 'CASCADE'});
Fridge.hasMany(MessageInfo, {allowNull: true, onDelete: 'CASCADE'});

module.exports.fridge = Fridge;
module.exports.fridgeItems = FridgeItems;
module.exports.messageInfo = MessageInfo;