const router = require('express').Router();
const verify = require('../VerifyToken');
const Movie = require('../models/Movie');

// as an User
// get a movie
router.get('/find/:id', verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get random for featured movie/series
router.get('/random', verify, async (req, res) => {
  const query = req.query.type; //'/random?type=series'
  let movie;
  try {
    if (query === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// as an Admin
// post movie
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      return res.status(200).json(savedMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You need to be an Admin to create a movie!');
  }
});

// update movie
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You need to be an Admin to update a movie!');
  }
});

//Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);

      return res.status(200).json('Movie deleted successfully!');
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You need to be an Admin to delete a movie!');
  }
});

//Get All
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      return res.status(200).json(movies.reverse());
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You need to be an Admin to delete a movie!');
  }
});

module.exports = router;
