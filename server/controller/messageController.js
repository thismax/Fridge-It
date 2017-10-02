const messageInfo = require('../../db/index').messageInfo;

module.exports = {
  getMessages: (req, res) => {
    messageInfo.findAll({
      where: {fridgeId: req.params.id}
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  postMessages: (req, res) => {
    messageInfo.create({
      messageText: req.body.data.messages,
      fridgeId: req.body.data.fridgeId,
      user: req.body.data.user,
      like: req.body.data.like
    })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  updateMessages: (req, res) => {
    messageInfo.update({
      fridgeId: req.body.fridgeId,
      user: req.body.user,
      messageText: req.body.messageText,
      like: req.body.like,
    },
    {
      where: {id: req.params.id},
      returning: true,
    })
      .then((data) => {
        res.status(202).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },

  deleteMessages: (req, res) => {
    messageInfo.destroy({
      where: {id: req.params.messageId}
    })
      .then(() => {
        res.status(202).send({id: req.params.messageId})
      })
      .catch((err) => {
        res.status(404).send(err);
      })
  }
};