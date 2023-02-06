const express = require('express');
const { requireAuth } = require('./middleware');
const { Item } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

//* Find items by user - Index
router.get('/', requireAuth, (req, res) => {
  Item.find({ user: req.user.id }, { __v: 0, user: 0 }, (err, items) => {
    if (err) {
      res.status(400).send({ message: 'Get users failed', err });
    } else {
      res.send({ message: 'Items retrieved successfully', items });
    }
  });
});

//* Create a new item - Create
router.post('/', requireAuth, (req, res) => {
  req.body.user = req.user.id;

  const newItem = Item(req.body);

  newItem.save((err, savedItem) => {
    if (err) {
      res.status(400).send({ message: 'Create item failed', err });
    } else {
      res.send({ message: 'Item created successfully', Item: savedItem });
    }
  });
});

//* Update an item - Update
router.put('/', requireAuth, (req, res) => {
  Item.findById(req.body.id, { __v: 0, user: 0 }, (err, item) => {
    if (err) {
      res.status(400).send({ message: 'Update item failed', err });
    } else {
      item.name = req.body.name;
      item.description = req.body.description;
      item.price = req.body.price;
      item.updated_at = Date.now();
      item.save((err, savedItem) => {
        if (err) {
          res.status(400).send({ message: 'Update item failed', err });
        } else {
          res.send({ message: 'Updated item successfully', item: savedItem });
        }
      });
    }
  });
});

router.delete('/', requireAuth, (req, res) => {
  Item.findByIdAndRemove(req.body.id, err => {
    if (err) {
      res.status(400).send({ message: 'Delete item failed', err });
    } else {
      res.send({ message: 'Item successfully deleted' });
    }
  });
});
