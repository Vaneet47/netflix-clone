const router = require('express').Router();
const verify = require('../VerifyToken');
const List = require('../models/List');

//Create
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      return res.status(200).json(savedList);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You need to be an Admin to create a List!');
  }
});

// DELETE
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      return res.status(200).json('List deleted successfully');
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You need to be an Admin to delete a list');
  }
});

// GET lists
router.get('/', verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
      return res.status(200).json(list);
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
      return res.status(200).json(list);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

//
module.exports = router;
