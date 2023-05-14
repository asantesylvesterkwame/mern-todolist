const express = require('express');
const router = express.Router();
const todoListCardModel = require('../models/listModel');

router.post('/addtodo', async (req, res) => {
  const todoListCardInfo = new todoListCardModel({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const todoInfo = await todoListCardInfo.save();
    res.json(todoInfo);
  } catch (error) {
    res.send('error is ' + error);
  }
});

module.exports = router;
